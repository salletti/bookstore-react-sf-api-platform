import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import NavBar from './components/Common/NavBar';
import BookPage from "./components/Page/BookPage";
import HomePage from "./components/Page/HomePage";
import CartPage from "./components/Page/CartPage";
import cartItems from './reducers/cart';

require('../css/app.scss');
console.log('app.js');

export const UrlContext = React.createContext();

class App extends React.Component {
  render () {
    const store = createStore(
      cartItems,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
              <Route exact path="/bookstore">
                <HomePage />
              </Route>
              <Route exact path="/bookstore/cart">
                <CartPage />
              </Route>
              <Route path="/bookstore/book/:id"
                 render={
                   (props) =>
                     <UrlContext.Provider value={{mercure: process.env.MERCURE_SUBSCRIBE_URL, api: process.env.BOOK_API_URL}}>
                      <BookPage {...props} />
                     </UrlContext.Provider>
                 }
              />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App text='' />,
  document.getElementById('root')
);
