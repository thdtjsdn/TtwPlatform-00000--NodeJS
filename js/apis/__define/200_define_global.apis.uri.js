//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.uri.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.uri;

global.apis.uri = global.apis.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.decodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURI(o)),n[o]},global.apis.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURIComponent(o)),n[o]},global.apis.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.encodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURI(o)),n[o]},global.apis.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURIComponent(o)),n[o]},global.apis.uri.encodeURIComponent._clear=function(){n={}}}();

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
global.apis.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;