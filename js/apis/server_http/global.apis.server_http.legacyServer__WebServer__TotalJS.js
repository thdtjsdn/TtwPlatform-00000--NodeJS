//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/server_http/global.apis.server_http.legacyServer__WebServer__TotalJS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * WebServer용 HTTPServer를 생성한다.
 * @function
 * @param {http.Server}
 * @return {http.Server}
 *
 * @dependency
 * global.Lib.Ttw.CLASS.AutoLoad_JS
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 *
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 * SUtilHttpServer.evt_request__httpServer_200_False
 * SUtilHttpServer.evt_request__httpServer_200_True
 * SUtilHttpServer.evt_request__httpServer_200_String
 */
global.apis.server_http.legacyServer__WebServer__TotalJS = function( server )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.legacyServer__WebServer__TotalJS():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = server;

		//_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	global.apis.fs.autoLoad_JSs([
		[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
	]);

	/*/
	(function(){
		var f = F.route;
		var o = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
		for( var s in o ) f( s, o[ s ] );
	})();
	//*/

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.legacyServer__WebServer__TotalJS():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;