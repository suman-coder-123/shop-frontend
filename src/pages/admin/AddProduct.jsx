import { useState } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import API from "../../services/api";

import AdminSidebar from "../../components/AdminSidebar";

function AddProduct() {

  const { userInfo } = useSelector(
    (state) => state.auth
  );



  // STATES
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [originalPrice, setOriginalPrice] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [brand, setBrand] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [sizes, setSizes] =
    useState("");

  const [colors, setColors] =
    useState("");

  const [fabric, setFabric] =
    useState("");

  const [featured, setFeatured] =
    useState(false);

  const [newArrival, setNewArrival] =
    useState(false);

  const [images, setImages] =
    useState([
      "",
      "",
      "",
      "",
    ]);



  // HANDLE IMAGES
  const handleImageChange = (
    index,
    value
  ) => {

    const updatedImages = [...images];

    updatedImages[index] = value;

    setImages(updatedImages);
  };



  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // REMOVE EMPTY IMAGES
      const filteredImages =
        images.filter(
          (img) => img.trim() !== ""
        );



      await API.post(
        "/products",
        {
          title,

          description,

          price,

          originalPrice,

          category,

          brand,

          stock,

          sizes: sizes
            .split(",")
            .map((size) =>
              size.trim()
            ),

          colors: colors
            .split(",")
            .map((color) =>
              color.trim()
            ),

          fabric,

          featured,

          newArrival,

          images: filteredImages,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );



      toast.success(
        "Product Added Successfully"
      );



      // RESET
      setTitle("");

      setDescription("");

      setPrice("");

      setOriginalPrice("");

      setCategory("");

      setBrand("");

      setStock("");

      setSizes("");

      setColors("");

      setFabric("");

      setFeatured(false);

      setNewArrival(false);

      setImages([
        "",
        "",
        "",
        "",
      ]);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed To Add Product"
      );
    }
  };



  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen flex">

      {/* SIDEBAR */}
      <AdminSidebar />



      {/* MAIN */}
      <div className="flex-1 p-6 lg:p-10">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-black text-gray-800">

            Add New Product

          </h1>

          <p className="text-gray-500 text-lg mt-3">

            Create premium fashion products for your store.

          </p>

        </div>



        {/* FORM */}
        <motion.form
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          onSubmit={handleSubmit}
          className="bg-white rounded-[40px] shadow-2xl p-8 lg:p-12 border border-pink-100"
        >

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* TITLE */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Product Title

              </label>

              <input
                type="text"
                placeholder="Luxury Pink Gown"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
                required
              />

            </div>



            {/* CATEGORY */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Category

              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
                required
              >

                <option value="">
                  Select Category
                </option>

                <option value="Kurti">
                  Kurti
                </option>

                <option value="Saree">
                  Saree
                </option>

                <option value="Lehenga">
                  Lehenga
                </option>

                <option value="Gown">
                  Gown
                </option>

                <option value="Salwar Suit">
                  Salwar Suit
                </option>

              </select>

            </div>



            {/* PRICE */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Sale Price

              </label>

              <input
                type="number"
                placeholder="1999"
                value={price}
                onChange={(e) =>
                  setPrice(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
                required
              />

            </div>



            {/* ORIGINAL PRICE */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Original Price

              </label>

              <input
                type="number"
                placeholder="2999"
                value={originalPrice}
                onChange={(e) =>
                  setOriginalPrice(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* BRAND */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Brand

              </label>

              <input
                type="text"
                placeholder="FashionHub"
                value={brand}
                onChange={(e) =>
                  setBrand(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* STOCK */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Stock Quantity

              </label>

              <input
                type="number"
                placeholder="25"
                value={stock}
                onChange={(e) =>
                  setStock(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* SIZES */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Sizes

              </label>

              <input
                type="text"
                placeholder="S, M, L, XL"
                value={sizes}
                onChange={(e) =>
                  setSizes(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* COLORS */}
            <div>

              <label className="block font-bold text-gray-700 mb-3">

                Colors

              </label>

              <input
                type="text"
                placeholder="Pink, Black, White"
                value={colors}
                onChange={(e) =>
                  setColors(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* FABRIC */}
            <div className="lg:col-span-2">

              <label className="block font-bold text-gray-700 mb-3">

                Fabric

              </label>

              <input
                type="text"
                placeholder="Cotton Silk"
                value={fabric}
                onChange={(e) =>
                  setFabric(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* DESCRIPTION */}
            <div className="lg:col-span-2">

              <label className="block font-bold text-gray-700 mb-3">

                Description

              </label>

              <textarea
                placeholder="Write detailed product description..."
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                className="w-full h-40 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-pink-500 resize-none"
                required
              />

            </div>

          </div>



          {/* FLAGS */}
          <div className="flex flex-wrap gap-8 mt-10">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(
                    e.target.checked
                  )
                }
                className="w-5 h-5"
              />

              <span className="font-semibold">

                Featured Product

              </span>

            </label>



            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={newArrival}
                onChange={(e) =>
                  setNewArrival(
                    e.target.checked
                  )
                }
                className="w-5 h-5"
              />

              <span className="font-semibold">

                New Arrival

              </span>

            </label>

          </div>



          {/* IMAGES */}
          <div className="mt-12">

            <label className="block font-bold text-gray-700 mb-5">

              Product Images

            </label>



            <div className="grid md:grid-cols-2 gap-6">

              {images.map(
                (img, index) => (

                  <div key={index}>

                    <input
                      type="text"
                      placeholder={`Image URL ${index + 1}`}
                      value={img}
                      onChange={(e) =>
                        handleImageChange(
                          index,
                          e.target.value
                        )
                      }
                      className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
                    />



                    {img && (

                      <img
                        src={img}
                        alt="preview"
                        className="w-full h-60 object-cover rounded-3xl mt-4 border"
                      />

                    )}

                  </div>

                )
              )}

            </div>

          </div>



          {/* BUTTON */}
          <button
            type="submit"
            className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 h-14 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition duration-300"
          >
            Add Product
          </button>

        </motion.form>

      </div>

    </div>
  );
}

export default AddProduct;