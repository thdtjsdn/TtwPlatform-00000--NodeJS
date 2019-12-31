//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/uri/global.apis.uri.getURIReplaceSharp.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} s 문자열
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 * +를 !MTg3!로 변경
 */
global.apis.uri.getURIReplaceSharp = function( s )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.uri.getURIReplaceSharp():{String}----------" );

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.uri.getURIReplaceSharp():{String}----------return s;" );
	return s.replace( /#/gi, "!MzU=!" ).replace( /&/gi, "!Mzg=!" ).replace( /\+/gi, "!MTg3!" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;