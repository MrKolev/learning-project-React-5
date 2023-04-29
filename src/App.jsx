import { Fragment, useState } from "react";
import { Header } from "./components/Header";
import { Mealis } from "./components/Meals";
import { Cart } from "./components/Cart/Cart";



function App() {
 const [cartIsShown, setCartIsShown] = useState(false);

 const showCartHeader = ()=> {
  setCartIsShown(true);
 };
 const hideCartHeader = ()=> {
  setCartIsShown(false);
 };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHeader} />}
      <Header onShowCart={showCartHeader}/>
      <main>
        <Mealis/>
      </main>
    </Fragment>
  );
}

export default App;
