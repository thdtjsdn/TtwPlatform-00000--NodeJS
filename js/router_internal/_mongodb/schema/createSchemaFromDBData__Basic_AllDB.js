//----------------------------------------------------------------------------------------------------;
var fileNm = "/js-MongoDB/router_internal/_mongodb/schema/createSchemaFromDBData__Basic_AllDB.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		nm_db : ""
		, nm_col : ""
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
	http://localhost:30000/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:49320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45420/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45520/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:49322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:42322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:46320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:44320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:43320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB

	http://localhost:30000/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:49320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45420/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45520/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:49322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:42322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:46320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:44320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:43320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB

	http://localhost:30000/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:49320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45420/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:45520/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:49322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:42322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:46320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:44320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	http://localhost:43320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB





	global.apis.request.get( "http://localhost:30000/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:49320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45420/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45520/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:49322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:42322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:46320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:44320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:43320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB

	global.apis.request.get( "http://localhost:30000/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:49320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45420/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45520/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:49322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:42322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:46320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:44320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:43320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB

	global.apis.request.get( "http://localhost:30000/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:49320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45420/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:45520/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:49322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:42322/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:46320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:44320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
	global.apis.request.get( "http://localhost:43320/_mongodb/schema/createSchemaFromDBData__Basic_AllDB
 * </code>
 */
(function( req, res ){
	//global.TtwLog.log( "- [ S ] - _mongodb/schema/createSchemaFromDBData__Basic_AllDB():void----------" );

	//IP를 검증한다;
	if( !global.apis.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
	{
		//admin 용도의 라우터에 불분명한 접속일시 Client Browser에 404 에러를 보낸다.;
		global.apis.response.send_404__adminCheckAvailable__http$ClientRequest( req, res );
		return;
	}

	var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;

	//CORS 처리;
	global.apis.response.setHeaders__b2ker( res );

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	global.server.req_DB( req, res, { db : "admin", q : 'return db.getSiblingDB( "_instance" ).cols.find({}).toArray();' }, function( error, result ){

		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			//global.apis.response.send_200_False__ErrorLog( req, res, q, error );
			global.apis.response.send_200_JSON( req, res, error );
			return;
		}

		var f0 = global.apis.request.get;
		var fn = function( e ){ console.log( e ) };

		var a = result;
		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			var io = a[ i ];

			/*/
			if( "_admin" == io._db
				|| "_local" == io._db
				|| "_schema" == io._db
				|| "_instance" == io._db
			) continue;
			//*/

			f0( global.apis.url.getServerURL_APIServer_Self() + '/_mongodb/schema/createSchemaFromDBData__Basic_Collection?data={"nm_db":"' + io.db + '","nm_col":"' + io._id + '"}', fn );

			console.log( global.apis.url.getServerURL_APIServer_Self() + '/_mongodb/schema/createSchemaFromDBData__Basic_Collection?data={"nm_db":"' + io.db + '","nm_col":"' + io._id + '"}' );
		}

		//MongoDB Query 실행 완료를 Client에 전송하기;
		global.apis.response.send_200_True( req, res );
	});

	//global.TtwLog.log( "- [ E ] - _mongodb/schema/createSchemaFromDBData__Basic_AllDB():void----------" );
});