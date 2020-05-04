import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';

class AddToCartButton extends React.Component {
  constructor (props) {
    super(props);

    this.addBookToCart = this.addBookToCart.bind(this);

    this.state = {
      confirmation: false
    };
  }

  addBookToCart () {
    console.log('addBookToCart');

    //using dispatch method
    //this.props.dispatch(addToCart(this.props.book));
    //console.log(this.props.cart);

    //mapDispatchToProps
    this.props.addItemToCart(this.props.book);

    this.setState({ confirmation: true });
    setTimeout(() => {
      this.setState({ confirmation: false });
    }, 3000);
  }


  render () {
    let confirmation = <Confirmation confirmation={this.state.confirmation}/>;

    const addToCartButton =
        <button type="button" className="btn btn-primary btn-lg btn-block add-cart-btn" onClick={this.addBookToCart}>
          <i className="fas fa-shopping-cart"/>&nbsp;Add to cart
        </button>
    ;

    return (
      <div>
        {addToCartButton}
        {confirmation}
      </div>
    );
  }
}

function Confirmation (props) {
  if (props.confirmation === true) {
    return (
      <div className="alert alert-success add-cart-button-confirmation" role="alert">
        Item added to cart
      </div>
    );
  }

  return (<div/>);
}

function mapStateToProps (state) {
  return { cart: state };
}

const mapDispatchToProps = {
  addItemToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);

