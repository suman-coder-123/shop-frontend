import { useEffect, useState } from "react";

import API from "../../services/api";

import AdminSidebar from "../../components/AdminSidebar";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

function ManageProducts() {

  const { userInfo } = useSelector(
    (state) => state.auth
  );

  const [products, setProducts] = useState([]);




  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {

      const { data } = await API.get("/products");

      setProducts(data);

    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);




  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {

      await API.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      fetchProducts();

    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="bg-pink-50 min-h-screen flex">

      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">

          Manage Products

        </h1>



        <div className="space-y-5">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-2xl p-5 shadow flex items-center justify-between"
            >

              {/* LEFT */}
              <div className="flex items-center gap-5">

                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {product.title}
                  </h2>

                  <p className="text-gray-500">
                    ₹{product.price}
                  </p>

                </div>

              </div>



              {/* DELETE */}
           <div className="flex gap-3">

  <Link
    to={`/admin/edit-product/${product._id}`}
    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
  >
    Edit
  </Link>

  <button
    onClick={() =>
      deleteProduct(product._id)
    }
    className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
  >
    Delete
  </button>

</div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ManageProducts;