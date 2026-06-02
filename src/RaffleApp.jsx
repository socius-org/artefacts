import { useState, useRef } from "react";

const base = import.meta.env.BASE_URL;

/* ─────────────────────────────────────────────────────────────────────────
   CONFIG — fill these in before the exhibition
   ───────────────────────────────────────────────────────────────────────── */

// Your three business profiles. Replace the placeholder paths with the real
// account URLs. These open the native app on mobile and the web on desktop.
const SOCIALS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "socius labs",
    url: "https://www.linkedin.com/company/socius-labs/",
    placeholder: "your-linkedin-name",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@socius.labs",
    url: "https://www.instagram.com/socius.labs",
    placeholder: "@your-instagram",
  },
  {
    key: "x",
    label: "X",
    handle: "@socius_labs",
    url: "https://x.com/socius_labs",
    placeholder: "@your-x-handle",
  },
];

// Google Form backend. Create a Google Form with one question per field below,
// then read the entry IDs off the *prefill* link
// (⋮ menu → "Get pre-filled link" → fill dummy values → copy link;
//  each &entry.NNNNNN=value is one field). Paste the IDs here. Until these are
// set, the page runs in DEMO mode and won't post anything.
const GOOGLE_FORM = {
  // …/forms/d/e/FORM_ID/formResponse  (note: formResponse, not viewform)
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeW4PqyGr85zC6uUZq4eaKAGyQmaKaieqa0_AHPx92PIcDhJQ/formResponse",
  fields: {
    email: "entry.873745117",
    name: "entry.1527757242",
    linkedin: "entry.1544376775",
    instagram: "entry.1243062379",
    x: "entry.1402561092",
    // A checkbox question in the Form with exactly this option text:
    consent: "entry.1647097983",
  },
  // Must match the checkbox option text in your Google Form, character for character.
  consentValue: "Yes",
};

const isConfigured = !GOOGLE_FORM.actionUrl.includes("REPLACE_FORM_ID");

/* ───────────────────────────────────────────────────────────────────────── */

const Badge = ({ children, variant = "dark" }) => (
  <span style={{
    display: "inline-block", padding: "3px 9px", fontSize: 9,
    fontFamily: "var(--mono)", letterSpacing: "0.04em", borderRadius: 2, fontWeight: 500,
    background: variant === "green" ? "#4ADE80" : "#1a1a1a",
    color: variant === "green" ? "#0a1a0f" : "#bbb",
    marginRight: 5,
  }}>{children}</span>
);

