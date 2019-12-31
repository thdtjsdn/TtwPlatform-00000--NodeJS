//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.diff.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.diff;

global.apis.diff = global.apis.diff || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.diff;

/**
 * Native Module 'Diff' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.diff.install();
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.apis.diff.install=function(){return global.differ?void global.TtwLog.warn("Native Module( Diff )가 이미 설치 되어 있다."):void global.b2link["import"].native_modules__API("Diff.dll","../js-Diff/","diff")},global.apis.diff.install._=global.Lib.Ttw.autoLoad_JS,console;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;