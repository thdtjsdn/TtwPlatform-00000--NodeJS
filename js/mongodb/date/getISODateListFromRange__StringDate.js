//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getISODateListFromRange__StringDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 두 날짜 사이의 날짜들을 배열에 담아 반환한다.
 * @param {String} d_start
 * @param {String} d_end
 * @return {Array} a
 * @example
 * <code>
	global.mongodb.date.getISODateListFromRange__StringDate( "2018-04-01", "2018-04-05" );
 * </code>
 */
global.mongodb.date.getISODateListFromRange__StringDate = function( d_start, d_end )
{
	//Rh2Log.timeStamp( "---- [ S ] - global.mongodb.date.getISODateListFromRange__StringDate():{Object}----------" );
	var a = [];
	var dateMove = new Date( d_start );
	var strDate = d_start;

	if( d_start == d_end )
	{
		var strDate = dateMove.toISOString().slice( 0, 10 );
		a.push( strDate );
	}
	else
	{
		while( strDate < d_end )
		{
			var strDate = dateMove.toISOString().slice( 0, 10 );
			a.push( strDate );
			dateMove.setDate( dateMove.getDate() + 1 );
		}
	}
	//Rh2Log.timeStamp( "---- [ E ] - global.mongodb.date.getISODateListFromRange__StringDate():{Object}----------" );
	return a;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;