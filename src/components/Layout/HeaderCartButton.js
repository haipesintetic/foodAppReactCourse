import React, { useContext } from "react";
import CardIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCardItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
}
export default HeaderCartButton;
