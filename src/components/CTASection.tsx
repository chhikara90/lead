import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready for <span className="gradient-text">Next Step</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            If you're exploring ways to build a predictable outbound pipeline,
            the fastest way to see if LeadMaxed is a fit is a short conversation.
          </p>
          <a
            href="mailto:hello@leadmaxed.com"
            className="inline-block bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-all duration-300 glow-border"
          >
            Schedule an Intro Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
