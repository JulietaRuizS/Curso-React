import React, { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState (1);
    
    const decrementarStock = () => {
        if(counter > 1) {
        setCounter (counter - 1);
        }
    }
    const incrementarStock = () => {
        if(counter < stock){
        setCounter (counter + 1);
        }
    }

    const onAdd = () => {
        console.log("Agregaste" + counter + "productos al Carrito!");
    }

    return(
            <div>
                <div className="row mb-3">
                    <div className="col-md-3 text-center">
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick = {()=> {decrementarStock}}> - </button>
                            <button type="button" className="btn btn-outline-primary"> {counter} </button>
                            <button type="button" className="btn btn-outline-primary" onClick = {()=> {incrementarStock}}> + </button>
                        </div> 
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-3 text-center">
                        <button type="button" className="btn btn-outline-primary" onClick ={()=> {onAdd}}>Agregar al Carrito</button>
                    </div>
                </div>
            </div> 
    )
}
export default ItemCount;
