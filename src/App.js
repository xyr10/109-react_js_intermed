
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import Cart from './pages/cart';
import ShoppingList from './pages/shoppinglist';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalState from './state/globalState';



function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar />

          <div className="container-fluid">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/shoppinglist' element={<ShoppingList />} />
            </Routes>
        </div> 
      
        <Footer />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;


/**
 * MyShopping List
 * Create a new page on the system that will allow the user to createa a list of products what he/she wishes to buy
 * 
 * The user will type the product name
 * press a button
 * 
 * the system will display the products on a bottom list
 * 
 * 1 - creat component / css
 * 2 - import on app.js and creat the route for it
 * 3 - create a menu link on navbar
 * 4 - work on the logic for the todoList/shopping list 
 *
 */