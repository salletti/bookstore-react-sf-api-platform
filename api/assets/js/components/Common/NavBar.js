import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav text-right">
            <li className="nav-item">
              <Link to="/bookstore"><i className="fas fa-home"/>&nbsp;Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookstore/cart">
                <i className="fas fa-shopping-cart"/>&nbsp;{this.props.cart.total}
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="">myBookstore Powerd by</a>
          <a className="navbar-brand" href="https://symfony.com/" target="_blank" rel="noopener noreferrer">
            <img src={'/img/symfony-logo.png'} alt="symfony-logo" className="demo-logo" />
          </a>
          <a className="navbar-brand" href="https://api-platform.com/" target="_blank" rel="noopener noreferrer">
            <img src={'/img/api-platform-logo.png'} alt="api-platform-logo" className="demo-logo" />
          </a>
          <a className="navbar-brand" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={'/img/react-logo.png'} alt="react-logo" className="demo-logo" />
          </a>
          <a className="navbar-brand" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            <img src={'/img/redux-logo.png'} alt="redux-logo" className="demo-logo" />
          </a>
          <a className="navbar-brand" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
            <img src={'/img/bootstrap-logo.png'} alt="bootstrap-logo" className="demo-logo" />
          </a>
          <a className="navbar-brand" href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
            <img src={'/img/docker-logo.png'} alt="docker-logo" className="demo-logo" />
          </a>
        </div>
      </nav>
    );
  }
}

function mapStateToProps (state) {
  return { cart: state };
}

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
