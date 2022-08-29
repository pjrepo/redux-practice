import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/ModalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const clearCartHandler = () => dispatch(openModal());

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h1>Your BAG</h1>
          <h2 className="empty-cart">Hey, It feels so light!</h2>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>YOUR BAG</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCartHandler}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
