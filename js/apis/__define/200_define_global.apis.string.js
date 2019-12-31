//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.string.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.string;

global.apis.string = global.apis.string || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.string;


//----------------------------------------------------------------------------------------------------global.apis.string.a***;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
global.apis.string.applyBrace = SUtilString.applyBraceStrFromObj__NV_NA;

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
global.apis.string.applyBrackets = SUtilString.applyBracketsStrFromObj__NV_NA;

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
global.apis.string.applyParentheses = SUtilString.applyParenthesesStrFromObj__NV_NA;

//----------------------------------------------------------------------------------------------------global.apis.string.a***;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;