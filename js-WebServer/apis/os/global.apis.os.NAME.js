//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/obj/global.b2link.os.NAME.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );

/**
 * 소스 수정 금지
 * OS Type을 대문자 영문 문자열로 반환한다.
 * @function
 * @return {String} 대문자로 반환한다.
 * @example
 * <code>
	"AIX"
	"DARWIN"
	"FREEBSD"
	"LINUX"
	"OPENBSD"
	"SUNOS"
	"WIN32"
 * </code>
 */
global.b2link.os.__defineGetter__( "NAME", function(){
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.os.NAME():{String}----------" );

	var s = global.REQUIRES.os.platform();

	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.os.NAME():{String}----------return a;" );
	return s.toUpperCase();
});

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;