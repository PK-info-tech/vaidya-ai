import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const NeuralSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    viewBox="0 0 1200 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Animated neural network lines */}
    {[
      "M100,300 Q300,100 500,250 T900,200",
      "M50,400 Q250,200 450,350 T850,300",
      "M150,200 Q350,400 550,150 T950,350",
      "M0,350 Q200,150 400,300 T800,250",
      "M200,500 Q400,300 600,400 T1000,200",
    ].map((d, i) => (
      <motion.path
        key={i}
        d={d}
        stroke="hsl(160 84% 39%)"
        strokeWidth="1"
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 0.6 }}
        transition={{ duration: 3, delay: i * 0.4, ease: "easeOut" }}
      />
    ))}
    {/* Pulsing nodes */}
    {[
      [500, 250], [300, 150], [700, 300], [450, 350], [850, 200],
      [200, 300], [600, 180], [900, 350], [150, 400], [750, 250],
    ].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r="3"
        fill="hsl(160 84% 50%)"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0.5], scale: [0, 1.5, 1] }}
        transition={{ duration: 2, delay: 1 + i * 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
      />
    ))}
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Neural SVG overlay */}
      <NeuralSVG />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] radial-fade" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Clinical AI Intelligence · India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Medicine deserves
          <br />
          <span className="text-gradient-primary">a second opinion.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Vaidya is a clinical reasoning partner for Indian hospitals. AI that thinks alongside your doctors — not instead of them — to catch what gets missed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" className="text-base px-8">
            Request Early Access
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8">
            See How It Works
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
