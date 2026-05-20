import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import API from "../../services/api";

import AdminSidebar from "../../components/AdminSidebar";

import toast from "react-hot-toast";

function AdminOrders() {

  const { userInfo } = useSelector(
    (state) => state.auth
  );

  const [orders, setOrders] = useState([]);




  // FETCH ORDERS
  const fetchOrders = async () => {

    try {

      const { data } = await API.get(
        "/orders",
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      setOrders(data);

    } catch (error) {

      console.log(error);
    }
  };



  useEffect(() => {
    fetchOrders();
  }, []);




  // UPDATE STATUS
  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await API.put(
        `/orders/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );



      toast.success(
        "Order Status Updated"
      );

      fetchOrders();

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );
    }
  };




  return (
    <div className="bg-pink-50 min-h-screen flex">

      <AdminSidebar />



      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">

          Customer Orders

        </h1>



        <div className="space-y-8">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mb-8">

                <div>

                  <h2 className="text-2xl font-bold">
                    Order ID
                  </h2>

                  <p className="text-gray-500">
                    {order._id}
                  </p>

                </div>



                <div>

                  <h2 className="font-bold">
                    Customer
                  </h2>

                  <p>
                    {order.user?.name}
                  </p>

                  <p className="text-gray-500">
                    {order.user?.email}
                  </p>

                </div>



                <div>

                  <h2 className="font-bold">
                    Status
                  </h2>

                  <span className="bg-pink-100 text-pink-500 px-5 py-2 rounded-xl inline-block mt-2">
                    {order.orderStatus}
                  </span>

                </div>

              </div>



              {/* PRODUCTS */}
              <div className="space-y-5">

                {order.orderItems.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-5 border-b pb-5"
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-xl"
                      />

                      <div>

                        <h3 className="font-bold text-xl">
                          {item.title}
                        </h3>

                        <p>
                          Qty: {item.quantity}
                        </p>

                        <p>
                          ₹{item.price}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>



              {/* SHIPPING */}
              <div className="mt-8 bg-gray-50 p-5 rounded-2xl">

                <h2 className="font-bold text-xl mb-4">

                  Shipping Address

                </h2>

                <p>
                  {
                    order.shippingAddress
                      ?.fullName
                  }
                </p>

                <p>
                  {
                    order.shippingAddress
                      ?.phone
                  }
                </p>

                <p>
                  {
                    order.shippingAddress
                      ?.address
                  }
                </p>

                <p>
                  {
                    order.shippingAddress
                      ?.city
                  }
                  ,
                  {
                    order.shippingAddress
                      ?.postalCode
                  }
                </p>

                <p>
                  {
                    order.shippingAddress
                      ?.country
                  }
                </p>

              </div>



              {/* FOOTER */}
              <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 mt-8">

                <h2 className="text-3xl font-bold">

                  ₹{order.totalPrice}

                </h2>



                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      updateStatus(
                        order._id,
                        "Shipped"
                      )
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
                  >
                    Mark Shipped
                  </button>



                  <button
                    onClick={() =>
                      updateStatus(
                        order._id,
                        "Delivered"
                      )
                    }
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl"
                  >
                    Mark Delivered
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminOrders;