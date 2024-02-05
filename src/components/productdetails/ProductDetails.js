import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../../ApiService/Api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [ProductDetails, setProductDetails] = useState({});
  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);
  const handleBuyNow=()=>{
    window.confirm("The product is out of stock")
  }

  return (
    <div className="product-container">
      <img src={ProductDetails.image} alt="" className="product-img" />
      <div className="product-info">
        <h2 className="product-title">{ProductDetails.title}</h2>
        <p className="prduct-description">{ProductDetails.description}</p>
        <p className="product-price">${ProductDetails.price}</p>
        <button className="buynow-btn" onClick={handleBuyNow}>Buy Now</button>
        <Link to="/">
          <button className="goback-btn">Go back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
