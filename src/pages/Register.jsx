import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import API from "../services/api";

import { setCredentials } from "../redux/authSlice";

function Register() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("user");



  // REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await API.post(
        "/auth/register",
        {
          name,
          email,
          password,
          role,
        }
      );

      dispatch(setCredentials(data));

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Register Failed"
      );
    }
  };



  return (
    <div className="bg-pink-50 min-h-screen flex justify-center items-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center text-gray-800">

          Create Account ✨

        </h1>

        <p className="text-center text-gray-500 mt-3">

          Join our fashion community

        </p>



        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10"
        >

          {/* NAME */}
          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-4 outline-none focus:border-pink-500"
              required
            />

          </div>



          {/* EMAIL */}
          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-4 outline-none focus:border-pink-500"
              required
            />

          </div>



          {/* PASSWORD */}
          <div className="mb-8">

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-4 outline-none focus:border-pink-500"
              required
            />

          </div>

          <div className="mb-6">

  <label className="block mb-2 font-semibold">
    Role
  </label>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full border rounded-xl px-4 py-4"
  >
    <option value="user">
      User
    </option>

    <option value="admin">
      Admin
    </option>

  </select>

</div>



          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl text-lg font-semibold"
          >
            Register
          </button>

        </form>



        {/* LOGIN */}
        <p className="text-center mt-8 text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-pink-500 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;