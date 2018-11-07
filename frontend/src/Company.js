import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = { company: [] };
  }

  // Get info on the company and jobs for that company
  async componentDidMount() {
    let company = await JoblyApi.getCompany(this.props.match.params.handle);

    company.jobList = company.jobs.map(job => {
      return (
        <JobCard
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      );
    });
    this.setState({ company });
  }
  render() {
    return (
      <div className="Company">
        {this.state.company.name}
        <br />
        {this.state.company.description}
        {this.state.company.jobList}
      </div>
    );
  }
}

export default Company;
