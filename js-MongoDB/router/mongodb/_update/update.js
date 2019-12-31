//----------------------------------------------------------------------------------------------------;
var fileNm = "js-MongoDB/router/mongodb/_update/update.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * update Query
 * 구동 금지 Collection 목록을 포함한다.
 * return 데이터에서 삭제해야할 데이터를 삭제하고 반환한다.
 * @property {String}
 */
var _query = global.b2link.fs.getDBJS( global.router.mongodb.PATH.update + "update.dbjs" );

/**
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		data : {
			db : ""
			, col : ""
			, query : {}
			, obj : {}
			, upsert : {Boolean}
			, multi : {Boolean}
		}
	}
 * </code>
 * @param {http.ClientResponse} res
 * <code>
	{
	}
 * </code>
 * @example
 * <code>
	http://localhost:port/mongodb/_update/update?data={ db : "", col : "", query : {}, obj : {}, upsert : {Boolean}, multi : {Boolean} }
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - mongodb/_update/update():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	var query = _query.replace( "<!=data=!>", q.data );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.router.mongodb.PATH.update + "update.query", query );

	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.;
	//MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] - mongodb/_update/update():void----------" );
});