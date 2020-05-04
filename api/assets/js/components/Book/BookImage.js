import React from "react";

export default class BookImage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if ('' !== this.props.imagePath) {
      return (
        <div className="col">
          <img id="cover-book" src={this.props.imagePath} className="align-self-center mr-3 img-fluid"
               alt={this.props.imagePath}/>
        </div>
      );
    }

    return (<div className="col"/>);
  }
}
