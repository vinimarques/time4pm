var React = require('react');

var getToken = React.createClass({
	getInitialState () {
		return {
			apiToken: ''
		};
	},
	handleChange: function (event) {
		this.setState({
			apiToken: event.target.value
		});
	},
	handleSubmit: function (event) {
		let apiToken = this.state.apiToken;

		if (localStorage && localStorage.apiToken)
			localStorage.apiToken = apiToken;

		event.preventDefault();
	},
	render: function() {
		return (
			<header className="header">
				<h1 className="header__title">
					<em className="icon-clock"></em>
					Time4PM
				</h1>
				<form className="header__token" onSubmit={this.handleSubmit}>
					Put your token here:
					<input type="text" name="token" value={this.state.apiToken} onChange={this.handleChange} />
					<button type="submit">Send</button>
				</form>
			</header>
		);
	}
});

module.exports = getToken;
