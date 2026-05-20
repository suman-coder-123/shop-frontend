import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import API from "../services/api";

import ProductCard from "../components/ProductCard";

function Shop() {

  const [products, setProducts] =
    useState([]);

  const [filteredProducts,
    setFilteredProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);



  // FILTER STATES
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("newest");



  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const { data } =
        await API.get("/products");

      setProducts(data);

      setFilteredProducts(data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };



  useEffect(() => {

    fetchProducts();

  }, []);




  // FILTER PRODUCTS
  useEffect(() => {

    let updatedProducts =
      [...products];



    // SEARCH
    if (search) {

      updatedProducts =
        updatedProducts.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }



    // CATEGORY
    if (category !== "All") {

      updatedProducts =
        updatedProducts.filter(
          (product) =>
            product.category ===
            category
        );
    }



    // SORT
    if (sort === "lowToHigh") {

      updatedProducts.sort(
        (a, b) =>
          a.price - b.price
      );
    }



    if (sort === "highToLow") {

      updatedProducts.sort(
        (a, b) =>
          b.price - a.price
      );
    }



    if (sort === "newest") {

      updatedProducts.sort(
        (a, b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      );
    }



    setFilteredProducts(
      updatedProducts
    );

  }, [
    search,
    category,
    sort,
    products,
  ]);




  // UNIQUE CATEGORIES
  const categories = [
    "All",

    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];



  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">

        <h1 className="text-4xl font-black text-pink-500">

          Loading Products...

        </h1>

      </div>
    );
  }



  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">

      {/* HERO */}
      <div className="relative overflow-hidden py-24">

        <div className="absolute w-96 h-96 bg-pink-300/20 rounded-full blur-3xl -top-20 -left-20" />

        <div className="absolute w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl bottom-0 right-0" />



        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-6xl lg:text-8xl font-black text-gray-900"
          >

            Fashion Shop

          </motion.h1>



          <p className="text-gray-500 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Explore premium women fashion collections,
            elegant dresses, sarees, kurtis and more.

          </p>

        </div>

      </div>



      {/* FILTER SECTION */}
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="bg-white rounded-[35px] shadow-xl p-6 lg:p-8 border border-pink-100 flex flex-col xl:flex-row gap-6 xl:items-center xl:justify-between"
        >

          {/* SEARCH */}
          <div className="flex items-center bg-pink-50 border border-pink-100 rounded-2xl px-5 h-16 flex-1">

            <Search
              className="text-pink-500"
              size={22}
            />

            <input
              type="text"
              placeholder="Search fashion..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="bg-transparent outline-none w-full px-4 text-lg"
            />

          </div>



          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row gap-5">

            {/* CATEGORY */}
            <div className="flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-2xl px-5 h-16">

              <SlidersHorizontal
                className="text-pink-500"
                size={22}
              />

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="bg-transparent outline-none text-lg"
              >

                {categories.map(
                  (cat, index) => (

                    <option
                      key={index}
                      value={cat}
                    >

                      {cat}

                    </option>

                  )
                )}

              </select>

            </div>



            {/* SORT */}
            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
              className="bg-pink-50 border border-pink-100 rounded-2xl px-6 h-16 outline-none text-lg"
            >

              <option value="newest">

                Newest

              </option>

              <option value="lowToHigh">

                Price Low To High

              </option>

              <option value="highToLow">

                Price High To Low

              </option>

            </select>

          </div>

        </motion.div>

      </div>



      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-12">

          <div>

            <h2 className="text-4xl font-black text-gray-900">

              Products Collection

            </h2>

            <p className="text-gray-500 mt-3 text-lg">

              {filteredProducts.length} Products Found

            </p>

          </div>

        </div>



        {/* GRID */}
        {filteredProducts.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

            {filteredProducts.map(
              (product, index) => (

                <motion.div
                  key={product._id}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.05,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                >

                  <ProductCard
                    product={
                      product
                    }
                  />

                </motion.div>

              )
            )}

          </div>

        ) : (

          <div className="bg-white rounded-[40px] shadow-xl p-20 text-center border border-pink-100">

            <h2 className="text-5xl font-black text-gray-800">

              No Products Found

            </h2>

            <p className="text-gray-500 text-xl mt-5">

              Try another search or filter.

            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Shop;