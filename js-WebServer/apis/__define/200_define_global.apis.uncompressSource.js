//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/__define/200_define_global.b2link.uncompressSource.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.uncompressSource;

global.b2link.uncompressSource = global.b2link.uncompressSource || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.uncompressSource;

/**
 * Native Module 'uncompressSource' Package를 설치한다
 * @function
 * @example
 * <code>
	global.b2link.uncompressSource.install();

	global.uncompressSource.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.b2link.uncompressSource.install=function(){return global.uncompressSource?void global.TtwLog.warn("Native Module( uncompressSource )가 이미 설치 되어 있다."):(global.b2link["import"].native_modules__API("UnCompressCSSJSHTML.tll","../js-UncompressSource/","uncompressSource"),void(global.uncompressSource=global.Lib.Ttw.unCompressCSSJSHTML))},global.b2link.uncompressSource.install._=global.Lib.Ttw.autoLoad_JS;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;