import { useState, useEffect } from "react";

const base = import.meta.env.BASE_URL;

const IMAGES = {
  neuronCloseup: `${base}assets/img/neuron_closeup.png`,
  fullIsometric: `${base}assets/img/full_isometric.png`,
  sideSection: `${base}assets/img/side_section.png`,
  frameWireframe: `${base}assets/img/frame_wireframe.png`,
  pcbDetail: `${base}assets/img/pcb_detail.png`,
  pcbPanel: `${base}assets/img/pcb_panel.png`,
  layerGrid: `${base}assets/img/layer_grid.png`,
  pcbSchematic: `${base}assets/img/pcb_schematic.png`,
  pcbLayout: `${base}assets/img/pcb_layout.png`,
  pcbPhoto: `${base}assets/img/pcb_photo.jpg`,
  pcbTraces: `${base}assets/img/pcb_traces.png`,
  lecunDigits: `${base}assets/img/lecun_digits.png`,
  lecunConv: `${base}assets/img/lecun_conv.png`,
  lecunArch: `${base}assets/img/lecun_arch.png`,
  galleryInstallation: `${base}assets/img/artefacts-lenet1.png`,
  sociusLogo: `${base}assets/img/sociuslabs_logo.png`,
  installationVideo: `${base}assets/video/artefacts-lenet1.mp4`,
  sponsorJlcpcb: `${base}assets/sponsors/jlcpcb.jpg`,
  sponsorJlc3dp: `${base}assets/sponsors/jlc3dp.jpg`,
  sponsorJlcmc: `${base}assets/sponsors/jlcmc.jpg`,
  sponsorEasyeda: `${base}assets/sponsors/easyeda.jpg`,
  cvprLogo: `${base}assets/exhibitions/CVPR_Logo_Denver-2026-white.png`,
  installationPerspective: `${base}assets/img/installation_perspective.png`,
  installationSide: `${base}assets/img/installation_side.png`,
};

const Badge = ({ children, variant = "dark" }) => (
  <span style={{
    display: "inline-block", padding: "3px 9px", fontSize: 9,
    fontFamily: "var(--mono)", letterSpacing: "0.04em", borderRadius: 2, fontWeight: 500,
    background: variant === "green" ? "#4ADE80" : "#1a1a1a",
    color: variant === "green" ? "#0a1a0f" : "#bbb",
    marginRight: 5,
  }}>{children}</span>
);

const Prose = ({ children, maxWidth = 440, color = "#666" }) => (
  <p style={{
    fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.95,
    color, fontStyle: "italic", maxWidth,
  }}>{children}</p>
);

