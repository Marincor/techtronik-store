import Header from "./components/Header";
import Mouses from "./components/Mouses";
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from "react-router";
import { GlobalStyle } from "./assets/css/GlobalStyles";
import Home from './components/HomePage/index.jsx'
import { ItemsProvider } from "./contexts/items";

function App() {
  return (
    <>
    <ItemsProvider>

    <GlobalStyle />
    <Router>


      <Header />
      <Switch> 

        <Route exact path='/'>

              <Home />
          </Route>


        <Route exact path='/mouses'> 
          
      <Mouses />
        </Route>
      </Switch>
    </Router>
    </ItemsProvider>
    </>
  );
}

export default App;
