import { motion } from "framer-motion";

const DisagreementCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative max-w-lg mx-auto lg:mx-0"
  >
    <div className="rounded-2xl border border-border bg-card p-6 glow-border">
      <div className="text-xs text-muted-foreground mb-4 font-mono">Case #4521 · Chest X-Ray</div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border/50">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Doctor</div>
            <div className="font-semibold text-foreground">Pneumonia</div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            High confidence · Locked
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-primary/20">
          <div>
            <div className="text-xs text-primary mb-1">Vaidya AI</div>
            <div className="font-semibold text-foreground">TB (probable)</div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            78% confidence · 3 models
          </span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-4 px-3 py-2 rounded-lg border border-destructive/20 bg-destructive/5"
      >
        <p className="text-xs text-destructive font-medium">
          ⚠ Disagreement detected — review flagged finding
        </p>
      </motion.div>
    </div>
  </motion.div>
);

const problems = [
  {
    num: "01",
    title: "Specialist Absence at Last Mile",
    desc: "Tier 2/3 cities and rural PHCs have essentially zero radiologists. X-rays get shared on WhatsApp as JPEGs for remote interpretation — if at all.",
  },
  {
    num: "02",
    title: "Cognitive Load → Human Error",
    desc: "A radiologist reading 80 chest X-rays a day is fighting fatigue, anchoring bias, and time pressure. The error rate climbs with volume.",
  },
  {
    num: "03",
    title: "Western AI Doesn't Transfer",
    desc: "Models trained on US/EU patient populations have hidden bias on Indian disease prevalence, Indian image quality, Indian equipment. They fail quietly.",
  },
  {
    num: "04",
    title: "Infrastructure is Sparse",
    desc: "Most hospitals outside metros don't run PACS properly. Building for digital-first India misses 60% of the country. Vaidya builds for the real India.",
  },
];

const Problem = () => {
  return (
    <section id="conditions" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">The Problem</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                India's diagnostic
                <br />
                <span className="text-gradient-primary">gap is structural.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                The shortage isn't a technology problem — it's an access problem. AI won't replace doctors. But in the 60% of India where doctors aren't available, AI can be the difference between a diagnosis and a missed condition.
              </p>
            </motion.div>

            <div className="space-y-6">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <span className="font-mono text-sm text-primary/60 mt-1 shrink-0">{p.num}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <DisagreementCard />
        </div>
      </div>
    </section>
  );
};

export default Problem;
