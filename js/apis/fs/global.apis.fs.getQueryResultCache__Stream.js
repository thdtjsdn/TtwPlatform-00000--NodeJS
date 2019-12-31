//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/fs/global.apis.fs.getQueryResultCache__Stream.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRES;

	//----------------------------------------------------------------------------------------------------;

	global.REQUIRES = global.REQUIRES || {};

	var _ = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _; } );

	//----------------------------------------------------------------------------------------------------;

	var _CWD_ = global.process.cwd() + "/";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {String} code "SYS0037_APIServer"
	 * @param {String} filePath "asd/qwe/zxc/"
	 * @return {uint|String}
	 * <code>
	 	0 : 파일 생성 중

		1 : 파일이 없음 처음 요청임

		String Data : 생성 된 파일 데이터
	 * </code>
	 */
	global.apis.fs.getQueryResultCache__Stream = function( code, filePath )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.getQueryResultCache__Stream():{String}----------" );

		var result = global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath( code, filePath );

		//파일 경로가 나옴;

		//파일 읽어서 파일 데이터 반환;
		//if( "string" == typeof( result ) ) return window.b2link.fs.getFile_UTF8( result );

		//파일 경로 반환 - Client에 Stream으로 연결;
		if( "string" == typeof( result ) ) return result;

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.getQueryResultCache__Stream():{String}----------return fStr;" );
		return result;
	};

	//----------------------------------------------------------------------------------------------------;

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;