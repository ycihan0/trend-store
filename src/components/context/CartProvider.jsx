import { createContext } from "react";


export const CartContext = createContext();

const CartProviders = ({ children }) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: () => { },
    removeItem: () => { },
    clearItem: () => { },
  }
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProviders
