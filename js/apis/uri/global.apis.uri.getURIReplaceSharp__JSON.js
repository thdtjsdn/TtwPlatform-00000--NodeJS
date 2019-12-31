//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/uri/global.apis.uri.getURIReplaceSharp__JSON.js";
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
global.apis.uri.getURIReplaceSharp__JSON = function( data )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.uri.getURIReplaceSharp__JSON():{String}----------" );

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.uri.getURIReplaceSharp__JSON():{String}----------return s;" );
	return JSON.stringify( data ).replace( /#/gi, "!MzU=!" ).replace( /&/gi, "!Mzg=!" ).replace( /\+/gi, "!MTg3!" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;