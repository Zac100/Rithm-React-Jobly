import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    let style = {};
    return (
      <div className="JobCard card" style={style}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Salary: {this.props.salary}</p>
          <p className="card-text">Equity: {this.props.equity}</p>
          <button disabled="disabled" className={'btn-danger'}>
            APPLY
          </button>
        </div>
      </div>
    );
  }
}

export default JobCard;
