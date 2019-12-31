//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/util/global.apis.util.isUndefined.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.apis.util.isUndefined = function( data )
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