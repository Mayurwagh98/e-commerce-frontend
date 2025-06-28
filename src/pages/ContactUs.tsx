import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-pink-50 min-h-screen py-20 px-8 lg:px-32">
        <motion.h1
          className="text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We'd love to hear from you! Whether it's a question about your order
          or just feedback, our team is always ready to help.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="bg-white shadow-xl rounded-3xl p-10 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in touch
            </h2>
            <div className="flex items-start gap-4">
              <Phone className="text-pink-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium text-gray-700">Phone</h3>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-pink-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium text-gray-700">Email</h3>
                <p className="text-gray-600 text-sm">support@fashionista.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium text-gray-700">Office</h3>
                <p className="text-gray-600 text-sm">
                  22B Fashion Street, Bandra West,
                  <br /> Mumbai, Maharashtra, 400050
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white shadow-xl rounded-3xl p-10 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" className="rounded-xl" required />
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-xl"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Phone Number" className="rounded-xl" />
              <Input placeholder="Subject" className="rounded-xl" required />
            </div>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-xl w-full">
              Submit Message
            </Button>
          </motion.form>
        </div>

        <motion.div
          className="mt-20 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We typically respond within 24 hours. Thank you for reaching out!
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
