import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check, AlertCircle, Copy, Loader2, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../../data/profile";
import Container from "../ui/Container";
import { useToast } from "../../context/ToastContext";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", // Honeypot field
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "success" | "error"
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { showToast } = useToast();

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return "";
      case "message":
        if (!value.trim()) return "Message cannot be empty.";
        if (value.trim().length < 10) return "Please share at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleCopyEmail = (e) => {
    e?.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(PROFILE.contactDetails.email);
    }
    setCopiedEmail(true);
    showToast(`Copied to clipboard: ${PROFILE.contactDetails.email}`, { type: "success" });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot anti-spam check: if bot filled this hidden field, silently fail
    if (formData.hp) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", hp: "" });
      showToast("Message sent successfully!", { type: "success" });
      return;
    }

    // 2. Validate all fields
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (nameError || emailError || messageError) {
      showToast("Please review the highlighted fields.", { type: "error" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    let delivered = false;

    // 3. Direct silent background dispatch to Telegram group via bot API
    if (botToken && chatId) {
      try {
        const textPayload = `📬 *New Direct Portfolio Inquiry*\n\n👤 *Name:* ${cleanName}\n📧 *Email:* ${cleanEmail}\n\n💬 *Project Scope & Details:*\n${cleanMessage}`;
        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: textPayload,
            parse_mode: "Markdown",
          }),
        });

        if (tgRes.ok) {
          delivered = true;
        } else {
          const errData = await tgRes.json();
          console.warn("Telegram bot dispatch error:", errData);
        }
      } catch (err) {
        console.warn("Telegram network dispatch error:", err);
      }
    }

    // 4. Background EmailJS attempt if configured in env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && !serviceId.includes("your_")) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        delivered = true;
      } catch (err) {
        console.warn("EmailJS background note:", err);
      }
    }

    // 5. In development without configured keys, simulate success
    if (!botToken && (!serviceId || serviceId.includes("your_"))) {
      delivered = true;
    }

    setIsSubmitting(false);

    if (delivered) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", hp: "" });
      setTouched({});
      setErrors({});
      showToast("Message sent successfully! Expect a reply within 24h.", { type: "success" });
    } else {
      setSubmitStatus("error");
      showToast(`Transmission error. Please email directly at ${PROFILE.contactDetails.email}`, { type: "error" });
    }
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      val: "linkedin.com/in/mayanknasa",
      href: PROFILE.contactDetails.linkedin,
      Icon: FaLinkedin,
    },
    {
      label: "GitHub",
      val: "github.com/mayanknasa",
      href: PROFILE.contactDetails.github,
      Icon: FaGithub,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-28 lg:py-36 border-b border-[var(--border)] relative">
      <Container>
        {/* Large Oversized Typographic Statement */}
        <div className="mb-14 sm:mb-20">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-4 flex items-center gap-3">
            <span>05 / CONTACT</span>
            <span className="h-px flex-1 bg-[var(--border)] max-w-xs" />
          </div>

          <h2 className="font-heading text-[clamp(2.75rem,7vw,6.25rem)] font-light tracking-[-0.04em] text-[var(--text)] leading-[1.0] mb-6 select-none">
            Let’s build something <br className="hidden sm:inline" />
            <span className="text-[var(--accent)] font-normal">that ships.</span>
          </h2>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-[var(--muted)] font-light max-w-2xl leading-relaxed">
            Direct collaboration, engineering leadership, and production-ready systems that ship to real users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left Column: Statement, Email as Biggest Element, Metadata, & Socials ── */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <p className="font-sans text-[16px] sm:text-lg text-[var(--muted)] leading-[1.6] max-w-xl">
              {PROFILE.contactPrompt}
            </p>

            {/* Big Copyable Email Card (Unboxed Surface) */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-[14px] bg-[var(--surface)] shadow-sm flex flex-col justify-between gap-6 transition-all duration-200">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium mb-3 block">
                  Primary Communication Channel
                </span>

                {/* Email as the Biggest Element at clamp(2rem, 6vw, 5rem) */}
                <a
                  href={`mailto:${PROFILE.contactDetails.email}`}
                  className="font-heading text-[clamp(2rem,6vw,5rem)] font-light tracking-[-0.04em] text-[var(--text)] hover:text-[var(--accent)] transition-colors leading-[1.0] break-all block my-3 select-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
                >
                  {PROFILE.contactDetails.email}
                </a>
              </div>

              {/* Action Bar with Confirming Copy Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24-Hour Response Guarantee</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[44px] px-5 py-2.5 rounded-[6px] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white font-sans text-sm font-medium flex items-center gap-2 transition-colors duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links List with >=44px Tap Targets */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--faint)] mb-1 font-medium">
                Verified Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="min-h-[44px] p-3.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-between gap-2.5 transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon size={15} className="text-[var(--muted)] group-hover:text-[var(--accent)] shrink-0 transition-colors" />
                      <span className="font-sans text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] truncate">
                        {label}
                      </span>
                    </div>
                    <ArrowUpRight size={13} className="text-[var(--faint)] group-hover:text-[var(--accent)] shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Clean Form with 48px Inputs & Direct Delivery ── */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 md:p-10 rounded-[14px] bg-[var(--surface)] shadow-sm">
              {submitStatus === "success" ? (
                /* Success State that Replaces the Form with a Confirmation Message */
                <div className="py-12 px-4 sm:px-6 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check size={32} />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[var(--text)]">
                    Message Sent Successfully
                  </h3>
                  <p className="font-sans text-base text-[var(--muted)] max-w-md leading-relaxed">
                    Thank you for reaching out. Your inquiry has been received and I will review and reply within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus("idle");
                      setFormData({ name: "", email: "", message: "", hp: "" });
                      setTouched({});
                      setErrors({});
                    }}
                    className="mt-4 px-6 py-2.5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] font-sans text-sm font-medium transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                        Get in Touch
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--faint)]">
                      Response within 24h
                    </span>
                  </div>

                  {/* Anti-Spam Honeypot Field */}
                  <input
                    type="text"
                    name="_gotcha_company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.hp}
                    onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                    style={{ display: "none", opacity: 0, position: "absolute", left: "-9999px" }}
                    aria-hidden="true"
                  />

                  {/* Name & Email Fields with 48px Height */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="contact-name"
                        className="font-sans text-sm font-medium text-[var(--text)] mb-2 block"
                      >
                        Your Name <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`h-12 min-h-[48px] w-full px-4 rounded-[6px] bg-[var(--bg)] border text-[var(--text)] font-sans text-[15px] placeholder-[var(--faint)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                          errors.name
                            ? "border-[var(--accent)] bg-[var(--accent-subtle)]/20"
                            : "border-[var(--border)] focus:border-[var(--accent)]"
                        }`}
                      />
                      {errors.name && (
                        <span id="name-error" className="font-sans text-xs text-[var(--accent)] flex items-center gap-1 mt-1.5">
                          <AlertCircle size={12} />
                          <span>{errors.name}</span>
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="contact-email"
                        className="font-sans text-sm font-medium text-[var(--text)] mb-2 block"
                      >
                        Email Address <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`h-12 min-h-[48px] w-full px-4 rounded-[6px] bg-[var(--bg)] border text-[var(--text)] font-sans text-[15px] placeholder-[var(--faint)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                          errors.email
                            ? "border-[var(--accent)] bg-[var(--accent-subtle)]/20"
                            : "border-[var(--border)] focus:border-[var(--accent)]"
                        }`}
                      />
                      {errors.email && (
                        <span id="email-error" className="font-sans text-xs text-[var(--accent)] flex items-center gap-1 mt-1.5">
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message Field with Clear Label */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="contact-message"
                      className="font-sans text-sm font-medium text-[var(--text)] mb-2 block"
                    >
                      Project Details & Scope <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your product requirements, deadlines, and technical challenges..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full p-4 rounded-[6px] bg-[var(--bg)] border text-[var(--text)] font-sans text-[15px] placeholder-[var(--faint)] transition-colors resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                        errors.message
                          ? "border-[var(--accent)] bg-[var(--accent-subtle)]/20"
                          : "border-[var(--border)] focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.message && (
                      <span id="message-error" className="font-mono text-[11px] text-[var(--accent)] flex items-center gap-1 mt-1.5">
                        <AlertCircle size={11} />
                        <span>{errors.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Inline Error Notice if transmission fails */}
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-[6px] border border-[var(--accent)] bg-[var(--accent-subtle)] font-sans text-sm text-[var(--accent)]">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>Failed to transmit. Please email directly at {PROFILE.contactDetails.email}.</span>
                    </div>
                  )}

                  {/* Action Strip: Tap target >= 48px with Loading Spinner */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[var(--faint)]">
                      All fields required
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 min-h-[48px] px-8 rounded-[6px] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white disabled:opacity-50 disabled:pointer-events-none font-sans text-[15px] font-medium flex items-center justify-center gap-2.5 transition-colors duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin text-[var(--accent)]" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
