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
                Interpretable Machine Learning represents a revolutionary approach to artificial intelligence that prioritizes transparency and understanding. Unlike traditional "black box" AI systems, our platform provides clear insights into how models make decisions, enabling businesses to build trust with stakeholders and comply with regulatory requirements.
              </p>
              <p>
                By leveraging advanced visualization techniques and proprietary algorithms, we transform complex neural networks into comprehensible insights. This transparency is crucial for industries where decision-making processes must be auditable and explainable, such as healthcare, finance, and autonomous systems.
              </p>
              <p>
                Our platform empowers data scientists and business analysts to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visualize decision pathways in neural networks</li>
                <li>Identify and mitigate bias in AI models</li>
                <li>Generate human-readable explanations for model predictions</li>
                <li>Ensure compliance with AI regulations and guidelines</li>
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