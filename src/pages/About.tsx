import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#fefefe] to-[#f2f2f2] min-h-screen py-20 px-8 lg:px-32">
      <motion.h1
        className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 mb-6">
          Welcome to{" "}
          <span className="font-semibold text-pink-600">Fashionista</span> —
          your ultimate online destination for trend-setting fashion. Founded
          with the passion to bring premium style to your doorstep, our mission
          is to inspire confidence through clothing that feels as good as it
          looks.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We handpick the best designs across men’s and women’s fashion,
          offering everything from everyday basics to bold statement pieces. Our
          collections are thoughtfully curated to reflect quality, comfort, and
          the latest trends.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're shopping for streetwear, accessories, or timeless
          wardrobe staples — we're here to make your fashion experience seamless
          and inspiring. Join thousands of style-savvy shoppers and step into a
          world of elegance.
        </p>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          className="bg-white shadow-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fast Shipping
          </h3>
          <p className="text-gray-600 text-sm">
            We deliver across the country quickly and securely.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Guarantee
          </h3>
          <p className="text-gray-600 text-sm">
            Every item is quality-checked and handpicked.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Customer First
          </h3>
          <p className="text-gray-600 text-sm">
            Our support team is here to help you 24/7.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
