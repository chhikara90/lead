import { motion } from "framer-motion";
import { Target, Mail, Server, MessageSquare, CalendarCheck, BarChart3 } from "lucide-react";

const services = [
  { icon: Target, label: "ICP definition & targeting" },
  { icon: Mail, label: "Outbound messaging & sequencing" },
  { icon: Server, label: "Email infrastructure & deliverability" },
  { icon: MessageSquare, label: "Reply handling & qualification" },
  { icon: CalendarCheck, label: "Calendar booking or warm handoff" },
  { icon: BarChart3, label: "Ongoing optimization & reporting" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        >
          What We <span className="gradient-text">Actually Do</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          LeadMaxed designs, launches, and runs outbound systems that consistently
          generate conversations with your ideal prospects.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 group"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-colors" />
              <p className="font-display font-medium text-foreground">{service.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
