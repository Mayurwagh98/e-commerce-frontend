import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const NewsLetter = () => {
  return (
    <section className="bg-pink-100 py-20 px-8 lg:px-32 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">
        Join Our Style Circle 💌
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        Get the latest updates, fashion tips, and exclusive discounts delivered
        straight to your inbox.
      </p>
      <div className="max-w-md mx-auto flex gap-2">
        <Input placeholder="Enter your email" className="rounded-xl" />
        <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default NewsLetter;
