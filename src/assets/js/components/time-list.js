var React = require('react');
var Time = require('./time');

var TimeList = React.createClass({
	getInitialState () {
		return {
			list: [],
			key: 0
		};
	},
	dateChange: function () {
		if (this.state.list.length === 0)
			this.addTime();
	},
	addTime: function () {
		let key = this.state.key;
		let addItem = this.state.list;

		addItem.push(<Time key={key} />);
		key = key + 1;

		this.setState({
			list: addItem,
			key: key
		});
	},
	render: function () {
		return (
			<div className="wrapper">
				<div className="time-list">
					<div className="time-list__header">
						<label>
							<span>Date:</span>
							<input type="date" name="date" onChange={this.dateChange} />
						</label>
					</div>
					<div className="time-list__body">
						{this.state.list}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TimeList;
