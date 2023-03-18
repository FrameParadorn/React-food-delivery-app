import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ShopCard = (props) => {
  const { id, title, profile_image, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        profile_image,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={profile_image} alt="product-img" className="w-50 h-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <button className="addTOCart__btn" style={{ width: "100%"}} onClick={addToCart}>
            เลือก
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
