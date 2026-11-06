export async function handler(reqOrEvent) {
  const isFetchReq =
    reqOrEvent &&
    typeof reqOrEvent.text === "function" &&
    typeof reqOrEvent.method === "string";

  const createResponse = (status, payload) => {
    if (isFetchReq) {
      return new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
      });
    }
    return {
      statusCode: status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
  };

  const method = isFetchReq ? reqOrEvent.method : reqOrEvent.httpMethod;
  if (method !== "POST") {
    return createResponse(405, { error: "Method not allowed" });
  }

  try {
    let body = {};
    if (isFetchReq) {
      body = await reqOrEvent.json().catch(() => ({}));
    } else if (typeof reqOrEvent.body === "string") {
      try {
        body = JSON.parse(reqOrEvent.body || "{}");
      } catch {
        body = {};
      }
    } else if (reqOrEvent.body) {
      body = reqOrEvent.body;
    }

    const { name, email, message, hp } = body || {};

    // 1. Silent rejection for honeypot bot submissions
    if (hp) {
      return createResponse(200, { ok: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return createResponse(400, { error: "Missing required fields" });
    }

    const botToken = (
      process.env.TELEGRAM_BOT_TOKEN ||
      process.env.VITE_TELEGRAM_BOT_TOKEN ||
      ""
    ).trim();

    const chatId = (
      process.env.TELEGRAM_CHAT_ID ||
      process.env.VITE_TELEGRAM_CHAT_ID ||
      ""
    ).trim();

    if (!botToken || !chatId || botToken.includes("your_") || chatId.includes("your_")) {
      return createResponse(503, {
        error: "Telegram bot credentials are not configured on the server environment.",
      });
    }

    const escapeHtml = (text) =>
      String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const htmlPayload = `📬 <b>New Direct Portfolio Inquiry</b>\n\n👤 <b>Name:</b> ${escapeHtml(cleanName)}\n📧 <b>Email:</b> ${escapeHtml(cleanEmail)}\n\n💬 <b>Project Scope & Details:</b>\n${escapeHtml(cleanMessage)}`;

    // Try HTML mode first
    let tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlPayload,
        parse_mode: "HTML",
      }),
    });

    // Fallback to plain text if HTML parsing encounters any Telegram entity issues
    if (!tgRes.ok) {
      const plainPayload = `📬 New Direct Portfolio Inquiry\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`;
      tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: plainPayload,
        }),
      });
    }

    const tgData = await tgRes.json().catch(() => ({}));

    if (!tgRes.ok || !tgData.ok) {
      console.error("Telegram API error:", tgData);
      return createResponse(502, {
        error: tgData.description || "Telegram API rejected message delivery.",
      });
    }

    return createResponse(200, { ok: true });
  } catch (err) {
    console.error("Contact API handler error:", err);
    return createResponse(500, {
      error: "Internal server error while processing message.",
      details: err?.message || String(err),
    });
  }
}

export default handler;

export const config = {
  path: "/api/contact",
};
