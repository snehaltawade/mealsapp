import { useState } from 'react';
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {
  const [CartVisible, setCart]=useState(false);

  const showCartHandler=()=>{
    setCart(true);
  }

  const hideCartHandler = ()=>{
    setCart(false);
  }
  return (
    <CartProvider> 
      {CartVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
