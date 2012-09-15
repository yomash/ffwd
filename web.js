var express = require('express');
var app = module.exports = express.createServer();
//app.mg = require('mongoose');
//app.rq = require('superagent');
//app.mc = require('memcache');
app.express = express;
//app.RedisStore = require('connect-redis')(express);

var config = require('./config.js')(app, express);

var models = {};
//models.user = require('./models/user')(app.mg);

/*
var client = new app.mc.Client();
client.on('error', function(e){
	console.log('memcached error: '+e);
});
client.connect();
*/


require('./routes')(app, models);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});