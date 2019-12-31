//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/router_file/global.apis.router_file.post_ReceiveData__String.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * HTTP Post 방식으로 데이터 전송이 완료되면 콜백함수를 호출한다.
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @param {Function} cbFunction function( req, res, data ){}
 *
 * @example
 * <code>
 * </code>
 */
global.apis.router_file.post_ReceiveData__String = function( req, res, cbFunction )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router_file.post_ReceiveData__String():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//Client로 부터 전송 받을 데이터;
	var _data = "";

	//Client로 부터 데이터를 전송 받는 이벤트;
	req.on( "data", function( chunk ){ _data += chunk; });

	//Client로 부터 데이터 전송 완료 이벤트;
	req.on( "end", function(){ cbFunction( req, res, _data ); });

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.router_file.post_ReceiveData__String():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;