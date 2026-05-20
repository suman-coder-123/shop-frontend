import { useState } from "react";

import { useSelector } from "react-redux";

import API from "../services/api";

import toast from "react-hot-toast";

function Profile() {

  const { userInfo } = useSelector(
    (state) => state.auth
  );



  const [name, setName] = useState(
    userInfo?.user?.name || ""
  );

  const [email, setEmail] = useState(
    userInfo?.user?.email || ""
  );

  const [password, setPassword] =
    useState("");



  // UPDATE PROFILE
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.put(
        "/auth/profile",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );



      toast.success(
        "Profile Updated Successfully"
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Update Failed"
      );
    }
  };



  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-gray-800 mb-10">

          My Profile

        </h1>



        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* NAME */}
          <div>

            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            />

          </div>



          {/* EMAIL */}
          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            />

          </div>



          {/* PASSWORD */}
          <div>

            <label className="block mb-2 font-semibold">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            />

          </div>



          {/* BUTTON */}
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-xl font-semibold"
          >
            Update Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;