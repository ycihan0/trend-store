import { useState } from "react"
import Cart from "./components/Cart/Cart"
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"

function App() {
  const [cartIsShow, setCartIsShow]=useState(false);
  const showCartHandler=()=>{
    setCartIsShow(true)
  }
  const hideCartHandler=(e)=>{
    e.preventDefault()// a etikitei olduğu için syfayı yenilemesin diye koyduk
    setCartIsShow(false)
  }
  return (

    <div>
    {cartIsShow && <Cart hideCartHandler={hideCartHandler}/>}
     <Header showCartHandler={showCartHandler}/>
     <Hero/>
     <Products/>
    </div>

  )
}

export default App
