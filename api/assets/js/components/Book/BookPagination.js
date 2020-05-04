import React from 'react';

export default class BookPagination extends React.Component {
  constructor (props) {
    super(props);

    this.perPage = 10;

    this.state = {
      currentPage: 1,
      totalPages: 0
    };

    this.changePage = this.changePage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  previousPage () {
    this.changePage(this.state.currentPage - 1);
  }

  nextPage () {
    this.changePage(this.state.currentPage + 1);
  }

  changePage (page) {
    console.log('onChangePage');
    this.props.onChangePage(page);
    this.setState({currentPage: page});
  }

  render () {
    //previous button
    let previousButton = '';
    if (this.state.currentPage > 1 && this.props.totalBooks > 0) {
      previousButton = <li className="page-item">
        <a className="page-link" href="#" onClick={() => this.changePage(this.state.currentPage - 1)}>Previous</a>
      </li>
      ;
    }

    let totalPages = Math.ceil(this.props.totalBooks / this.perPage);

    //pages
    let pages = [];
    if (this.props.totalBooks > 0) {
      for (let i = 1; i < totalPages; i++) {
        let classActive ='';
        if (i === this.state.currentPage) {
          classActive = 'active';
        }

        pages.push(
          <li className={`page-item ${classActive}`} key={i}>
            <a className="page-link" href="#" onClick={() => this.changePage(i)}>{i}</a>
          </li>
        );
      }
    }

    //next button
    let nextButton = '';
    if (this.state.currentPage < totalPages && this.state.currentPage > 0) {
      nextButton = <li className="page-item">
        <a className="page-link" href="#" onClick={() => this.changePage(this.state.currentPage + 1)}>Next</a>
      </li>
      ;
    }

    return (
        <ul className="pagination justify-content-center">
          {previousButton}
          {pages}
          {nextButton}
        </ul>
    );
  }
}
