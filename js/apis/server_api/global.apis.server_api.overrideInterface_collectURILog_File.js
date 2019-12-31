//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/server_api/global.apis.server_api.overrideInterface_collectURILog_File.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * SUtilHttpServer.evt_request__API_Only Overriding 한다.
 * URI, IP, PORT, SCODE, Session ID등을 파일로그에 축적한다.
 * @function
 * @dependency
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 */
global.apis.server_api.overrideInterface_collectURILog_File = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_api.overrideInterface_collectURILog_File():void----------" );

	var filePath = global.process.cwd() + "/log/uri_" + global.apis.date.getStringDate_Dash() + ".log";
	var _fn0 = function( data ){ global.REQUIRES.fs.appendFileSync( filePath, data ); };
		_fn0(
			"\n, {"
			+ '"ip" : ""'
			+ ', "port" : 0'
			+ ', "date" : "' + new Date().toString() + '"'
			+ ', "SCODE" : "SYS0000"'
			+ ', "uri" : "/"'
			+ ', "sid" : ""'
			+ '}'
		);

	SUtilHttpServer.evt_request__API_Only = function( req, res ){
		var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
		var uri = STtwUtilHttpServer.getURIFromURL( req.url );

		_fn0(
			"\n, {"
			+ '"ip" : "' + req.client.remoteAddress + '"'
			+ ', "port" : ' + req.client.remotePort
			+ ', "date" : "' + new Date().toString() + '"'
			+ ', "SCODE" : "' + q.SCODE + '"'
			+ ', "uri" : "' + uri + '"'
			+ ', "sid" : "' + q.sid + '"'
			+ '}'
		);
	};

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_api.overrideInterface_collectURILog_File():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;