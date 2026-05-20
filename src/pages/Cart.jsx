import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  updateQuantity,
} from "../redux/cartSlice";

import { Link } from "react-router-dom";

function Cart() {

  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );



  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );



  return (
    <div className="bg-pink-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-gray-800 mb-12">

          Shopping Cart

        </h1>



        {cartItems.length === 0 ? (

          <div className="text-center text-2xl">

            Your cart is empty

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-2xl p-5 shadow flex gap-5"
                >

                  {/* IMAGE */}
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-36 h-36 object-cover rounded-xl"
                  />



                  {/* DETAILS */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Size: {item.selectedSize}
                    </p>

                    <p className="text-gray-500">
                      Color: {item.selectedColor}
                    </p>

                    <h3 className="text-pink-500 text-2xl font-bold mt-4">
                      ₹{item.price}
                    </h3>

                  </div>



                  {/* QUANTITY */}
                  <div className="flex flex-col items-end justify-between">

                    <button
                      onClick={() =>
                        dispatch(removeFromCart(item._id))
                      }
                      className="text-red-500"
                    >
                      Remove
                    </button>



                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          item.quantity > 1 &&
                          dispatch(
                            updateQuantity({
                              id: item._id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                        className="w-10 h-10 bg-gray-100 rounded-lg"
                      >
                        -
                      </button>

                      <span className="font-bold text-xl">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item._id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                        className="w-10 h-10 bg-gray-100 rounded-lg"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>



            {/* RIGHT */}
            <div className="bg-white rounded-2xl shadow p-8 h-fit">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between text-lg mb-4">

                <span>Total Items</span>

                <span>{cartItems.length}</span>

              </div>

              <div className="flex justify-between text-2xl font-bold mb-8">

                <span>Total</span>

                <span>₹{totalPrice}</span>

              </div>

           <Link
  to="/checkout"
  className="block text-center w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl text-lg font-semibold"
>
  Proceed To Checkout
</Link>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Cart;