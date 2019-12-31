//----------------------------------------------------------------------------------------------------;
var fileNm = "js-MongoDB/router/__define/200_define_global.router.mongodb.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.router.mongodb;

global.router.mongodb = global.router.mongodb || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.router.mongodb;

//----------------------------------------------------------------------------------------------------;

/**
 * global.router.mongodb.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "../../../TtwPlatform-00000--NodeJS/js-MongooDB/router/mongodb/";
	var _a0 = [
		"find"
		, "insert"
		, "remove"
		, "update"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	var _ = global.router.mongodb.PATH = {};
		_.__defineGetter__( "find", function(){ return _PATH.find; });
		_.__defineGetter__( "insert", function(){ return _PATH.insert; });
		_.__defineGetter__( "remove", function(){ return _PATH.remove; });
		_.__defineGetter__( "update", function(){ return _PATH.update; });
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;