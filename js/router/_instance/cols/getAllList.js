//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/router/_instance/cols/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _CWD = global.process.cwd() + "/";

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * MongoDB의 Collections 목록 가져오기
 * @property {String}
 */
var _query;
try{ _query = global.apis.fs.getDBJS( _CWD + "../../../TtwPlatform-00000--NodeJS/js/router/_instance/cols/getAllList.dbjs" ); }catch( e ){}
try{ _query = global.apis.fs.getDBJS( _CWD + "../../TtwPlatform-00000--NodeJS/js/router/_instance/cols/getAllList.dbjs" ); }catch( e ){}
try{ _query = global.apis.fs.getDBJS( _CWD + "../TtwPlatform-00000--NodeJS/js/router/_instance/cols/getAllList.dbjs" ); }catch( e ){}
try{ _query = global.apis.fs.getDBJS( _CWD + "./js/router/_instance/cols/getAllList.dbjs" ); }catch( e ){}

/**
 * MongoDB의 Collections 목록 가져오기
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
	http://localhost:49320/_instance/cols/getAllList
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _instance/cols/getAllList():void----------" );

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

	global.TtwLog.log( "- [ E ] - _instance/cols/getAllList():void----------" );
});