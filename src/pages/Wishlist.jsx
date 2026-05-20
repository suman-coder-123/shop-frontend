import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
  removeFromWishlist,
} from "../redux/wishlistSlice";

function Wishlist() {

  const dispatch = useDispatch();

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );



  return (
    <div className="bg-pink-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-gray-800 mb-12">

          My Wishlist ❤️

        </h1>



        {wishlistItems.length === 0 ? (

          <div className="text-center text-2xl">

            Wishlist is empty

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {wishlistItems.map((item) => (

              <div
                key={item._id}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >

                {/* IMAGE */}
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />



                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-pink-500 uppercase text-sm">

                    {item.category}

                  </p>

                  <h2 className="text-xl font-bold mt-2">

                    {item.title}

                  </h2>

                  <h3 className="text-2xl font-bold mt-4 text-gray-800">

                    ₹{item.price}

                  </h3>



                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-6">

                    <Link
                      to={`/product/${item._id}`}
                      className="flex-1 bg-pink-500 hover:bg-pink-600 text-white text-center py-3 rounded-xl"
                    >
                      View
                    </Link>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFromWishlist(item._id)
                        )
                      }
                      className="px-5 bg-red-100 text-red-500 rounded-xl"
                    >
                      ✕
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Wishlist;