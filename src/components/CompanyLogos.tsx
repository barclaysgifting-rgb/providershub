import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "Apple",
  "Meta",
  "IBM",
  "Oracle",
  "SAP",
  "Salesforce",
  "Adobe",
];

export const CompanyLogos = () => {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-xl text-muted-foreground font-medium">
          Trusted by leading organizations
        </h3>
      </div>
      
      <div className="relative">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-4xl md:text-5xl font-bold text-muted-foreground/30 whitespace-nowrap"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
