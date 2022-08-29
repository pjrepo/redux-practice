import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/CartSlice";
import { closeModal } from "../features/modal/ModalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const confirmHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  const cancelHandler = () => dispatch(closeModal());

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={confirmHandler}>
            confirm
          </button>
          <button className="btn clear-btn" onClick={cancelHandler}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
