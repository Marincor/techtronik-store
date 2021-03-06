import Header from "./components/Header";
import Mouses from "./components/Mouses";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { GlobalStyle } from "./assets/css/GlobalStyles";
import Home from "./components/HomePage/index.jsx";
import { ItemsProvider } from "./contexts/items";
import { LoadingProvider } from "./contexts/loading";
import { CartProvider } from "./contexts/cart";
import Keyboards from "./components/Keyboards";
import Headphones from "./components/Headphones";
import MousePads from "./components/MousePads";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      <ItemsProvider>
        <LoadingProvider>
          <CartProvider> 

          <GlobalStyle />
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/mouses">
                <Mouses />
              </Route>
              <Route exact path="/keyboards">
                <Keyboards />
              </Route>
              <Route exact path="/headphones">
                <Headphones />
              </Route>
              <Route exact path="/mousepads">
                <MousePads />
              </Route>
              <Route exact path="/cart">
                <CartPage />
              </Route>
            </Switch>
          </Router>
          </CartProvider>
        </LoadingProvider>
      </ItemsProvider>
    </>
  );
}

export default App;
