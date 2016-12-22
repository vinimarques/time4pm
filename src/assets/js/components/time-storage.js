let TimeStorage = {};

TimeStorage.data = localStorage.data ? JSON.parse(localStorage.data) : {};

TimeStorage.setTime = function (key , time) {
	if (!this.data.times)
		this.data.times = {};

	this.data.times[key] = time;
	this.save();
};

TimeStorage.set = function (key , value) {
	this.data[key] = value;
	this.save();
};

TimeStorage.get = function (key) {
	return this.data[key];
};

TimeStorage.save = function () {
	localStorage.data = JSON.stringify(this.data);
};

module.exports = TimeStorage;
