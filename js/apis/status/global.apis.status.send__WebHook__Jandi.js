//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/status/global.apis.status.send__WebHook__Jandi.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * @property {uint}
	 */
	var _count = 0;

	/**
	 * @property {uint}
	 */
	var _interval = -1;

	/**
	 * 최종 스테이터스 문자열 값
	 * @property {String}
	 */
	var _LAST_STATUS = "";

	/**
	 * @property {Object}
	 */
	var _sendObj = {
		body : ""
		, connectInfo : [
			  { title : "CPU Percent", description : "" }
			, { title : "IOCount", description : "" }
			, { title : "UsageMemory", description : "" }
			, { title : "ProcessMemory", description : "" }
			, { title : "SystemMemory", description : "" }
			, { title : "ServerConnections", description : "" }
		]
	};

	/**
	 * 중지하기
	 * @function
	 */
	var _END = function(){
		global.apis.common.clearInterval( _interval );
		_interval = -1;
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.
	 *
	 * @function
	 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
	 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
	 * @param {String} sid Session 체크를 위한 데이터
	 * @param {Function} cbFunction Session 인증 후 실행될 Callback 함수
	 *	function( req, res, error, result ){} 형태로 작성되는 함수.
	 */
	global.apis.status.send__WebHook__Jandi = function()
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.status.send__WebHook__Jandi():void----------" );

		//CPU 사용량이 2%가 넘지 않으면 전송하지 않는다.;
		//try{ if( 2 > global.apis.process.getCPUUsage() ) return; }catch( e ){ return; }

		//CPU 사용량이 5%가 넘지 않으면 전송하지 않는다.;
		try{ if( 5 > global.apis.process.getCPUUsage() ) return; }catch( e ){ return; }

		if( global.apis.STATIC.CONFIG.URL.SCODE );

		var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_APIServer";
		//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_ScrapServer";
		//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_WebServer";

		var host = global.apis.url.getServerURLByServers( APP_NAME );

		if( !host )
		{
			global.TtwLog.error( "[ ERROR ] - 정보를 전송하기 위한 Host 정보가 없다" );
			return;
		}

		//*/
		if( -1 != host.indexOf( "localhost" ) )
		{
			global.TtwLog.warn( "[ ERROR ] - Local 개발 환경에서는 WebHook를 전송하지 않는다." );
			_END(); return;
		}
		//*/

		if( !global.fnUseWebHookAPI )
		{
			global.TtwLog.error( "[ ERROR ] - global.fnUseWebHookAPI 가 없다." );
			_END(); return;
		}

		//*/
		var path = "";

			 if( -1 != host.indexOf( ".120" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH;
		else if( -1 != host.indexOf( ".122" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__122_PATH;
		else if( -1 != host.indexOf( ".123" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;

		if( "" == path )
		{
			global.TtwLog.error( "[ ERROR ] - 120, 122, 123에 상응하는 path 가 없다." );
			_END(); return;
		}
		/*/
		var path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;
		//*/

		//NodeJS App의 status를 가져온다.;
		var r = global.apis.process.getStatusTotal();

		//FileServer에는 참조하기 위한 Instance가 존재 하지 않음;
		if( "SYS0040" != global.apis.STATIC.CONFIG.URL.SCODE )
		{
			try
			{
				r.ServerConns = global.server.server.server.connections;
			}
			catch( er )
			{
				global.TtwLog.error( "[ ERROR ] - global.apis.status.send__WebHook__Jandi::r.ServerConns = global.server.server.server.connections; Error : " + er );
			}
		}

		try
		{
			if( global.fnUseWebHookAPI._sendCommon )
			{
				var o = _sendObj;
					o.body = "[ " + APP_NAME + " Status ] - " + new Date().toString();
					//o.connectInfo[ 0 ].title = "CPU";
					//o.connectInfo[ 0 ].description = JSON.stringify( r.CPU, null, "\t" );
					o.connectInfo[ 0 ].description = global.apis.process.getCPUUsage() + "%";

					//o.connectInfo[ 1 ].title = "IOCount";
					o.connectInfo[ 1 ].description = JSON.stringify( r.IOCount, null, "\t" );

					//o.connectInfo[ 2 ].title = "UsageMemory";
					o.connectInfo[ 2 ].description = JSON.stringify( r.UsageMemory, null, "\t" );

					//o.connectInfo[ 3 ].title = "ProcessMemory";
					o.connectInfo[ 3 ].description = JSON.stringify( r.ProcessMemory, null, "\t" );

					//o.connectInfo[ 4 ].title = "SystemMemory";
					o.connectInfo[ 4 ].description = JSON.stringify( r.SystemMemory, null, "\t" );

					//o.connectInfo[ 5 ].title = "ServerConnections";
					o.connectInfo[ 5 ].description = JSON.stringify({ count : r.ServerConns }, null, "\t" );

				//마지막 스테이터스 값과 비교하여 동일한 값이면 알람메세지를 전송하지 않는다.;
				var statusJSON = JSON.stringify( _sendObj );
				//var statusObj = JSON.parse( statusJSON );
				if( _LAST_STATUS != statusJSON )
				{
					_LAST_STATUS = statusJSON;
					global.apis.fs.writeFile_UTF8( "./log/status_nodejs - " + global.apis.date.getStringDate_Dash() + ".log", statusJSON );
					global.fnUseWebHookAPI._sendCommon( _sendObj, path, "" );
					++_count;
				}
				else return;
			}
		}
		catch( e )
		{
			global.TtwLog.error( "[ ERROR ] - global.apis.status.send__WebHook__Jandi - global.fnUseWebHookAPI._sendCommon 가 없다." );
			global.TtwLog.error( "[ ERROR ] - " + e );
		}

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.status.send__WebHook__Jandi():void----------" );
	};

	global.apis.status.send__WebHook__Jandi.END = _END;
	global.apis.status.send__WebHook__Jandi.START = function(){
		global.apis.common.clearInterval( _interval );
		_interval = global.apis.common.setInterval( global.apis.status.send__WebHook__Jandi, 30000 );
	};

	global.apis.status.send__WebHook__Jandi.START();
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;