//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/router/global.apis.router.removeRouter.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Router 삭제
 *
 * @function
 * @param {String} uri
 */
global.apis.router.removeRouter = function( uri )
{
	global.Rh2Log.timeStamp( "---- [ S ] - global.apis.router.removeRouter():void----------" );

	global.Rh2Log.timeStamp( "[ DATE ] - " + Date.now() + " - " + uri + " Router 삭제함" );

	global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST[ uri ] = null;
	delete global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST[ uri ];

	global.Rh2Log.timeStamp( "---- [ E ] - global.apis.router.removeRouter():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
