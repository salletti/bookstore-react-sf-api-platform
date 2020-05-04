import React from 'react';
import {Link} from "react-router-dom";

export default class CartEmpty extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div className="jumbotron">
        <h1 className="display-4">My bookstore cart</h1>
        <p className="lead">Your cart is empty</p>
        <hr className="my-4" />
          <p>Start to search your books</p>
          <Link to="/bookstore" className="btn btn-primary btn-lg" href="#" role="button">Shopping</Link>
      </div>
    );
  }
}
