import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
import Search from './Search';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobList: [], loading: true };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // search function for jobs. Changes state to
  //JobCard components of search results.
  handleSearch(searchResult) {
    let jobList = searchResult.map(job => {
      return (
        <JobCard
          key={job.id}
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

  //on mount, gets all jobs from server and
  //displays JobCard components
  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    let jobList = jobs.map(job => {
      return (
        <JobCard
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      );
    });
    this.setState({ jobList, loading: false });
  }

  render() {
    return (
      <div className="Jobs">
        <div>
          <Search handleSearch={this.handleSearch} companySearch={false} />
        </div>
        {this.state.loading ? <h1>loading...</h1> : this.state.jobList}
      </div>
    );
  }
}

export default Jobs;
