import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-center">
          <h3>redux toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
