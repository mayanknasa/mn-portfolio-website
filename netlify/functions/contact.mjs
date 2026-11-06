export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { name, email, message, hp } = body || {};

    // 1. Silent rejection for honeypot bot submissions
    if (hp) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
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
      return new Response(
        JSON.stringify({
          error: "Telegram bot credentials are not configured on the server environment.",
        }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
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
      return new Response(
        JSON.stringify({
          error: tgData.description || "Telegram API rejected message delivery.",
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact API handler error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error while processing message." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config = {
  path: "/api/contact",
};

