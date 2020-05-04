import React from "react";
import {Link} from "react-router-dom";

//pippo
export default class BookListItem extends React.Component {
  constructor (props) {
    super(props);

    this.controller = new AbortController();
    this.signal = this.controller.signal;

    this._isMounted = false;

    this.state = {
      isHovered: false,
      imagePath: ''
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover () {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  componentDidMount () {
    fetch(this.props.image, {signal: this.signal}).then(response => response.json())
      .then(data => {
        this.setState({imagePath: data.contentUrl});
      })
      .catch(error => {
        if (error.name === 'AbortError') return;
        throw error;
      });
  }

  componentWillUnmount () {
    this.controller.abort();
  }

  render () {
    const isActive = this.state.isHovered ? "active" : "";

    return (
      <li className={`d-flex justify-content-between align-items-center list-group-item ${isActive}`} onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}>
        <Link to={`/bookstore/book/${this.props.id}`}>
          {this.props.title} <br/>
          <small>by {this.props.author}</small> <br/>
          <small>{this.props.commentsNumber} avis</small>
        </Link>
        <div>
          <img className="image-item" src={this.state.imagePath} alt={this.state.imagePath}/>
        </div>
      </li>
    );
  }
}
