
let catalog = [
    {
        "title": "Jordan 1",
        "price": 150.00,
        "category": "Shoes",
        "image": "Jordan1.jpg",
        "_id": "1",
    },
    {
        "title": "Jordan 4",
        "price": 250.00,
        "category": "Shoes",
        "image": "Jordan4.jpg",
        "_id": "2",
    },
    {
        "title": "Jordan 5",
        "price": 300.00,
        "category": "Shoes",
        "image": "Jordan5.jpg",
        "_id": "3",
    },
    {
        "title": "Jordan 11",
        "price": 600.00,
        "category": "Shoes",
        "image": "Jordan11.jpg",
        "_id": "4",
    },
    {
        "title": "Jordan 13",
        "price": 200.00,
        "category": "Shoes",
        "image": "Jordan13.jpg",
        "_id": "5",
    },
];

class DataService {

        getProducts() {
            return catalog;

        }
}

export default DataService;
