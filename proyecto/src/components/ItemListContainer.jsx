import React from "react";
import arrayProductos from "./json/productos.json";
import ItemCount from "./ItemCount";
import { useEffect } from "react";
import ItemList from "./ItemList";


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState ([]);

    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => {
            setTimeout (() => { 
                resolve (arrayProductos);
            }, 2000);   
        });
        promesa.then((data)=> {
            setItems(data); 
        })
    });


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-warning text-center" role= "alert">
                        <ItemList items ={items} />
                    </div>
                </div>
            </div>
            <ItemCount stock = {15}/>
        </div>
    )
}

export default ItemListContainer;