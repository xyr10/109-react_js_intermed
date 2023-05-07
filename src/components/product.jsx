import DataContext from "../state/dataContext";
import "./product.css";
import { useEffect, useState, useContext } from "react";
import QuantityPicker from "./quantitypicker";
//import the UseEffect and create the hook

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const globalAdd = useContext(DataContext).addProductToCart;
  const globalDelete = useContext(DataContext).deleteProductFromCart;
  const cart = useContext(DataContext).cart;

  useEffect(function () {
    //when the component load
    console.log("hello, i'm a product");
  }, []);

  function handleQuantity(qty) {
    // console.log("quantity changed", qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function handleAdd() {
    console.log("adding", props.data.title);
    const existingProduct = cart.find((p) => p._id === props.data._id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      globalAdd({ ...props.data, quantity: quantity });
    }
  }

  function handleDelete() {
    console.log("subtracting", props.data.title);
    const existingProduct = cart.find((p) => p._id === props.data._id);
    if (existingProduct) {
      existingProduct.quantity -= quantity;
    } else {
      globalDelete({ ...props.data, quantity: quantity });
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
            Price <span className="price">${props.data.price.toFixed(2)}</span>
          </label>
        </div>

        <div className="controls">
          <QuantityPicker onQuantityChange={handleQuantity} />
          <button onclick="handleAdd" classname="btn btn-sm btn-success">
            Add
          </button>
          <button onclick="handleDelete" classname="btn btn-sm btn-fail">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

//Render the product in the Catalog 5 times
//Render the price and the total from each product
