import { useState } from "react";
import "./shoppinglist.css";

const ShoppingList = () => {
  const [wishList, setWishList] = useState({});
  const [allWishList, setAllWishList] = useState([]);

  const handleTextChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...wishList };
    copy[name] = value;
    setWishList(copy);
  };

  const addWishList = () => {
    console.log(wishList);

    let copy = [...allWishList];
    copy.push(wishList);
    setAllWishList(copy);
  };

  return (
    <div className="page shopping-list">
      <h1>Shopping List</h1>

      <div className="form">
        <input type="text" name="name" onBlur={handleTextChange} />
        <button className="btn btn-primary" onClick={addWishList}>
          Add Wish List
        </button>
      </div>

      <div className="list">
        {allWishList.map((wishList) => (
          <h5 key={wishList.name}>{wishList.name}</h5>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
