//----------------------------------------------------------------------------------------------------;
//var fileNm = "js-WebServer/b2link/uri/global.b2link.uri.getURIReplaceSharp__JSON.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} data
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 * +를 !MTg3!로 변경
 */
global.b2link.uri.getURIReplaceSharp__JSON = function( data )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.uri.getURIReplaceSharp__JSON():{String}----------" );

	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.uri.getURIReplaceSharp__JSON():{String}----------return s;" );
	return JSON.stringify( data ).replace( /#/gi, "!MzU=!" ).replace( /&/gi, "!Mzg=!" ).replace( /\+/gi, "!MTg3!" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;