//----------------------------------------------------------------------------------------------------;
var fileNm = "js/cp_win/__define/100_define_global.cp_win.CONST.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRES = global.REQUIRES || {};
	var _fs = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e ){}

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_win.CONST;

global.cp_win.CONST = global.cp_win.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_win.CONST;

//----------------------------------------------------------------------------------------------------;

global.cp_win.CONST.PATH = global.cp_win.CONST.PATH || {};

//----------------------------------------------------------------------------------------------------;

global.cp_win.CONST.PATH.BINARY = global.cp_win.CONST.PATH.BINARY || {};

//------------------------------------------------------------------------------------------;

(function(){//7z;
	var rootPath = global.process.cwd();
	var path_7z = "Development-Binary-Windows/Binary/7z/7z.exe";

	var a = [
		  rootPath + path_7z
		, rootPath + "/../" + path_7z
		, rootPath + "/../../" + path_7z
		, rootPath + "/../../../" + path_7z
		, rootPath + "/../../../../" + path_7z
		, rootPath + "/../../../../../" + path_7z
	];

	var _7z = rootPath + "/../../" + path_7z;

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( global.REQUIRES.fs.existsSync( a[ i ] ) )
		{
			_7z = a[ i ];
			break;
		}
	}

	var _ = global.cp_win.CONST.PATH.BINARY;
		_.__defineGetter__( "7z", function(){ return _7z; } );
})();

//------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;