import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, Globe, Users } from "lucide-react";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Information We Collect",
    icon: ShieldCheck,
    description:
      "We collect personal details like your name, email, shipping address, and payment information to fulfill your orders and enhance your experience.",
  },
  {
    title: "How We Use Your Information",
    icon: Users,
    description:
      "Your data helps us deliver your orders, personalize your shopping journey, and keep you informed about updates and offers.",
  },
  {
    title: "Data Security",
    icon: LockKeyhole,
    description:
      "We employ encryption, access control, and secure servers to protect your information — because your trust matters most.",
  },
  {
    title: "Sharing Your Data",
    icon: Globe,
    description:
      "We never sell your data. Select partners like payment processors and delivery services help us serve you better, under strict confidentiality.",
  },
  {
    title: "Cookies",
    icon: ShieldCheck,
    description:
      "Cookies improve functionality and analytics. You’re in control — adjust your browser settings anytime.",
  },
  {
    title: "Your Rights",
    icon: Users,
    description:
      "Request access, changes, or deletion of your personal data by contacting us at support@fashionista.com.",
  },
  {
    title: "Policy Updates",
    icon: Globe,
    description:
      "This policy may evolve. When it does, we’ll notify you here. Last updated: June 28, 2025.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-24 px-6 lg:px-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our Commitment to Your Privacy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trust is everything to us. Here's exactly how we handle your
            information with transparency and care.
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-pink-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="bg-pink-100 text-pink-600 p-3 rounded-xl">
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          If you have any questions, feel free to reach us at{" "}
          <span className="text-pink-600 font-medium">
            support@fashionista.com
          </span>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
