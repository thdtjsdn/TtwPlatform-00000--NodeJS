//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/fs/global.apis.fs.getQueryResultCache.js";
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
	global.apis.fs.getQueryResultCache = function( code, filePath )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.getQueryResultCache():{String}----------" );

		var result = global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath( code, filePath );

		//파일 경로가 나옴;

		//파일 읽어서 파일 데이터 반환;
		if( "string" == typeof( result ) ) return window.b2link.fs.getFile_UTF8( result );

		//파일 경로 반환 - Client에 Stream으로 연결;
		//if( "string" == typeof( result ) ) return result;

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.getQueryResultCache():{String}----------return fStr;" );
		return result;
	};

	//----------------------------------------------------------------------------------------------------;

	global.apis.fs.getQueryResultCache.LIST = {
		//  SYS0010_APIServer : null
		//, SYS0010_WebServer : null
		//, SYS0011_APIServer : null
		//, SYS0011_WebServer : null
		//, SYS0015_APIServer : null
		//, SYS0015_WebServer : null
		//, SYS0040_APIServer : null
		//, SYS0050_APIServer : null
		//, SYS0060_APIServer : null
		//, SYS0070_APIServer : null
		//, SYS0070_WebServer : null
		//, SYS0120_APIServer : null
		//, SYS0120_WebServer : null
		//, SYS0130_APIServer : null
		//, SYS0130_WebServer : null
		//, SYS0020_APIServer : null
		//, SYS0020_WebServer : null
		  SYS0030_APIServer : {
			  path : "../../../B2LiNK-OnSight--Micro-Dev/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight--Micro-Dev/cache/APIServer/"
		}
		, SYS0030_WebServer : {
			  path : "../../B2LiNK-OnSight--Micro-Dev/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight--Micro-Dev/cache/WebServer/"
		}
		, SYS0031_APIServer : {
			  path : "../../../B2LiNK-OnSight--Macro-Dev/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight--Macro-Dev/cache/APIServer/"
		}
		, SYS0031_WebServer : {
			  path : "../../B2LiNK-OnSight--Macro-Dev/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight--Macro-Dev/cache/WebServer/"
		}
		//, SYS0032_APIServer : null
		//, SYS0033_APIServer : null
		//, SYS0033_WebServer : null
		//, SYS0034_APIServer : null
		//, SYS0034_WebServer : null
		//, SYS0035_APIServer : null
		//, SYS0035_WebServer : null
		, SYS0037_APIServer : {
			  path : "../../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/APIServer/"
		}
		, SYS0037_WebServer : {
			  path : "../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/WebServer/"
		}
		//, SYS0100_APIServer : null
		//, SYS0100_WebServer : null
		//, SYS0210_APIServer : null
		//, SYS0210_WebServer : null
		//, SYS0215_APIServer : null
		//, SYS0215_WebServer : null

		, SYS0310_APIServer : {
			  path : "../../../B2LiNK-OnSight-Dev--QueryCache/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight-Dev--QueryCache/cache/APIServer/"
		}
		, SYS0310_WebServer : {
			  path : "../../B2LiNK-OnSight-Dev--QueryCache/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight-Dev--QueryCache/cache/WebServer/"
		}

		//, SYS0110_APIServer : null
		//, SYS0110_WebServer : null
		//, SYS4110_APIServer : null
		//, SYS4110_WebServer : null
		//, SYS4111_APIServer : null
		//, SYS4111_WebServer : null
		//, SYS4112_APIServer : null
		//, SYS4112_WebServer : null
		//, SYS4113_APIServer : null
		//, SYS4113_WebServer : null
		//, SYS4120_APIServer : null
		//, SYS4120_WebServer : null
		//, SYS4130_APIServer : null
		//, SYS4130_WebServer : null
		//, SYS4135_APIServer : null
		//, SYS4135_WebServer : null
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {String} code "SYS0037_APIServer"
	 * @param {String} filePath "asd/qwe/zxc/"
	 * @return {String}
	 */
	global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath = function( code, filePath )
	{

		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath():{String}----------" );
		var fileNm;
		var path;

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

		if( global.REQUIRES.fs.existsSync( path + fileNm ) )
			return path + fileNm;

		if( global.REQUIRES.fs.existsSync( path + fileNm + ".ing" ) )
			return 0;

		if( !global.REQUIRES.fs.existsSync( path ) )
		{
			window.b2link.fs.createDirectories( path );

			global.apis.fs.writeFile_UTF8( path + fileNm + ".ing", "" );
			return 1;
		}

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath():{String}----------return null;" );
		return null;
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;