import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Landing = () => {
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
        >
          <img
            src="https://images.unsplash.com/photo-1600185365985-cb5f3a999d3e"
            alt="Fashion Hero"
            className="rounded-2xl shadow-2xl"
          />
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
                "https://images.unsplash.com/photo-1593032465171-8f785ba67e45",
            },
            {
              name: "Women",
              image:
                "https://images.unsplash.com/photo-1519741491051-480437eea4c2",
            },
            {
              name: "Accessories",
              image:
                "https://images.unsplash.com/photo-1600180758890-6ec2b50a31b0",
            },
            {
              name: "Shoes",
              image:
                "https://images.unsplash.com/photo-1589987607627-15a07c6c414b",
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
              className="rounded-xl border p-6 shadow-md bg-gray-50"
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
      <footer className="bg-gray-900 text-white py-12 px-8 lg:px-32">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fashionista</h3>
            <p className="text-sm text-gray-400">
              Redefining online fashion shopping with quality, variety, and
              unbeatable prices.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-12">
          &copy; 2025 Fashionista. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
