import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <div>This is Home</div>
            </Route>
            <Route path="/about">
              <div>This is About</div>
            </Route>
            <Route path="/contact">
              <div>This is Contact</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
