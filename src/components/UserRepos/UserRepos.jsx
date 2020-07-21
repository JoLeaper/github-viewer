import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = ({ userReposArray }) => (
  <>
    <h1>List of Repos</h1>
    <ul>
      {userReposArray.map(repo => {
        return <li key={repo}><a href={repo}>{repo}</a></li>;
      })}
    </ul>
  </>
);

UserRepos.propTypes = {
  userReposArray: PropTypes.array
};
export default UserRepos;
