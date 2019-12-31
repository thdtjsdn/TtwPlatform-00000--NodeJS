//20190821_1825 - 3.3.0;
global.REQUIRES = global.REQUIRES || {};

(function(){
	var _ = require( "./node_modules--Individual/mongodb - 3.3.0/node_modules/mongodb/" );
	global.REQUIRES.__defineGetter__( "mongodb", function(){ return _; } );
})();

return global.REQUIRES.mongodb;