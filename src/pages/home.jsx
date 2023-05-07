import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <div className="top-banner">
        <div className="top-banner-text">
          <h1>Welcome to the Jordan Store</h1>
          <h2> Come to kick it.</h2>
        </div>

        <img src="/images/JordanHome.jpg" alt="shoe wall"></img>

        <div className="description">
          <p>Here you will find fresh kicks</p>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <h4>#1 sneakerhead shop in all of Chula Vista</h4>
          <Link className="btn btn-lg btn-dark" to="/catalog">
            Check out our latest catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
