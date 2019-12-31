//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/logServer/global.apis.logServer.executeQuery.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * LogServer에 쿼리를 주입하여 구동한다.
 * @function
 * @param {String} query 삽입할 쿼리를 문자열로 넣는다.
 * @param {Function} cbComplete LogDB에 데이터를 삽입 요청하고 결과를 반환받아 실행하는 콜백 함수
 */
global.apis.logServer.executeQuery = function( query, cbComplete )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.logServer.executeQuery():void----------" );

	var t = global.apis.logServer.CONST;

	//LogServer(SYS0011)에 로그 전송;
	global.mongodb.exec({ host : t.HOST, port : t.PORT, dbNm : t.DB, query : query
		, cbComplete : function( error, result ){
			if( error )
			{
				throw new Error();
				return;
			}

			if( cbComplete ) cbComplete( error, result );
		}
	});

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.logServer.executeQuery():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;