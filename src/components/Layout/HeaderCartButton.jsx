import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"
import { CartContext } from "../context/CartProvider";

const HeaderCartButton = ({showCartHandler}) => {
  const cartCtx = useContext(CartContext);
  const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem)=>{return accumulator+currentItem.amount},0)
  return (
    <button className="button" onClick={showCartHandler}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
