import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const RiskReversalSection = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/20 rounded-2xl p-10 md:p-14 glow-border"
        >
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Built-In <span className="gradient-text">Risk Reversal</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            Our engagements are milestone-based. If we miss the agreed Day-30 checkpoint,
            you don't pay the second installment — and we still complete the 60-day delivery.
          </p>
          <p className="text-surface-foreground text-lg leading-relaxed">
            This keeps incentives aligned and removes guesswork from the process.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskReversalSection;
