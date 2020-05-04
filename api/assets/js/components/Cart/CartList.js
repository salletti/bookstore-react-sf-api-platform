import React from 'react';
import { connect } from 'react-redux';
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

class CartList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      itemList: [],
      total: 0,
      subTotal: 0,
      shipping: 6.99
    };
  }

  render () {
    const cartItems = this.props.cart.books.map((book) =>
      <CartItem
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        price={book.price}
        image={book.imagePath}
        quantity={book.quantity}
      />
    );

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col"/>
            <th scope="col">Book</th>
            <th scope="col">Available</th>
            <th scope="col" className="text-center">Quantity</th>
            <th scope="col" className="text-right">Price</th>
            <th/>
          </tr>
          </thead>
          <tbody>
            {cartItems}
            <CartTotal cart={this.props.cart}/>
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return { cart: state };
}

export default connect(mapStateToProps)(CartList);
