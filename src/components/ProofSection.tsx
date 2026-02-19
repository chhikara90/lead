import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const ProofSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Eye className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Proof, Not <span className="gradient-text">Promises</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't rely on hype or vague claims. On a call, we can walk you through
            how the system is currently running and show real examples of conversation
            flow we're generating for other partners.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
