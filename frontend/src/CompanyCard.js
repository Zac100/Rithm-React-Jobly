import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyCard extends Component {
    
    render() {
        let style={
        }
    return (
        <Link to={`/companies/${this.props.handle}`}>
            <div className="CompanyCard card" style={style}>
            <div className="card-body">
                <img className='float-right' alt={this.props.handle} src={this.props.image}></img>
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.description}</p>
            </div>
            </div>
        </Link>
    );
    }
    }

export default CompanyCard;