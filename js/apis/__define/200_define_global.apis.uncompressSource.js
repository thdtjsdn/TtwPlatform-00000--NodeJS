//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.uncompressSource.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.uncompressSource;

global.apis.uncompressSource = global.apis.uncompressSource || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.uncompressSource;

/**
 * Native Module 'uncompressSource' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.uncompressSource.install();

	global.uncompressSource.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.apis.uncompressSource.install=function(){return global.uncompressSource?void global.TtwLog.warn("Native Module( uncompressSource )가 이미 설치 되어 있다."):(global.b2link["import"].native_modules__API("UnCompressCSSJSHTML.tll","../js-UncompressSource/","uncompressSource"),void(global.uncompressSource=global.Lib.Ttw.unCompressCSSJSHTML))},global.apis.uncompressSource.install._=global.Lib.Ttw.autoLoad_JS;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;