import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-white px-8 lg:px-32 py-20">
      <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-xl p-6 shadow-md bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
            </div>
            <p className="text-gray-600 mb-4">
              “Absolutely love the quality and designs! Fast delivery and
              amazing customer service.”
            </p>
            <p className="font-semibold text-gray-800">Sarah Thompson</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
