import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '05f02490acb6f6f2f2fc',
      clientSecret: '967a05e721c3d509f0c76fe72877c3f72b4e8523',
      count: 5,
      sort: 'created: asc',
      repos: []
    };
  }

  componentDidMount() {
    const username = this.props.profile.githubusername;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => this.setState({ repos: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    const { profile } = this.props;
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repos.map(repo => (
          <div key={repo.id} className="card card-body mb-2">
            <div className="row">
              <div className="col-md-6">
                <h4>
                  <a href={repo.html_url} className="text-info" target="_blank">
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div className="col-md-6">
                <span className="badge badge-info mr-1">
                  Stars: {repo.stargazers_count}
                </span>
                <span className="badge badge-secondary mr-1">
                  Watchers: {repo.watchers_count}
                </span>
                <span className="badge badge-success">
                  Forks: {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProfileGithub;
