//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/router_file/global.apis.router_file.downloadAndDelete.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRE = global.REQUIRE || {};
	var _fs = require( "fs" );
	global.REQUIRE.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e )
{
	//....;
}

/**
 * 파일을 다운로드 한후 삭제하는 함수.
 * response가 완료된 후 실행된다.
 * @param  {???} e
 * @param  {String} d
 *<code>
	D:/aaa/aaa/aaa/aaa.xlsx
 *</code>
 */
var deleteFile = function( e, d ){ global.REQUIRES.fs.unlink( d ,function(err){ if( err ) console.log( err ); global.CSJLog.log("Delete Complete."); }); };

/**
 * 세션 체크 후 파일을 Client Browser에 전달, 파일을 삭제한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {Object} q Query Object
 *
 * @param {String} path 파일이 존재하는 대상폴더( 파일이름 포함 )
 */
global.apis.router_file.downloadAndDelete = function( req, res, q, path ){
	global.Rh2Log.timeStamp( "---- [ S ] - global.apis.router_file.downloadAndDelete():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증;
	global.apis.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		if( !global.apis.response.getResultStatus( result ) )//"true" == OK;
		{
			global.apis.response.send_200_False( req, res );
			return;
		}

		var stats = global.REQUIRES.fs.existsSync( path );

		if( stats )
		{
			var d = { filePath : path, fileNm : q.fileNm, cbFunction :  deleteFile };
			global.apis.response.sendStream_200_File( req, res, d );
		}
		else
		{
			global.apis.response.send_200_False__ErrorLog( req, res, q, "file is not exist." );
			return;
		}
	});

	global.Rh2Log.timeStamp( "---- [ E ] - global.apis.router_file.downloadAndDelete():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;