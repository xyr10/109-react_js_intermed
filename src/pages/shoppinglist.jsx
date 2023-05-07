import ShoppingListItem from "../components/product";
import { useState } from "react";
import "./shoppinglist.css";

const ShoppingList = () => {
  const [wishList, setWishList] = useState({});
  const [allWishList, setAllWishList] = useState([]);
  const [shoppingListItem, setShoppingListItem] = useState([]);

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

  function handleDelete(wishList) {
    console.log("deleting", wishList);
  }

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
          <ShoppingListItem
            key={wishList.name}
            data={wishList}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
