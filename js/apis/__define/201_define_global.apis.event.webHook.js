//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/201_define_global.apis.event.webHook.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.event.webHook;

global.apis.event.webHook = global.apis.event.webHook || function(){};

//----------------------------------------------------------------------------------------------------;

global.apis.event.webHook.error = global.apis.event.webHook.error || {};

/**
 * uncaughtException으로 발생한 Error를 WebHook으로 전달한다.
 * @function
 * @param {Error} er uncaughtException
 */
global.apis.event.webHook.error.uncaughtException = function( er )
{
	var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_APIServer";
	//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_ScrapServer";
	//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_WebServer";
	var host = global.apis.url.getServerURLByServers( APP_NAME );

	if( !host )
	{
		global.TtwLog.error( "[ ERROR ] - 정보를 전송하기 위한 Host 정보가 없다" );
		return;
	}

	if( -1 != host.indexOf( "localhost" ) )
	{
		global.TtwLog.error( "[ ERROR ] - Local 개발 환경에서는 WebHook를 전송하지 않는다." );
		return;
	}

	if( !global.fnUseWebHookAPI )
	{
		global.TtwLog.error( "[ ERROR ] - global.fnUseWebHookAPI 가 없다." );
		return;
	}

	var path = "";

		 if( -1 != host.indexOf( ".120" ) ) path = global.apis.event.webHook.error.uncaughtException.p120;
	else if( -1 != host.indexOf( ".122" ) ) path = global.apis.event.webHook.error.uncaughtException.p122;
	else if( -1 != host.indexOf( ".123" ) ) path = global.apis.event.webHook.error.uncaughtException.p123;
	else path = global.apis.event.webHook.error.uncaughtException.p123;

	var _description = er.toString();

	try{ if( "[object Object]" == _description ) _description = JSON.stringify( er ); }catch( er ){}

	var q = {
		body : "[ " + APP_NAME + " ] - uncaughtException - " + new Date().toString()
		, connectColor : "#FF0000"//승인;
		//, connectColor : "#0000FF"//참조;
		//, connectColor : "#000000"//공지;
		//, connectInfo : [{ title : "Error Detail", description : "" }]
		, connectInfo : [{ title : "Error Detail", description : _description }]
		//, connectInfo : [{ title : "Error Detail", description : er.toString() }]
		//, connectInfo : [{ title : "Error Detail", description : JSON.stringify( er, null, "\t" ) }]
	};

	//if( d.connectInfo ) q.connectInfo = d.connectInfo;

	try
	{
		if( global.fnUseWebHookAPI._sendCommon ) global.fnUseWebHookAPI._sendCommon( q, path, "" );
	}
	catch( e )
	{
		global.TtwLog.error( "[ ERROR ] - global.apis.event.webHook.error.uncaughtException - global.fnUseWebHookAPI._sendCommon 가 없다." );
		global.TtwLog.error( "[ ERROR ] - " + e );
	}
};

global.apis.event.webHook.error.uncaughtException.p120 = "/connect-api/webhook/11320800/b0a022c6b896c53da2d2767753228027";
global.apis.event.webHook.error.uncaughtException.p122 = "/connect-api/webhook/11320800/39051eb2274975f868acf012d10c04b6";
global.apis.event.webHook.error.uncaughtException.p123 = "/connect-api/webhook/11320800/00c38735fba2d2287f87fe96ab0a166f";

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.event.webHook;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;