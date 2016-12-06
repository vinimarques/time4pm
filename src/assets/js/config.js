var Config = {};

Config.apitoken = "";
Config.posfix = ":xxx";
Config.company = "nodocc";
Config.twurl = "teamwork.com/";

Config.key = window.btoa(Config.apitoken + Config.posfix);
Config.apiurl = Config.company + '.' + Config.twurl;

module.exports = Config;
