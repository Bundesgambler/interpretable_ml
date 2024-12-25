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
        </motion.div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" aria-label="Features">
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
                Advanced Model Visualization
              </h2>
              <p className="text-xl text-gray-600">
                Understand complex neural networks through intuitive visualizations and comprehensive model explanations.
              </p>
              <ul className="space-y-4 text-lg text-gray-600">
                <li>• Layer-by-layer model interpretation</li>
                <li>• Feature importance analysis</li>
                <li>• Decision path visualization</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Advanced machine learning visualization interface showing colorful code patterns"
                className="w-full h-auto"
                loading="lazy"
                width="5760"
                height="3840"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20" aria-label="Integration">
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Seamless integration demonstration with code on MacBook screen"
                className="rounded-xl shadow-2xl"
                loading="lazy"
                width="3882"
                height="2584"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold leading-tight">
                Enterprise Integration
              </h2>
              <p className="text-xl text-gray-600">
                Seamlessly integrate with your existing ML infrastructure. Compatible with TensorFlow, PyTorch, and all major frameworks.
              </p>
              <div className="text-gray-600">
                <p className="mb-4">
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
          </motion.div>
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