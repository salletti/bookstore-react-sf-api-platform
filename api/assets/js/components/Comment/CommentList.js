import React from "react";
import CommentItem from "./CommentItem";

export default class CommentList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  render () {
    return (
      <div className="jumbotron">
        <h2>Comments</h2>
        {
          this.props.comments.map((comment) =>
            <CommentItem
              key={comment.id}
              comment={comment}
            />
          )
        }
      </div>
    );
  }
}
