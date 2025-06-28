import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any unused item within 15 days of delivery for a full refund or exchange. Items must be in their original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3–7 business days depending on your location. We offer express delivery in metro cities.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within India. However, international shipping is coming soon!",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking link via email and SMS. You can also track it from your account.",
  },
  {
    question: "Can I modify my order after placing it?",
    answer:
      "If your order hasn’t shipped yet, contact us at support@threadory.com and we’ll do our best to accommodate the change.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQs | Threadory";
  }, []);
  return (
    <>
      <div className="bg-gradient-to-br from-white to-pink-50 min-h-screen py-20 px-8 lg:px-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">FAQs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to help. Find answers to the most commonly asked
            questions below.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer  hover:border border-pink-400 transition-all"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-pink-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          ))}
          <motion.div
            className="text-center mt-20 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Can't find what you're looking for? Contact us at{" "}
            <span className="text-pink-600 font-medium">
              support@threadory.com
            </span>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
