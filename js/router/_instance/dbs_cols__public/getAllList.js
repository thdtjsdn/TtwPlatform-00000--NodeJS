//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/router/_instance/dbs_dbs_cols__public/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _CWD = global.process.cwd() + "/";

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * MongoDB의 DB 목록와 Collection 목록을 가져온다.
 * @property {String}
 */
var _query;
try{ _query = global.apis.fs.getDBJS( _CWD + "../../../TtwPlatform-00000--NodeJS/js/router/_instance/dbs_cols__public/getAllList.dbjs" ); }catch( e ){}
try{ _query = global.apis.fs.getDBJS( _CWD + "../../TtwPlatform-00000--NodeJS/js/router/_instance/dbs_cols__public/getAllList.dbjs" ); }catch( e ){}
try{ _query = global.apis.fs.getDBJS( _CWD + "../TtwPlatform-00000--NodeJS/js/router/_instance/dbs_cols__public/getAllList.dbjs" ); }catch( e ){}
try{ _query = global.apis.fs.getDBJS( _CWD + "./js/router/_instance/dbs_cols__public/getAllList.dbjs" ); }catch( e ){}

/**
 * MongoDB의 DB 목록와 Collection 목록을 가져온다.
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
	http://localhost:49320/_instance/dbs_cols__public/getAllList?dis=asdasfafasfasfas
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _instance/dbs_cols__public/getAllList():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//Query;

	/*/
	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
	global.apis.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", _query
		, function( req, res, error, result ){ if( error ){ global.apis.response.send_200_False__ErrorLog( req, res, q, error ); return; }
			global.apis.response.send_200_JSON( req, res, result );
		}
	);
	/*/
	//Session check 없이 MongoDB에 Query가 가능한 API - 사용금지;
	global.apis.request.get__ReqMongoDB( req, res, "_instance", _query );
	//*/

	global.TtwLog.log( "- [ E ] - _instance/dbs_cols__public/getAllList():void----------" );
});