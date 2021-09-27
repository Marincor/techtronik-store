import Header from "./components/Header";
import Mouses from "./components/Mouses";
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from "react-router";
import { GlobalStyle } from "./assets/css/GlobalStyles";
import Home from './components/HomePage/index.jsx'

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
