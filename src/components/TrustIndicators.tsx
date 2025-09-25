import { motion } from "framer-motion";

const TrustIndicators = () => {
  const companies = [
    { name: "Microsoft" },
    { name: "Google" },
    { name: "Amazon" },
    { name: "Netflix" },
    { name: "IBM" },
    { name: "Oracle" }
  ];

  const metrics = [
    { value: "1,200+", label: "Professionals Certified", color: "text-white" },
    { value: "94%", label: "Career Advancement Rate", color: "text-white" },
    { value: "$47K", label: "Average Salary Increase", color: "text-white" },
    { value: "15+", label: "Years of Excellence", color: "text-white" }
  ];

  return (
    <section className="py-16 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className={`text-3xl md:text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </h3>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm uppercase tracking-wider mb-8">
            Trusted by professionals at leading technology companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="px-6 py-3 rounded border border-white/20 bg-black/20 hover:border-white/30 transition-all duration-300"
              >
                <span className="text-white/80 font-semibold">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="glass-surface-soft rounded p-6 text-center border border-white/20 bg-black/20">
            <h4 className="text-lg font-bold text-white mb-3">Accelerated Learning</h4>
            <p className="text-white/80 text-sm">
              Comprehensive programs designed for working professionals. Complete advanced certifications in 12-16 weeks.
            </p>
          </div>
          
          <div className="glass-surface-soft rounded p-6 text-center border border-white/20 bg-black/20">
            <h4 className="text-lg font-bold text-white mb-3">Industry Projects</h4>
            <p className="text-white/80 text-sm">
              Build enterprise-grade applications using real client requirements and modern development practices.
            </p>
          </div>
          
          <div className="glass-surface-soft rounded p-6 text-center border border-white/20 bg-black/20">
            <h4 className="text-lg font-bold text-white mb-3">Career Services</h4>
            <p className="text-white/80 text-sm">
              Dedicated career support including resume optimization, interview preparation, and job placement assistance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;