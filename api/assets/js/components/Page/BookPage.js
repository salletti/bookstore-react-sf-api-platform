import React from "react";
import Book from "../Book/Book";
import Loader from "../Common/Loader";
import CommentList from "../Comment/CommentList";

import {UrlContext} from "../../app.js";

export default class BookPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      book: '',
      isLoaded: false,
      imagePath: '',
      comments: []
    };

    this.fetchJson = this.fetchJson.bind(this);
    this.updateComments = this.updateComments.bind(this);
  }

  async fetchJson (url, opts = {}) {
    const resp = await fetch(url, opts);
    return resp.json();
  }

  async componentDidMount () {
    //fetch book
    const bookJSON = await this.fetchJson('/books/' + this.props.match.params.id, {headers: {Preload: '/comments/*'}});
    this.setState({book: bookJSON, isLoaded: true});

    //fetch comments
    bookJSON.comments.forEach(async commentURL => {
      const comment = await this.fetchJson(commentURL);

      this.updateComments(comment);
    });

    //fetch image
    await fetch(bookJSON.image)
      .then(response => response.json())
      .then(data => {
        this.setState({imagePath: data.contentUrl});
      });
  }

  updateComments (comment) {
    let comments = this.state.comments;
    comments.push(comment);

    this.setState({comments: comments});
  }

  render () {
    const isLoaded = this.state.isLoaded;

    let imagePath = '';
    if (this.state.imagePath !== '') {
      imagePath = this.state.imagePath;
    }

    let comments = '';
    if (this.state.comments.length > 0) {
      comments = <CommentList comments={this.state.comments}/>;
    }
    if (isLoaded) {
      return (
        <main role="main">
          <UrlContext.Consumer>
            {value => <Book book={this.state.book} imagePath={imagePath} mercureUrl={value.mercure} apiUrl={value.api}/>}
          </UrlContext.Consumer>
          {comments}
        </main>
      );
    }

    return (
      <main role="main">
        <div className="jumbotron">
          <Loader/>
        </div>
      </main>);
  }
}
