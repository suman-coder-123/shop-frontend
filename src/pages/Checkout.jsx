import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import { clearCart } from "../redux/cartSlice";

import toast from "react-hot-toast";

function Checkout() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const { userInfo } = useSelector(
    (state) => state.auth
  );



  const [fullName, setFullName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [city, setCity] =
    useState("");

  const [postalCode, setPostalCode] =
    useState("");

  const [country, setCountry] =
    useState("");



  // TOTAL
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );



  // PLACE ORDER
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/orders",
        {
          orderItems: cartItems.map(
            (item) => ({
              title: item.title,
              image: item.images[0],
              price: item.price,
              quantity: item.quantity,
              product: item._id,
            })
          ),

          shippingAddress: {
            fullName,
            phone,
            address,
            city,
            postalCode,
            country,
          },

          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );



      dispatch(clearCart());



      toast.success(
        "Order Placed Successfully"
      );



      navigate("/my-orders");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Order Failed"
      );
    }
  };



  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4">

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-10"
        >

          <h1 className="text-4xl font-bold mb-10">

            Shipping Details

          </h1>



          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
              required
            />



            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
              required
            />



            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
              required
            />



            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
              required
            />



            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) =>
                setPostalCode(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
              required
            />



            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) =>
                setCountry(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
              required
            />



            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-semibold"
            >
              Place Order
            </button>

          </div>

        </form>



        {/* SUMMARY */}
        <div className="bg-white rounded-3xl shadow-xl p-10 h-fit">

          <h1 className="text-4xl font-bold mb-10">

            Order Summary

          </h1>



          <div className="space-y-5">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="flex items-center gap-4"
              >

                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div>

                  <h2 className="font-bold">
                    {item.title}
                  </h2>

                  <p>
                    {item.quantity} × ₹
                    {item.price}
                  </p>

                </div>

              </div>
            ))}

          </div>



          <div className="border-t mt-10 pt-6">

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span>₹{totalPrice}</span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;