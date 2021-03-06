//----------------------------------------------------------------------------------------------------;
var fileNm = "js-CompressCSS/router_internal/_source/compress/css.js";
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
	http://localhost:port/_source/compress/css?data=var a = 1;
 * </code>
 */
(function( req, res ){
	//global.TtwLog.log( "- [ S ] - _source/compress/css():void----------" );

	//IP를 검증한다;
	if( !global.apis.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
	{
		//admin 용도의 라우터에 불분명한 접속일시 Client Browser에 404 에러를 보낸다.;
		global.apis.response.send_404__adminCheckAvailable__http$ClientRequest( req, res );
		return;
	}

	//Native_Modules를 설치한다;
	if( !global.compressCSS ) global.apis.compressCSS.install();

	var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//Query;

	//HTTP Post 방식으로 데이터 전송이 완료되면 콜백함수를 호출한다.;
	global.apis.router_file.post_ReceiveData__String( req, res, function( req, res, data ){

		//CORS 처리;
		global.apis.response.setHeaders__b2ker( res );

		var srcMin;

		try
		{
			//JavaScript Code를 Minify 한다.;
			srcMin = global.compressJS.compress__css_code( data );
		}
		catch( e )
		{
			global.TtwLog.error( "[ ERROR ] - " + e );

			e.result = srcMin;

			//Minify 결과가 Error 일시 처리 및 Client에 전송;
			global.apis.response.send_200_JSON( req, res, e );
			return;
		}

		//Minify Code 실행 후 결과를 Client에 전송하기;
		global.apis.response.send_200_String( req, res, srcMin || data );
	});

	//global.TtwLog.log( "- [ E ] - _source/compress/css():void----------" );
});