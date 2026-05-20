import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

import API from "../services/api";

import { addToCart } from "../redux/cartSlice";

import { addToWishlist } from "../redux/wishlistSlice";

import toast from "react-hot-toast";

function ProductDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();



  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [mainImage, setMainImage] =
    useState("");

  const [selectedSize, setSelectedSize] =
    useState("");

  const [selectedColor, setSelectedColor] =
    useState("");



  // FETCH PRODUCT
  const fetchProduct = async () => {

    try {

      const { data } = await API.get(
        `/products/${id}`
      );

      setProduct(data);

      setMainImage(data.images[0]);

      setSelectedSize(
        data.sizes?.[0] || ""
      );

      setSelectedColor(
        data.colors?.[0] || ""
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  useEffect(() => {

    fetchProduct();

  }, [id]);




  // ADD TO CART
  const handleAddToCart = () => {

    dispatch(
      addToCart({
        ...product,
        quantity: 1,
        selectedSize,
        selectedColor,
      })
    );

    toast.success(
      "Added To Cart"
    );
  };



  // ADD TO WISHLIST
  const handleWishlist = () => {

    dispatch(
      addToWishlist(product)
    );

    toast.success(
      "Added To Wishlist"
    );
  };



  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">

        <h1 className="text-4xl font-black text-pink-500">

          Loading Product...

        </h1>

      </div>
    );
  }



  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen py-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <div>

            {/* MAIN IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-pink-100"
            >

              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-[750px] object-cover"
              />

            </motion.div>



            {/* THUMBNAILS */}
            <div className="grid grid-cols-4 gap-5 mt-6">

              {product.images.map(
                (img, index) => (

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    key={index}
                    onClick={() =>
                      setMainImage(img)
                    }
                    className={`cursor-pointer rounded-3xl overflow-hidden border-4 transition duration-300
                    ${
                      mainImage === img
                        ? "border-pink-500"
                        : "border-transparent"
                    }`}
                  >

                    <img
                      src={img}
                      alt="thumb"
                      className="w-full h-32 object-cover"
                    />

                  </motion.div>

                )
              )}

            </div>

          </div>



          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >

            {/* CATEGORY */}
            <div className="inline-block bg-pink-100 text-pink-500 px-5 py-2 rounded-full font-bold mb-6">

              {product.category}

            </div>



            {/* TITLE */}
            <h1 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight">

              {product.title}

            </h1>



            {/* RATING */}
            <div className="flex items-center gap-3 mt-6">

              <div className="flex text-yellow-500">

                ★★★★★

              </div>

              <span className="text-gray-500">

                (128 Reviews)

              </span>

            </div>



          {/* PRICE */}
<div className="mt-8">

  {/* CALCULATE OFFER */}
  {(() => {

    const original =
      Number(product.originalPrice);

    const sale =
      Number(product.price);

    const discount =
      original > sale
        ? Math.round(
            ((original - sale) /
              original) *
              100
          )
        : 0;



    return (

      <div className="flex flex-wrap items-center gap-5">

        {/* SALE PRICE */}
        <h2 className="text-5xl font-black text-pink-500">

          ₹{sale}

        </h2>



        {/* ORIGINAL PRICE */}
        {original > sale && (

          <span className="text-3xl text-gray-400 line-through font-semibold">

            ₹{original}

          </span>

        )}



        {/* OFFER */}
        {discount > 0 && (

          <div className="bg-green-100 text-green-600 px-5 py-3 rounded-2xl font-black text-lg">

            {discount}% OFF

          </div>

        )}

      </div>

    );
  })()}

</div>


            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed mt-8">

              {product.description}

            </p>



            {/* SIZE */}
            {product.sizes?.length > 0 && (

              <div className="mt-10">

                <h3 className="font-black text-xl mb-5">

                  Select Size

                </h3>



                <div className="flex flex-wrap gap-4">

                  {product.sizes.map(
                    (size, index) => (

                      <button
                        key={index}
                        onClick={() =>
                          setSelectedSize(
                            size
                          )
                        }
                        className={`w-14 h-14 rounded-2xl font-bold border-2 transition duration-300
                        ${
                          selectedSize ===
                          size
                            ? "bg-pink-500 text-white border-pink-500"
                            : "bg-white border-gray-200 hover:border-pink-500"
                        }`}
                      >

                        {size}

                      </button>

                    )
                  )}

                </div>

              </div>

            )}



            {/* COLORS */}
            {product.colors?.length > 0 && (

              <div className="mt-10">

                <h3 className="font-black text-xl mb-5">

                  Select Color

                </h3>



                <div className="flex flex-wrap gap-4">

                  {product.colors.map(
                    (color, index) => (

                      <button
                        key={index}
                        onClick={() =>
                          setSelectedColor(
                            color
                          )
                        }
                        className={`px-6 h-14 rounded-2xl font-bold border-2 transition duration-300
                        ${
                          selectedColor ===
                          color
                            ? "bg-pink-500 text-white border-pink-500"
                            : "bg-white border-gray-200 hover:border-pink-500"
                        }`}
                      >

                        {color}

                      </button>

                    )
                  )}

                </div>

              </div>

            )}



            {/* FABRIC */}
            {product.fabric && (

              <div className="mt-10">

                <h3 className="font-black text-xl mb-3">

                  Fabric

                </h3>

                <p className="text-gray-600 text-lg">

                  {product.fabric}

                </p>

              </div>

            )}



            {/* STOCK */}
            <div className="mt-10">

              <span className="bg-green-100 text-green-600 px-5 py-3 rounded-2xl font-bold">

                In Stock ({product.stock})

              </span>

            </div>



            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-12">

              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleAddToCart}
                className="flex-1 min-w-[220px] bg-gradient-to-r from-pink-500 to-purple-500 text-white h-16 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3 hover:scale-105 transition duration-300"
              >

                <ShoppingBag />

                Add To Cart

              </motion.button>



              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleWishlist}
                className="w-16 h-16 rounded-2xl border-2 border-pink-500 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition duration-300"
              >

                <Heart />

              </motion.button>

            </div>



            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-5 mt-14">

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100">

                <Truck className="text-pink-500 mb-4" />

                <h3 className="font-black">

                  Free Shipping

                </h3>

                <p className="text-gray-500 text-sm mt-2">

                  Above ₹999

                </p>

              </div>



              <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100">

                <RotateCcw className="text-pink-500 mb-4" />

                <h3 className="font-black">

                  Easy Returns

                </h3>

                <p className="text-gray-500 text-sm mt-2">

                  7 Days Return

                </p>

              </div>



              <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100">

                <ShieldCheck className="text-pink-500 mb-4" />

                <h3 className="font-black">

                  Secure Payment

                </h3>

                <p className="text-gray-500 text-sm mt-2">

                  100% Secure

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;