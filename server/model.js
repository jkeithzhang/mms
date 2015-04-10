var MongoDB 	= require('mongodb').Db;
var Server 		= require('mongodb').Server;

var db = new MongoDB('mms', new Server('localhost', 27017, {auto_reconnect: true}, {w: 1}));
	db.open(function(e, d) {
		if(e) {
			console.log('error');
		} else {
			console.log('connected to database :: myappmms');
		}
	});

var groups = db.collection('groups');

exports.groups = function() {
	return groups;
}