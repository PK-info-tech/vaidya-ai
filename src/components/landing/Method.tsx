import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Doctor uploads and locks their assessment",
    desc: "Upload scans, reports, or notes. Then speak, type, or show your diagnosis. Your assessment is locked before AI sees anything.",
    tag: "Assessment Locked · Immutable",
    tagColor: "primary",
  },
  {
    num: 2,
    title: "Three AI models analyze independently — and debate",
    desc: "MedSAM, nnU-Net, and BiomedCLIP analyze the case in parallel. Where they disagree, a synthesizer model reasons through the conflict.",
    tag: "Multi-model Debate",
    tagColor: "accent",
  },
  {
    num: 3,
    title: "Parallel reveal — both assessments shown simultaneously",
    desc: "Doctor and AI results appear side by side for the first time. Agreement builds confidence. Disagreement surfaces error-prone cases.",
    tag: "Neither saw the other first",
    tagColor: "primary",
  },
  {
    num: 4,
    title: "Structured disagreement resolution",
    desc: "When the AI disagrees, it explains why — highlighting the specific finding with the image region marked. Revising is one click.",
    tag: "Full Audit Trail",
    tagColor: "accent",
  },
  {
    num: 5,
    title: "High-stakes cases escalate to senior review",
    desc: "Cases above a disagreement threshold are automatically flagged for a senior specialist via Vaidya's telemedicine network.",
    tag: "SLA-backed Escalation",
    tagColor: "primary",
  },
];

const Method = () => {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">The Method</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Human judgment first.
            <br />
            <span className="text-gradient-primary">AI in parallel.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The doctor commits independently, the AI analyzes independently, and both are revealed together. Disagreement is the signal.
          </p>
        </motion.div>

        {/* Animated vertical flow */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 lg:left-8 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(180deg, hsl(160 84% 39% / 0.5), hsl(160 84% 39% / 0.05))" }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-6 lg:gap-8"
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-card border border-primary/20 flex items-center justify-center glow-border">
                    <span className="font-display text-lg lg:text-xl font-bold text-primary">{step.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 pb-2">
                  <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                      step.tagColor === "primary"
                        ? "border-primary/20 bg-primary/5 text-primary"
                        : "border-accent/20 bg-accent/5 text-accent"
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
