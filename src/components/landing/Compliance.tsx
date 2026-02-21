import { motion } from "framer-motion";

const items = [
  { icon: "🏛️", title: "CDSCO Pathway", desc: "AI diagnostic software classified as SaMD under MDR 2017. Clinical validation structured for CDSCO submission from day one." },
  { icon: "🔒", title: "DPDP Act 2023", desc: "Full de-identification pipeline, DICOM metadata scrubbing, consent management in local languages, right to withdraw." },
  { icon: "📋", title: "Full Audit Trail", desc: "Every assessment, verdict, disagreement, revision, and escalation — logged with timestamp, user, and reasoning." },
  { icon: "🏥", title: "IRB-Cleared Data", desc: "All training data through hospital research partnerships with formal ethics clearance. Prospective clinical study design." },
];

const Compliance = () => {
  return (
    <section id="compliance" className="relative py-24 lg:py-32 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Trust & Compliance</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for Indian
            <br />
            <span className="text-gradient-primary">healthcare regulation.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
