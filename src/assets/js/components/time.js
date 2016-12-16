var React = require('react');
var Select = require('react-select');
var Api = require('./api');

var Time = React.createClass({
	getInitialState () {
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
		stateChange[event.target.name] = event.target.value.replace(':','');

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
	componentWillUpdate: function( r , d ) {
		console.log(r , d);
	},
	render: function () {
		return (
			<div className="time">
				<div className="time__wrapper">
					<div className="time__col">
						<input type="time" name="time_start" value={this.state.data.time_start} onChange={this.handleChange} />
					</div>
					<div className="time__col">
						<input type="time" name="time_end" value={this.state.data.time_end} onChange={this.handleChange} />
					</div>
					<div className="time__col">
						<Select name="project_id" value={this.state.data.project_id} options={this.state.projects} onChange={this.projectChange} />
					</div>
					<div className="time__col">
						<Select name="task_id" value={this.state.data.task_id} options={this.state.tasks} onChange={this.taskChange} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Time;
