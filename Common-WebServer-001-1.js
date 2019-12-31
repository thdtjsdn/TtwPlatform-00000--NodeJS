require( "console" );
if( !global.atob ) global.atob = function( str ){ return Lib.Ttw.ab( str, 1 ); }
if( !global.btoa ) global.btoa = function( str ){ return Lib.Ttw.ba( str, 1 ); }
global.gc=global.gc||function(){};console.log(1);global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST=global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST||{};
STtwUtilBuffer.iconv=require("iconv-lite");if(!global.Lib.Ttw.autoLoad_JS)global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"});
var p0 = "../TtwPlatform-00000--NodeJS/";
(function(){
	var cwd = global.process.cwd() + "/";
	var p1 = p0 + "native_modules/";

	var f0 = global.Lib.Ttw.importTll;
	var a = [
		"HTTPSServer_Override"
		, "LogToFile"
		, "MongoDBQuerySync"
		, "MongoDBTool__ExportImportCreator--Windows"
		, "NodeHTML"
		, "OS-NetworkInformation"
		//, "OverrideSUtilHttp.request"//버그 기능 Override NodeJS 새로 컴파일 하면 삭제해도 됨;
		, "SyncRequest"
		, "UUID"
	];
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = p1 + a[ i ] + ".tll";
		try{ f0( io ); }catch( e ){}
		try{ f0( cwd + "../" + io ); }catch( e ){}
		try{ f0( cwd + "../../" + io ); }catch( e ){}
		try{ f0( cwd + "../../../" + io ); }catch( e ){}
		try{ f0( cwd + "../../../../" + io ); }catch( e ){}
	}

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
try{if(global._$TATIC_CONST_DEBUG){global.Lib.Ttw.autoLoad_JS.addJSFiles___Define("../"+p0+"js-WebServer/",{router:1,router_external:1,router_internal:1});global.Lib.Ttw.autoLoad_JS.addJSFiles_Package("../"+p0+"js-WebServer/",{router:1,router_external:1,router_internal:1});}else require(cwd+"../"+p0+"js-WebServer__Merge/___merge_min_all_1_0.js" );}catch(e){}
//try{if(global._$TATIC_CONST_DEBUG){global.Lib.Ttw.autoLoad_JS.addJSFiles___Define("../../"+p0+"js/",{router:1,router_external:1,router_internal:1});global.Lib.Ttw.autoLoad_JS.addJSFiles_Package("../../"+p0+"js/",{router:1,router_external:1,router_internal:1});}else require(cwd+"../../"+p0+"js__Merge/___merge_min_all_1_0.js");}catch(e){}
var f=global.Lib.Ttw.autoLoad_JS.addRouter__JSFiles_Services;
	f("../"+p0+"js-WebServer/router/");
	//f("../"+p0+"js-WebServer/router_external/");
	//f("../"+p0+"js-WebServer/router_internal/");
	//f("./js/router_external/");
	//f("./js/router_internal/");
//----------------------------------------------------------------------------------------------------;
	//*/
	f("../"+p0+"js-CompressJS/router/");
	f("../"+p0+"js-CompressJS/router_external/");
	f("../"+p0+"js-CompressJS/router_internal/");
	//*/

	/*/
	f("../"+p0+"js-File/router/");
	//f("../"+p0+"js-File/router_external/");
	//f("../"+p0+"js-File/router_internal/");
	//*/

	//*/
	f("../"+p0+"js-Source/router/");
	f("../"+p0+"js-Source/router_external/");
	f("../"+p0+"js-Source/router_internal/");
	//*/

	//*/
	f("../"+p0+"js-UncompressSource/router/");
	f("../"+p0+"js-UncompressSource/router_external/");
	f("../"+p0+"js-UncompressSource/router_internal/");
	//*/
//----------------------------------------------------------------------------------------------------;
global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST["/"]=function( req, res ){req.url+="index.html";SUtilHttpServer.evt_request__Target_FilePath(req,res);};