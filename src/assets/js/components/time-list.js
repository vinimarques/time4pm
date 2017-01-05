var React = require('react');
var Time = require('./time');
var TimeStorage = require('./time-storage');

var TimeList = React.createClass({
	getInitialState () {
		let data = (TimeStorage.data) ? TimeStorage.data : {};
		let list = [];
		let index = 0;

		if (data.times && Object.keys(data.times).length > 0) {
			Object.keys(data.times).map(function (key) {
				var item = data.times[key];
				index = key;
				list.push(<Time key={key} timeId={key} data={item} />);
			});
		}

		return {
			list: list,
			key: index,
			date: (data.date) ? data.date : ''
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
			<div className="time-list">
				<div className="time-list__header wrapper">
					<label>
						<span className="label__text">Date:</span>
						<input type="date" name="date" value={this.state.date} onChange={this.dateChange} />
					</label>
				</div>
				<div className="time-list__body">
					{this.state.list}
				</div>
				<div className="time-list__footer">
					<div className="wrapper">
						<button className="btn btn-secondary">
							<em className="icon-add"></em>
							Add Time
						</button>
						<button className="btn btn-secondary">
							<em className="icon-add"></em>
							Add Time
						</button>
						<button className="btn btn-primary" onClick={this.send}>
							<em className="icon-send"></em>
							Send
						</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TimeList;
