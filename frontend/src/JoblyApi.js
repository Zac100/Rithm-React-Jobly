import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    // for now, hardcode a token for user "testuser"
    let _token = localStorage.getItem('_token');

    console.debug('API Call:', endpoint, params, verb);

    let q;

    if (verb === 'get') {
      q = axios.get(`${BASE_URL}/${endpoint}`, {
        params: { _token, ...params }
      });
    } else if (verb === 'post') {
      q = axios.post(`${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === 'patch') {
      q = axios.patch(`${BASE_URL}/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //get all companies from server
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  //get specific company from server
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  //get searched companies from server based on search term.
  static async searchCompany(search) {
    let res = await this.request(`companies`, {
      search: `${search}`
    });
    return res.companies;
  }

  //get all jobs from server
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  //get searched jobs from server based on search term.
  static async searchJob(search) {
    let res = await this.request(`jobs`, {
      search: `${search}`
    });
    return res.jobs;
  }

  //login and return a token
  static async login(userData) {
    let res = await this.request(`login`, userData, 'post');
    return res.token;
  }

  //get specific user from server
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }

  static async signUp(userData) {
    let res = await this.request(`users`, userData, 'post');
    return res.token;
  }

  static async update(userData,username) {
    let res = await this.request(`users/${username}`, userData, 'patch');
    return res.user;
  }

  static async applyForJob(data,id) {
    let res = await this.request(`jobs/${id}/apply`, data, 'post');
    return res.user;
  }
}

export default JoblyApi;
