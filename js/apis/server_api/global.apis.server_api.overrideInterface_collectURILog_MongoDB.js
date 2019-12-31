//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/server_api/global.apis.server_api.overrideInterface_collectURILog_MongoDB.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _PATH_COMMON = "../../../TtwPlatform-00000--NodeJS/js/apis/server_api/";

	var _PATH = _PATH_COMMON + "global.apis.server_api.overrideInterface_collectURILog_MongoDB.dbjs";

	if( !global.REQUIRES.fs.existsSync( _PATH ) )
	{
		global.TtwLog.warn( "[ WARN ] - global.apis.server_api.overrideInterface_collectURILog_MongoDB.dbjs를 찾을 수 없다."  );
		return;
	}

	/**
	 * MongoDB Template Query를 dbjs 파일로부터 가져오기
	 * @property {String}
	 */
	var _query = global.apis.fs.getDBJS__require( _PATH );

	//----------------------------------------------------------------------------------------------------;

	/**
	 * LogServer에 삽입할 URI 정보들 중에 필터링할 키워드 목록
	 * @property {Array}
	 */
	//var _FILTER_URI_KEYWORD = global.apis.fs.getJSON_UTF8( _PATH_COMMON + "global.apis.server_api.overrideInterface_collectURILog_MongoDB.json" );
	var _FILTER_URI_KEYWORD = [
		/*/
		@ "check_session"
			/member/member_session/checkSeccion
		//*/
		"check_session"
	];

	/**
	 * LogServer에 삽입할 URI 정보들 중에 부수적인 기능을 추가할 키워드 목록
	 * @property {Array}
	 */
	var _FILTER_URI_KEYWORD_PASS_N_SCODE = [
		"sign_in"
	];

	//----------------------------------------------------------------------------------------------------;

	/**
	 * SUtilHttpServer.evt_request__API_Only Overriding 한다.
	 * URI, IP, PORT, SCODE, Session ID등을 DataBase에 축적한다.
	 * @function
	 * @dependency
	 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
	 * global._$TATIC_CONST_SERVER_HTTP_PORT
	 * SUtilHttpServer.getQueryFromURL
	 */
	global.apis.server_api.overrideInterface_collectURILog_MongoDB = function()
	{
		global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_api.overrideInterface_collectURILog_MongoDB():void----------" );

		var _fn0 = function( data ){

			if( !data )
			{
				global.TtwLog.error( "[ ERROR ] - global.apis.server_api.overrideInterface_collectURILog_MongoDB : data is " + data );
				return null;
			}

			//----------HTTP로 SessionServer에서 유저 정보를 가져온 후 URI 사용 기록을 LogServer로 전송;
			/*/
			var url = global.apis.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/member_public/getProp_NameFromsid?sid=" + data.sid;

			//SessionServer(SYS0010)에 sid(Session ID)로 mid(Member ID) 요청;
			global.apis.request.get( url, function( result ){

				//SesssionServer(SYS0010)에 sid(Session ID)로 mid(Member ID) 요청한 결과를 가지고 판단;
				if( !global.apis.response.getResultStatus( result ) )
				{
					//필요 로직 추가;
					//...;

					return;
				}

				debugger;

				data.mid = result;

				//Query에 필요한 데이터 치환;
				//ex query - 'db0 = db.getSiblingDB( "url_log" );db0.getCollection( "' + SCODE + '" ).insertOne(' + JSON.stringify( data ) + ');';
				var query = _query.replace( "<!=data=!>", JSON.stringify( data ) );

				global.apis.logServer.executeQuery( query, function( error, result ){
					if( error )
					{
						throw new Error();
						return;
					}

					//기타 로직 처리;
				});
			});
			//*/
			//----------HTTP로 SessionServer에서 유저 정보를 가져온 후 URI 사용 기록을 LogServer로 전송;


			//----------SessionServer's MongoDB에 직접 연결하여 Session ID로 유저 정보를 가져온 후 URI 사용 기록을 LogServer로 전송;
			/*///SessionServer's MongoDB로 직접 요청 - B2Labs 서버에서만 작동됨;
			global.apis.session.getMemberIDFromSessionID( data.sid,
				function( error, result ){
					debugger;
					if( error )
					{
						throw new Error();
						return;
					}

					data.mid = result;

					//Query에 필요한 데이터 치환;
					//ex query - 'db0 = db.getSiblingDB( "url_log" );db0.getCollection( "' + SCODE + '" ).insertOne(' + JSON.stringify( data ) + ');';
					var query = _query.replace( "<!=data=!>", JSON.stringify( data ) );

					global.apis.logServer.executeQuery( query, function( error, result ){
						if( error )
						{
							throw new Error();
							return;
						}

						//기타 로직 처리;
					});
				}
			);
			//*/
			//----------SessionServer's MongoDB에 직접 연결하여 Session ID로 유저 정보를 가져온 후 URI 사용 기록을 LogServer로 전송;


			//----------유저정보 필요없이 URI 사용 기록을 LogServer로 전송;
			//Query에 필요한 데이터 치환;
			//ex query - 'db0 = db.getSiblingDB( "url_log" );db0.getCollection( "' + SCODE + '" ).insertOne(' + JSON.stringify( data ) + ');';
			var query = _query.replace( "<!=data=!>", JSON.stringify( data ) );

			global.apis.logServer.executeQuery( query, function( error, result ){
				if( error )
				{
					throw new Error();
					return;
				}

				//기타 로직 처리;
			});
			//----------유저정보 필요없이 URI 사용 기록을 LogServer로 전송;

		};

		//Overriding;
		var _fn_original = SUtilHttpServer.evt_request__API_Only;//Overriding 전 기존 기능;
		SUtilHttpServer.evt_request__API_Only = function( req, res ){

			var uri = STtwUtilHttpServer.getURIFromURL( req.url );

			var q = global.server.getQueryFromURL( req.url );

			if( !q.SCODE )
			{
				var b = 0;

				//LogServer에 URI 로그를 남기지 않는 케이스;
				var i=0, iLen=_FILTER_URI_KEYWORD_PASS_N_SCODE.length;
				for( ; i<iLen; ++i )
				{
					if( -1 != uri.indexOf( _FILTER_URI_KEYWORD_PASS_N_SCODE[ i ] ) )
					{
						b = 1;
						q.SCODE = global.apis.STATIC.CONFIG.URL.SCODE;
						q.sid = q.sid || null;
					}
				}

				if( !b )
				{
					//Overriding 전 기존 기능 수행;
					_fn_original( req, res );
					return;
				}
			}

			//LogServer에 URI 로그를 남기지 않는 케이스;
			var i=0, iLen=_FILTER_URI_KEYWORD.length;
			for( ; i<iLen; ++i )
				if( -1 != uri.indexOf( _FILTER_URI_KEYWORD[ i ] ) )
				{
					//Overriding 전 기존 기능 수행;
					_fn_original( req, res );
					return;
				}

			//LogServer로 로그 전송 기능;
			var PARAM = {
				ip : req.client.remoteAddress.replace( /\:/gi, "" )
				, port : req.client.remotePort
				, date : new Date().toString()//저장할 데이터 포멧 선정하기;
				, SCODE : q.SCODE
				, uri : uri
				, sid : q.sid
				, mid : q.mid || null
			};

			try{ var k = "referer";         PARAM[ k ] = req.headers[ k ]; }catch( er ){}
			try{ var k = "x-forward-for";   PARAM[ k ] = req.headers[ k ]; }catch( er ){}
			try{ var k = "x-forward-port";  PARAM[ k ] = req.headers[ k ]; }catch( er ){}
			try{ var k = "x-forward-proto"; PARAM[ k ] = req.headers[ k ]; }catch( er ){}

			_fn0( PARAM );

			//Overriding 전 기존 기능 수행;
			_fn_original( req, res );
		};

		global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_api.overrideInterface_collectURILog_MongoDB():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;