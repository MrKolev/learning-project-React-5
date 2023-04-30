import { useState } from "react";
import { Header } from "./components/Header";
import { Mealis } from "./components/Meals";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./store/cart-context";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHeader = () => {
    setCartIsShown(true);
  };
  const hideCartHeader = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHeader} />}
      <Header onShowCart={showCartHeader} />
      <main>
        <Mealis />
      </main>
    </CartProvider>
  );
}

export default App;
