import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  FEATURED_PROJECTS,
  PROJECT_INDEX,
  LIVE_PROJECTS_DATA,
  PROJECT_FILTERS,
} from "../../data/projects";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import ShimmerImage from "../ui/ShimmerImage";

/* ── Large High-Fidelity Smartphone Mockup for noFeePe ─────────────────── */
function NoFeePePhoneMockup() {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] mx-auto rounded-[40px] border-2 border-[var(--border-strong)] bg-[#0C0C0A] p-3 sm:p-3.5 shadow-2xl select-none">
      {/* Dynamic Island / Speaker Pill */}
      <div className="w-24 h-4 bg-[#1F1F1C] rounded-full mx-auto mb-2.5 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#0C0C0A]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2A2A26]" />
      </div>

      {/* Screen Frame */}
      <div className="rounded-[28px] bg-[var(--bg)] border border-[var(--border)] p-4 flex flex-col justify-between min-h-[440px] sm:min-h-[460px] text-xs">
        {/* App Topbar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border)]">
          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[var(--text)]">
            <span className="text-[var(--accent)] font-bold text-sm">⚡</span>
            <span>noFeePe</span>
          </div>
          <span className="font-mono text-[9px] px-2 py-0.5 rounded-[4px] bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)] font-medium">
            ZERO MDR ACTIVE
          </span>
        </div>

        {/* Scanned Merchant Bill Display */}
        <div className="my-auto flex flex-col gap-3 py-2">
          <div className="p-3.5 rounded-[8px] bg-[var(--surface)] border border-[var(--border)] text-center">
            <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1">
              Scanned UPI Bill
            </div>
            <div className="font-heading text-3xl font-light tracking-tight text-[var(--text)]">
              ₹4,500.00
            </div>
            <div className="font-mono text-[10px] text-[var(--accent)] mt-1 font-medium">
              ⚠️ Amount exceeds ₹1,999.00 limit
            </div>
          </div>

          {/* Split & Pay Active Plan Card */}
          <div className="p-3 rounded-[8px] border border-[var(--accent)] bg-[var(--accent-subtle)]/40 flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-[var(--accent)] font-medium">Split & Pay Engine</span>
              <span className="text-[var(--text)] font-semibold">3 Legs</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--accent)] rounded-full w-1/3" />
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
              <span>Paid: ₹1,999 (Leg 1)</span>
              <span className="text-[var(--text)] font-medium">Left: ₹2,501.00</span>
            </div>
          </div>

          {/* Supported UPI Apps Hand-Off */}
          <div>
            <div className="font-mono text-[9px] text-[var(--faint)] uppercase tracking-wider text-center mb-1.5">
              Dispatches Native UPI Intent:
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { name: "GPay", active: true },
                { name: "PhonePe", active: false },
                { name: "Paytm", active: false },
                { name: "CRED", active: false },
              ].map((app) => (
                <div
                  key={app.name}
                  className={`py-1 rounded-[4px] text-center font-mono text-[10px] border ${
                    app.active
                      ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--surface)] font-medium"
                      : "border-[var(--border)] text-[var(--muted)]"
                  }`}
                >
                  {app.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Button & Home Bar */}
        <div className="pt-2 border-t border-[var(--border)]">
          <div className="w-full py-2.5 rounded-[6px] bg-[var(--accent)] text-white font-mono text-[11px] font-bold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 shadow-sm">
            <span>Pay Leg 2 (₹1,999.00)</span>
            <span>→</span>
          </div>
          <div className="w-20 h-1 bg-[var(--border-strong)] rounded-full mx-auto mt-2.5 opacity-60" />
        </div>
      </div>
    </div>
  );
}

