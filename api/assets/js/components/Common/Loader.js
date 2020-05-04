import React from 'react';

export default class Loader extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="col-sm-8 mx-auto" id="loader">
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div className="spinner-border ml-auto" role="status" aria-hidden="true"/>
        </div>
      </div>
    );
  }
}
