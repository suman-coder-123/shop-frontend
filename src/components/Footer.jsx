import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {

  return (
    <footer className="bg-[#0f0f0f] text-white mt-24 overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-14">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <h1 className="text-5xl font-black leading-tight">

              <span className="text-pink-500">
                Fashion
              </span>

              <span className="text-purple-500">
                Hub
              </span>

            </h1>



            <p className="text-gray-400 leading-relaxed text-lg mt-8 max-w-xl">

              Discover premium women fashion collections,
              elegant dresses, sarees, kurtis,
              lehengas and luxury styles crafted
              for modern fashion lovers.

            </p>



            {/* SOCIALS */}
            <div className="flex items-center gap-5 mt-10">

              <a
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition duration-300 flex items-center justify-center"
              >

               <FaFacebookF size={20} />

              </a>



              <a
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition duration-300 flex items-center justify-center"
              >

            <FaInstagram size={20} />

              </a>



              <a
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition duration-300 flex items-center justify-center"
              >

              <FaTwitter size={20} />

              </a>



              <a
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition duration-300 flex items-center justify-center"
              >

               <FaYoutube size={20} />

              </a>

            </div>

          </div>



          {/* SHOP LINKS */}
          <div>

            <h2 className="text-2xl font-black mb-8">

              Shop

            </h2>



            <div className="flex flex-col gap-5 text-gray-400">

              <Link
                to="/shop"
                className="hover:text-pink-500 transition"
              >
                All Products
              </Link>

              <Link
                to="/shop"
                className="hover:text-pink-500 transition"
              >
                Sarees
              </Link>

              <Link
                to="/shop"
                className="hover:text-pink-500 transition"
              >
                Kurtis
              </Link>

              <Link
                to="/shop"
                className="hover:text-pink-500 transition"
              >
                Lehengas
              </Link>

              <Link
                to="/shop"
                className="hover:text-pink-500 transition"
              >
                New Arrivals
              </Link>

            </div>

          </div>



          {/* COMPANY */}
          <div>

            <h2 className="text-2xl font-black mb-8">

              Company

            </h2>



            <div className="flex flex-col gap-5 text-gray-400">

              <Link
                to="/"
                className="hover:text-pink-500 transition"
              >
                About Us
              </Link>

              <Link
                to="/"
                className="hover:text-pink-500 transition"
              >
                Contact Us
              </Link>

              <Link
                to="/"
                className="hover:text-pink-500 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="hover:text-pink-500 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/"
                className="hover:text-pink-500 transition"
              >
                Shipping Policy
              </Link>

            </div>

          </div>



          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-black mb-8">

              Contact

            </h2>



            <div className="space-y-6 text-gray-400">

              <div className="flex items-start gap-4">

               <FaMapMarkerAlt
                  className="text-pink-500 mt-1"
                  size={20}
                />

                <p className="leading-relaxed">

                  Bhopal, Madhya Pradesh,
                  India

                </p>

              </div>



              <div className="flex items-center gap-4">

               <FaPhoneAlt
                  className="text-pink-500"
                  size={20}
                />

                <p>
                  +91 9876543210
                </p>

              </div>



              <div className="flex items-center gap-4">

               <FaEnvelope
                  className="text-pink-500"
                  size={20}
                />

                <p>
                  support@fashionhub.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* NEWSLETTER */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-black">

              Subscribe Newsletter

            </h2>

            <p className="text-gray-400 mt-4 text-lg">

              Get latest fashion trends and offers.

            </p>

          </div>



          {/* INPUT */}
          <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto">

            <div className="bg-white/10 rounded-2xl px-6 h-16 flex items-center min-w-[320px]">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
              />

            </div>



            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-10 h-16 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition duration-300 shadow-xl">

              <FaPaperPlane size={20} />

              Subscribe

            </button>

          </div>

        </div>

      </div>



      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">

          <p className="text-gray-400">

            © 2026 FashionHub. All Rights Reserved.

          </p>



          <div className="flex items-center gap-8 text-gray-400">

            <Link
              to="/"
              className="hover:text-pink-500 transition"
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="hover:text-pink-500 transition"
            >
              Terms
            </Link>

            <Link
              to="/"
              className="hover:text-pink-500 transition"
            >
              Support
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;