/* ── Large High-Fidelity Firefox Window Mockup for Cleargram ──────────── */
function CleargramBrowserMockup() {
  return (
    <div className="w-full max-w-[540px] sm:max-w-[580px] mx-auto rounded-[14px] border border-[var(--border-strong)] bg-[var(--surface)] shadow-2xl overflow-hidden select-none">
      {/* Firefox Browser Chrome Header */}
      <div className="px-4 py-3 bg-[#151512] border-b border-[var(--border)] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        {/* Firefox Tab / Address Bar */}
        <div className="flex-1 max-w-sm mx-auto py-1 px-3 rounded-[6px] bg-[var(--bg)] border border-[var(--border)] font-mono text-[11px] text-[var(--muted)] text-center truncate flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>addons.mozilla.org/en-US/firefox/addon/cleargram</span>
        </div>

        <span className="font-mono text-[10px] text-[var(--accent)] hidden sm:inline-block font-medium">
          AMO VERIFIED
        </span>
      </div>

      {/* Extension Panel Content */}
      <div className="p-5 sm:p-6 flex flex-col gap-4 bg-[var(--bg)] min-h-[380px]">
        {/* Extension Banner */}
        <div className="flex items-baseline justify-between pb-3.5 border-b border-[var(--border)]">
          <div>
            <div className="font-heading text-xl font-normal text-[var(--text)] flex items-center gap-2">
              <span>Cleargram</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)] font-medium">
                v1.0.2
              </span>
            </div>
            <div className="font-sans text-xs text-[var(--muted)] mt-0.5">
              Instagram Follower Manager for Firefox
            </div>
          </div>
          <span className="font-mono text-xs text-[var(--accent)] font-medium">
            42 Non-Followers
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[var(--border)] gap-5 font-mono text-xs">
          <span className="pb-2 border-b-2 border-[var(--accent)] text-[var(--text)] font-medium">
            Unfollowers (42)
          </span>
          <span className="pb-2 text-[var(--faint)]">
            Ghost Followers (18)
          </span>
          <span className="pb-2 text-[var(--faint)]">
            Whitelist (6)
          </span>
        </div>

        {/* Account List Sample */}
        <div className="flex flex-col gap-2.5 font-mono text-xs">
          {[
            { handle: "@fashion_weekly", status: "Not following you back", action: "Unfollow" },
            { handle: "@travel_trends", status: "Not following you back", action: "Unfollow" },
            { handle: "@creative_studio", status: "Not following you back", action: "Unfollow" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-[6px] border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between gap-3"
            >
              <div className="flex flex-col">
                <span className="text-[var(--text)] font-medium text-[13px]">{item.handle}</span>
                <span className="text-[11px] text-[var(--faint)]">{item.status}</span>
              </div>
              <button
                type="button"
                className="px-3 py-1 rounded-[4px] border border-[var(--border)] text-[var(--muted)] text-[11px] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors font-sans"
              >
                {item.action}
              </button>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="mt-auto pt-3.5 border-t border-[var(--border)] flex items-center justify-between font-mono text-[11px] text-[var(--faint)]">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 size={13} />
            <span>100% Client-Side Execution</span>
          </span>
          <span>Zero External Tracking</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component: Editorial Project Index + Featured Case Studies ────── */
export default function Projects() {
  const [filter, setFilter] = useState("ALL");

  const filteredFeatured = FEATURED_PROJECTS.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "MOBILE") return p.cat === "MOBILE";
    if (filter === "EXTENSION") return p.cat === "EXTENSION";
    return false;
  });

  const filteredIndex = PROJECT_INDEX.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "MOBILE") return p.cat === "MOBILE" || p.secondaryCat === "MOBILE";
    if (filter === "WEB") return p.cat === "WEB" || p.secondaryCat === "WEB";
    if (filter === "EXTENSION") return p.cat === "EXTENSION" || p.secondaryCat === "EXTENSION";
    if (filter === "CONSULTING") return p.cat === "CONSULTING" || p.secondaryCat === "CONSULTING";
    return true;
  });

  const filteredLive = LIVE_PROJECTS_DATA.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "MOBILE") return p.cat === "MOBILE";
    if (filter === "WEB") return p.cat === "WEB";
    return true;
  });

  return (
    <section id="projects" className="section-inverted py-24 sm:py-28 lg:py-36 border-t border-b border-[var(--border)] relative transition-colors duration-300">
      <Container>
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-20">
          <SectionHeading
            index="03 / PROJECTS"
            title="Selected Work"
            subtitle="Flagship case studies, core production architectures, and independent systems."
            className="mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`min-h-[44px] px-4 py-2 rounded-[6px] font-mono text-xs uppercase tracking-wider transition-colors duration-150 border flex items-center justify-center active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer ${
                  filter === f
                    ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)] font-semibold shadow-sm"
                    : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Large Near Full-Width Featured Cards: One per Row, Alternating ── */}
        {filteredFeatured.length > 0 && (
          <div className="mb-24 lg:mb-32 flex flex-col gap-16 lg:gap-24">
            {filteredFeatured.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={project.id}
                  className="rounded-[16px] bg-[var(--surface)] p-7 sm:p-10 lg:p-14 shadow-sm transition-all duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Text Column (Alternating Left / Right) */}
                    <div
                      className={`lg:col-span-6 xl:col-span-6 flex flex-col justify-between ${
                        isEven ? "order-1" : "order-1 lg:order-2"
                      }`}
                    >
                      <div>
                        {/* Kicker Meta Pill */}
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                          <span className="px-2.5 py-1 rounded-[4px] bg-[var(--accent-subtle)] border border-[var(--accent)] font-mono text-xs text-[var(--accent)] font-medium">
                            {project.cat} · {project.role}
                          </span>
                          <span className="font-mono text-xs text-[var(--faint)]">
                            {project.year}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[var(--text)] mb-2">
                          {project.title}
                        </h3>
                        <p className="font-sans text-base sm:text-lg text-[var(--accent)] font-medium mb-4">
                          {project.subtitle}
                        </p>

                        <p className="font-sans text-[15px] sm:text-base text-[var(--muted)] leading-[1.6] max-w-xl mb-8">
                          {project.pitch}
                        </p>

                        {/* Three Clear Points per Project */}
                        <div className="mb-8">
                          <div className="font-mono text-xs uppercase tracking-wider text-[var(--faint)] mb-4 font-medium">
                            Key Architectural Highlights:
                          </div>
                          <div className="space-y-4">
                            {project.points.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-3.5">
                                <span className="font-mono text-xs text-[var(--accent)] font-bold mt-0.5">
                                  0{pIdx + 1}
                                </span>
                                <div>
                                  <h4 className="font-sans text-[15px] font-medium text-[var(--text)] mb-0.5">
                                    {pt.title}
                                  </h4>
                                  <p className="font-sans text-[14px] text-[var(--muted)] leading-[1.55]">
                                    {pt.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags list */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </div>
                      </div>

                      {/* Prominent Action Button */}
                      <div>
                        {project.id === "nofeepe" ? (
                          <Button
                            variant="primary"
                            href={project.github}
                            target="_blank"
                            icon={<FaGithub size={16} />}
                            className="font-sans text-[15px] font-medium py-3 px-7 shadow-sm"
                          >
                            View on GitHub
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            href={project.addonUrl}
                            target="_blank"
                            icon={<ArrowUpRight size={16} />}
                            className="font-sans text-[15px] font-medium py-3 px-7 shadow-sm"
                          >
                            Get add-on
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Device Frame Column (Phone or Firefox window) */}
                    <div
                      className={`lg:col-span-6 xl:col-span-6 flex items-center justify-center ${
                        isEven ? "order-2" : "order-2 lg:order-1"
                      }`}
                    >
                      {project.id === "nofeepe" ? (
                        <NoFeePePhoneMockup />
                      ) : (
                        <CleargramBrowserMockup />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Project Index: Clickable Rows with Rotating Arrow on Hover ── */}
        <div className="mb-24 lg:mb-32">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--faint)] mb-4 flex items-center gap-3">
            <span>Comprehensive Project Index</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="bg-[var(--surface)] rounded-[14px] divide-y divide-[var(--border)] overflow-hidden shadow-sm">
            {filteredIndex.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group block py-6 sm:py-7 px-5 sm:px-8 hover:bg-[var(--surface-hover)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Title & Category */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 md:w-5/12">
                    <span className="font-mono text-xs text-[var(--accent)] font-medium uppercase tracking-wider shrink-0">
                      {item.cat}
                    </span>
                    <h4 className="font-heading text-xl sm:text-2xl font-light md:font-normal tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  {/* Pitch / Scope */}
                  <div className="font-sans text-[15px] text-[var(--muted)] md:w-4/12 truncate pr-4">
                    {item.pitch}
                  </div>

                  {/* Year, Result Metric, & Rotating Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-5 md:w-3/12 shrink-0">
                    <span className="font-mono text-xs text-[var(--faint)]">
                      {item.year}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[var(--accent)] font-medium">
                      {item.metric}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-subtle)] transition-all duration-200">
                      <ArrowUpRight
                        size={15}
                        className="transform transition-transform duration-200 group-hover:rotate-45"
                      />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Uniform Live Project Thumbnails with Tech Stack Hover Overlay ── */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--faint)] mb-6 flex items-center gap-3">
            <span>Live Storefronts & Deployed Applications</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredLive.map((item) => (
              <a
                key={item.id}
                href={item.demo}
                target={item.demo !== "#" ? "_blank" : undefined}
                rel="noreferrer"
                className="group block bg-[var(--surface)] rounded-[12px] overflow-hidden hover:shadow-lg transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {/* Uniform Aspect Ratio Thumbnail with Hover Tech Stack Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg)] border-b border-[var(--border)]">
                  <ShimmerImage
                    src={item.image}
                    alt={item.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Hover Overlay displaying Tech Used */}
                  <div className="absolute inset-0 bg-[var(--bg)]/95 backdrop-blur-xs flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-1.5 justify-center max-w-xs mb-3">
                      {item.tech?.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-[4px] bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] font-mono text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent)] font-medium">
                      <span>Visit Live Platform</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>

                {/* Caption Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h4 className="font-heading text-lg sm:text-xl font-normal text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h4>
                    <span className="font-mono text-xs text-[var(--accent)] font-medium">
                      {item.cat}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[var(--muted)] line-clamp-2 leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
