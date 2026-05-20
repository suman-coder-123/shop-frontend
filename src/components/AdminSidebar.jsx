import { Link } from "react-router-dom";

function AdminSidebar() {

  return (
    <div className="bg-white shadow-xl w-72 min-h-screen p-6">

      {/* LOGO */}
      <h2 className="text-3xl font-bold text-pink-500 mb-10">

        Admin Panel

      </h2>



      {/* MENU */}
      <div className="space-y-4">

        <Link
          to="/admin/dashboard"
          className="block bg-pink-100 hover:bg-pink-200 p-4 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/add-product"
          className="block bg-pink-100 hover:bg-pink-200 p-4 rounded-xl"
        >
          Add Product
        </Link>

        <Link
          to="/admin/manage-products"
          className="block bg-pink-100 hover:bg-pink-200 p-4 rounded-xl"
        >
          Manage Products
        </Link>

        <Link
  to="/admin/orders"
  className="block bg-pink-100 hover:bg-pink-200 p-4 rounded-xl"
>
  Orders
</Link>

      </div>

    </div>
  );
}

export default AdminSidebar;