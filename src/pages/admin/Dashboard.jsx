import { useEffect, useState } from "react";

import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
  TrendingUp,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import API from "../../services/api";

import AdminSidebar from "../../components/AdminSidebar";

function Dashboard() {

  const { userInfo } = useSelector(
    (state) => state.auth
  );



  // STATES
  const [products, setProducts] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);



  // FETCH DASHBOARD DATA
  const fetchDashboardData =
    async () => {

      try {

        // PRODUCTS
        const productsRes =
          await API.get("/products");



        // ORDERS
        const ordersRes =
          await API.get("/orders", {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          });



        // USERS
        const usersRes =
          await API.get("/auth/users", {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          });



        setProducts(
          productsRes.data
        );

        setOrders(
          ordersRes.data
        );

        setUsers(
          usersRes.data
        );

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);
      }
    };



  useEffect(() => {

    fetchDashboardData();

  }, []);




  // TOTAL REVENUE
  const totalRevenue =
    orders.reduce(
      (acc, order) =>
        acc + order.totalPrice,
      0
    );



  // DELIVERED ORDERS
  const deliveredOrders =
    orders.filter(
      (order) =>
        order.orderStatus ===
        "Delivered"
    );



  // RECENT ORDERS
  const recentOrders =
    orders.slice(0, 5);



  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">

        <div className="text-3xl font-bold text-pink-500">

          Loading Dashboard...

        </div>

      </div>
    );
  }



  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen flex">

      {/* SIDEBAR */}
      <AdminSidebar />



      {/* MAIN */}
      <div className="flex-1 p-6 lg:p-10 overflow-hidden">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-12">

          <div>

            <h1 className="text-5xl font-black text-gray-800">

              Admin Dashboard

            </h1>

            <p className="text-gray-500 text-lg mt-3">

              Welcome back, manage your fashion store.

            </p>

          </div>



          <div className="bg-white rounded-3xl px-8 py-5 shadow-lg border border-pink-100">

            <p className="text-gray-500 text-sm mb-2">

              Today's Overview

            </p>

            <h2 className="text-3xl font-black text-pink-500">

              ₹{totalRevenue}

            </h2>

          </div>

        </div>



        {/* STATS */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

          {/* PRODUCTS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[35px] shadow-xl p-8 border border-pink-100"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">

                <Package
                  className="text-pink-500"
                  size={32}
                />

              </div>



              <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-xl text-sm font-bold">

                Products

              </span>

            </div>



            <h2 className="text-5xl font-black text-gray-800">

              {products.length}

            </h2>

            <p className="text-gray-500 mt-3">

              Total Products

            </p>

          </motion.div>



          {/* ORDERS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[35px] shadow-xl p-8 border border-blue-100"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                <ShoppingCart
                  className="text-blue-500"
                  size={32}
                />

              </div>



              <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-xl text-sm font-bold">

                Orders

              </span>

            </div>



            <h2 className="text-5xl font-black text-gray-800">

              {orders.length}

            </h2>

            <p className="text-gray-500 mt-3">

              Total Orders

            </p>

          </motion.div>



          {/* USERS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[35px] shadow-xl p-8 border border-purple-100"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">

                <Users
                  className="text-purple-500"
                  size={32}
                />

              </div>



              <span className="bg-purple-100 text-purple-500 px-4 py-2 rounded-xl text-sm font-bold">

                Users

              </span>

            </div>



            <h2 className="text-5xl font-black text-gray-800">

              {users.length}

            </h2>

            <p className="text-gray-500 mt-3">

              Registered Users

            </p>

          </motion.div>



          {/* REVENUE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[35px] shadow-xl p-8 border border-green-100"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                <IndianRupee
                  className="text-green-500"
                  size={32}
                />

              </div>



              <span className="bg-green-100 text-green-500 px-4 py-2 rounded-xl text-sm font-bold">

                Revenue

              </span>

            </div>



            <h2 className="text-4xl font-black text-gray-800">

              ₹{totalRevenue}

            </h2>

            <p className="text-gray-500 mt-3">

              Total Revenue

            </p>

          </motion.div>

        </div>



        {/* MIDDLE */}
        <div className="grid xl:grid-cols-3 gap-8 mb-12">

          {/* RECENT ORDERS */}
          <div className="xl:col-span-2 bg-white rounded-[35px] shadow-xl p-8 border border-pink-100">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-black text-gray-800">

                Recent Orders

              </h2>



              <TrendingUp
                className="text-pink-500"
                size={28}
              />

            </div>



            <div className="space-y-6">

              {recentOrders.map((order) => (

                <div
                  key={order._id}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b border-gray-100 pb-5"
                >

                  <div>

                    <h3 className="font-bold text-lg text-gray-800">

                      {order.shippingAddress
                        ?.fullName}

                    </h3>

                    <p className="text-gray-500 text-sm mt-1">

                      {order._id}

                    </p>

                  </div>



                  <div>

                    <span className="bg-pink-100 text-pink-500 px-5 py-2 rounded-xl font-semibold">

                      {order.orderStatus}

                    </span>

                  </div>



                  <div className="font-black text-2xl text-gray-800">

                    ₹{order.totalPrice}

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* STORE INSIGHTS */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-[35px] p-8 text-white shadow-2xl">

            <div className="flex items-center justify-between mb-10">

              <h2 className="text-3xl font-black">

                Store Insights

              </h2>

              <Star
                className="fill-white"
                size={30}
              />

            </div>



            <div className="space-y-8">

              <div>

                <p className="opacity-80 mb-2">

                  Delivered Orders

                </p>

                <h3 className="text-5xl font-black">

                  {
                    deliveredOrders.length
                  }

                </h3>

              </div>



              <div>

                <p className="opacity-80 mb-2">

                  Conversion Rate

                </p>

                <h3 className="text-5xl font-black">

                  89%

                </h3>

              </div>



              <div>

                <p className="opacity-80 mb-2">

                  Store Growth

                </p>

                <h3 className="text-5xl font-black">

                  +24%

                </h3>

              </div>

            </div>

          </div>

        </div>



        {/* LATEST PRODUCTS */}
        <div className="bg-white rounded-[35px] shadow-xl p-8 border border-pink-100">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-3xl font-black text-gray-800">

              Latest Products

            </h2>

            <Package
              className="text-pink-500"
              size={28}
            />

          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {products.slice(0, 4).map(
              (product) => (

                <motion.div
                  key={product._id}
                  whileHover={{
                    y: -10,
                  }}
                  className="bg-pink-50 rounded-[30px] overflow-hidden border border-pink-100"
                >

                  <img
                    src={
                      product.images[0]
                    }
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />



                  <div className="p-6">

                    <h3 className="font-black text-xl text-gray-800 line-clamp-1">

                      {product.title}

                    </h3>

                    <p className="text-gray-500 mt-2">

                      {product.category}

                    </p>



                    <div className="flex items-center justify-between mt-5">

                      <span className="text-2xl font-black text-pink-500">

                        ₹{product.price}

                      </span>



                      <span className="bg-white px-4 py-2 rounded-xl text-sm font-bold shadow">

                        Fashion

                      </span>

                    </div>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;