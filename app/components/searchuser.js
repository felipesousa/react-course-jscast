var React = require('react');
var githubService = require('../services/githubUser');

var SearchUser = React.createClass({
	handlerSubmit: function (e) {
		e.preventDefault();

		githubService.inforByUsername(this.refs.username.value)
			.then(function (res) {
				this.props.updateUser(res.data);
			}.bind(this));

		githubService.reposByUsername(this.refs.username.value)
			.then(function (res) {
				this.props.updateRepositorys(res.data);
			}.bind(this));
	},

	render: function () {
		return (
			<div className="jumbotron">
				<h2>GitHub Profile</h2>

				<div className="row">
					<form onSubmit={this.handlerSubmit}>
						<div className="form-group">
							<label>Username: </label>
							<input
								ref="username"
								type="text" 
								className="form-control"
								placeholder="ex: felipesousa" />
						</div>

						<button 
							type="submit"
						  className="btn btn-primary"> Search </button>
					</form>
				</div>
			</div>
		)
	}
});

SearchUser.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepositorys: React.PropTypes.func.isRequired
}
module.exports = SearchUser;