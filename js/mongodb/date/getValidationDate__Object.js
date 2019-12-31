//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getValidationDate__Object.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Date를 검증한다.
 * @function
 * @param {Array} { y : 2017, m : 6, d : 31 }
 * @return {Boolean}
 */
global.mongodb.date.getValidationDate__Object = function( date )
{
	TtwLog.log( "---- [ S ] - global.mongodb.date.getValidationDate__Object():{Boolean}----------" );

	var d = new Date( date.y, date.m, date.d );

	if( "Invalid Date" == d.toString() ) return false;

	if( d == date.m ) return false;

	TtwLog.log( "---- [ E ] - global.mongodb.date.getValidationDate__Object():{Boolean}----------return true;" );
	return true;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;