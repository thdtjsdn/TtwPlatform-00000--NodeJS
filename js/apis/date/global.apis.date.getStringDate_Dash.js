//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/date/global.apis.date.getStringDate_Dash.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 호출 시점의 [ year, month, day, hour, minute, seconds ]를 생성한 후 join( "-" )으로 반환한다.
 * @function
 * @return {String}
 */
global.apis.date.getStringDate_Dash = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.apis.date.getStringDate_Dash():{String}----------" );
	////////global.TtwLog.timeStamp( "---- [ E ] - global.apis.date.getStringDate_Dash():{String}----------" );
	return global.apis.date.getArrayDateFromNewDate().join( "-" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;