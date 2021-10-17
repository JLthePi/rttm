import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <div className="nav_bar" />
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
