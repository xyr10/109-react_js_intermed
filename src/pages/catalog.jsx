import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  //practice
  const [category, setCategory] = useState([]);
  const [prodsToDisplay, setprodsToDisplay] = useState([]);

  //when component loads, do something
  useEffect(function () {
    // console.log("catalog loaded");
    loadCatalog();
  }, []);
  async function loadCatalog() {
    //get the product from the service
    let service = new DataService();

    let prods = await service.getProducts();
    console.log(prods);
    setProducts(prods);
    setprodsToDisplay(prods);

    let cats = await service.getCategories();
    setCategory(cats);
  }

  //below h5, create a button when clicked, call a test function with console.log message

  //render each category into a button

  function filter(category) {
    console.log(category);

    let list = [];

    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setprodsToDisplay(list);
  }

  return (
    <div className="page catalog">
      <h2>Check out our amazing "kicks" catalog!</h2>
      <h5>We have {prodsToDisplay.length} products !</h5>
      {category.map((c) => (
        <button
          key={c}
          onClick={() => filter(c)}
          className="btn btn-sm btn-primary btn-filter"
        >
          {c}
        </button>
      ))}
      <br />
      {prodsToDisplay.map((p) => (
        <Product key={p._id} data={p} /> //you don't have to call it data, you set the prop name
      ))}
    </div>
  );
};

export default Catalog;
