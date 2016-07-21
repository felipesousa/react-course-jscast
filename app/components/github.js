var React 		 = require('react');
var SearchUser = require('./searchuser');
var UserInfo   = require('./userinfo');

var Github = React.createClass({
	getInitialState: function (){
		return {
			user: null,
			repos: []
		}
	},

	updateUser: function (user){
		this.setState({user: user});
	},

	updateRepositorys: function (repos){
		this.setState({repos: repos});
	},

	render: function (){
		return (
			<div className="container" >
				<SearchUser 
					updateUser={this.updateUser}
					updateRepositorys={this.updateRepositorys}
				/>
				<UserInfo 
					user={this.state.user}
					repos={this.state.repos}
				/>
			</div>
		)
	}
});

module.exports = Github;