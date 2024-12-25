import { motion } from "framer-motion";

export const FAQSection = () => {
  return (
    <section className="py-20" aria-label="FAQ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What makes machine learning interpretable?</h3>
              <p className="text-gray-600">
                Interpretable machine learning focuses on creating AI models that humans can understand and trust. This involves techniques such as feature importance analysis, decision tree visualization, and layer-wise relevance propagation. Our platform makes these complex concepts accessible through intuitive visualizations and clear explanations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">How does interpretability improve AI reliability?</h3>
              <p className="text-gray-600">
                When AI models are interpretable, teams can identify potential biases, understand decision boundaries, and validate that models are making decisions based on relevant features. This leads to more reliable and trustworthy AI systems that can be safely deployed in critical applications.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Can interpretable ML help with regulatory compliance?</h3>
              <p className="text-gray-600">
                Yes, interpretable machine learning is crucial for meeting regulatory requirements in many industries. Our platform helps organizations comply with regulations like GDPR's "right to explanation" and industry-specific requirements by providing clear documentation of model decision-making processes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What types of models can be made interpretable?</h3>
              <p className="text-gray-600">
                Our platform supports interpretation of various model types, including neural networks, decision trees, random forests, and gradient boosting models. We provide specialized visualization and analysis tools for each model type, ensuring comprehensive interpretability regardless of your chosen architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};