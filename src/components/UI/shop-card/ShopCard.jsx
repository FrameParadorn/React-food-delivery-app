import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

const ShopCard = (props) => {
  const { id, title, profile_image } = props.item;


  return (
    <div className="product__item">
      <div className="product__img">
        <img src={profile_image} alt="product-img" className="w-50 h-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
          <Link to={`/shop/${id}`}>
            <div className=" d-flex align-items-center justify-content-between ">
                <button className="addTOCart__btn" style={{ width: "100%"}}>
                  เลือก
                </button>
            </div>
          </Link>
      </div>
    </div>
  );
};

export default ShopCard;
