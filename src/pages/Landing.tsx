import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import FeaturedCategories from "../components/Landing/FeaturedCategories";
import Testimonials from "../components/Landing/Testimonials";
import NewsLetter from "../components/Landing/NewsLetter";

const Landing = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-gradient-to-br from-[#fefefe] to-[#f2f2f2] min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-32 py-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <Badge className="bg-black text-white text-sm">New Arrivals</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Discover Your <span className="text-pink-500">Style</span>
            <br /> With Elegance
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Trendy fashion, premium quality, and unbeatable prices — Shop the
            latest clothing and accessories for men and women.
          </p>
          <div className="flex gap-4">
            <Button
              size="md"
              className="bg-pink-500 hover:bg-pink-600 text-white flex justify-center items-center"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="md" variant="outline" className="border-gray-300">
              Explore Collection
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[currentImage]}
              src={heroImages[currentImage]}
              alt="Fashion Hero"
              className="absolute h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </motion.div>
      </section>
      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter CTA */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
