//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getValidationDate__String.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Date를 검증한다.
 * @function
 * @param {String} "2016-06-31"
 * @return {Boolean}
 */
global.mongodb.date.getValidationDate__String = function( date )
{
	TtwLog.log( "---- [ S ] - global.mongodb.date.getValidationDate__String():{Boolean}----------" );

	var d = new Date( date );

	if( "Invalid Date" == d.toString() ) return false;

	var a = date.split( "-" );

	if( d == a[ 1 ] ) return false;

	TtwLog.log( "---- [ E ] - global.mongodb.date.getValidationDate__String():{Boolean}----------return true;" );
	return true;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;