import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  function handleProductText(e) {
    const text = e.target.value;
    const name = e.target.name;

    // create copy, modify the copy, set the copy back
    // HW: What is the three dots ...? "spread new object"

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function saveProduct(e) {
    console.log(product);

    // create copy, modify the copy, set the copy back
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
    //this is used to SAVE all the products in the array
  }

  const handleCouponText = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    // create copy, modify the copy, set the copy back
    // HW: What is the three dots ...? "spread new object"

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const saveCoupon = () => {
    console.log(coupon);

    // create copy, modify the copy, set the copy back
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
    //this is used to SAVE all the coupons in the array
  };

  return (
    <div className="page admin">
      <h2>Store Administration</h2>

      <div className="page admin">
        <section id="secProducts">
          <h4>Create Products</h4>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              onBlur={handleProductText}
              classname="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              name="category"
              onBlur={handleProductText}
              classname="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              onBlur={handleProductText}
              classname="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              name="image"
              onBlur={handleProductText}
              classname="form-control"
            />
          </div>

          <div className="mb-3 text-center">
            <button onClick={saveProduct} className="btn btn-dark">
              Save Product
            </button>
          </div>

          <ul className="prod-list">
            {allProducts.map((prod) => (
              <li key={prod.title}></li>
            ))}
          </ul>
        </section>

        <section id="secCoupons">
          <h4>Create Coupons</h4>

          <div className="mb-3">
            <label className="form-label">Code</label>
            <input
              type="text"
              name="code"
              onBlur={handleProductText}
              classname="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Discount</label>
            <input
              type="number"
              name="discount"
              onBlur={handleProductText}
              classname="form-control"
            />
          </div>

          <div className="mb-3 text-center">
            <button onClick={saveCoupon} className="btn btn-dark">
              Save Coupon
            </button>
          </div>

          <ul className="coupon-list">
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admin;
