import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";

import ManageProducts from "./pages/admin/ManageProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";

import EditProduct from "./pages/admin/EditProduct";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/admin/AdminOrders";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

       <Route
          path="/wishlist"
          element={<Wishlist />}
        /> 

        <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-orders"
  element={
    <ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/orders"
  element={
    <ProtectedRoute admin={true}>
      <AdminOrders />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute admin={true}>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/add-product"
  element={
    <ProtectedRoute admin={true}>
      <AddProduct />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/manage-products"
  element={
    <ProtectedRoute admin={true}>
      <ManageProducts />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/edit-product/:id"
  element={
    <ProtectedRoute admin={true}>
      <EditProduct />
    </ProtectedRoute>
  }
/>
        <Route path="/login" element={<Login />} />

         <Route
          path="/register"
          element={<Register />}
        />

        <Route path="/profile" element={<Profile />} />

        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>

      <Footer />
    </>
  );
}

export default App;