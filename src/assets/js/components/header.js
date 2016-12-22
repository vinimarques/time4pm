var React = require('react');
var Api = require('./api');

var Header = React.createClass({
	getInitialState () {
		return {
			user: {}
		};
	},
	componentDidMount(){
		Api.getUser( res => {
			this.setState({user: res});
		});
	},
	render: function() {
		return (
			<header className="header">
				<h1 className="header__title">
					<em className="icon-clock"></em>
					Time4PM
				</h1>
				<h2 className="header__user">
					<span className="header__user__name">{this.state.user['first-name']} {this.state.user['last-name']}</span>
					<div className="header__user__image"><img src={this.state.user['avatar-url']} alt={this.state.user['first-name']} /></div>
				</h2>
			</header>
		);
	}
});

module.exports = Header;
