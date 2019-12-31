//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getArrayNumberIntDate__Now.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 NumberInt 적용하여 Array로 반환
 * 데이터 삽입용
 * @function
 * @return {Array}
 * <code>
	[
		{NumberInt}
		, {NumberInt}
		, {NumberInt}
		, {NumberInt}
		, {NumberInt}
		, {NumberInt}
	]
 * </code>
 */
global.mongodb.date.getArrayNumberIntDate__Now = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getArrayNumberIntDate__Now():{Array}----------" );

	var d = new Date();
	var r = [
		NumberInt( d.getFullYear() )
		, NumberInt( d.getMonth() + 1 )
		, NumberInt( d.getDate() )
		, NumberInt( d.getHours() )
		, NumberInt( d.getMinutes() )
		, NumberInt( d.getSeconds() )
	];

	CSJLog.log( "---- [ E ] - global.mongodb.date.getArrayNumberIntDate__Now():{Array}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;