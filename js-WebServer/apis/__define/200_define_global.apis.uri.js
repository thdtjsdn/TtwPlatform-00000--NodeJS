//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/__define/200_define_global.b2link.uri.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.uri;

global.b2link.uri = global.b2link.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.decodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURI(o)),n[o]},global.b2link.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURIComponent(o)),n[o]},global.b2link.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.encodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURI(o)),n[o]},global.b2link.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURIComponent(o)),n[o]},global.b2link.uri.encodeURIComponent._clear=function(){n={}}}();

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
global.b2link.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;