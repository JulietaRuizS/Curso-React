import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";



function App () {
    return (
        <div> 
            <Header/>
            <ItemListContainer greeting={"Recuerda ingresar tu usuario y contraseña para poder realizar la compra online!"}/>
            <Banners/>
            <Footer/>
        </div>
    );
}
export default App;