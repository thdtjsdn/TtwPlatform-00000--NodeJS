//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/router/global.apis.router.addRouter.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Router 추가
 *
 * @function
 * @param {String} uri Request URI "/dhfgegw", "/dyfheutjgdjg/dhgdyfeh"
 * @param {Function} routerFunc 실행할 router function( req, res ){}
 * @return {Boolean}
 */
global.apis.router.addRouter = function( uri, routerFunc )
{
	global.Rh2Log.timeStamp( "---- [ S ] - global.apis.router.addRouter():void----------" );

	if( global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST[ uri ] )
	{
		global.Rh2Log.error( uri + "가 이미 존재함 - 다시 확인 바람" );
		return false;
	}
	else
	{
		global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST[ uri ] = routerFunc;
		return true;
	}

	global.Rh2Log.timeStamp( "---- [ E ] - global.apis.router.addRouter():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
