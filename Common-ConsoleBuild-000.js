require( "console" );
if( !global.atob ) global.atob = function( str ){ return Lib.Ttw.ab( str, 1 ); }
if( !global.btoa ) global.btoa = function( str ){ return Lib.Ttw.ba( str, 1 ); }
global.gc=global.gc||function(){};console.log(1);
STtwUtilBuffer.iconv=require("iconv-lite");if(!global.Lib.Ttw.autoLoad_JS)global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"});
var p0 = "TtwPlatform-00000--NodeJS/";
(function(){
	var cwd = global.process.cwd() + "/";
	var p1 = p0 + "native_modules/";

	var f0 = global.Lib.Ttw.importTll;
	var a = [
		//"HTTPSServer_Override"
		"LogToFile"
		//, "MongoDBQuerySync"
		//, "MongoDBTool__ExportImportCreator--Windows"
		//, "NodeHTML"
		//, "OS-NetworkInformation"
		//, "OverrideSUtilHttp.request"//버그 기능 Override NodeJS 새로 컴파일 하면 삭제해도 됨;
		//, "SyncRequest"
		//, "UUID"
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
})();

global._$TATIC_CONST_DEBUG=true;
