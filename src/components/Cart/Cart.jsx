import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData.js";
import Offcanvas from "../UI/Offcanvas.jsx";
const Cart = ({ hideCartHandler }) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
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
        <span>10 ₺</span>
      </div>
      <div className="actions">
        <button className="cart-order">Order</button>
        <button className="cart-clear">Clear</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
