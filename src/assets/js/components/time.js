var React = require('react');

var Time = React.createClass({
	getInitialState () {
		return {
			list: []
		};
	},
	render: function() {
		return (
			<div class="wrapper">
				<div class="time-list">
					<div class="time-list__header">

					</div>
				</div>
			</div>
		);
	}
});

module.exports = Time;
