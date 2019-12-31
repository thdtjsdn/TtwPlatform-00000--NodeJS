//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/router/global.apis.router.checkQueryCacheFile.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES || {};
global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[ "result" ] = "text/plain";

/**
 * Router Query 결과에 대해 Cache 파일 존재 유무를 확인 후 데이터를 클라이언트에 전송하고 결과를 반환한다.
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
	}
 * </code>
 * @param {http.ClientResponse} res
 * <code>
	{
	}
 * </code>
 *
 * @param {String} SCODE
 * @param {String} NAME
 * @param {Object} queryParameter
 *
 * @return {Boolean|String} true면 이 함수에서 send response 실행후 Router Flow가 종료된다.
 *	Cache 파일이 없으면 Cache File Name으로 사용될 문자열을 반환 한다.
 */
global.apis.router.checkQueryCacheFile = function( req, res, SCODE, NAME, queryParameter )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router.checkQueryCacheFile():{Boolean}----------" );

	//Cache File 이름 지정 - Parameter 조합으로 구성됨;
	var NAME_CACHE = NAME;

	for( var s in queryParameter )
	{
		if( "sid" == s ) continue;

		var sData = queryParameter[ s ];

		/*/
		if( "object" == typeof( sData ) ) NAME_CACHE += "-" + JSON.stringify( sData ).replace( /\"/gi, "" ).replace( /\:/gi, "：" );
		else NAME_CACHE += "-" + ;
		/*/
		NAME_CACHE += "-" + sData;
		//*/
	}

	NAME_CACHE = NAME_CACHE.replace( /\"/gi, "" ).replace( /\:/gi, "：" );

	//Cache File 존재 유무 조회 및 생성 중 유무 조회;
	var resultCache = global.apis.fs.getQueryResultCache( SCODE, NAME_CACHE );

	//Cache File이 존재함;
	if( ( 0 != resultCache ) && ( 1 != resultCache ) && ( "string" == typeof( resultCache ) ) )
	{
		//파일 읽어서 파일 데이터 반환;
		global.apis.response.send_200_String( req, res, resultCache );

		//파일 경로 반환 - Client에 Stream으로 연결;
		//var a = resultCache.split( "/" );
		//global.apis.response.sendStream_200_File_NCallback( req, res, { filePath : resultCache, fileNm : a[ a.length - 1 ] } );

		global.TtwLog.log( "- [ E ] - response.send_200_String - " + NAME_CACHE );
		return true;
	}
	else if( 0 == resultCache )
	{
		global.apis.response.send_200_JSON( req, res, { r : 0, m : "Cache Data 생성 중, 잠시 후 다시 요청 요망" } );
		global.TtwLog.log( "- [ E ] - response.send_200_JSON - " + NAME_CACHE + " - Cache Data 생성 중, 잠시 후 다시 요청 요망" );
		return true;
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.router.checkQueryCacheFile():{Boolean}----------return false;" );
	return NAME_CACHE;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
