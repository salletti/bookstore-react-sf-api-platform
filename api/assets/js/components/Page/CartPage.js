import React from 'react';
import CartList from "../Cart/CartList";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CartEmpty from "../Cart/CartEmpty";

class CartPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let cartContent = <CartContent total={this.props.cart.total} />;

    return (
      <main role="main">
        <div className="jumbotron">
          <div className="row">
            <div className="col-12">
              {cartContent}
            </div>
            <div className="col mb-2">
              <CartFooterButtons total={this.props.cart.total} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function CartContent (props) {
  console.log(props.total);
  if (props.total > 0) {
    return <CartList />;
  }

  return <CartEmpty />;
}

function CartFooterButtons (props) {
  if (props.total === 0) {
    return <div/>;
  }

  return <div className="row">
    <div className="col-sm-12  col-md-6">
      <Link to="/bookstore">
        <button className="btn btn-primary btn-lg btn-block">Continue Shopping</button>
      </Link>
    </div>
    <div className="col-sm-12 col-md-6 text-right">
      <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
    </div>
  </div>;
}

function mapStateToProps (state) {
  return {cart: state};
}

export default connect(mapStateToProps)(CartPage);
