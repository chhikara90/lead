import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const goodFit = [
  "Funding & finance companies",
  "Mortgage brokers",
  "Agencies & professional services",
  "B2B businesses with $5k+ deal sizes",
  "Teams that can handle more conversations",
];

const notFit = [
  "Pay-per-lead buyers",
  "Local one-person businesses",
  "Anyone looking for quick hacks",
  "Businesses without a sales process",
];

const FitSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          Who LeadMaxed Is <span className="gradient-text">For</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-display font-semibold text-primary mb-6">Good Fit</h3>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-display font-semibold text-danger mb-6">Not a Fit</h3>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-danger mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
