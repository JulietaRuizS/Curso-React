import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContextProvider from "./components/Context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;