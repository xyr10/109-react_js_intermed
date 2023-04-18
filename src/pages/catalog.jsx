import Product from '../components/product';
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
    
    const [products, setProducts] = useState ([]);

    //when component loads, do something
    useEffect(function () {
        // console.log("catalog loaded");
        loadCatalog();

    },[]);
    function loadCatalog() {
        //get the product from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);

    }

    //below h5, create a button when clicked, call a test function with console.log message

    function magicTest() {
        console.log("where the magic happens");
        setProducts([]); //clear the array of products
    }

    return (
        <div className = "page catalog">
            <h2>Check out our amazing "kicks" catalog!</h2>
            <h5>We have {products.length} products !</h5>
            <button onClick={magicTest}>Magic</button>;

            {products.map(p => <Product data={p}/>)};
            
        </div>
    );
}

export default Catalog;