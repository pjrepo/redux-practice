import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, img, title, price, amount } = props;

  const dispatch = useDispatch();

  const removeHandler = () => dispatch(removeItem(id));
  const increaseHandler = () => dispatch(increaseAmount({ id }));
  const decreaseHandler = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(decreaseAmount({ id }));
  };

  return (
    <React.Fragment>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button className="remove-btn" onClick={removeHandler}>
            remove
          </button>
        </div>
        <div>
          <button className="amount-btn" onClick={increaseHandler}>
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={decreaseHandler}>
            <ChevronDown />
          </button>
        </div>
      </article>
    </React.Fragment>
  );
};

export default CartItem;
