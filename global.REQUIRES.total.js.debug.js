//20170601_1308 - 2.2.27;
global.REQUIRES = global.REQUIRES || {};

(function(){
	var _ = require( "total.js/debug" );
	global.REQUIRES.__defineGetter__( "totaljs_debug", function(){ return _; } );
})();

return global.REQUIRES.totaljs_debug;