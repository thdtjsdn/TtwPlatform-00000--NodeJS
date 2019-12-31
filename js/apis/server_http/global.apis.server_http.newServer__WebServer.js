//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/server_http/global.apis.server_http.newServer__WebServer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * WebServer용 HTTPServer를 생성한다.
 * @function
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
global.apis.server_http.newServer__WebServer = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.newServer__WebServer():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = global.Instance.httpServer_API = new global.Lib.Ttw.CLASS.Http.Server.HttpServer_API({ instanceKey : "global.Instance.httpServer__API", requestMode : "all" });

		_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	try
	{
		if( SUtilFsReadStream.checkWhetherFile( "./js/" ) )
		{
			global.apis.fs.autoLoad_JSs([
				[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
			]);
		}
	}
	catch( e )
	{
		global.TtwLog.warn( "HTTPServer 패키지에 ./js/ 가 존재 하지 않습니다 - 필요시 추가하면 자동 구동됩니다." );
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.newServer__WebServer():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;