export default function Raffle() {
  const [visited, setVisited] = useState({});   // which profiles were opened
  const [handles, setHandles] = useState({ linkedin: "", instagram: "", x: "" });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | done
  const submittingRef = useRef(false);

  const filledHandles = Object.values(handles).filter((h) => h.trim()).length;

  const openProfile = (key, url) => {
    setVisited((v) => ({ ...v, [key]: true }));
    if (window.gtag) window.gtag("event", "raffle_follow_click", { network: key });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const validate = () => {
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()))
      return "Please enter a valid email so we can reach you if you win.";
    if (filledHandles === 0)
      return "Add at least one of your social handles so we can match your entry.";
    if (!consent)
      return "Please tick the consent box to enter the draw.";
    return "";
  };

  const handleSubmit = (e) => {
    const msg = validate();
    if (msg) {
      e.preventDefault();
      setError(msg);
      return;
    }
    setError("");
    if (window.gtag) window.gtag("event", "raffle_entry", { networks: filledHandles });

    if (!isConfigured) {
      // DEMO mode — no backend wired up yet. Show success without posting.
      e.preventDefault();
      setStatus("done");
      return;
    }
    // Real submit: the form posts into the hidden iframe (no CORS issues).
    submittingRef.current = true;
    setStatus("submitting");
  };

  // Fires when the hidden iframe finishes loading the Google Forms response.
  const onSinkLoad = () => {
    if (submittingRef.current) {
      submittingRef.current = false;
      setStatus("done");
    }
  };

  const fieldStyle = {
    width: "100%", padding: "12px 14px", fontSize: 15,
    fontFamily: "var(--body)", color: "var(--ink)",
    background: "#fff", border: "1px solid #e0dbd2", borderRadius: 3,
    outline: "none",
  };
  const labelStyle = {
    display: "block", fontFamily: "var(--mono)", fontSize: 9.5,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "var(--mute)", marginBottom: 8,
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--warm)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@300;400&family=Source+Serif+4:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        :root {
          --serif: 'Playfair Display', Georgia, serif;
          --body: 'Source Serif 4', Georgia, serif;
          --mono: 'DM Mono', monospace;
          --ink: #1a1a1a; --mute: #BBB4A8; --mid: #888;
          --warm: #F8F7F4; --grey: #EDEAE5;
        }
        * { box-sizing: border-box; margin: 0; }
        img { display: block; max-width: 100%; }
        a { color: inherit; text-decoration: none; }
        input:focus { border-color: #bbb4a8 !important; }
        .follow-row:hover { border-color: #c9c2b6 !important; }
      `}</style>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "44px 24px 80px" }}>

        {/* ── Presents banner ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <a href="https://socius.org" target="_blank" rel="noopener noreferrer">
            <img src={`${base}assets/img/sociuslabs_logo.png`} alt="socius labs"
              style={{ height: 24, width: "auto" }} />
          </a>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.4em",
            textTransform: "uppercase", color: "var(--mute)",
          }}>Prize Draw</span>
        </div>

        {status === "done" ? (
          /* ── Success state ── */
          <div style={{
            border: "1px solid #e8e4dd", borderRadius: 4, background: "#fff",
            padding: "48px 32px", textAlign: "center",
          }}>
            <div style={{ marginBottom: 18 }}><Badge variant="green">Entered</Badge></div>
            <h1 style={{
              fontFamily: "var(--serif)", fontWeight: 400, fontStyle: "italic",
              fontSize: 34, color: "var(--ink)", lineHeight: 1.15, marginBottom: 16,
            }}>You're in the draw.</h1>
            <p style={{
              fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.9, color: "#666",
              maxWidth: 380, margin: "0 auto",
            }}>
              Thank you for following along. We'll draw the winner after the exhibition
              and reach out by email. Enjoy <span style={{ fontStyle: "italic" }}>LeNet-1</span>.
            </p>
          </div>
        ) : (
          <>
            {/* ── Hero ── */}
            <div style={{
              border: "1px solid #e8e4dd", borderRadius: 4, background: "#fff",
              padding: "28px 28px 30px", marginBottom: 28,
            }}>
              <div style={{ display: "flex", gap: 5, marginBottom: 18 }}>
                <Badge>CVPR 2026</Badge>
                <Badge variant="green">Win a prize</Badge>
              </div>
              <h1 style={{
                fontFamily: "var(--serif)", fontWeight: 400, lineHeight: 1.05,
                color: "var(--ink)", margin: 0, marginBottom: 18,
              }}>
                <span style={{ fontSize: 30, fontStyle: "normal" }}>Follow us,</span><br />
                <span style={{ fontSize: 46, fontStyle: "italic" }}>enter the draw</span>
              </h1>
              <p style={{
                fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.9, color: "#666",
              }}>
                Follow <span style={{ fontStyle: "italic" }}>socius labs</span> on one, two, or all
                three channels below, then leave your handles. Every follower is entered into our
                draw — follow on more channels, and you're entered once for each.
              </p>
            </div>

            {/* ── Step 1: Follow ── */}
            <div style={{ ...labelStyle, marginBottom: 14 }}>Step 1 — Follow</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {SOCIALS.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className="follow-row"
                  onClick={() => openProfile(s.key, s.url)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "16px 18px", cursor: "pointer",
                    background: "#fff", border: "1px solid #e8e4dd", borderRadius: 3,
                    transition: "border-color 0.2s ease", textAlign: "left",
                  }}
                >
                  <span>
                    <span style={{
                      fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)",
                      letterSpacing: "0.02em",
                    }}>{s.label}</span>
                    <span style={{
                      fontFamily: "var(--body)", fontSize: 13, color: "#999", marginLeft: 10,
                    }}>{s.handle}</span>
                  </span>
                  <span style={{
                    fontFamily: "var(--mono)", fontSize: 11,
                    color: visited[s.key] ? "#3a9d5d" : "var(--mute)",
                  }}>
                    {visited[s.key] ? "✓ opened" : "Follow →"}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Step 2: Enter ── */}
            <div style={{ ...labelStyle, marginBottom: 14 }}>Step 2 — Enter the draw</div>
            <form
              action={GOOGLE_FORM.actionUrl}
              method="POST"
              target="raffle_sink"
              onSubmit={handleSubmit}
              style={{
                border: "1px solid #e8e4dd", borderRadius: 4, background: "#fff",
                padding: "26px 24px", display: "flex", flexDirection: "column", gap: 20,
              }}
            >
              <div>
                <label style={labelStyle}>Email <span style={{ color: "#c0392b" }}>*</span></label>
                <input
                  type="email" name={GOOGLE_FORM.fields.email}
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" style={fieldStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Name <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                <input
                  type="text" name={GOOGLE_FORM.fields.name}
                  value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Your name" style={fieldStyle}
                />
              </div>

              <div style={{ height: 1, background: "#efece6" }} />

              <div style={{
                fontFamily: "var(--body)", fontSize: 13, color: "#999", fontStyle: "italic",
                marginBottom: -6,
              }}>
                Add the handle for each channel you followed — at least one.
              </div>

              {SOCIALS.map((s) => (
                <div key={s.key}>
                  <label style={labelStyle}>{s.label} handle</label>
                  <input
                    type="text" name={GOOGLE_FORM.fields[s.key]}
                    value={handles[s.key]}
                    onChange={(e) => setHandles((h) => ({ ...h, [s.key]: e.target.value }))}
                    placeholder={s.placeholder} style={fieldStyle}
                  />
                </div>
              ))}

              {/* Consent value posts only when checked */}
              {consent && (
                <input type="hidden" name={GOOGLE_FORM.fields.consent} value={GOOGLE_FORM.consentValue} />
              )}
              <label style={{
                display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer",
                fontFamily: "var(--body)", fontSize: 13, lineHeight: 1.6, color: "#666",
              }}>
                <input
                  type="checkbox" checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: 3, accentColor: "#1a1a1a", flexShrink: 0 }}
                />
                <span>
                  I agree to be contacted by socius labs about this prize draw. We'll only use
                  your details to run the draw and notify the winner.
                </span>
              </label>

              {error && (
                <div style={{
                  fontFamily: "var(--mono)", fontSize: 11, color: "#c0392b", lineHeight: 1.6,
                }}>{error}</div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  padding: "15px 20px", cursor: status === "submitting" ? "default" : "pointer",
                  background: "var(--ink)", color: "#fff", border: "none", borderRadius: 3,
                  fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em",
                  textTransform: "uppercase", opacity: status === "submitting" ? 0.6 : 1,
                }}
              >
                {status === "submitting" ? "Entering…" : "Enter the draw"}
              </button>

              {!isConfigured && (
                <div style={{
                  fontFamily: "var(--mono)", fontSize: 10, color: "var(--mute)",
                  lineHeight: 1.7, textAlign: "center",
                }}>
                  Demo mode — Google Form not yet connected. Entries are not being saved.
                </div>
              )}
            </form>
          </>
        )}

        {/* ── Footer ── */}
        <div style={{
          marginTop: 40, textAlign: "center",
          fontFamily: "var(--mono)", fontSize: 9, color: "var(--mute)", lineHeight: 2,
        }}>
          <span style={{ fontStyle: "italic" }}>artefact(s): LeNet-1</span> · socius labs, 2026<br />
          <a href={base} style={{ textDecoration: "underline" }}>Back to the exhibit</a>
        </div>
      </div>

      {/* Hidden sink: Google Forms posts here so the visitor stays on this page */}
      <iframe name="raffle_sink" title="raffle_sink" onLoad={onSinkLoad}
        style={{ display: "none" }} />
    </div>
  );
}
