var React = require('react');
var Select = require('react-select');
var Api = require('./api');
var TimeStorage = require('./time-storage');

var Time = React.createClass({
	getInitialState (props) {
		return {
			data: {
				time_start: '',
				time_end: '',
				project_id: null,
				task_id: null
			},
			projects: [],
			tasks: []
		};
	},
	componentDidMount () {
		Api.getProjects( res => {
			this.setState({projects: res});
		});
	},
	handleChange: function (event) {
		var stateChange = this.state.data
		stateChange[event.target.name] = event.target.value;

		this.setState({data: stateChange});
	},
	projectChange: function (res) {
		let data = this.state.data;
		data.project_id = res.value;

		this.setState({
			data: data
		});

		Api.getTasks( data.project_id , res => {
			this.setState({tasks: res});
		})
	},
	taskChange: function (res) {
		let data = this.state.data;
		data.task_id = res.value;

		this.setState({
			data: data
		});
	},
	componentWillUpdate: function ( r , d ) {
		TimeStorage.setTime(this.props.timeId , d.data);
	},
	render: function () {
		return (
			<div className="time">
				<div className="time__wrapper">
					<div className="time__col">
						<label className="time__label">
							<span className="time__label__text">Time Start:</span>
							<input type="time" className="time__input" name="time_start" value={this.state.data.time_start} onChange={this.handleChange} />
						</label>
					</div>
					<div className="time__col">
						<label className="time__label">
							<span className="time__label__text">Time End:</span>
							<input type="time" name="time_end" value={this.state.data.time_end} onChange={this.handleChange} />
						</label>
					</div>
					<div className="time__col">
						<label className="time__label">
							<span className="time__label__text">Project:</span>
							<Select name="project_id" value={this.state.data.project_id} options={this.state.projects} onChange={this.projectChange} />
						</label>
					</div>
					<div className="time__col">
						<label className="time__label">
							<span className="time__label__text">Task:</span>
							<Select name="task_id" value={this.state.data.task_id} options={this.state.tasks} onChange={this.taskChange} />
						</label>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Time;
