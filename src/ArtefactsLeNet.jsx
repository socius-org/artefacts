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
  sociusBanner: `${base}assets/img/socius_banner.jpg`,
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

        <nav style={{
          padding: "16px 40px", display: "flex", justifyContent: "space-between",
          alignItems: "center", borderBottom: "1px solid #e8e4dd",
          fontFamily: "var(--mono)", fontSize: 11,
        }}>
          <a href="https://socius.org" style={{ letterSpacing: "0.05em", color: "var(--ink)" }}>⊞ socius labs</a>
          <div style={{ display: "flex", gap: 24, color: "#bbb", fontSize: 10.5 }}>
            <a href="#">About</a><a href="#">Research</a><a href="#">Data</a><a href="#">Documentation</a>
          </div>
        </nav>

        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "48px 40px 0",
          display: "grid", gridTemplateColumns: "0.45fr 0.55fr", gap: 40, alignItems: "start",
        }}>
          <div>
            <img src={IMAGES.lecunDigits} alt="Normalised digits from LeCun et al."
              style={{ width: "100%", mixBlendMode: "multiply" }} />
          </div>
          <div style={{ paddingTop: 32 }}>
            <div style={{ display: "flex", gap: 5, marginBottom: 24 }}>
              <Badge>Installation</Badge>
              <Badge variant="green">2026</Badge>
              <Badge>Interactive</Badge>
            </div>
            <h1 style={{
              fontFamily: "var(--serif)", fontWeight: 400, lineHeight: 1.0,
              color: "var(--ink)", margin: "0 0 20px",
            }}>
              <span style={{ fontSize: 34, fontStyle: "normal", letterSpacing: "-0.01em" }}>artefact(s):</span>
              <br />
              <span style={{ fontSize: 72, fontStyle: "italic" }}>LeNet-1</span>
            </h1>
            <div style={{ width: 40, height: 1, background: "#D4CEC2", marginBottom: 20 }} />
            <p style={{
              fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.75,
              color: "var(--mid)", fontStyle: "italic", maxWidth: 380,
            }}>
              Physicalising the first convolutional neural network in light, glass, and silicon.
            </p>
            <div style={{ marginTop: 40 }}>
              <img src={IMAGES.lecunArch} alt="LeNet architecture diagram"
                style={{ width: "100%", mixBlendMode: "multiply" }} />
            </div>
            <div style={{ marginTop: 20 }}>
              <img src={IMAGES.lecunConv} alt="Convolution and feature map"
                style={{ width: "100%", mixBlendMode: "multiply" }} />
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "64px 40px 64px",
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
            Dimensions variable
          </div>
        </div>
      </div>

      {/* ═══ GREY — The Circuit ═══ */}
      <div style={{ background: "var(--grey)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 9.5,
            letterSpacing: "0.3em", color: "var(--mute)", marginBottom: 16,
            textTransform: "uppercase",
          }}>The circuit</div>
          <Prose maxWidth={480} color="#888">
            Before light, there is the board. Each neuron's transparent PCB carries
            sixteen WS2812B LEDs in a 4×4 grid, daisy-chained through a single data
            line. The circuit is the fossil record of the design process — every trace,
            every via, every mounting hole a decision made visible.
          </Prose>
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
              style={{ width: "100%", borderRadius: 3 }} />
            <img src={IMAGES.pcbLayout} alt="Front copper layer"
              style={{ width: "100%", borderRadius: 3 }} />
          </div>
        </div>
      </div>

      {/* ═══ SOCIUS GEOMETRIC BANNER ═══ */}
      <div style={{ background: "#D4F5D4", overflow: "hidden" }}>
        <img src={IMAGES.sociusBanner} alt="socius labs"
          style={{ width: "100%", display: "block" }} />
      </div>

      {/* ═══ WARM — The Installation ═══ */}
      <div style={{ background: "var(--warm)" }}>

        <div style={{ maxWidth: 880, margin: "0 auto", padding: "72px 40px 0" }}>
          <div style={{ border: "1px solid #e8e4dd", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ background: "#F2F0EB", padding: "32px 32px 24px" }}>
              <img src={IMAGES.frameWireframe} alt="artefact(s): LeNet-1 — full installation"
                style={{ width: "100%", mixBlendMode: "multiply" }} />
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 40px 64px" }}>
          <Prose maxWidth={520}>
            artefact(s) rebuilds that architecture in physical space. Each computational
            layer becomes an array of translucent cubes — mounted to aluminium rails,
            arranged in the topology of the original network. Visitors draw a digit on a
            tablet. Every ten seconds, the drawing is captured, normalised, and fed through
            the physical LeNet. Activation values propagate layer by layer. The network
            thinks in light.
          </Prose>
        </div>

        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 40px" }}>
          <img src={IMAGES.fullIsometric} alt="Isometric view"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 40px 64px" }}>
          <Prose maxWidth={520}>
            The unit of the installation is the neuron. Each one is a translucent cube
            housing a transparent PCB with a 4×4 matrix of individually addressable LEDs.
            High activation glows bright; low activation dims to near-darkness. Stacked
            and arrayed, the cubes form a physical map of the network's internal state — a
            snapshot of machine perception, renewed every ten seconds.
          </Prose>
        </div>

        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "0 40px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
        }}>
          <img src={IMAGES.layerGrid} alt="Grid of neuron cubes"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
          <img src={IMAGES.pcbPanel} alt="PCB panel assembly"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 40px 64px" }}>
          <Prose maxWidth={520}>
            The structure borrows from the language of server racks and museum vitrines
            in equal measure. Aluminium extrusion rails hold each layer in place;
            transparent substrates allow sight lines through the full depth of the network.
            From a distance, the installation reads as a single luminous object. Up close,
            the individual neurons — their wiring, their standoffs, their tiny circuits —
            become legible.
          </Prose>
        </div>

        <div style={{
          maxWidth: 880, margin: "0 auto", padding: "0 40px",
          display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 20,
        }}>
          <img src={IMAGES.pcbDetail} alt="PCB detail"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
          <img src={IMAGES.neuronCloseup} alt="Neuron module"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ maxWidth: 880, margin: "56px auto 0", padding: "0 40px" }}>
          <img src={IMAGES.sideSection} alt="Cross-section"
            style={{ width: "100%", mixBlendMode: "multiply" }} />
        </div>

        <div style={{ height: 80 }} />
      </div>

      {/* ═══ DARK — Colophon + Footer ═══ */}
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

      <footer style={{ background: "#0A0A0A", padding: "48px 40px 40px" }}>
        <div style={{
          maxWidth: 880, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32,
          fontFamily: "var(--mono)", fontSize: 10, color: "#555",
        }}>
          <div>
            <div style={{ color: "#777", marginBottom: 10, letterSpacing: "0.08em" }}>⊞ socius labs</div>
            <div style={{ lineHeight: 2 }}>Experimental<br />Intelligence Lab</div>
          </div>
          <div>
            <div style={{ color: "#555", marginBottom: 10, letterSpacing: "0.15em" }}>SOCIALS</div>
            <div style={{ lineHeight: 2 }}>GitHub<br />LinkedIn<br />Instagram</div>
          </div>
          <div>
            <div style={{ color: "#555", marginBottom: 10, letterSpacing: "0.15em" }}>NAVIGATION</div>
            <div style={{ lineHeight: 2 }}>Home<br />About<br />Research<br />Data<br />Documentation</div>
          </div>
          <div>
            <div style={{ color: "#555", marginBottom: 10, letterSpacing: "0.15em" }}>DESIGNED BY</div>
            <div style={{ lineHeight: 2 }}>Thomas Bagg<br />Anthony Odu</div>
          </div>
        </div>
        <div style={{
          maxWidth: 880, margin: "56px auto 0", height: 80, overflow: "hidden",
          display: "flex", alignItems: "center", gap: 8, opacity: 0.06,
        }}>
          {"artefact(s)".split("").map((c, i) => (
            <span key={i} style={{
              fontFamily: "var(--serif)", fontSize: 130, fontWeight: 500,
              color: "#fff", lineHeight: 0.85,
            }}>{c}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
