//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/__define/200_define_global.b2link.diff.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.diff;

global.b2link.diff = global.b2link.diff || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.diff;

/**
 * Native Module 'Diff' Package를 설치한다
 * @function
 * @example
 * <code>
	global.b2link.diff.install();
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.b2link.diff.install=function(){return global.differ?void global.TtwLog.warn("Native Module( Diff )가 이미 설치 되어 있다."):void global.b2link["import"].native_modules__API("Diff.dll","../js-Diff/","diff")},global.b2link.diff.install._=global.Lib.Ttw.autoLoad_JS,console;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;