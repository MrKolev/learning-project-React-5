import { Fragment } from "react";
import { Header } from "./components/Header";
import { Mealis } from "./components/Meals";
import { Cart } from "./components/Cart/Cart";



function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Mealis/>
      </main>
    </Fragment>
  );
}

export default App;
