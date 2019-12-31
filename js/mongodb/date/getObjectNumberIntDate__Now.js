//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getObjectNumberIntDate__Now.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 NumberInt 적용하여 Object로 반환
 * 데이터 삽입용
 * @function
 * @return {Object}
 * <code>
	{
		y : {NumberInt}
		, m : {NumberInt}
		, d : {NumberInt}
		, ho : {NumberInt}
		, mi : {NumberInt}
		, se : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getObjectNumberIntDate__Now = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getObjectNumberIntDate__Now():{Object}----------" );

	var d = new Date();
	var r = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )
	};

	CSJLog.log( "---- [ E ] - global.mongodb.date.getObjectNumberIntDate__Now():{Object}----------return date;" );
	return r;
};
global.mongodb.date.getDate__Now = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getDate__Now():{Object}----------" );

	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );

	var d = new Date();
	var r = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )
	};

	CSJLog.log( "---- [ E ] - global.mongodb.date.getDate__Now():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
