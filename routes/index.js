// var express = require('express');
// var router = express.Router();

/* GET home page. */
var controllerServer = require("../app_server/controller_server/main");

module.exports = function(app){
	app.get("/", controllerServer.index);
}

