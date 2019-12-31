//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/status/global.apis.status.send__WebHook__Jandi_MongoDB.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

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
			{ title : "Sender", description : "" }
			, { title : "", description : "" }
		]
	};

	/**
	 * 중지하기
	 * @function
	 */
	var _END = function(){
		global.TtwLog.log( "[ WARN ] - " + global.apis.STATIC.CONFIG.URL.SCODE + " MongoDB 상태 조회 종료 - " + _interval );

		global.apis.common.clearInterval( _interval );
		_interval = -1;
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * ServerStatus 중에서 MongoDB Error와 관련있는 Metric 값을 평가하고, 이상이 있으 경우 Jandi로 경고 메세지를 보낸다.
	 * @function
	 */
	global.apis.status.send__WebHook__Jandi_MongoDB = function()
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.status.send__WebHook__Jandi_MongoDB():void----------" );

		var CONFIG_URL = global.apis.STATIC.CONFIG.URL;

		if( !CONFIG_URL.SCODE ){ global.TtwLog.warn( "[ WARN ] - SCODE가 없음" ); _END(); return; }

		if( "SYS0050" == CONFIG_URL.SCODE ){ global.TtwLog.warn( "[ WARN ] - SYS0050은 지원하지 않음." ); _END(); return; }
		if( "SYS0070" == CONFIG_URL.SCODE ){ global.TtwLog.warn( "[ WARN ] - SYS0070은 지원하지 않음." ); _END(); return; }

		var host = global.apis.url.getServerURL_APIServer_Self();

		if( !host )
		{
			global.JkLog.error( "[ ERROR ] - 정보를 전송하기 위한 Host 정보가 없다" );
			_END(); return;
		}

		//*///Local Test를 원하면 주석처리;
		if( -1 != host.indexOf( "localhost" ) )
		{
			global.JkLog.warn( "[ ERROR ] - Local 개발 환경에서는 WebHook를 전송하지 않는다." );
			_END(); return;
		}
		//*/

		if( !global.fnUseWebHookAPI )
		{
			global.JkLog.error( "[ ERROR ] - global.fnUseWebHookAPI 가 없다." );
			_END(); return;
		}

		//*///Local Test를 원하면 주석처리;
		var path = "";

			 if( -1 != host.indexOf( ".120" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH;
		else if( -1 != host.indexOf( ".122" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__122_PATH;
		else if( -1 != host.indexOf( ".123" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;
		//삭제하기 - 20171222 - 송선우 - 126번 서버를 위한 땜빵처리 - 120번으로 정상 이동후 삭제하기;
		//else if( -1 != host.indexOf( ".126" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH;

		if( "" === path )
		{
			global.JkLog.error( "[ ERROR ] - 120, 122, 123에 상응하는 path 가 없다." );
			_END(); return;
		}
		/*/
		var path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;
		//*/

		//--------------------------------------------------;

		//	IS ALIVE CHECK;

		//--------------------------------------------------;

		var _url = host + "/" + "_mongodb/status/isAlive";

		//MongoDB isAlive;
		global.apis.request.get( _url, function( result ){
			if( !global.apis.response.getResultStatus( result ) )
			{
				var address = global.server.server.server.address();
				//var address = global.server.server.address();

				_sendObj.body = "[ " + CONFIG_URL.SCODE + "_MongoDB isAlive ]";
				_sendObj.connectInfo[ 0 ].description = address.address + address.port;
				_sendObj.connectInfo[ 1 ].description = CONFIG_URL.SCODE + " MongoDB 연결 실패";

				global.fnUseWebHookAPI._sendCommon( _sendObj, path, "" );
				return;
			}

			//--------------------------------------------------;

			//	MongoDB Status CHECK;

			//--------------------------------------------------;

			//MongoDB Status 분석;
			global.apis.status.send__WebHook__Jandi_MongoDB.status( CONFIG_URL.SCODE, host, path );
		});

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.status.send__WebHook__Jandi_MongoDB():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * MongoDB Status 분석
	 * @function
	 * @param {String} SCODE
	 * @param {String} host
	 */
	global.apis.status.send__WebHook__Jandi_MongoDB.status = function( SCODE, host, path )
	{
		//var _url = host + "/" + "_mongodb/status/serverStatus";
		var _url = host + "/" + "_mongodb/status/serverStatusMin";

		//MongoDB Status;
		global.apis.request.get( _url, function( result ){

			//MongoDB 연계되어 있지만, B2Ker Framework 기반의 HTTP APIServer가 아닌 서버;
			if( -1 != result.indexOf( "Bad Request" ) || -1 != result.indexOf( "Error" ) )
			{
				global.JkLog.error( "[ ERROR ] - B2Ker Framework 기반의 HTTP APIServer가 아닌 서버" );
				_END(); return;
			}

			//MongoDB 연계가 아닌 서버의 처리;
			if( -1 != result.indexOf( "404 Not Found" ) )
			{
				global.JkLog.error( "[ ERROR ] - MongoDB 연계가 아닌 서버의 처리" );
				_END(); return;
			}

			var status = JSON.parse( result );

			/**
			 * Memory space
			 * Metrics to alert on:
			 *	mem.virtual (Virtual memory usage (MB))
			 *	mem.resident (Amount of memory used by the database process (MB))
			 *	extra_info.page_faults
			 */
			//status.mem;

			/**
			 *
			 */
			//status.extra_info.page_faults;

			/**
			 * Cache
			 * Metrics to alert on:
			 *	wiredTiger.cache.tracked dirty bytes in the cache
			 */
			//status.wiredTiger.cache;

			/**
			 * Number of read and write requests
			 * Metrics to alert on:
			 * 	globalLock.activeClients.readers
			 * 	globalLock.activeClients.writers
			 */
			//status.globalLock.activeClients;

			//--------------------------------------------------[ S ];
			var _bSend = 0;

			//Percentage of Connections Used
			//Metrics to alert on:
			//	100 x connections.current / ( connections.current + connections.available )
			status.connections.percent = 100 * status.connections.current / ( status.connections.current + status.connections.available );

			var t = _sendObj.connectInfo;
				t[ 1 ].title = "";
			if( status.mem.virtual > 3000
				|| status.mem.resident > 2500
				//|| status.extra_info.page_faults > 50000//기본값 25000 정도(송선우 랩탑 기준);
				//|| status.wiredTiger.cache["tracked dirty bytes in the cache"] > 100000
			)
			{
				t[ 1 ].title += "[ 메모리 문제 ]";
				_bSend = 1;
			}

			if( status.globalLock.activeClients.readers > 20
				|| status.globalLock.activeClients.writers > 20 )
			{
				t[ 1 ].title += "[ 사용자 수 문제 ]";
				_bSend = 1;
			}

			if( status.connections.percent > 90 )
			{
				t[ 1 ].title += "[ 접속률 문제 ]";
				_bSend = 1;
				status.connections.percent += "%";
			}

			//Asserts represent errors.
			//	Metrics to alert on:
			//|------------------------------------------------------------------------------------------------|
			//|                        Description                                        |        Name        |
			//|------------------------------------------------------------------------------------------------|
			//|    Number of message assertions raised during the selected time period    |    asserts.msg     |
			//|    Number of warning assertions raised during the selected time period    |    asserts.warning |
			//|    Number of regular assertions raised during the selected time period    |    asserts.regular |
			//|    Number of assertions corresponding to errors generated by users        |                    |
			//|    during the selected time period                                        |    asserts.user    |
			//|------------------------------------------------------------------------------------------------|
			if( status.asserts.regular > 0
				|| status.asserts.warning > 0
				|| status.asserts.msg > 0
				|| status.asserts.user > 0 )
			{
				t[ 1 ].title += "[ 쿼리 문제 ]";
				_bSend = 1;
			}

			if( _bSend )
			{
				var address = global.server.server.server.address();
				//var address = global.server.server.address();

				_sendObj.body = "[ " + SCODE + "_MongoDB Status ]";
				_sendObj.connectInfo[ 0 ].description = address.address + address.port;
				_sendObj.connectInfo[ 1 ].description = JSON.stringify( status, null, "\t" );

				/*/
				delete status.connections.percent;
				delete status.connections.totalCreated;
				/*/
				delete status.connections;
				//*/

				delete status.extra_info;

				/*/
				delete status.globalLock.totalTime;
				/*/
				delete status.globalLock
				//*/

				delete status.mem.resident;
				delete status.wiredTiger.cache;

				//마지막 스테이터스 값과 비교하여 동일한 값이면 알람메세지를 전송하지 않는다.;
				var statusJSON = JSON.stringify( status );
				//var statusObj = JSON.parse( statusJSON );
				if( _LAST_STATUS != statusJSON )
				{
					_LAST_STATUS = statusJSON;
					global.apis.fs.writeFile_UTF8( "./log/status_mongodb - " + global.apis.date.getStringDate_Dash() + ".log", statusJSON );
					global.fnUseWebHookAPI._sendCommon( _sendObj, path, "" );
					//++_count;
				}
				else return;
			}
			//--------------------------------------------------[ E ];

		});
	};

	//----------------------------------------------------------------------------------------------------;

	global.apis.status.send__WebHook__Jandi_MongoDB.END = _END;
	global.apis.status.send__WebHook__Jandi_MongoDB.START = function(){
		global.apis.common.clearInterval( _interval );
		_interval = global.apis.common.setInterval( global.apis.status.send__WebHook__Jandi_MongoDB, 30000 );
		//_interval = global.apis.common.setInterval( global.apis.status.send__WebHook__Jandi_MongoDB, 1000 );
	};

	//----------------------------------------------------------------------------------------------------;

	global.apis.status.send__WebHook__Jandi_MongoDB.START();

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;