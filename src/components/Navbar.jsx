import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../redux/authSlice";

import { useState } from "react";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

import {
  Heart,
  ShoppingBag,
  Search,
  User,
} from "lucide-react";

function Navbar() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { userInfo } = useSelector(
    (state) => state.auth
  );

  const { cartItems } = useSelector(
    (state) => state.cart
  );



  // LOGOUT
  const handleLogout = () => {

    dispatch(logout());

    navigate("/login");
  };



  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">

          <h1 className="text-4xl font-black tracking-tight">

            <span className="text-pink-500">
              Fashion
            </span>

            <span className="text-purple-500">
              Hub
            </span>

          </h1>

        </Link>



        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">

          <Link
            to="/"
            className="font-semibold text-gray-700 hover:text-pink-500 transition"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="font-semibold text-gray-700 hover:text-pink-500 transition"
          >
            Shop
          </Link>

          <Link
            to="/my-orders"
            className="font-semibold text-gray-700 hover:text-pink-500 transition"
          >
            Orders
          </Link>

          <Link
            to="/profile"
            className="font-semibold text-gray-700 hover:text-pink-500 transition"
          >
            Profile
          </Link>

        </div>



        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">

          {/* SEARCH */}
          <div className="flex items-center bg-gray-50 px-4 h-12 rounded-xl border border-gray-100 w-64">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-3 text-sm w-full"
            />

          </div>



          {/* ICONS */}
          <Link
            to="/wishlist"
            className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-pink-50 transition"
          >

            <Heart
              size={20}
              className="text-pink-500"
            />

          </Link>



          <Link
            to="/cart"
            className="relative w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-pink-50 transition"
          >

            <ShoppingBag
              size={20}
              className="text-pink-500"
            />



            {cartItems.length > 0 && (

              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                {cartItems.length}

              </span>

            )}

          </Link>



          {/* ADMIN */}
          {userInfo?.user?.role ===
            "admin" && (

            <Link
              to="/admin/dashboard"
              className="px-5 h-12 rounded-xl bg-black text-white font-semibold flex items-center justify-center hover:bg-gray-800 transition"
            >
              Admin
            </Link>

          )}



          {/* USER */}
          {userInfo ? (

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 px-4 h-12 rounded-xl bg-gray-50 border border-gray-100">

                <User
                  size={18}
                  className="text-gray-500"
                />

                <span className="font-semibold text-gray-700">

                  {userInfo.user.name}

                </span>

              </div>



              <button
                onClick={handleLogout}
                className="px-5 h-12 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
              >
                Logout
              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="px-6 h-12 rounded-xl bg-pink-500 text-white font-semibold flex items-center hover:bg-pink-600 transition"
            >
              Login
            </Link>

          )}

        </div>



        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-4xl"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </button>

      </div>



      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-6">

          <div className="flex flex-col gap-5">

            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Link to="/wishlist">
              Wishlist
            </Link>

            <Link to="/cart">Cart</Link>

            <Link to="/my-orders">
              Orders
            </Link>

            <Link to="/profile">
              Profile
            </Link>



            {userInfo?.user?.role ===
              "admin" && (

              <Link
                to="/admin/dashboard"
                className="bg-black text-white px-5 py-4 rounded-xl text-center font-semibold"
              >
                Admin Panel
              </Link>

            )}



            {userInfo ? (

              <button
                onClick={handleLogout}
                className="bg-pink-500 text-white px-5 py-4 rounded-xl font-semibold"
              >
                Logout
              </button>

            ) : (

              <Link
                to="/login"
                className="bg-pink-500 text-white px-5 py-4 rounded-xl text-center font-semibold"
              >
                Login
              </Link>

            )}

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;