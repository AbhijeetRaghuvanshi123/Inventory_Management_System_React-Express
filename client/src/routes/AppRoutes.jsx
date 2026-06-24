import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes.jsx";

import LoginPage from "../views/Login";
import RegisterPage from "../views/Register";
import Home from "../views/Home.jsx";

import Layout from "../components/Layout.jsx";

import DashBoardPage from "../views/Dashboard";
import Products from "../views/Products.jsx";
import NewProduct from "../views/NewProduct.jsx";
import Product from "../views/Product.jsx";
import EditProduct from "../views/EditProduct.jsx";
import AddStock from "../views/AddStock.jsx";
import StockHistory from "../views/StockHistory.jsx";
import CreateOrder from "../views/CreateOrder.jsx";
import Orders from "../views/Orders.jsx";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<DashBoardPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/new" element={<NewProduct />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/products/:id/edit" element={<EditProduct />} />
                    <Route path="/stock/add" element={<AddStock />} />
                    <Route path="/stock/history" element={<StockHistory />} />
                    <Route path="/order/create" element={<CreateOrder />} />
                    <Route path="/orders" element={<Orders />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoute;