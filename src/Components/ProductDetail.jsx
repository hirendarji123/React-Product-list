import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { state } = useLocation();

  // Read values passed on state
  const {
    imageUrl,
    name,
    mainPrice,
    discountedPrice,
    productDetails,
    productStart,
  } = state;
  return (
    <>
      {state != null ? (
        <>
          <h1 style={{ textAlign: "center" }}>Product Details</h1>
          <div className="product-detail">
            <div className="product-image">
              <img src={imageUrl} alt="Product Details" />
            </div>
            <div className="product-info">
              <h1>{name}</h1>
              <p className="price">
                Offer Price Rs {discountedPrice}{" "}
                <span className="original-price">Rs {mainPrice}</span>{" "}
                {((mainPrice - discountedPrice) / mainPrice) * 100}% OFF
              </p>
              <div className="ratings">
                <span className="stars">{"★".repeat(productStart)}</span>{" "}
                {productStart}
                <div className="action-buttons">
                  <button className="add-to-cart">ADD TO CART</button>
                  <button className="buy-now">BUY NOW</button>
                </div>
              </div>
              <div className="product-overview">
                <h2>Product Overview</h2>
                <hr />
                <br />
                <ul>
                  {Object.keys(productDetails).map((key) => (
                    <li key={key}>
                      <strong>{key}:</strong> {productDetails[key]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>No Data Found</h1>
      )}
    </>
  );
};

export default ProductDetail;
