import "./navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";

function NavBar() {
  const cart = useContext(DataContext).cart;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          JordanStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/shoppinglist">
              Shopping List
            </Link>
          </li>

          <form className="d-flex">
            <Link to="/cart" className="btn btn-outline-success">
              {cart.length}
              Cart
            </Link>
          </form>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
