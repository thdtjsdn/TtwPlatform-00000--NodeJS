//----------------------------------------------------------------------------------------------------;
var fileNm = "js-File/router/__define/210_define_global.router.file.CONST.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.router.file.CONST;

global.router.file.CONST = global.router.file.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.router.file.CONST;

/**
 * @property {Object}
 * <code>
	{
		//DataURL 방식으로 전달되서 넘어오는 파일 데이터의 최대 허용 사이즈;
		global.router.file.CONST.DATA_URL.MAX_SIZE
	}
 * </code>
 */
global.router.file.CONST.DATA_URL = {};
(function(){
	var _ = global.router.file.CONST.DATA_URL;

	//DataURL 방식으로 전달되서 넘어오는 파일 데이터의 최대 허용 사이즈;
	var MAX_SIZE = 1024 * 1024 * 2;
	_.__defineGetter__( "MAX_SIZE", function(){ return MAX_SIZE; } );
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;