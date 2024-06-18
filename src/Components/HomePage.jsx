import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 3;
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/products/?page=${currentPage}&limit=${productsPerPage}`
    );
    setProducts(res.data.data);
    setTotalProducts(res.data.totalCount);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handleOnclickItem = (data) => {
    navigate("/productDetails", { state: data });
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: 10 }}>
        All Products list with pagination : {productsPerPage}
      </h3>
      <div className="grid">
        {products.map((product) => (
          <div key={product._id} className="product">
            <img src={product.imageUrl} width={300} height={300} />
            <h2 style={{ marginTop: 5 }}>{product.name}</h2>
            <p>Main Price:{product.mainPrice}</p>
            <p>Discounted Price:{product.discountedPrice}</p>
            <p className="price">
              Offer Price Rs {product.discountedPrice}{" "}
              <span className="original-price">Rs {product.mainPrice}</span>{" "}
              {((product.mainPrice - product.discountedPrice) /
                product.mainPrice) *
                100}
              % OFF
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                handleOnclickItem(product);
              }}
              style={{ cursor: "pointer" }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <h3> Pagination :&nbsp;</h3>{" "}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductList;
