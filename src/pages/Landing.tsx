import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

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
      <section className="px-8 lg:px-32 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Men",
              image:
                "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Women",
              image:
                "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBjbG90aGVzfGVufDB8fDB8fHww",
            },
            {
              name: "Accessories",
              image:
                "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
              name: "Shoes",
              image:
                "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTA3MzM5NDR8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((cat, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center font-medium text-lg text-gray-700">
                {cat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Newsletter CTA */}
      <section className="bg-pink-100 py-20 px-8 lg:px-32 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Join Our Style Circle 💌
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Get the latest updates, fashion tips, and exclusive discounts
          delivered straight to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <Input placeholder="Enter your email" className="rounded-xl" />
          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl">
            Subscribe
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
