import logo from './logo.svg';
import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import NewRecipe from './views/NewRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-recipe">Nueva receta</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li>  */}
            </ul>
          </nav>
          <Switch>
            <Route path="/new-recipe">
              <NewRecipe />
            </Route>
            <Route path="/edit/:id">
              <NewRecipe />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
