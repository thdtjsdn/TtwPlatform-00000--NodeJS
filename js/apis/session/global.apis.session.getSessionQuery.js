//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/sesssion/global.apis.session.getSessionQuery.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * {HTTPClientRequest} req 객체의 QueryParameters에서 Session 관련 정보만 추출하여 URI Parameter로 반환한다.
 * @function
 * @param {Object} queryParameters {HTTPClientRequest}의 Query Data
 * <code>
	{
		sid : ""
		, mid : ""
		, d_ex : ""
		, SCODE : ""
	}
 * </code>
 * @return {String}
 */
global.apis.session.getSessionQuery = function( queryParameters )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.session.getSessionQuery():{String}----------" );

	var q = queryParameters;
	var params = "&sid=" + q.sid + "&mid=" + q.mid + "&d_ex=" + q.d_ex + "&SCODE=" + q.SCODE;

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.session.getSessionQuery():{String}----------" );
	return params;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;