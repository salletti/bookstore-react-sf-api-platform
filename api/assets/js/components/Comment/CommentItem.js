import React from "react";

export default class CommentItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const comment = this.props.comment;

    return (
      <div className="container mt-3">
        <div className="media border p-3">
          <div className="media-body">
            <h2>{comment.title}</h2>
            <h4>{comment.name} <small><i>Posted on {comment.createdAt}</i></small></h4>
            <p>{comment.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
