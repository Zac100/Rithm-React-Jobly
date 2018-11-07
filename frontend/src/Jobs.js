import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
import Search from './Search';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobList: [] };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // search
  handleSearch(searchResult) {
    let jobList = searchResult.map(job => {
      return (
        <JobCard
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      );
    });

    this.setState(st => ({
      jobList
    }));
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    let jobList = jobs.map(job => {
      return (
        <JobCard
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      );
    });
    this.setState({ jobList });
  }

  render() {
    return (
      <div className="Jobs">
        <div>
          <Search handleSearch={this.handleSearch} companySearch={false}/>
        </div>
        {this.state.jobList}
      </div>
    );
  }
}

export default Jobs;
