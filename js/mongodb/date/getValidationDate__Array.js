//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getValidationDate__Array.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Date를 검증한다.
 * @function
 * @param {Array} [ 2017, 07, 31 ]
 * @return {Boolean}
 */
global.mongodb.date.getValidationDate__Array = function( date )
{
	TtwLog.log( "---- [ S ] - global.mongodb.date.getValidationDate__Array():{Boolean}----------" );

	var d = new Date( date[ 0 ], date[ 1 ], date[ 2 ] );

	if( "Invalid Date" == d.toString() ) return false;

	if( d == date[ 1 ] ) return false;

	TtwLog.log( "---- [ E ] - global.mongodb.date.getValidationDate__Array():{Boolean}----------return true;" );
	return true;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;