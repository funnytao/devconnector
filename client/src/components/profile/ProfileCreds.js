import React, { Component } from 'react';
import Moment from 'react-moment';
import isEmpty from '../../validation/isEmpty';

class ProfileCreds extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          <ul className="list-group">
            {profile.experience.map(exp => (
              <li className="list-group-item" key={exp._id}>
                <h4>{exp.company}</h4>
                <p>
                  <Moment format="MMM YYYY">{exp.from}</Moment> -&nbsp;
                  {isEmpty(exp.to) ? (
                    'Present'
                  ) : (
                    <Moment format="MMM YYYY">{exp.to}</Moment>
                  )}
                </p>
                <p>
                  <strong>Position: </strong>
                  {exp.title}
                </p>
                {isEmpty(exp.description) ? null : (
                  <p>
                    <strong>Description: </strong>
                    {exp.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          <ul className="list-group">
            {profile.education.map(edu => (
              <li className="list-group-item">
                <h4>{edu.school}</h4>
                <p>
                  <Moment format="MMM YYYY">{edu.from}</Moment> -&nbsp;
                  {isEmpty(edu.to) ? (
                    'Present'
                  ) : (
                    <Moment format="MMM YYYY">{edu.to}</Moment>
                  )}
                </p>
                <p>
                  <strong>Degree: </strong>
                  {edu.degree}
                </p>
                {isEmpty(edu.fieldofstudy) ? null : (
                  <p>
                    <strong>Field Of Study: </strong>
                    {edu.fieldofstudy}
                  </p>
                )}
                {isEmpty(edu.description) ? null : (
                  <p>
                    <strong>Description:</strong>
                    {edu.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
