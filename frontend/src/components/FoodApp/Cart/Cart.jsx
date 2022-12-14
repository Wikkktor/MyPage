import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import { FoodAppContext } from "../../../context/FoodAppContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(FoodAppContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleRemove = id => {
    cartCtx.removeItem(id);
  }

  const handleAdd = item => {
    cartCtx.addItem({...item, amount: 1});
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleRemove.bind(null, item.id)}
          onAdd={handleAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hide={props.hide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
