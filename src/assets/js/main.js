//Applications
var React = require('react');
var ReactDOM = require('react-dom');

const Header = require('./components/header');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
			</div>
		);
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);
