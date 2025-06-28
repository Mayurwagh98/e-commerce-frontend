import Footer from "../components/Footer";
import FeaturedCategories from "../components/Landing/FeaturedCategories";
import Testimonials from "../components/Landing/Testimonials";
import NewsLetter from "../components/Landing/NewsLetter";
import Hero from "../components/Landing/Hero";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home | Threadory";
  }, []);
  return (
    <div className="bg-gradient-to-br from-[#fefefe] to-[#f2f2f2] min-h-screen">
      {/* Hero Section */}
      <Hero />
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
