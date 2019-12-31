//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/fs/global.apis.fs.writeQueryResultCache.js";
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
	 * @param {Array|Object} resultData
	 * @return {Boolean}
	 */
	global.apis.fs.writeQueryResultCache = function( code, filePath, resultData )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.writeQueryResultCache():{String}----------" );

		if( -1 != filePath.indexOf( "/" ) )
		{
			var paths = filePath.split( "/" );
			fileNm = paths.pop() + ".result";

			path = _CWD_ + global.apis.fs.getQueryResultCache.LIST[ code ].path + paths.join( "/" );
		}
		else
		{
			path = _CWD_ + global.apis.fs.getQueryResultCache.LIST[ code ].path;
			fileNm = filePath + ".result";
		}

		var path_ing = path + fileNm + ".ing";


		var fData;

		if( null == resultData )
		{
			global.TtwLog.error( "[ ERROR ] - global.apis.fs.writeQueryResultCache - 결과가 null이다." );

			//파일 생성 중 표기 파일 삭제;
			if( global.REQUIRES.fs.existsSync( path_ing ) ) SUtilFsWriteStream.deleteFile( path_ing );

			return null;
		}

		if( resultData.pop || "object" == typeof( resultData ) )
		{
			try
			{
				//사용 금지 - JSON을 Pretty 해서 저장하면 HTML과 결합하여 사용시 문제 발생 소지 존재함;
				//fData = JSON.stringify( resultData, null, "\t" );

				fData = JSON.stringify( resultData );
			}
			catch( er )
			{
				global.TtwLog.error( "[ ERROR ] - global.apis.fs.writeQueryResultCache - " + er );

				//파일 생성 중 표기 파일 삭제;
				if( global.REQUIRES.fs.existsSync( path_ing ) ) SUtilFsWriteStream.deleteFile( path_ing );

				return false;
			}
		}


		//쿼리 결과 데이터 파일 생성;
		global.apis.fs.writeFile_UTF8( path + fileNm, fData );

		//파일 생성 중 표기 파일 삭제;
		if( global.REQUIRES.fs.existsSync( path_ing ) ) SUtilFsWriteStream.deleteFile( path_ing );

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.writeQueryResultCache():{String}----------return true;" );
		return true;
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;