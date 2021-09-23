import Header from "./components/Header";
import Mouses from "./components/Mouses";
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from "react-router";
import { GlobalStyle } from "./assets/GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>


      <Header />
      <Switch> 
        <Route path='/mouses'> 
          
      <Mouses />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
