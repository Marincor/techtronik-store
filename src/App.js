import Header from "./components/Header";
import Mouses from "./components/Mouses";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { GlobalStyle } from "./assets/css/GlobalStyles";
import Home from "./components/HomePage/index.jsx";
import { ItemsProvider } from "./contexts/items";
import { LoadingProvider } from "./contexts/loading";
import { CartProvider } from "./contexts/cart";

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
            </Switch>
          </Router>
          </CartProvider>
        </LoadingProvider>
      </ItemsProvider>
    </>
  );
}

export default App;
