import React, { Component } from 'react';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleApply(this.props.id);
    this.props.applyForJerb(this.props.id);
  }

  render() {
    let style = {};
    let button;

    // If job cards are being rendered through a single company card, do not show the apply buttons
    if (!this.props.companyView) {
      if (this.props.applied.includes(this.props.id)) {
        button = (
          <button disabled="disabled" className={'btn-success'}>
            APPLIED
          </button>
        );
      } else {
        button = (
          <button onClick={this.handleSubmit} className={'btn-danger'}>
            APPLY
          </button>
        );
      }
    }

    return (
      <div className="JobCard card" style={style}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Salary: {this.props.salary}</p>
          <p className="card-text">Equity: {this.props.equity}</p>
          {button}
        </div>
      </div>
    );
  }
}

export default JobCard;
