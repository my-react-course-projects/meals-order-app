import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartState, setCartState] = useState(false);

  const showCartHandler = () => {
    setCartState(true);
  }

  const hideCartHandler = () => {
    setCartState(false);
  }

  return (
    <Fragment>
      { cartState && <Cart onClickClose={hideCartHandler} /> }
      <Header onClickCart={showCartHandler}/>
      <main>
          <Meals />
      </main>
    </Fragment>
  );
}

export default App;
