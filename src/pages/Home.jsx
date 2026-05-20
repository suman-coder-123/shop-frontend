import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import API from "../services/api";
import ProductCard from "../components/ProductCard";

import {
  Sparkles,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";

function Home() {

  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const { data } = await API.get("/products");

      setProducts(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchProducts();

  }, []);



  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center overflow-hidden">

        {/* ANIMATED BG */}
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute w-96 h-96 bg-pink-300/30 rounded-full blur-3xl -top-20 -left-20"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl bottom-0 right-0"
        />



        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-3 rounded-full font-semibold mb-8">

              <Sparkles size={18} />

              New Fashion Collection 2026

            </div>



            {/* TITLE */}
            <h1 className="text-6xl lg:text-8xl font-black leading-tight text-gray-900">

              Elegance

              <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">

                Redefined

              </span>

            </h1>



            {/* TEXT */}
            <p className="text-xl text-gray-600 mt-8 leading-relaxed max-w-xl">

              Discover premium ethnic wear, elegant kurtis,
              lehengas, sarees, and modern styles crafted
              for women who love timeless beauty.

            </p>



            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/shop"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:scale-105 transition duration-300"
              >
                Shop Collection
              </Link>



              <Link
                to="/shop"
                className="border-2 border-pink-500 text-pink-500 px-10 py-5 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition duration-300"
              >
                Explore Styles
              </Link>

            </div>



            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-4xl font-black text-pink-500">
                  10K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Happy Customers
                </p>
              </div>



              <div>
                <h2 className="text-4xl font-black text-purple-500">
                  500+
                </h2>

                <p className="text-gray-500 mt-2">
                  Products
                </p>
              </div>



              <div>
                <h2 className="text-4xl font-black text-pink-500">
                  4.9★
                </h2>

                <p className="text-gray-500 mt-2">
                  Rating
                </p>
              </div>

            </div>

          </motion.div>



          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-10 -left-10 bg-white shadow-2xl rounded-3xl p-5 z-20"
            >

              <div className="flex items-center gap-3">

                <Star
                  className="text-yellow-500 fill-yellow-500"
                />

                <div>

                  <h3 className="font-bold">
                    Trending Now
                  </h3>

                  <p className="text-sm text-gray-500">
                    Luxury Collection
                  </p>

                </div>

              </div>

            </motion.div>



            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-[50px] overflow-hidden shadow-2xl"
            >

              <img
                src="https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="fashion"
                className="w-full h-[750px] object-cover"
              />

            </motion.div>



            {/* SHIPPING CARD */}
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 -right-10 bg-white shadow-2xl rounded-3xl p-5 z-20"
            >

              <div className="flex items-center gap-3">

                <Truck className="text-green-500" />

                <div>

                  <h3 className="font-bold">
                    Free Shipping
                  </h3>

                  <p className="text-sm text-gray-500">
                    On all orders above ₹999
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>



      {/* FEATURED PRODUCTS */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-16">

            <div>

              <h2 className="text-5xl font-black text-gray-900">

                Featured Products

              </h2>

              <p className="text-gray-500 mt-4 text-lg">

                Handpicked premium fashion collection.

              </p>

            </div>



            <Link
              to="/shop"
              className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-8 py-4 rounded-2xl font-bold transition duration-300"
            >
              View All Products
            </Link>

          </div>



          {/* PRODUCTS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

            {products.slice(0, 8).map((product, index) => (

              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
              >

                <ProductCard product={product} />

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* PREMIUM SALE BANNER */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto rounded-[50px] overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 p-20 text-center text-white shadow-2xl relative">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20" />

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-20 -right-20" />



          <div className="relative z-10">

            <h2 className="text-5xl lg:text-7xl font-black leading-tight">

              Summer Fashion Sale

            </h2>

            <p className="text-2xl mt-8 opacity-90 max-w-3xl mx-auto leading-relaxed">

              Discover elegant styles and get up to
              50% OFF on selected collections.

            </p>



            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-white text-pink-500 px-12 py-5 rounded-2xl font-black text-lg mt-12 hover:scale-105 transition duration-300"
            >

              <ShoppingBag />

              Shop Now

            </Link>

          </div>

        </div>

      </section>



      {/* TESTIMONIALS */}
      <section className="py-28 bg-gradient-to-br from-pink-50 to-purple-50">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-gray-900">

            What Our Customers Say

          </h2>

          <p className="text-gray-500 mt-5 text-xl max-w-3xl mx-auto">

            Thousands of women trust our premium collection.

          </p>



          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[1, 2, 3].map((item) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: item * 0.2,
                }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[35px] p-10 shadow-xl"
              >

                <div className="flex justify-center gap-1 text-yellow-500 mb-6 text-2xl">

                  ★★★★★

                </div>

                <p className="text-gray-600 leading-relaxed text-lg">

                  Amazing quality and elegant design.
                  The fabric feels premium and the fitting is perfect.

                </p>

                <div className="mt-8">

                  <h3 className="font-black text-xl text-gray-800">

                    Priya Sharma

                  </h3>

                  <p className="text-gray-500 mt-1">

                    Verified Customer

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;