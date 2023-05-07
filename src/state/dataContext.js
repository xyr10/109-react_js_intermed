import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    shoppingList: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},


});

export default DataContext;