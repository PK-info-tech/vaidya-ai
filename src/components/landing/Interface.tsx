import { motion } from "framer-motion";

const ConversationDemo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-2xl mx-auto rounded-2xl border border-border bg-card overflow-hidden glow-border"
  >
    <div className="px-6 py-4 border-b border-border flex items-center justify-between">
      <div>
        <span className="text-xs text-muted-foreground font-mono">Case #4521 · Dr. Sharma</span>
      </div>
      <span className="flex items-center gap-2 text-xs text-primary">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        LIVE
      </span>
    </div>

    <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
      {[
        {
          speaker: "Dr. Sharma · Voice",
          color: "foreground",
          text: "Right lower lobe consolidation, patient is diabetic, 45 years, fever for 4 days. I'm thinking bacterial pneumonia. Not fully confident about the upper zone though.",
        },
        {
          speaker: "Vaidya AI · Parallel Analysis",
          color: "primary",
          text: "Assessment locked. I agree on the lower lobe consolidation. But I flagged a subtle opacity in the right upper lobe — the density pattern differs from the lower lobe finding. 2 of 3 models flag possible early cavitation. TB should be in your differential.",
        },
        {
          speaker: "Dr. Sharma · Voice",
          color: "foreground",
          text: "Show me. Also — patient had a negative Mantoux last year, no TB contacts reported.",
        },
        {
          speaker: "Vaidya AI",
          color: "primary",
          text: "Noted on Mantoux and contacts. Bacterial pneumonia remains most likely. I'd still recommend a 6-week follow-up X-ray — non-resolving consolidation would warrant sputum AFB regardless.",
        },
      ].map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
        >
          <div className={`text-xs font-medium mb-1 ${msg.color === "primary" ? "text-primary" : "text-muted-foreground"}`}>
            {msg.speaker}
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">{msg.text}</p>
        </motion.div>
      ))}
    </div>

    <div className="px-6 py-4 border-t border-border flex items-center gap-3">
      <div className="flex-1 px-4 py-2 rounded-lg bg-secondary text-sm text-muted-foreground">
        Speak, type, or show...
      </div>
      <button className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
        🎤
      </button>
      <button className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
        📹
      </button>
      <button className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
        📎
      </button>
    </div>
  </motion.div>
);

const Interface = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 radial-fade" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">The Interface</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Talk to it like
            <br />
            <span className="text-gradient-primary">a colleague.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No forms. No dropdowns. Just speak your assessment the way you'd dictate a note. Text, voice, or video — switch mid-conversation.
          </p>
        </motion.div>

        <ConversationDemo />

        {/* Input modalities */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { icon: "🎤", title: "Voice", desc: "Spoken assessment transcribed and structured in under 15 seconds. Hindi-English code-switching support." },
            { icon: "⌨️", title: "Text", desc: "Type referral notes, paste discharge summaries. Works on 2G. ICD-10 code mapping automatic." },
            { icon: "📹", title: "Video & Camera", desc: "Point your phone at a printed X-ray. Capture wounds, skin lesions. Super-resolution preprocessing." },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card text-center"
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interface;
