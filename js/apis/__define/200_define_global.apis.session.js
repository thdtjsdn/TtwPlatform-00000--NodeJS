//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_global.apis.session.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.session;

global.apis.session = global.apis.session || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.session;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q
 */
global.apis.session.get_or_create__Session=function(e,t,n){var s,i,l=STtwUtilHttpClientRequest.getHeader_Cookie(e),o=0;return l&&(l.hasOwnProperty("connect.sid")&&(i=l["connect.sid"],o=1),l.Expires&&(s=l.expires)),i&&null!=i&&""!=i&&"null"!=i||(i=STtwUtilHttpClientResponse.create_Session(e),o=0),s&&null!=s&&""!=s&&"null"!=s||(s=STtwUtilHttpClientResponse.create_Date__Expired()),{bFirstSession:o,sid:i,d_ex:s}};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;