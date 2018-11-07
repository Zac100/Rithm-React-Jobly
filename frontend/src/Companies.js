import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from './JoblyApi';
import Search from './Search';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companyList: [] };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // search
  handleSearch(searchResult) {
    let companyList = searchResult.map(company => {
      return (
        <CompanyCard
          handle={company.handle}
          name={company.name}
          description={company.description}
          image={`https://images-na.ssl-images-amazon.com/images/I/41lbqx87syL.jpg`}
        />
      );
    });

    this.setState(st => ({
      companyList
    }));
  }

  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    let companyList = companies.map(company => {
      return (
        <CompanyCard
          handle={company.handle}
          name={company.name}
          description={company.description}
          image={`https://images-na.ssl-images-amazon.com/images/I/41lbqx87syL.jpg`}
        />
      );
    });
    this.setState({ companyList });
  }

  render() {
    return (
      <div className="Companies">
        <div>
          <Search handleSearch={this.handleSearch} companySearch={true} />
        </div>
        {this.state.companyList}
      </div>
    );
  }
}

export default Companies;
