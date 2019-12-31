//----------------------------------------------------------------------------------------------------;
var fileNm = "js-UncompressSource/router_internal/_source/uncompress/css.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:port/_source/uncompress/js?data=var a = 1;
 * </code>
 */
(function( req, res ){
	//global.TtwLog.log( "- [ S ] - _source/uncompress/js():void----------" );

	//IP를 검증한다;
	if( !global.b2link.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
	{
		//admin 용도의 라우터에 불분명한 접속일시 Client Browser에 404 에러를 보낸다.;
		global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest( req, res );
		return;
	}

	//Native_Modules를 설치한다;
	if( !global.uncompressSource ) global.b2link.uncompressSource.install();

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//Query;

	//HTTP Post 방식으로 데이터 전송이 완료되면 콜백함수를 호출한다.;
	global.b2link.router_file.post_ReceiveData__String( req, res, function( req, res, data ){

		//CORS 처리;
		global.b2link.response.setHeaders__b2ker( res );

		var srcMin;

		try
		{
			//JavaScript Code를 Minify 한다.;
			srcMin = global.uncompressCSSJSHTML.css_source( data );
		}
		catch( e )
		{
			global.TtwLog.error( "[ ERROR ] - " + e );

			e.result = srcMin;

			//Minify 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_JSON( req, res, e );
			return;
		}

		//Minify Code 실행 후 결과를 Client에 전송하기;
		global.b2link.response.send_200_String( req, res, srcMin || data );
	});

	//global.TtwLog.log( "- [ E ] - _source/uncompress/js():void----------" );
});