//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/util/global.b2link.util.isUndefined.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.b2link.util.isUndefined = function( data )
{
	return (
		typeof data == undefined
		|| data == "undefined"
		|| data == null
		|| data == NaN
	) ? true : false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;