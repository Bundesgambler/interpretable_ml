import { motion } from "framer-motion";

export const IntegrationSection = () => {
  return (
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
              Seamless Integration & Real-World Applications
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Our platform integrates seamlessly with your existing ML infrastructure, supporting all major frameworks including TensorFlow, PyTorch, and scikit-learn. This flexibility ensures that you can start gaining insights from your models without significant architectural changes.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 mt-8">
                <h3 className="text-2xl font-semibold mb-4">Featured Integration: Kissimo.ai</h3>
                <p className="mb-4">
                  Experience the power of interpretable AI in action with{" "}
                  <a 
                    href="https://kissimo.ai" 
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                    rel="follow"
                    target="_blank"
                  >
                    Kissimo.ai
                  </a>
                  , a cutting-edge platform that demonstrates the practical applications of LLMs. Their innovative system generates engaging social media content directly from images, showcasing how transparent AI can transform content creation.
                </p>
                <p>
                  This integration exemplifies how interpretable machine learning can be applied to create practical, user-friendly AI solutions that deliver immediate value while maintaining transparency and trust.
                </p>
              </div>
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
  );
};