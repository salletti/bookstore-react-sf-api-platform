import React from "react";

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    if (event.target.value.length === 0) {
      this.props.onEmptyInput(1);
    }

    if (event.target.value.length < 3) {
      return;
    }

    this.props.onSearching();
    this.setState({text: event.target.value});

    fetch('/books/search/' + event.target.value)
      .then(response => response.json())
      .then(data => {
        this.props.onTextChange(data['searchResult'], this.state.text);
      });
  }

  render () {
    const text = this.props.text;
    return (
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm"><i className="fas fa-search" aria-hidden="true"/></span>
        </div>
        <input type="text"
               value={text}
               onChange={this.handleChange}
               className="form-control"
               aria-label="Small"
               aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    );
  }
}
