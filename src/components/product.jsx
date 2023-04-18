import "./product.css";
import { useEffect } from "react";
import QuantityPicker from './quantitypicker';
//import the UseEffect and create the hook

function Product(props) {

    useEffect (function(){

    },[]);

    return(
        <div className="product">

            <img src={"/images/"+props.data.image} alt="" />

            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>Total {props.data.price.toFixed(2)}</label>
                <label>Price {props.data.price.toFixed(2)}</label>
            </div>
            < QuantityPicker />
            <button>Add</button>
            <button>Delete</button>


        </div>
    )

}

export default Product;

//Render the product in the Catalog 5 times
//Render the price and the total from each product