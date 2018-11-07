import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from './JoblyApi';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {companyList:[]};
  }

  async componentDidMount(){
    let companies = await JoblyApi.getCompanies();
    let companyList = companies.map((company)=>{
      return <CompanyCard handle={company.handle} name={company.name} description={company.description} image={`https://images-na.ssl-images-amazon.com/images/I/41lbqx87syL.jpg`} />
    });
    this.setState({companyList})
  }
  render() {
    return (
     
      <div className="Companies">
          {this.state.companyList}
      </div>
    );
  }
}

export default Companies;