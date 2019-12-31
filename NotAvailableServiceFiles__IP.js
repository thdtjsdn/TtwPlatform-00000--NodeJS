setTimeout(function(){ var i=0, iLen=10;for( ; i<iLen; ++i ) global.TtwLog.warn( "IP 차단 기능 실행 - " + i ); }, 3000 );

//*///-------------------------------------------------- [ S ] - B2LiNK-B2Labs IP 이외 차단 파일 목록;
(function(){
	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
	//Original URI;
	var a = [
		"/index.debug.html"

		, "/index.APIDocument-APIServer.html"
		, "/index.APIDocument-WebPage.html"
		, "/index.APIDocument-WebServer.html"

		//, "/index-Dev-Doc_JSONEditor.html"

		, "/index-Dev-MongoDBQueryTester.html"
		//, "/mode-javascript.js"
		//, "/theme-monokai.js"
		//, "/worker-javascript.js"

		, "/index-Dev-SourceEditor.html"


		, "/ui/Dev-doc_JSON/Editor/Editor.html"
		, "/ui/Dev-doc_JSON/Editor/Editor.js"
		, "/ui/Dev-doc_JSON/Editor/Editor.thtml"

		, "/ui/Dev-MongoDB/QueryTester/QueryTester.html"
		, "/ui/Dev-MongoDB/QueryTester/QueryTester.js"
		, "/ui/Dev-MongoDB/QueryTester/QueryTester.thtml"
		, "/ui/index_dev_mongodb/queryTester/queryTester.html"
		, "/ui/index_dev_mongodb/queryTester/queryTester.js"
		, "/ui/index_dev_mongodb/queryTester/queryTester.thtml"

		, "/ui/Dev-Source/Editor/Editor.html"
		, "/ui/Dev-Source/Editor/Editor.js"
		, "/ui/Dev-Source/Editor/Editor.thtml"


		, "/ui_template/Dev-doc_JSON/Editor/Editor.html"
		, "/ui_template/Dev-doc_JSON/Editor/Editor.js"
		, "/ui_template/Dev-doc_JSON/Editor/Editor.thtml"

		, "/ui_template/Dev-MongoDB/QueryTester/QueryTester.html"
		, "/ui_template/Dev-MongoDB/QueryTester/QueryTester.js"
		, "/ui_template/Dev-MongoDB/QueryTester/QueryTester.thtml"
		, "/ui_template/index_dev_mongodb/queryTester/queryTester.html"
		, "/ui_template/index_dev_mongodb/queryTester/queryTester.js"
		, "/ui_template/index_dev_mongodb/queryTester/queryTester.thtml"

		, "/ui_template/Dev-Source/Editor/Editor.html"
		, "/ui_template/Dev-Source/Editor/Editor.js"
		, "/ui_template/Dev-Source/Editor/Editor.thtml"
	];

	//----------haproxy - host/view/ URI check list;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i ) a.push( "/view" + a[ i ] );
	//----------;

	var f = function( req, res ){
		if( !global.apis.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
		{
			try{ window.TtwLog.warn( "차단 파일 요청 IP : " + req.client.remoteAddress + " - " + req.url ); }catch( e ){}
			global.apis.response.sendStream_404( req, res );
		}

		global.apis.response.sendStream_200_File_URI_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH, req.url );
	};
	var io; var i=0, iLen=a.length; for( ; i<iLen; ++i ) _[ a[ i ] ] = f; a.length = 0; a = null;
})();
//*///-------------------------------------------------- [ E ] - B2LiNK-B2Labs IP 이외 차단 파일 목록;


//*///-------------------------------------------------- [ S ] - IP 접근인지 Domain 접근인지 판단하여 B2LiNK-B2Labs IP 이외 차단 파일 목록이 동작하도록 b2link.url API 변경;
var IPS = {
	"222.239.10.120" : 1
	, "222.239.10.122" : 1
	, "222.239.10.123" : 1
	, "222.239.10.124" : 0
};

if(IPS[ SUtilNetServer.IPV4_INFO.address ] )
{
	(function(){
		var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
		//Original URI;
		var a = [
			//"/js-common/b2link/url/window.b2link.url.getServerURLByDB.js"
			"/js-common/b2link/url/window.b2link.url.getServerURLByServers.js"
		];

		//----------haproxy - host/view/ URI check list;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) a.push( "/view" + a[ i ] );
		//----------;

		var f = function( req, res ){

			try
			{
				var fileURI = req.url.replace( /\?.*/, "" );
				if( !global.apis.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
				{
					//Domain 기반 b2link.url API 파일 전송;
					global.apis.response.sendStream_200_File_URI_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH, fileURI );
				}
				else//IP 기반 b2link.url API 파일 전송;
				{
					var IP3 = SUtilNetServer.IPV4_ADDRESS[ 3 ];
					var fileNm = "";
					var fileEnd = ".server-" + IP3 + "-ip";

					//var nm0 = "window.b2link.url.getServerURLByDB.js";
					var nm1 = "window.b2link.url.getServerURLByServers.js";

					//if( -1 != fileURI.indexOf( nm0 ) ) fileNm = fileURI.replace( nm0, nm0 + fileEnd );
					//else
					if( -1 != fileURI.indexOf( nm1 ) ) fileNm = fileURI.replace( nm1, nm1 + fileEnd );

					global.apis.response.sendStream_200_File_URI_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH, fileNm );
				}
			}
			catch( e )
			{
				global.TtwLog.error( "[ ERROR ] - b2link.url API 파일 전달 Error - " + e );

				//Domain 기반 b2link.url API 파일 전송;
				global.apis.response.sendStream_200_File_URI_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH, fileURI );
			}
		};
		var io; var i=0, iLen=a.length; for( ; i<iLen; ++i ) _[ a[ i ] ] = f; a.length = 0; a = null;
	})();
}
//*///-------------------------------------------------- [ E ] - IP 접근인지 Domain 접근인지 판단하여 B2LiNK-B2Labs IP 이외 차단 파일 목록이 동작하도록 b2link.url API 변경;