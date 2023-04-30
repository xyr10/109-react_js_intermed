import "./quantitypicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  let [quantity, setQuantity] = useState(1);

  function increase() {
    console.log("button click");
    //quantity = 100; // Don't assign the value, we use the function setQuantity to determine this, so instead...
    //setQuantity(100);
    let val = quantity + 1;
    setQuantity(val);
    props.onQuantityChange();
  }

  function decrease() {
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
    props.onQuantityChange();
  }

  return (
    <div className="qt-picker">
      <button className="btn btn-dark" onClick={increase}>
        {" "}
        +{" "}
      </button>
      <label> {quantity} </label>
      <button className="btn btn-dark" onClick={decrease}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default QuantityPicker;
