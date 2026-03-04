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
  galleryInstallation: `${base}assets/img/gallery_installation.png`,
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
      `}</style>

      {/* ═══ WARM — Opening ═══ */}
      <div style={{ background: "var(--warm)" }}>

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
                color: "var(--ink)", margin: "0 0 16px",
              }}>
                <span style={{ fontSize: 34, fontStyle: "normal", letterSpacing: "-0.01em" }}>artefact(s):</span>
                <br />
                <span style={{ fontSize: 72, fontStyle: "italic" }}>LeNet-1</span>
              </h1>
              <p style={{
                fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.65,
                color: "var(--mid)", fontStyle: "italic", maxWidth: 400,
              }}>
                Physicalising the first convolutional neural network in light, glass, and silicon.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ Dimensions ═══ */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "28px 40px 0",
          textAlign: "center",
        }}>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em",
            color: "var(--mute)",
          }}>
            1.63 × 0.80 × 0.65 m
          </span>
        </div>

        {/* ═══ Wall label + materials ═══ */}
        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "64px 40px 0",
          display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "start",
        }}>
          <Prose>
            In 1989, Yann LeCun demonstrated that a machine could learn to see.
            LeNet-1 — the first convolutional neural network — extracted edges,
            curves, and strokes from raw pixel data, compressing and recombining
            features until a handwritten digit became a classification. It was a
            quiet revolution, buried in a Bell Labs technical report.
          </Prose>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10, color: "var(--mute)", lineHeight: 2.4,
          }}>
            Transparent PCBs, WS2812B LEDs<br />
            3D-printed translucent PLA<br />
            Aluminium extrusion frame<br />
            Raspberry Pi 4 Model B<br />
            Capacitive stylus input<br />
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
                Before light, there is the board. Each neuron's transparent PCB carries
                sixteen WS2812B LEDs in a 4×4 grid, daisy-chained through a single data
                line. The circuit is the fossil record of the design process — every trace,
                every via, every mounting hole a decision made visible.
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
              artefact(s) rebuilds that architecture in physical space. Each computational
              layer becomes an array of translucent cubes — mounted to aluminium rails,
              arranged in the topology of the original network. Visitors draw a digit on a
              tablet. Every ten seconds, the drawing is captured, normalised, and fed through
              the physical LeNet. Activation values propagate layer by layer. The network
              thinks in light.
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
            The unit of the installation is the neuron. Each one is a translucent cube
            housing a transparent PCB with a 4×4 matrix of individually addressable LEDs.
            High activation glows bright; low activation dims to near-darkness. Stacked
            and arrayed, the cubes form a physical map of the network's internal state — a
            snapshot of machine perception, renewed every ten seconds.
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
            Aluminium extrusion rails hold each layer in place; transparent substrates
            allow sight lines through the full depth of the network.
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

      {/* ═══ DARK — Catalogue plates ═══ */}
      <div style={{ background: "var(--ink)", padding: "180px 0 180px", overflow: "hidden" }}>

        {/* Wireframe — bleeds left, big */}
        <div style={{ maxWidth: "85%", paddingRight: 40 }}>
          <img src={IMAGES.frameWireframe} alt="Wireframe elevation"
            style={{ width: "100%", mixBlendMode: "lighten" }} />
        </div>

      </div>

      {/* ═══ Renderings — light background ═══ */}
      <div style={{ background: "var(--warm)", padding: "180px 0 180px" }}>
        {/* Perspective — large, pushed left */}
        <div>
          <img src={IMAGES.installationPerspective} alt="Perspective view"
            style={{ width: "82.5%" }} />
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
            Every ten seconds, a handwritten digit becomes a wave of light propagating through the architecture of perception.
          </p>
        </div>

        {/* Gallery installation — centered, large */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0 40px" }}>
          <div style={{ width: "90%", position: "relative" }}>
            <img src={IMAGES.galleryInstallation} alt="Gallery installation"
              style={{ width: "100%", borderRadius: 3 }} />
            <div style={{
              position: "absolute", right: 0, bottom: -80,
              fontFamily: "var(--mono)", fontSize: 9, color: "var(--mute)",
              lineHeight: 2, textAlign: "right",
            }}>
              <span style={{ fontStyle: "italic" }}>artefact(s): LeNet-1</span><br />
              socius labs (Nick Oh &amp; Alex Park), 2026<br />
              Transparent flexible PCBs, LEDs, glass, PLA, aluminium, electronics<br />
              1.63 × 0.80 × 0.65 m
            </div>
          </div>
        </div>
      </div>

      {/* ═══ DARK — Creators ═══ */}
      <div style={{ background: "var(--ink)", padding: "64px 40px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10,
            letterSpacing: "0.2em", color: "#555", marginBottom: 14,
          }}>CREATORS</div>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10, color: "#777", lineHeight: 2.4,
          }}>
            Nick Oh<br />Alex Park
          </div>
        </div>
      </div>

    </div>
  );
}
