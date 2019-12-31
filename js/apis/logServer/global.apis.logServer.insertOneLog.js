//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/logServer/global.apis.logServer.insertOneLog.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * LogServer에 Log를 1개 삽입한다.
 * @function
 * @param {String} nm_db 삽입할 대상 데이터베이스
 * @param {String} nm_col 삽입할 대상 콜렉션
 * @param {String} data 삽입할 데이터를 문자열로 넣는다.
 * @param {Function} cbComplete LogDB에 데이터를 삽입 요청하고 결과를 반환받아 실행하는 콜백 함수
 */
global.apis.logServer.insertOneLog = function( nm_db, nm_col, data, cbComplete )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.logServer.insertOneLog():void----------" );

	var t = global.apis.logServer.CONST;

	//LogServer(SYS0011)에 로그 전송;
	global.mongodb.exec({ host : t.HOST, port : t.PORT, dbNm : t.DB
		, query : 'db.getSiblingDB( "' + nm_db + '").getCollection("' + nm_col + '").insertOne("' + data + '");'
		, cbComplete : function( error, result ){
			if( error )
			{
				throw new Error();
				return;
			}

			if( cbComplete( error, result ) );
		}
	});

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.logServer.insertOneLog():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;