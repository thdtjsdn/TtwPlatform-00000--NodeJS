//20190627_1426 - 0.10.8;
global.REQUIRES = global.REQUIRES || {};

(function(){
	var P0 = "Ttw-ExcelServer-Dev/HTTPServer_MongoDB/APIServer/node_modules/xlsx";
	var _;
	try{ _ = require( "../" + P0 ); }catch( er ){}
	try{ _ = require( "../../" + P0 ); }catch( er ){}
	try{ _ = require( "../../../" + P0 ); }catch( er ){}
	try{ _ = require( "../../../../" + P0 ); }catch( er ){}
	try{ _ = require( "../../../../../" + P0 ); }catch( er ){}

	global.REQUIRES.__defineGetter__( "xlsx", function(){ return _; } );
})();

return global.REQUIRES.xlsx;