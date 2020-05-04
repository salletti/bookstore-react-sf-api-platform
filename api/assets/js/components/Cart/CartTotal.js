import React from 'react';

export default class CartTotal extends React.Component {
  constructor (props) {
    super(props);

    this.shipping = 5.50;

    this.calculateSubTotal = this.calculateSubTotal.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateSubTotal () {
    let subTotal = 0;
    this.props.cart.books.forEach(function (book) {
      subTotal = subTotal + book.quantity * book.price;
    });

    return subTotal.toFixed(2);
  }

  calculateTotal () {
    let total = this.calculateSubTotal() + this.shipping;

    return total.toFixed(2);
  }

  render () {

    const subTotal = this.calculateSubTotal();
    const total = (+subTotal + +this.shipping);

    return (
      <React.Fragment>
        <tr>
          <td/>
          <td/>
          <td/>
          <td/>
          <td>Sub-Total</td>
          <td className="text-right">{subTotal} €</td>
        </tr>
        <tr>
          <td/>
          <td/>
          <td/>
          <td/>
          <td>Shipping</td>
          <td className="text-right">{this.shipping} €</td>
        </tr>
        <tr>
          <td/>
          <td/>
          <td/>
          <td/>
          <td><strong>Total</strong></td>
          <td className="text-right"><strong>{total} €</strong></td>
        </tr>
      </React.Fragment>
    );
  }
}
