import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from './JoblyApi';
import Search from './Search';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companyList: [], loading:true };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // search function, adds default image because image URL on server is broken.
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

  //on first mount, load all company data from server
  //set state to array of components of CompanyCards
  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    let companyList = companies.map(company => {
      return (
        <CompanyCard
          handle={company.handle}
          key={company.handle}
          name={company.name}
          description={company.description}
          image={`https://images-na.ssl-images-amazon.com/images/I/41lbqx87syL.jpg`}
        />
      );
    });
    this.setState({ companyList,loading:false });
  }

  render() {
    return (
      <div className="Companies">
        <div>
          <Search handleSearch={this.handleSearch} companySearch={true} />
        </div>
        {this.state.loading ? <h1>...loading</h1>:this.state.companyList}
      </div>
    );
  }
}

export default Companies;
