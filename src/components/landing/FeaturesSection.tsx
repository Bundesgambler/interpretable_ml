import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <section className="py-20" aria-label="Features">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Advanced machine learning visualization interface"
              className="rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold leading-tight">
              Advanced Model Visualization
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Our cutting-edge visualization tools transform complex neural networks into intuitive, interactive diagrams. This allows teams to understand model behavior at both high-level architecture and individual neuron levels, enabling more informed decision-making and model optimization.
              </p>
              <p>
                The platform provides comprehensive insights through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Layer-by-layer model interpretation with detailed activation maps
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Feature importance analysis showing key decision factors
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Decision path visualization for individual predictions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};