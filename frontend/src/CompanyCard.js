import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

class CompanyCard extends Component {
  render() {
    let style = {};
    return (
      <Link to={`/companies/${this.props.handle}`}>
        <div className="CompanyCard card container" style={style}>
          <div className="card-body">
            
            <div className="card-text-container">
            <h5 className="card-title float-left">{this.props.name}</h5>
            {/* <br/> */}
            <p className="card-text ">{this.props.description}</p>
            </div>
            <img
              className="float-right job-image"
              alt={this.props.handle}
              src="https://visualpharm.com/assets/845/Badge-595b40b85ba036ed117dbf07.svg"
            />
          </div>
        </div>
      </Link>
    );
  }
}

export default CompanyCard;
