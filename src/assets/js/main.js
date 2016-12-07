//Applications
var React = require('react');
var ReactDOM = require('react-dom');

const Header = require('./components/header');
const GetToken = require('./components/get-token');
let hasToken = (localStorage && localStorage.apiToken) ? true : false;

var Main = React.createClass({
	render: function() {
		if (hasToken) {
			return (
				<div>
					<Header />
				</div>
			);
		}
		else {
			return (
				<div>
					<GetToken />
				</div>
			);
		}
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);
