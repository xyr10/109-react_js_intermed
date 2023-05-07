import "./cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function Cart() {
  const { cart, removeProductFromCart } = useContext(DataContext);

  return (
    <div className="cart">
      <h1>Welcome to the Jordan Store</h1>
      <h4> You have {cart.length} products in your cart</h4>
      <Link className="btn btn-primary" to="/catalog">
        Check Out our Catalog!
      </Link>

      <br />
      {cart.map((prod) => (
        <div key={prod._id}>
          <img src={"/images/" + prod.image} alt="" />
          <h6>{prod.title}</h6>
          <p>Quantity: {prod.quantity}</p>
          <label>{prod.price}</label>
          <button onClick={() => removeProductFromCart(prod._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
