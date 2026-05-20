import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import API from "../../services/api";

import AdminSidebar from "../../components/AdminSidebar";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

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



  // FETCH PRODUCT
  const fetchProduct =
    async () => {

      try {

        const { data } =
          await API.get(
            `/products/${id}`
          );



        setTitle(data.title);

        setDescription(
          data.description
        );

        setPrice(data.price);

        setOriginalPrice(
          data.originalPrice || ""
        );

        setCategory(
          data.category
        );

        setBrand(
          data.brand || ""
        );

        setStock(
          data.stock || ""
        );

        setSizes(
          data.sizes?.join(", ") ||
            ""
        );

        setColors(
          data.colors?.join(
            ", "
          ) || ""
        );

        setFabric(
          data.fabric || ""
        );

        setFeatured(
          data.featured || false
        );

        setNewArrival(
          data.newArrival ||
            false
        );



        // IMAGES
        const loadedImages = [
          "",
          "",
          "",
          "",
        ];

        data.images.forEach(
          (img, index) => {

            loadedImages[index] =
              img;
          }
        );

        setImages(
          loadedImages
        );

      } catch (error) {

        console.log(error);
      }
    };



  useEffect(() => {

    fetchProduct();

  }, []);




  // HANDLE IMAGE CHANGE
  const handleImageChange = (
    index,
    value
  ) => {

    const updatedImages = [
      ...images,
    ];

    updatedImages[index] =
      value;

    setImages(updatedImages);
  };



  // UPDATE PRODUCT
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const filteredImages =
        images.filter(
          (img) =>
            img.trim() !== ""
        );



      await API.put(
        `/products/${id}`,
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

          images:
            filteredImages,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );



      toast.success(
        "Product Updated Successfully"
      );



      navigate(
        "/admin/manage-products"
      );

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
          "Update Failed"
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

            Edit Product

          </h1>

          <p className="text-gray-500 text-lg mt-3">

            Update fashion product details.

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

              <label className="block font-bold mb-3">

                Product Title

              </label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* CATEGORY */}
            <div>

              <label className="block font-bold mb-3">

                Category

              </label>

              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* PRICE */}
            <div>

              <label className="block font-bold mb-3">

                Sale Price

              </label>

              <input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* ORIGINAL PRICE */}
            <div>

              <label className="block font-bold mb-3">

                Original Price

              </label>

              <input
                type="number"
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

              <label className="block font-bold mb-3">

                Brand

              </label>

              <input
                type="text"
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

              <label className="block font-bold mb-3">

                Stock

              </label>

              <input
                type="number"
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

              <label className="block font-bold mb-3">

                Sizes

              </label>

              <input
                type="text"
                value={sizes}
                onChange={(e) =>
                  setSizes(
                    e.target.value
                  )
                }
                placeholder="S, M, L"
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* COLORS */}
            <div>

              <label className="block font-bold mb-3">

                Colors

              </label>

              <input
                type="text"
                value={colors}
                onChange={(e) =>
                  setColors(
                    e.target.value
                  )
                }
                placeholder="Pink, White"
                className="w-full h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-pink-500"
              />

            </div>



            {/* FABRIC */}
            <div className="lg:col-span-2">

              <label className="block font-bold mb-3">

                Fabric

              </label>

              <input
                type="text"
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

              <label className="block font-bold mb-3">

                Description

              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                className="w-full h-40 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-pink-500 resize-none"
              />

            </div>

          </div>



          {/* CHECKBOXES */}
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
              />

              Featured Product

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
              />

              New Arrival

            </label>

          </div>



          {/* IMAGES */}
          <div className="mt-12">

            <label className="block font-bold mb-5">

              Product Images

            </label>



            <div className="grid md:grid-cols-2 gap-6">

              {images.map(
                (img, index) => (

                  <div key={index}>

                    <input
                      type="text"
                      value={img}
                      placeholder={`Image URL ${index + 1}`}
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
            Update Product
          </button>

        </motion.form>

      </div>

    </div>
  );
}

export default EditProduct;