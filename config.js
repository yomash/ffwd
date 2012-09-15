module.exports = function(app, express, mongoose){

	var config = this;

	app.requireAuth = true;

	//generic config
	app.configure(function(){
		app.set('views', __dirname + '/views');
		app.set('view engine', 'jade');
		app.set('view options', { pretty: true });
		app.use(express.logger('dev'));
		app.use(express.methodOverride());
//		app.use(app.router);
		app.use(express.bodyParser());
		
		//app.use(require('connect').bodyParser());

		app.use(express.cookieParser());
		//app.use(express.session({secret: 'topsecret', store: new app.RedisStore}));
		app.use(app.router);
		//

		app.use(express.static(__dirname + '/public'));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	});


	
	//env specific config
	/*
	app.configure('development', function(){
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

		app.mg.connect('mongodb://localhost/nodemvr');
	});

	app.configure('production', function(){
		app.use(express.errorHandler());

		app.mg.connect('mongodb://flame.mongohq.com:27087/nodemvr');
	});
*/

	return config;

};	