import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 radial-fade" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Early Access</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Be the hospital that
            <br />
            <span className="text-gradient-primary">catches what others miss.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            We're partnering with 10 hospitals in our first cohort. Free deployment. Joint clinical study. Your radiologists get AI-assisted diagnosis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@hospital.in"
            className="flex-1 px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
          />
          <Button variant="hero" size="lg" className="px-8">
            Request Access
          </Button>
        </motion.div>

        <p className="text-xs text-muted-foreground mt-4">
          For hospitals, diagnostic chains, and PHC networks. No commitment required.
        </p>
      </div>
    </section>
  );
};

export default CTA;
