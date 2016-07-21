var axios = require('axios');

var githubService = {
	inforByUsername: function (username) {
		return axios.get('https://api.github.com/users/' + username);
	},
	reposByUsername: function (username) {
		return axios.get('https://api.github.com/users/' + username + '/repos')
	}

}
module.exports = githubService;