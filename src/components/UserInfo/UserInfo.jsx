import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo: { username, followers, following, githubURL } }) => (
  <>
    <h1>Username: {username}</h1>
    <h1>Followers: {followers}</h1>
    <h1>Following: {following}</h1>
    <h1>githubURL: {githubURL}</h1>
  </>
);

UserInfo.propTypes = {
  userInfo: PropTypes.object
};

export default UserInfo;
