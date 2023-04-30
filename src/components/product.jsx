import "./product.css";
import { useEffect, useState } from "react";
import QuantityPicker from "./quantitypicker";
//import the UseEffect and create the hook

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  useEffect(function () {}, []);

  function handleQuantity(qty) {
    // console.log("quantity changed", qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label>
          Total <span className="total">${props.data.price * quantity}</span>
          {/* remove the "toFixed" because it will parse it out */}
        </label>
        <label>
          Price <span className="Price">${props.data.price.toFixed(2)}</span>
        </label>
      </div>

      <div className="controls">
        <QuantityPicker onQuantityChange={handleQuantity} />
        <button className="btn btn-dark">Add</button>
        <button className="btn btn-dark">Delete</button>
      </div>
    </div>
  );
}

export default Product;

//Render the product in the Catalog 5 times
//Render the price and the total from each product
