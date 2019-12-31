//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.compressJS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.compressJS;

global.apis.compressJS = global.apis.compressJS || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.compressJS;

/**
 * Native Module 'CompressJS' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.compressJS.install();

	global.compressJS.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.apis.compressJS.install=function(){return global.compressJS?void global.TtwLog.warn("Native Module( CompressJS )가 이미 설치 되어 있다."):(global.b2link["import"].native_modules__API("CompressJS.dll","../js-CompressJS/","compressJS"),void(global.compressJS=global.Lib.Ttw.compressor))},global.apis.compressJS.install._=global.Lib.Ttw.autoLoad_JS,console;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;