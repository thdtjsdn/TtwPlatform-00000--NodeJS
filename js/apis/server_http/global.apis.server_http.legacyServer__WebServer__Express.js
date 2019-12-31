//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/server_http/global.apis.server_http.legacyServer__WebServer__Express.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES || {
	bmp : "image/bmp"
	, css : "text/css"
	//, dbjs : "application/javascript"//오픈 금지;
	, gif : "image/gif"
	, html : "text/html"
	//, less : "text/css"//오픈 금지;
	, list : "text/plain"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	, js : "application/javascript"
	, json : "text/json"
	, png : "image/png"
	//, tjs : "application/javascript"//오픈 금지;
	//, thtml : "text/html"//오픈 금지;
	, txt : "text/plain"
	, xml : "text/xml"
	//, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

	//Font;
	, ttf : "application/x-font-ttf"
	, woff : "application/x-font-woff"
	, woff2 : "application/x-font-woff"
};

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
global.apis.server_http.legacyServer__WebServer__Express = function( server )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.legacyServer__WebServer__Express():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = server;

		//_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	try
	{
		global.apis.fs.autoLoad_JSs([
			[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		]);
	}
	catch( e )
	{
		global.TtwLog.warn( global.process.cwd() + "/js/ 폴더가 존재하지 않는다." );
	}


	/*/
	(function(){
		var f = F.route;
		var o = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
		for( var s in o ) f( s, o[ s ] );
	})();
	//*/

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.legacyServer__WebServer__Express():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;