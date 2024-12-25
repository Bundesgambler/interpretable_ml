import { useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Interpretable ML - Advanced Machine Learning Insights";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Understanding AI,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              One Layer at a Time
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the future of interpretable machine learning and discover how AI decisions are made.
          </p>
        </motion.div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-50">
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
                Visualize Complex ML Models
              </h2>
              <p className="text-xl text-gray-600">
                Transform complex neural networks into understandable insights with our cutting-edge visualization tools.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Advanced machine learning visualization interface"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Seamless AI integration demonstration"
                className="rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold leading-tight">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-600">
                Integrate with your existing ML pipeline effortlessly. Compatible with all major frameworks.
              </p>
              <p className="text-gray-600">
                Looking for AI-powered social media content? Check out our partner{" "}
                <a 
                  href="https://kissimo.ai" 
                  className="text-blue-600 hover:text-blue-700 underline"
                  rel="follow"
                  target="_blank"
                >
                  Kissimo.ai
                </a>
                {" "}for image-based post generation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Interpretable ML. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;