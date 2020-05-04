import React from "react";
import BookList from "../Book/BookList";
import SearchInput from "../Search/SearchInput";
import Loader from "../Common/Loader";
import BookPagination from "../Book/BookPagination";

export default class HomePage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      books: [],
      totalBooks: 0
    };

    this.updateList = this.updateList.bind(this);
    this.searching = this.searching.bind(this);
    this.fetchBooks = this.fetchBooks.bind(this);

    console.log('HomePage.js');
  }

  async fetchBooks (page) {
    this.setState({isLoading: true});

    await fetch('/books?page=' + page)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          books: data['hydra:member'],
          totalBooks: data['hydra:totalItems']
        });
      });
  }

  async componentDidMount () {
    this.fetchBooks(1);
  }

  updateList (books, text) {
    this.setState(
      {
        isLoading: false,
        text: text,
        books: books,
      }
    );
  }

  searching () {
    this.setState({isLoading: true, books: [], totalBooks: 0});
  }

  render () {
    let content = <Loader />;
    if (this.state.isLoading !== true) {
      content = <BookList books={this.state.books}/>;
    }

    return (
      <main role="main">
        <div className="jumbotron">
          <div className="col-sm-8 mx-auto" id="search">
            <SearchInput onTextChange={this.updateList} onEmptyInput={this.fetchBooks} onSearching={this.searching}/>
          </div>
          {content}
          <div className="col-sm-8 mx-auto">
            <BookPagination totalBooks={this.state.totalBooks} onChangePage={this.fetchBooks}/>
          </div>
        </div>
      </main>
    );
  }
}
