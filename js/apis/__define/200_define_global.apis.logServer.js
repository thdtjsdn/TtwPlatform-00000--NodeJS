//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.logServer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.logServer;

global.apis.logServer = global.apis.logServer || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.logServer;

global.apis.logServer.CONST = {};

global.apis.logServer.CONST.DB = "admin";

//*/
global.apis.logServer.CONST.HOST = "127.0.0.1";
/*/
if(    ( SUtilNetServer.IPV4_INFO.address == "222.239.10.120" )
	|| ( SUtilNetServer.IPV4_INFO.address == "222.239.10.122" )
	|| ( SUtilNetServer.IPV4_INFO.address == "222.239.10.123" )
) global.apis.logServer.CONST.HOST = SUtilNetServer.IPV4_INFO.address;
//*/

global.apis.logServer.CONST.PORT = 59325;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;