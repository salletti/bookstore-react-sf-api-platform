import React from "react";
import BookImage from "./BookImage";
import AddToCartButton from "../Cart/AddToCartButton";

export default class Book extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      stock: 0
    };
  }

  componentDidMount () {
    this.setState({stock: this.props.book.stock});

    const u = new URL(this.props.mercureUrl);
    u.searchParams.append('topic', process.env.BOOK_API_URL + 'books/' + this.props.book.id);

    const es = new EventSource(u);

    es.onmessage = e => {
      const book = JSON.parse(e.data);
      this.setState({stock: book.stock});

      console.log(book);
    };
  }

  render () {
    let book = this.props.book;

    const imagePath = this.props.imagePath;
    book.imagePath = imagePath;

    let addToCartButton = (this.state.stock > 0) ? <AddToCartButton book={book} /> : '';

    return (
      <div className="jumbotron">
        <div className="col-sm-12 mx-auto">
          <div className="row">
            <div className="col-sm-4">
              <BookImage imagePath={imagePath}/>
            </div>
            <div className="col">
              <h4 className="row book-detail">
                <i className="fas fa-book"/>
                &nbsp;{book.title}
              </h4>
              <h4 className="row book-detail">
                <i className="fas fa-user"/>
                &nbsp;{book.author}
              </h4>
              <div className="row book-detail">
                <p className="lead">{book.description}</p>
              </div>

              <div className="row book-detail">
                <i className="fas fa-barcode"/>
                &nbsp;{book.isbn}
              </div>
              <div className="row book-detail">
                <i className="fas fa-tags"/>
                &nbsp;{book.price} $
              </div>
              <div className="row book-detail">
                <StockInfo stock={this.state.stock}/>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <div className="row add-cart-button">
                    {addToCartButton}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function StockInfo (props)
{
  if (props.stock > 0) {
    return <button type="button" className="btn btn-success">
      <i className="fas fa-check"/>&nbsp;
      In stock <span className="badge badge-light">{props.stock}</span>
      <span className="sr-only">stock</span>
    </button>;
  }

  return <button type="button" className="btn btn-danger">
    <i className="fas fa-check"/>&nbsp;
    Out of stock
  </button>;
}
