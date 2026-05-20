import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
<motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
>
      {/* IMAGE */}
 {/* IMAGE */}
<div className="w-full h-[300px] bg-gray-100 flex items-center justify-center overflow-hidden">

  <img
    src={product.images[0]}
    alt={product.title}
    className="w-full h-full object-contain hover:scale-105 transition duration-500"
  />

</div>

      {/* CONTENT */}
      <div className="p-4">

        <p className="text-sm text-pink-500 uppercase">
          {product.category}
        </p>

        <h2 className="text-lg font-semibold mt-1">
          {product.title}
        </h2>

        {/* PRICE */}
        <div className="flex items-center gap-3 mt-3">

          <span className="text-2xl font-bold text-gray-800">
            ₹{product.price}
          </span>

          {product.discountPrice > 0 && (
            <span className="line-through text-gray-400">
              ₹{product.discountPrice}
            </span>
          )}

        </div>

        {/* BUTTON */}
       <Link
  to={`/product/${product._id}`}
  className="mt-5 block bg-pink-500 hover:bg-pink-600 text-white text-center py-3 rounded-xl"
>
  View Details
</Link>
      </div>

</motion.div>  );
}

export default ProductCard;