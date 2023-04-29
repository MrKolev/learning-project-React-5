import { Fragment } from "react";
import { Header } from "./components/Header";
import { Mealis } from "./components/Meals";



function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Mealis/>
      </main>
    </Fragment>
  );
}

export default App;
