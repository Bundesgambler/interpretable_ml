import { useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "Interpretable Machine Learning | AI Model Transparency & Explainability";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Making AI
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Transparent & Explainable
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform complex neural networks into clear, actionable insights with our industry-leading interpretable machine learning platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* What is Interpretable ML Section */}
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

      {/* Features Section */}
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

      {/* Integration Section */}
      <section className="py-20 bg-gray-50" aria-label="Integration">
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
                Seamless Integration
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Our platform integrates seamlessly with your existing ML infrastructure, supporting all major frameworks including TensorFlow, PyTorch, and scikit-learn. This flexibility ensures that you can start gaining insights from your models without significant architectural changes.
                </p>
                <p>
                  Looking to enhance your AI-powered social media presence? Our partner{" "}
                  <a 
                    href="https://kissimo.ai" 
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                    rel="follow"
                    target="_blank"
                  >
                    Kissimo.ai
                  </a>
                  {" "}specializes in AI-driven social media content generation from images.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Seamless integration demonstration with code on MacBook screen"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Footer */}
      <footer className="bg-gray-50 py-12" aria-label="Footer">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p className="mb-4">© {new Date().getFullYear()} Interpretable ML. All rights reserved.</p>
            <nav aria-label="Footer Navigation">
              <ul className="flex justify-center space-x-6">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;