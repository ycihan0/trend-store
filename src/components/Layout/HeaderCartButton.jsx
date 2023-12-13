import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"
const HeaderCartButton = ({showCartHandler}) => {
  return (
    <button className="button" onClick={showCartHandler}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
