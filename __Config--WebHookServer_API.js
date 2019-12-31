console.log(1);
//----------------------------------------------------------------------------------------------------;
var fileNm = "_Config--WebHookServer_API.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	if( global.fnUseWebHookAPI ) return;

	//----------------------------------------------------------------------------------------------------;

	//	STATIC DEFINE;

	//----------------------------------------------------------------------------------------------------;

	//[BL] Server - 120 데이터 수집 서버;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__120_PATH = "/connect-api/webhook/11320800/6984ee350d858566240a96ad573ae96c";
	//[BL] Server - 122 운영 서버;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__122_PATH = "/connect-api/webhook/11320800/e1be32255d09bd6fccaecea669d7897e";
	//[BL] Server - 123 개발 서버;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__123_PATH = "/connect-api/webhook/11320800/e1c2e44f9a2619018da4919eec38a0ab";

	//[BL] Alicloud - 52 - OnSight Crawler - 삭제 예정;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__AliCloud_52_PATH = "/connect-api/webhook/11320800/0e0f265bd14e779b02fecf1a3d60d2a3";
	//[BL] Alicloud - 163 - OnSight Crawler - 삭제 예정;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__AliCloud_163_PATH = "/connect-api/webhook/11320800/d76620782d1a4e39bc8e67e611868fc9";


	//[BL] ServerStatus - 120 데이터 수집 서버;
	global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH = "/connect-api/webhook/11320800/e189f4e6eade91270d244ea442c078dc";
	//[BL] ServerStatus - 122 운영 서버;
	global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__122_PATH = "/connect-api/webhook/11320800/9f0fe608ff8ef87c2690e8f14be3deb0";
	//[BL] ServerStatus - 123 개발 서버;
	global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH = "/connect-api/webhook/11320800/375fe313876db43d2de4958048be4325";

	//--------------------------------------------------;

	//B2LiNK-Ttw-Tool-WebHook;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__TtwTool = "/connect-api/webhook/11320800/dff7331f95df0b0a6aa95bfe2b81c2b5";

	//--------------------------------------------------;

	//OnSight_Electron_Scrapper 잔디 웹훅;
	//global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_Scrapper = "/connect-api/webhook/11320800/6d17d7b8ce48e857c29cd9e0b091ef59";
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_Scrapper = "/connect-api/webhook/11320800/9eeb7e553a1f2426f52ed641f99aab2a";

	//OnSight - DB - 정제 잔디 웹훅;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_DB_Processing = "/connect-api/webhook/11320800/32d6692355cc5ed567d3a37dd1b8ac9f";

	//OnSight - Mapper - GoodsList 갱신 알람;
	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Mapper_GoodsListUpdate = "/connect-api/webhook/11320800/ae2ab46bdc3e94b806b9e8142fb703ec";

	//--------------------------------------------------;

	global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__HEADER = { Accept : "application/vnd.tosslab.jandi-v2+json", "Content-Type" : "application/json" };

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @property {Object}
	 */
	global.fnUseWebHookAPI = {
		sendTtwTool : null
		, _sendCommon : null
		, send120 : null
		, send122 : null
		, send123 : null
		, send120Status : null
		, send122Status : null
		, send123Status : null

		//OnSight Electron Scrapper, DB;
		, sendOnSightElectronScrapper : null
		, sendOnSightElectronDBProcessing : null
	};

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Object}
	 * <code>
		{
			body : ""
			, connectInfo : ""
			, ...
		}
	 * </code>
	 *
	 * @param {String} path
	 * @param {String} endLog
	 */
	global.fnUseWebHookAPI._sendCommon = function( d, path, endLog )
	{
		var q = { body : d.body, connectColor : "#FF0000" };
		if( d.connectInfo ) q.connectInfo = d.connectInfo;
		SUtilHttps.request_POST({encoding : "utf8"
			, options : { host : "wh.jandi.com", port : 443, path : path, headers : global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__HEADER }
			, cbFunctions : {
				end : function( data ){
					global.TtwLog.log( endLog );
					//global.process.exit();
				}
				, error : function( error ){ console.log( error ); }
			}
			, data : JSON.stringify( q )
		});
	};

	/**
	 * @function
	 * @param {Object}
	 * <code>
		{
			body : ""
			, connectInfo : ""
			, ...
		}
	 * </code>
	 */
	global.fnUseWebHookAPI.sendTtwTool = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__TtwTool, "TtwTool" ); };
	global.fnUseWebHookAPI.send120 = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__120_PATH, "" ); };
	global.fnUseWebHookAPI.send122 = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__122_PATH, "" ); };
	global.fnUseWebHookAPI.send123 = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__123_PATH, "" ); };
	global.fnUseWebHookAPI.send120Status = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH, "" ); };
	global.fnUseWebHookAPI.send122Status = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__122_PATH, "" ); };
	global.fnUseWebHookAPI.send123Status = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH, "" ); };

	//삭제 예정;
	global.fnUseWebHookAPI.send_Ali52  = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__AliCloud_52_PATH, "" ); };
	global.fnUseWebHookAPI.send_Ali163 = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__AliCloud_163_PATH, "" ); };

	//OnSight - Electron - Scrapper, DB;
	global.fnUseWebHookAPI.sendOnSightElectronScrapper     = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_Scrapper, "" ); };
	global.fnUseWebHookAPI.sendOnSightElectronDBProcessing = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_DB_Processing, "" ); };

	//OnSight - Mapper - GoodsList Update;
	global.fnUseWebHookAPI.sendOnSightMapperGoodsListUpdate = function( d ){ global.fnUseWebHookAPI._sendCommon( d, global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Mapper_GoodsListUpdate, "" ); };

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;