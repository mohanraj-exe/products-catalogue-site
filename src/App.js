import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import CategoryPage from "./pages/Category.page";
import AllProductsPage from "./pages/AllProducts.page";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:productType" element={<CategoryPage />}/>
                <Route path="/products" element={<AllProductsPage />}/>
            </Routes>
        </>
    )
}