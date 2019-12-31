//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/__define/200_define_global.b2link.compressJS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.compressJS;

global.b2link.compressJS = global.b2link.compressJS || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.compressJS;

/**
 * Native Module 'CompressJS' Package를 설치한다
 * @function
 * @example
 * <code>
	global.b2link.compressJS.install();

	global.compressJS.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.b2link.compressJS.install=function(){return global.compressJS?void global.TtwLog.warn("Native Module( CompressJS )가 이미 설치 되어 있다."):(global.b2link["import"].native_modules__API("CompressJS.dll","../js-CompressJS/","compressJS"),void(global.compressJS=global.Lib.Ttw.compressor))},global.b2link.compressJS.install._=global.Lib.Ttw.autoLoad_JS,console;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;