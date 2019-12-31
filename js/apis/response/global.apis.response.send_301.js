//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/response/global.apis.response.send_301.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 클라이언트에게 Redirect 할 URL 정보와 301 response Code를 전송한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} url redirect 할 URL
 */
global.apis.response.send_301 = function( req, res, url )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.response.send_301():void----------" );

	global.TtwLog.timeStamp( "url : " + url );

	global.apis.response.setHeaders__b2ker( res );

	res.writeHead( 301, { Location : url } );
	res.end();

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.send_301():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;