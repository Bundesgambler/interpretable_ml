import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50" aria-label="About Interpretable ML">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Understanding Interpretable Machine Learning
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Interpretable Machine Learning focuses on making artificial intelligence systems transparent and understandable. Unlike traditional "black box" AI systems, interpretable ML provides insights into how models arrive at their decisions.
              </p>
              <p>
                This transparency is particularly relevant for industries where decision-making processes must be auditable and explainable, such as healthcare, finance, and autonomous systems.
              </p>
              <p>
                Key aspects of interpretable machine learning include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understanding decision pathways in neural networks</li>
                <li>Identifying potential biases in AI models</li>
                <li>Analyzing feature importance and model behavior</li>
                <li>Meeting regulatory requirements for AI transparency</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Visual representation of interpretable machine learning concepts"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};