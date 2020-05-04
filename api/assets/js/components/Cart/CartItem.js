import React from 'react';
import {connect} from "react-redux";
import {removeFromCart} from "../../actions/cart";

class CartItem extends React.Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange (event) {
    console.log(event.target.value);
  }

  removeItem () {
    console.log('removeItem');
    this.props.removeItemFromCart(this.props.id, this.props.quantity);
  }

  render () {
    return(
      <tr>
        <td>
          <img className='cart-book-image' src={this.props.image} alt={this.props.image}/>
        </td>
        <td>{this.props.title}</td>
        <td>In stock</td>
        <td>
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            value={this.props.quantity}
          />
        </td>
        <td className="text-right">{this.props.price} €</td>
        <td className="text-right">
          <button className="btn btn-sm btn-danger" onClick={this.removeItem}>
            <i className="fa fa-trash"/>
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = {
  removeItemFromCart: removeFromCart
};

export default connect(null, mapDispatchToProps)(CartItem);
