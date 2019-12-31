//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/date/global.apis.date.getObjectDateFromExcelNumber.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Get object date From Excel Number Format
 * @function
 * @param  {String} 42930
 * @return {Object} { y : 2017, m : 7, d : 15, ho : 0, mi : 0, se : 0 }
 * @example
 * <code>
	var n_d1 = 42930;
	var getObjectDate =  global.apis.date.getObjectDateFromExcelNumber;
	var d1 = getObjectDate( n_d1 );

	console.log( JSON.stringify( d1 ) );
 * </code>
 */
global.apis.date.getObjectDateFromExcelNumber = function( n )
{
	var d = new Date( 1899, 12, n );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜가 아닙니다." + s );
		return null;
	}

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;