//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/server_http/global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능
 * 화면소스 개발모드에서만 사용한다.
 * Release 모드에서는 필요없음
 * @function
 */
global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------" );

	if( global._$TATIC_CONST_DEBUG )
	(function(){
		var _0 = SUtilHttpServer.__evt_request__APIAndFilePath = SUtilHttpServer.evt_request__APIAndFilePath;
		var _1 = global.process.cwd() + "/../../Development-Browser-Libraries/WebPage/root/";
		//var _2 = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

		SUtilHttpServer.evt_request__APIAndFilePath = function( req, res ){
			var uri = SUtilHttpServer.getURIFromURL( req.url );

			//if( _2[ uri ] ) _0( req, res );

			//global.apis.response.setHeaders__b2ker( res );

			if( 0 == uri.indexOf( "/js/" ) )
			{
				//공통 모듈 파일을 가져와서 내려주기;
				//global.apis.response.sendStream_200_File_NCallback( req, res, _1 );
				global.apis.response.sendStream_200_File_URI_NCallback( req, res, _1, uri );
				return;
			}

			_0( req, res );
		};
	})();

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;