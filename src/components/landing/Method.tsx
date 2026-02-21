import { motion } from "framer-motion";

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const BrainNetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="4" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="12" cy="20" r="2" />
    <path d="M12 6v4M7 12h4m2 0h4M12 14v4" strokeDasharray="2 2" />
    <path d="M7 10l3-4M17 10l-3-4M7 14l3 4M17 14l-3 4" strokeDasharray="2 2" opacity="0.5" />
  </svg>
);

const RevealIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="8" height="16" rx="1.5" />
    <rect x="14" y="4" width="8" height="16" rx="1.5" />
    <path d="M10 12h4" strokeDasharray="2 2" />
    <path d="M12 10v4" strokeDasharray="2 2" />
  </svg>
);

const DisagreementIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 3L5 7l4 4" />
    <path d="M15 13l4 4-4 4" />
    <path d="M5 7h8a4 4 0 0 1 4 4v2" />
    <path d="M19 17h-8a4 4 0 0 1-4-4v-2" />
  </svg>
);

const EscalateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
    <path d="M4 22h16" strokeDasharray="3 3" opacity="0.5" />
  </svg>
);

const steps = [
  {
    icon: <LockIcon />,
    title: "Doctor locks assessment",
    desc: "Upload scans and commit your diagnosis — before AI sees anything.",
    tag: "Immutable · No Anchoring Bias",
  },
  {
    icon: <BrainNetworkIcon />,
    title: "Three models debate",
    desc: "MedSAM, nnU-Net, BiomedCLIP analyze in parallel. Disagreements are reasoned through.",
    tag: "Independent · Multi-model",
  },
  {
    icon: <RevealIcon />,
    title: "Parallel reveal",
    desc: "Both results appear side by side for the first time. Disagreement surfaces error.",
    tag: "Neither Saw the Other First",
  },
  {
    icon: <DisagreementIcon />,
    title: "Structured resolution",
    desc: "AI explains why it disagrees — specific finding, image region marked. One-click revise.",
    tag: "Full Audit Trail",
  },
  {
    icon: <EscalateIcon />,
    title: "Senior escalation",
    desc: "High-disagreement cases auto-flag for specialist review via telemedicine.",
    tag: "SLA-backed",
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
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The doctor commits independently. The AI analyzes independently. Both are revealed together.
          </p>
        </motion.div>

        {/* Visual flow — horizontal on desktop, vertical on mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px origin-left"
            style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.15))" }}
          />

          {/* Vertical connecting line (mobile) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:hidden absolute left-6 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(180deg, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.05))" }}
          />

          {/* Desktop: horizontal cards */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon node */}
                <div className="relative z-10 w-[104px] h-[104px] rounded-2xl bg-card border border-primary/20 flex items-center justify-center mb-5 group-hover:border-primary/40 transition-colors glow-border">
                  <div className="text-primary">{step.icon}</div>
                </div>

                <h3 className="font-display text-sm font-semibold text-foreground mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium border border-primary/15 bg-primary/5 text-primary">
                  {step.tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-card border border-primary/20 flex items-center justify-center glow-border">
                    <div className="text-primary scale-75">{step.icon}</div>
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.desc}</p>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium border border-primary/15 bg-primary/5 text-primary">
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