export default function ArtefactsLeNet() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <div style={{
      minHeight: "100vh",
      opacity: loaded ? 1 : 0, transition: "opacity 1s ease",
    }}>
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
        .sponsor-logo {
          filter: grayscale(1); opacity: 0.5; mix-blend-mode: multiply;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .sponsor-logo:hover { filter: grayscale(0); opacity: 1; }
        .venue-logo {
          filter: invert(1); opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .venue-logo:hover { opacity: 1; }
      `}</style>

      {/* ═══ WARM — Opening ═══ */}
      <div style={{ background: "var(--warm)" }}>

        {/* ═══ Presents banner ═══ */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "44px 40px 0",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
        }}>
          <a href="https://socius.org" target="_blank" rel="noopener noreferrer">
            <img src={IMAGES.sociusLogo} alt="socius labs"
              style={{ height: 26, width: "auto" }} />
          </a>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.4em",
            textTransform: "uppercase", color: "var(--mute)",
          }}>presents</span>
        </div>

        {/* ═══ EDITORIAL CARD HERO ═══ */}
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "48px 40px 0" }}>
          <div style={{ border: "1px solid #e8e4dd", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ background: "#F2F0EB", padding: "32px 32px 24px" }}>
              <img src={IMAGES.galleryInstallation} alt="artefact(s): LeNet-1 — gallery installation"
                style={{ width: "100%", borderRadius: 2 }} />
            </div>
            <div style={{ padding: "28px 32px 32px", borderTop: "1px solid #e8e4dd" }}>
              <div style={{ display: "flex", gap: 5, marginBottom: 20 }}>
                <Badge>Installation</Badge>
                <Badge variant="green">2026</Badge>
                <Badge>Interactive</Badge>
              </div>
              <h1 style={{
                fontFamily: "var(--serif)", fontWeight: 400, lineHeight: 1.0,
                color: "var(--ink)", margin: 0,
              }}>
                <span style={{ fontSize: 34, fontStyle: "normal", letterSpacing: "-0.01em" }}>artefact(s):</span>
                <br />
                <span style={{ fontSize: 72, fontStyle: "italic" }}>LeNet-1</span>
              </h1>
            </div>
          </div>
        </div>

        {/* ═══ Prize-draw CTA band ═══ */}
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 40px 0" }}>
          <div style={{
            background: "var(--ink)", borderRadius: 4, padding: "52px 40px",
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", gap: 20,
          }}>
            <div style={{ display: "flex", gap: 5 }}>
              <Badge variant="green">CVPR 2026</Badge>
              <Badge variant="green">Win a prize</Badge>
            </div>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 400, fontStyle: "italic",
              fontSize: 38, color: "#fff", lineHeight: 1.1, margin: 0,
            }}>
              Follow us, enter the draw
            </h2>
            <p style={{
              fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.9,
              color: "#bbb", maxWidth: 460, margin: 0,
            }}>
              Visiting the installation at CVPR 2026? Follow <span style={{ fontStyle: "italic" }}>socius
              labs</span> on LinkedIn, Instagram, or X and leave your handle to enter our prize draw.
            </p>
            <a
              href={`${base}raffle.html`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, marginTop: 8,
                padding: "16px 28px", background: "#4ADE80", color: "#0a1a0f",
                borderRadius: 3, fontFamily: "var(--mono)", fontSize: 13,
                letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500,
              }}
            >
              Enter the prize draw
              <span style={{ fontSize: 15, lineHeight: 1 }}>→</span>
            </a>
          </div>
        </div>

        {/* ═══ Wall label + materials ═══ */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "64px 40px 0",
          display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "start",
        }}>
          <Prose>
            LeNet-1, the first convolutional neural network, was built at Bell Labs in 1989
            to read handwritten digits. The code still runs, so it remains a working
            instrument. But the meaning has shifted under it. What was once a state-of-the-art
            system is now a precursor, an origin story, an artefact in the archaeological sense
            rather than the software one.
          </Prose>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10, color: "var(--mute)", lineHeight: 2.4,
          }}>
            Transparent PCBs, WS2812B LEDs<br />
            Low-iron tempered glass<br />
            SLA-9600 Resin<br />
            SLA-8001 Resin<br />
            Aluminium extrusion frame<br />
            Raspberry Pi 4 Model B<br />
            1.63 × 0.80 × 0.65 m
          </div>
        </div>

        {/* ── LECUN: Architecture diagram — illustrates the text above ── */}
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "40px 40px 0" }}>
          <img src={IMAGES.lecunArch} alt="LeNet architecture diagram"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ height: 64 }} />
      </div>

      {/* ═══ GREY — The Circuit ═══ */}
      <div style={{ background: "var(--grey)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "start",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 9.5,
                letterSpacing: "0.3em", color: "var(--mute)", marginBottom: 16,
                textTransform: "uppercase",
              }}>The circuit</div>
              <Prose maxWidth={420} color="#888">
                We allowed ourselves one translation only, of substrate, bits to atoms. The
                computation stays exact. Where the paper has matrices, we have copper, and
                where it has scalar activations, we have brightness.
              </Prose>
            </div>
            <div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 9.5,
                letterSpacing: "0.3em", color: "var(--mute)", marginBottom: 20,
                textTransform: "uppercase",
              }}>Fabrication</div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 10, color: "#999",
                lineHeight: 2.6,
              }}>
                {[
                  ["Substrate", "Transparent Flex (2-layer)"],
                  ["Dimensions", "69.4 × 68.775 mm"],
                  ["Thickness", "0.24 mm"],
                  ["Copper", "Electro-deposited, 1 oz"],
                  ["Surface finish", "ENIG (1U\u2033)"],
                  ["Coverlay", "PET 25 \u03bcm / AD 25 \u03bcm"],
                  ["Stiffener", "Polyimide, 0.20 mm"],
                  ["Gold fingers", "0.3 mm"],
                  ["Cutting", "Laser"],
                  ["Test", "Flying probe, full"],
                  ["Tolerance", "\u00b10.1 mm"],
                  ["Standard", "IPC Class 2"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)" }}>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: 16,
            marginTop: 48, alignItems: "start",
          }}>
            <img src={IMAGES.pcbPhoto} alt="Transparent PCB prototype"
              style={{ width: "100%", borderRadius: 3 }} />
            <img src={IMAGES.pcbTraces} alt="Complete board routing"
              style={{ width: "100%", borderRadius: 3 }} />
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16,
          }}>
            <img src={IMAGES.pcbSchematic} alt="Component placement"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 3 }} />
            <img src={IMAGES.pcbLayout} alt="Front copper layer"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 3 }} />
          </div>
        </div>
      </div>

      {/* ═══ WARM — The Installation ═══ */}
      <div style={{ background: "var(--warm)" }}>

        {/* ── Rotated digits (tall) alongside transition prose ── */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "72px 40px 0",
          display: "grid", gridTemplateColumns: "0.55fr 0.45fr", gap: 48, alignItems: "start",
        }}>
          <div style={{ paddingTop: 8 }}>
            <Prose maxWidth={420}>
              Where the paper has a topology diagram, the installation has spatial depth,
              something you can walk around, rebuilt layer for layer in the order of the
              original network. It runs continuously. Every ten seconds a handwritten digit
              is fed in, normalised, and propagated layer by layer through the physical LeNet.
            </Prose>
          </div>
          <img src={IMAGES.lecunDigits} alt="Normalised handwritten digits"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        {/* Isometric */}
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 40px 0" }}>
          <img src={IMAGES.fullIsometric} alt="Isometric view"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        {/* ── LECUN: Convolution figure alongside neuron prose ── */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "56px 40px 0",
          display: "grid", gridTemplateColumns: "0.55fr 0.45fr", gap: 48, alignItems: "start",
        }}>
          <Prose maxWidth={420}>
            The unit of the installation is the neuron, a glass housing around a transparent
            PCB and its 4×4 matrix of LEDs. This is the network's smallest unit of seeing, the
            size of its most compressed feature map after the final pooling. High activation
            glows; low activation falls to near-dark. Arrayed across the frame, the cubes hold
            a snapshot of machine perception, renewed every ten seconds.
          </Prose>
          <img src={IMAGES.lecunConv} alt="Convolution and feature map"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        {/* Layer grid + PCB panel */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "56px 40px 0",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
        }}>
          <img src={IMAGES.layerGrid} alt="Grid of neuron cubes"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
          <img src={IMAGES.pcbPanel} alt="PCB panel assembly"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 40px 0" }}>
          <Prose maxWidth={520}>
            Aluminium rails hold each layer; transparent substrates open sight lines through
            the full depth of the network. You can see every component, every trace, every
            connector, and still you cannot see why a seven is read as a one.
          </Prose>
        </div>

        {/* PCB detail + neuron closeup */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "56px 40px 0",
          display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 20,
        }}>
          <img src={IMAGES.pcbDetail} alt="PCB detail"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
          <img src={IMAGES.neuronCloseup} alt="Neuron module"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        {/* Cross-section */}
        <div style={{ maxWidth: 880, margin: "56px auto 0", padding: "0 40px" }}>
          <img src={IMAGES.sideSection} alt="Cross-section"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ height: 80 }} />
      </div>

      {/* ═══ Catalogue plates — Wireframe ═══ */}
      <div style={{ background: "var(--grey)", padding: "240px 0 240px", overflow: "hidden" }}>

        {/* Wireframe — centered, large */}
        <div style={{ maxWidth: "85%", margin: "0 auto" }}>
          <img src={IMAGES.frameWireframe} alt="Wireframe elevation"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

      </div>

      {/* ═══ Renderings — light background ═══ */}
      <div style={{ background: "var(--warm)", padding: "240px 0 240px" }}>
        {/* Perspective — full width */}
        <div>
          <img src={IMAGES.installationPerspective} alt="Perspective view"
            style={{ width: "100%" }} />
        </div>

        {/* Pull quote */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "160px 40px",
        }}>
          <p style={{
            fontFamily: "var(--serif)", fontSize: 36, fontStyle: "italic",
            lineHeight: 1.4, color: "var(--ink)", fontWeight: 400,
            maxWidth: 640,
          }}>
            We wanted to see how LeNet-1 thinks.<br />Not to explain it, only to watch it.
          </p>
        </div>

        {/* Installation video — centered, large, with artwork label */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0 40px" }}>
          <div style={{ width: "90%" }}>
            <video
              src={IMAGES.installationVideo}
              autoPlay loop muted playsInline
              style={{ width: "100%", borderRadius: 3, display: "block" }}
            />
            <div style={{
              marginTop: 24,
              fontFamily: "var(--mono)", fontSize: 9, color: "var(--mute)",
              lineHeight: 2, textAlign: "right",
            }}>
              <span style={{ fontStyle: "italic" }}>artefact(s): LeNet-1</span><br />
              socius labs (Nick Oh &amp; Alex Park), 2026<br />
              Transparent flexible PCBs, WS2812B LEDs, low-iron tempered glass, SLA resin, aluminium, electronics<br />
              1.63 × 0.80 × 0.65 m
            </div>
          </div>
        </div>

        {/* ═══ Exhibited at — venue ═══ */}
        <div style={{ maxWidth: 880, margin: "220px auto 0", padding: "0 40px", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "var(--mute)", marginBottom: 28,
          }}>Exhibited at</div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a href="https://thecvf-art.com/project.php?year=2026&artist=nick-oh&id=992"
              target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
              <img src={IMAGES.cvprLogo} alt="CVPR 2026, Denver" className="venue-logo"
                style={{ height: 30, width: "auto", objectFit: "contain" }} />
            </a>
          </div>
        </div>

        {/* ═══ Supported by — sponsors ═══ */}
        <div style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 40px", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "var(--mute)", marginBottom: 32,
          }}>Supported by</div>
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center",
            gap: 48,
          }}>
            {[
              [IMAGES.sponsorJlcpcb, "JLCPCB", "https://jlcpcb.com"],
              [IMAGES.sponsorJlc3dp, "JLC3DP", "https://jlc3dp.com/"],
              [IMAGES.sponsorJlcmc, "JLCMC", "https://jlcmc.com/"],
              [IMAGES.sponsorEasyeda, "EasyEDA", "https://easyeda.com/"],
            ].map(([src, name, href]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex" }}>
                <img src={src} alt={name} className="sponsor-logo"
                  style={{ height: 34, width: "auto", objectFit: "contain" }} />
              </a>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
