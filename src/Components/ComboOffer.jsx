import React, { useEffect, useState } from "react";
import "./ComboProduct.css";
import axios from "axios";

const ComboProduct = () => {
  const [comboProduct, setComboProduct] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/comboProducts`);
    setComboProduct(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="combo-container">
      {comboProduct.map((item, index) => (
        <div key={index}>
          {index >0 && <hr/>}
          <br/>
          <div className="combo-header">
            <h2>Special Combo Curated For You</h2>
            <p style={{ fontWeight: "bold" }}>
              {item.products[0].name} With {item.products[1].name}
            </p>
          </div>
          <div className="combo-body">
            <div className="combo-item">
              <img
                src={item.products[0].imageUrl}
                alt={item.products[0].name}
              />
              <div className="combo-item-details">
                <p>{item.products[0].name}</p>
                <p>
                  Rs. {item.products[0].discountedPrice}{" "}
                  <span className="original-price">
                    Rs. {item.products[0].mainPrice}
                  </span>{" "}
                  <span className="discount">
                    {((item.products[0].mainPrice -
                      item.products[0].discountedPrice) /
                      item.products[0].mainPrice) *
                      100}
                    % off
                  </span>
                </p>
                <label>
                  Qty:{" "}
                  <select>
                    <option>1</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="plus-sign">+</div>
            <div className="combo-item">
              <img
                src={item.products[1].imageUrl}
                alt={item.products[1].name}
              />
              <div className="combo-item-details">
                <p>{item.products[1].name}</p>
                <p>
                  Rs. {item.products[1].discountedPrice}{" "}
                  <span className="original-price">
                    Rs. {item.products[1].mainPrice}
                  </span>{" "}
                  <span className="discount">
                    {((item.products[1].mainPrice -
                      item.products[1].discountedPrice) /
                      item.products[1].mainPrice) *
                      100}
                    % off
                  </span>
                </p>
                <label>
                  Qty:{" "}
                  <select>
                    <option>1</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="combo-summary">
              <div className="combo-extra-discount">
                <span className="discount-badge">Extra Discount</span>
                <p>
                  Buy this Combo & Get{" "}
                  {(
                    ((parseInt(
                      item.products[0].mainPrice + item.products[1].mainPrice
                    ) -
                      item.comboPrice) /
                      parseInt(
                        item.products[0].mainPrice + item.products[1].mainPrice
                      )) *
                    100
                  ).toFixed(0)}
                  % OFF
                </p>
              </div>
              <div className="combo-price">
                <p>
                  Offer Price{" "}
                  <span className="offer-price">Rs. {item.comboPrice}</span>
                </p>
                <p>
                  Rs. {item.totalPrice}{" "}
                  <span className="original-price">
                    Rs.{" "}
                    {item.products[0].mainPrice + item.products[1].mainPrice}
                  </span>
                </p>
              </div>
              <button className="add-to-cart">ADD COMBO TO THE CART</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComboProduct;
