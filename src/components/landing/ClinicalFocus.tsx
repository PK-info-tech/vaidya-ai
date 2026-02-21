import { motion } from "framer-motion";

const conditions = [
  { icon: "🫁", title: "Tuberculosis", subtitle: "Chest X-Ray", stat: "2.8M new cases/year in India", desc: "India carries 27% of the global TB burden. Models trained on Indian chest X-ray presentations including lower lobe atypical TB." },
  { icon: "👁️", title: "Diabetic Retinopathy", subtitle: "", stat: "212M diabetics by 2030", desc: "77M diabetics in India, almost no ophthalmologists in rural areas. Fundus camera + AI enables non-specialist screening." },
  { icon: "🫀", title: "Cardiac ECG", subtitle: "Analysis", stat: "#1 cause of mortality in India", desc: "Remote ECG analysis for 140+ cardiac conditions. Captured in rural clinics, analyzed instantly — report in under 60 seconds." },
  { icon: "👄", title: "Oral Cancer", subtitle: "Screening", stat: "Highest global incidence rates", desc: "India has among the highest oral cancer rates globally. Smartphone camera-based screening by ASHA workers." },
  { icon: "🔬", title: "Skin & Dermatology", subtitle: "", stat: "60M+ skin disease cases/year", desc: "Fungal infections, leprosy, psoriasis — photo-based triage trained on Indian skin tones and disease patterns." },
  { icon: "🤰", title: "Fetal Anomaly", subtitle: "Ultrasound", stat: "25M births/year need coverage", desc: "Real-time guidance for non-specialist ultrasound operators. Detects fetal anomalies and flags for specialist review." },
];

const ClinicalFocus = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Clinical Focus</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for India's
            <br />
            <span className="text-gradient-primary">actual disease burden.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not trained on American hospital data and deployed here. Built ground-up on Indian patient populations, Indian image quality, Indian disease prevalence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:glow-border"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              {c.subtitle && (
                <span className="text-xs text-muted-foreground">{c.subtitle}</span>
              )}
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
              <div className="mt-4 text-xs text-primary/80 font-medium">→ {c.stat}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalFocus;
