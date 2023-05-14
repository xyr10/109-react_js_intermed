import axios from 'axios';

let catalog = [
    {
        "title": "Jordan 1",
        "price": 150.00,
        "category": "Hi-top",
        "image": "Jordan1.jpg",
        "_id": "1",
    },
    {
        "title": "Jordan 4",
        "price": 250.00,
        "category": "Mid-top",
        "image": "Jordan4.jpg",
        "_id": "2",
    },
    {
        "title": "Jordan 5",
        "price": 300.00,
        "category": "Hi-top",
        "image": "Jordan5.jpg",
        "_id": "3",
    },
    {
        "title": "Jordan 11",
        "price": 600.00,
        "category": "Low-top",
        "image": "Jordan11.jpg",
        "_id": "4",
    },
    {
        "title": "Jordan 13",
        "price": 200.00,
        "category": "Mid-top",
        "image": "Jordan13.jpg",
        "_id": "5",
    },
];

class DataService {
    serverURL = "http://127.0.0.1:5000";

    async getProducts() {
            // use this return to run FE without a BE
            // return catalog;

            // call server to retrieve products
            let results = await axios.get(this.serverURL + "/api/catalog");
            return results.data;

    
    }

    async getCategories() {
            let results = await axios.get(this.serverURL + "/api/categories");
            return results.data;
    }

    async getCoupons() {
        let results = await axios.get(this.serverURL + "/api/coupons");
        return results.data;
    }

    async saveProduct(prod) {
        let results = await axios.post(this.serverURL + "/api/catalog", prod);
        return results.data;
    }

    async saveCoupon(coupon) {
        let results = await axios.post(this.serverURL + "/api/coupons", coupon);
        return results.data;
    }

    async deleteCoupon(code) {
        let results = await axios.delete(this.serverURL + "/api/coupons/" + code);
        return results.data;
    }

    async deleteProduct(title) {
        let results = await axios.delete(this.serverURL + "/api/products/" + title);
        return results.data;
    } 

    async deleteProductById(id) {
        let results = await axios.delete(this.serverURL + "/api/products/byid" + id);
        return results.data;
    } 
}

export default DataService;