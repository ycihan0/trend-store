import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider.jsx";
import "./Cart.css";

const Cart = ({ hideCartHandler }) => {
  const {items, totalAmount,clearItem} =useContext(CartContext)
  const hasItem = items.length>0;
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas hideCartHandler={hideCartHandler}>
      <div className="cart-head">
        <h2>My Cart</h2>
        <a href="/" className="cart-close" onClick={hideCartHandler}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Total</span>
        <span>{totalAmount.toFixed(2)} ₺</span>
      </div>
      {hasItem&&<div className="actions">
        <button className="cart-order">Order</button>
        <button className="cart-clear" onClick={clearItem}>Clear</button>
      </div>}
    </Offcanvas>
  );
};

export default Cart;
