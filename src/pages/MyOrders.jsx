import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import API from "../services/api";

function MyOrders() {

  const { userInfo } = useSelector(
    (state) => state.auth
  );

  const [orders, setOrders] = useState([]);




  // FETCH ORDERS
  const fetchOrders = async () => {

    try {

      const { data } = await API.get(
        "/orders/my-orders",
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




  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          My Orders

        </h1>



        <div className="space-y-8">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <div className="flex justify-between mb-8">

                <div>

                  <h2 className="font-bold text-2xl">
                    Order ID
                  </h2>

                  <p className="text-gray-500">
                    {order._id}
                  </p>

                </div>



                <div>

                  <span className="bg-pink-100 text-pink-500 px-5 py-2 rounded-xl">
                    {order.orderStatus}
                  </span>

                </div>

              </div>



              {/* ITEMS */}
              <div className="space-y-5">

                {order.orderItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-5"
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
                ))}

              </div>



              <div className="border-t mt-8 pt-5 flex justify-between font-bold text-xl">

                <span>Total</span>

                <span>
                  ₹{order.totalPrice}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default MyOrders;