import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 lg:px-32">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Threadory</h3>
          <p className="text-sm text-gray-400">
            Redefining online fashion shopping with quality, variety, and
            unbeatable prices.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-gray-300 flex flex-col">
            <Link to={"/"}>Home</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"/contactus"}>Contact</Link>
            <Link to={"/faqs"}>FAQs</Link>
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </div>
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
        &copy; 2025 Threadory. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
