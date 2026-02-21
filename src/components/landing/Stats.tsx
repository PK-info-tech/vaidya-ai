import { motion } from "framer-motion";

const stats = [
  { value: "0.6", label: "Radiologists per 100,000 people in India. The gap AI must fill." },
  { value: "1.4B", label: "People who deserve diagnostic access regardless of geography." },
  { value: "₹20", label: "Target cost per scan. Built for what the public health system can actually pay." },
  { value: "3", label: "Independent AI models that debate every diagnosis before presenting a verdict." },
];

const Stats = () => {
  return (
    <section className="relative py-20 border-y border-border/50">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-primary mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
