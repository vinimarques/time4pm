var React = require('react');
var Time = require('./time');
var TimeStorage = require('./time-storage');

var TimeList = React.createClass({
	getInitialState () {
		return {
			list: [],
			key: 0,
			date: ''
		};
	},
	dateChange: function (event) {
		let val = event.target.value;
		this.state.date = val;
		TimeStorage.set('date' , val);

		if (this.state.list.length === 0)
			this.addTime();
	},
	addTime: function () {
		let key = this.state.key;
		let addItem = this.state.list;

		addItem.push(<Time key={key} timeId={key} />);
		key = key + 1;

		this.setState({
			list: addItem,
			key: key
		});
	},
	send: function() {
		console.log(TimeStorage.data);
	},
	render: function () {
		return (
			<div className="wrapper">
				<div className="time-list">
					<div className="time-list__header">
						<label>
							<span>Date:</span>
							<input type="date" name="date" value={this.state.date} onChange={this.dateChange} />
						</label>
					</div>
					<div className="time-list__body">
						{this.state.list}
					</div>
				</div>
				<div className="time-list__footer">
					<button className="btn btn-primary" onClick={this.send}>
						Send
					</button>
				</div>
			</div>
		);
	}
});

module.exports = TimeList;
