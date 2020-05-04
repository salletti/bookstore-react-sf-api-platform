import React from "react";
import BookListItem from "./BookListItem";

export default class BookList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const bookItems = this.props.books.map((book) =>
      <BookListItem
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        commentsNumber={book.comments.length}
        image={book.image}
      />
    );

    return (
        <div className="col-sm-8 mx-auto">
          <ul className="list-group">
            {bookItems}
          </ul>
        </div>
    );
  }
}
