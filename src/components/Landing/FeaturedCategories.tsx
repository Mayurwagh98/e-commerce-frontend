import { motion } from "framer-motion";

const FeaturedCategories = () => {
  return (
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
  );
};

export default FeaturedCategories;
