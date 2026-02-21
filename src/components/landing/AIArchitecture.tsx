import { motion } from "framer-motion";

const AIArchitecture = () => {
  return (
    <section id="ai-architecture" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-fade" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AI Architecture</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Three models that
            <br />
            <span className="text-gradient-primary">disagree to agree.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three specialized models that debate each other — and must resolve disagreement explicitly — give you calibrated uncertainty.
          </p>
        </motion.div>

        {/* Architecture Diagram SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Input Layer */}
            <motion.rect
              x="300" y="10" width="200" height="60" rx="12"
              fill="hsl(220 17% 7%)" stroke="hsl(160 84% 39% / 0.3)" strokeWidth="1.5"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <motion.text
              x="400" y="35" textAnchor="middle" fill="hsl(160 84% 50%)" fontSize="11" fontWeight="600"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            >
              Input Layer
            </motion.text>
            <motion.text
              x="400" y="53" textAnchor="middle" fill="hsl(215 15% 55%)" fontSize="10"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            >
              DICOM / JPEG / Voice / Text
            </motion.text>

            {/* Connecting lines from input to models */}
            {[200, 400, 600].map((x, i) => (
              <motion.line
                key={`line-down-${i}`}
                x1="400" y1="70" x2={x} y2="140"
                stroke="hsl(160 84% 39% / 0.3)" strokeWidth="1" strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
              />
            ))}

            {/* Three Models */}
            {[
              { x: 100, label: "MedSAM", sub: "Model A" },
              { x: 300, label: "nnU-Net", sub: "Model B" },
              { x: 500, label: "BiomedCLIP", sub: "Model C" },
            ].map((model, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
              >
                <rect
                  x={model.x} y="140" width="200" height="70" rx="12"
                  fill="hsl(220 17% 7%)" stroke="hsl(172 66% 50% / 0.3)" strokeWidth="1.5"
                />
                <text x={model.x + 100} y="168" textAnchor="middle" fill="hsl(172 66% 55%)" fontSize="12" fontWeight="600">
                  {model.label}
                </text>
                <text x={model.x + 100} y="190" textAnchor="middle" fill="hsl(215 15% 55%)" fontSize="10">
                  {model.sub} · Independent
                </text>
              </motion.g>
            ))}

            {/* Parallel indicator lines between models */}
            {[300, 500].map((x, i) => (
              <motion.line
                key={`h-line-${i}`}
                x1={x} y1="175" x2={x} y2="175"
                stroke="hsl(215 15% 35%)" strokeWidth="1" strokeDasharray="3 3"
                initial={{ x1: x, x2: x }}
                whileInView={{ x1: x - 5, x2: x + 5 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              />
            ))}

            {/* Lines from models to debate layer */}
            {[200, 400, 600].map((x, i) => (
              <motion.line
                key={`line-debate-${i}`}
                x1={x} y1="210" x2="400" y2="280"
                stroke="hsl(160 84% 39% / 0.3)" strokeWidth="1" strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 + i * 0.1 }}
              />
            ))}

            {/* Debate Layer */}
            <motion.g
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <rect
                x="200" y="280" width="400" height="80" rx="16"
                fill="hsl(220 17% 7%)" stroke="hsl(160 84% 39% / 0.4)" strokeWidth="2"
              />
              {/* Glow effect */}
              <rect
                x="200" y="280" width="400" height="80" rx="16"
                fill="hsl(160 84% 39% / 0.03)"
              />
              <text x="400" y="310" textAnchor="middle" fill="hsl(160 84% 50%)" fontSize="13" fontWeight="700">
                Debate &amp; Synthesis Layer
              </text>
              <text x="400" y="330" textAnchor="middle" fill="hsl(215 15% 55%)" fontSize="10">
                Agree → Weight heavily · Disagree → Explicit reasoning
              </text>
              <text x="400" y="348" textAnchor="middle" fill="hsl(215 15% 45%)" fontSize="10">
                Confidence-gated: easy cases fast, hard cases escalate
              </text>
            </motion.g>

            {/* Line to output */}
            <motion.line
              x1="400" y1="360" x2="400" y2="420"
              stroke="hsl(160 84% 39% / 0.4)" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            />

            {/* Output */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <rect
                x="150" y="420" width="500" height="80" rx="12"
                fill="hsl(220 17% 7%)" stroke="hsl(160 84% 39% / 0.2)" strokeWidth="1"
              />
              <text x="400" y="448" textAnchor="middle" fill="hsl(210 17% 95%)" fontSize="12" fontWeight="600">
                Output
              </text>

              {["Primary Dx + Confidence", "Differentials", "Uncertainty Flags", "Audit Trail"].map((item, i) => (
                <text
                  key={i}
                  x={210 + i * 120}
                  y="478"
                  textAnchor="middle"
                  fill="hsl(160 84% 45%)"
                  fontSize="9"
                  fontWeight="500"
                >
                  {item}
                </text>
              ))}
            </motion.g>
          </svg>

          <p className="text-center text-xs text-muted-foreground mt-6">
            All model weights trained and validated on Indian patient data. Debate transcript logged for every case.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIArchitecture;
