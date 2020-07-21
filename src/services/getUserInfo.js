export const getUserInfo = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(res => {
      return {
        username: res.login,
        followers: res.followers,
        following: res.following,
        githubURL: res.html_url
      };
    });
};

// Display 
// the users name, 
// follower count, 
// following count, 
// and a link to their github profile.
