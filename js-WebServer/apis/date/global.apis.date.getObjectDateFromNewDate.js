//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/date/global.b2link.date.getObjectDateFromNewDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Object} {y : 2017, m : 2, d : 25, ho : 11, mi : 20, se : 50}
 */
global.b2link.date.getObjectDateFromNewDate = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getObjectDateFromNewDate():{Object}----------" );

	var d = new Date();

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getObjectDateFromNewDate():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;