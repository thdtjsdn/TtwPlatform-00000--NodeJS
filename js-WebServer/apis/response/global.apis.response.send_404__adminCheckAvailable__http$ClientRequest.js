//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/response/global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * admin 용도의 라우터에 불분명한 접속일시 Client Browser에 404 에러를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest = function( req, res )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest():void----------" );

	global.TtwLog.error( "!!!!!!!!!! Warning !!!!!!!!!!" );
	global.TtwLog.error( "req.url : " + req.url );
	global.TtwLog.error( "IP/Port : " + req.client.remoteAddress + ":" + req.client.remotePort );
	global.TtwLog.error( "!!!!!!!!!! Warning !!!!!!!!!!" );
	global.b2link.response.send_404( req, res );

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;