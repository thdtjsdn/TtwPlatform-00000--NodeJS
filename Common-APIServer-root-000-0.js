require( "console" );
if( !global.atob ) global.atob = function( str ){ return Lib.Ttw.ab( str, 1 ); }
if( !global.btoa ) global.btoa = function( str ){ return Lib.Ttw.ba( str, 1 ); }
global.gc=global.gc||function(){};console.log(1);global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST=global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST||{};
//STtwUtilBuffer.iconv=require("iconv-lite");if(!global.Lib.Ttw.autoLoad_JS)global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"});
var p0 = "../TtwPlatform-00000--NodeJS/";
(function(){
	var cwd = global.process.cwd() + "/";
	var p1 = p0 + "native_modules/";

//	var f0 = global.Lib.Ttw.importTll;
//	var a = [
//		"HTTPSServer_Override"
//		, "LogToFile"
//		, "MongoDBQuerySync"
//		, "NodeHTML"
//		, "OS-NetworkInformation"
//		, "OverrideSUtilHttp.request"//버그 기능 Override NodeJS 새로 컴파일 하면 삭제해도 됨;
//		, "SyncRequest"
//		, "UUID"
//	];
//	var io;
//	var i=0, iLen=a.length;
//	for( ; i<iLen; ++i )
//	{
//		io = p1 + a[ i ] + ".tll";
//		try{ f0( io ); }catch( e ){}
//		try{ f0( cwd + "../" + io ); }catch( e ){}
//		try{ f0( cwd + "../../" + io ); }catch( e ){}
//		try{ f0( cwd + "../../../" + io ); }catch( e ){}
//		try{ f0( cwd + "../../../../" + io ); }catch( e ){}
//	}

	var a = [
		"__Config--WebHookServer_API"
		, "Common_Routers"
	];
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = p0 + a[ i ] + ".js";
		try{ require( cwd + "../" + io ); }catch( e ){}
		try{ require( cwd + "../../" + io ); }catch( e ){}
		try{ require( cwd + "../../../" + io ); }catch( e ){}
		try{ require( cwd + "../../../../" + io ); }catch( e ){}
	}
})();
global._$TATIC_CONST_DEBUG=true;
try
{
	global.Lib.Ttw.autoLoad_JS.addJSFiles___Define("../../"+p0+"root/js/",{router:1,router_external:1,router_internal:1});global.Lib.Ttw.autoLoad_JS.addJSFiles_Package("../../"+p0+"root/js/",{router:1,router_external:1,router_internal:1});
}
catch( e )
{
	global.TtwLog.error( e );
}
/*/
var f=window.__autoLoad_JS.addRouter__JSFiles_Services;
	f("../../"+p0+"js/router/");
	f("../../"+p0+"js/router_external/");
	f("../../"+p0+"js/router_internal/");
	f("./js/router_external/");
	f("./js/router_internal/");
//*/
//----------------------------------------------------------------------------------------------------;

/*///--------------------------------------------------URI 접근 및 사용 정보를 기록한다.;
//서버 생성 전에 모든 Router를 구동하기전 공통 Interface Overriding;

//SUtilHttpServer.evt_request__API_Only Overriding 한다. - URI, IP, PORT, SCODE, Session ID등을 File에 축적한다.;
//global.apis.server_api.overrideInterface_collectURILog_File();

//SUtilHttpServer.evt_request__API_Only Overriding 한다. - URI, IP, PORT, SCODE, Session ID등을 DataBase에 축적한다.;
global.apis.server_api.overrideInterface_collectURILog_MongoDB();
//*///--------------------------------------------------URI 접근 및 사용 정보를 기록한다.;

//----------------------------------------------------------------------------------------------------;

//기타 공통 Router 강제 하드 코딩 방식;
//global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST["/"]=function( req, res ){req.url+="index.html";SUtilHttpServer.evt_request__Target_FilePath(req,res);};