//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_global.apis.event.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.event;

global.apis.event = global.apis.event || {};

//----------------------------------------------------------------------------------------------------;

/*/
global.process.on( "uncaughtException", function( error ){
	try
	{
		if( "MongoError" == error.name ) global.apis.event.cbFunctions.uncaughtException.MongoError( error );

		//debugger;

		global.TtwLog.error( error );

		//uncaughtException으로 발생한 Error를 WebHook으로 전달한다.;
		global.apis.event.webHook.error.uncaughtException( error );
	}
	catch( e ){}
});
//*/

//----------------------------------------------------------------------------------------------------;

/**
 * CustomEvent를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Obejct} evtDetail
 * @example
 * <code>
 * global.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * global.apis.event.dispatchCustomEvent( global.document, "asd", 1 );
 * global.apis.event.dispatchEvent( global.document, "asd" );
 *
 * global.apis.event.dispatchCustomEvent( global.document, "asd", { a : 1 } );
 * global.apis.event.dispatchEvent( global.document, "asd" );
 * </code>
 */
global.apis.event.dispatchCustomEvent=function(t,n,e){SUtilCustomEvent.dispatchCustomEvent(t,n,e)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * global.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * global.apis.event.dispatchCustomEvent( global.document, "asd", 1 );
 * global.apis.event.dispatchEvent( global.document, "asd" );
 *
 * global.apis.event.dispatchCustomEvent( global.document, "asd", { a : 1 } );
 * global.apis.event.dispatchEvent( global.document, "asd" );
 * </code>
 */
global.apis.event.dispatchEvent=function(t,n){global.TtwLog.info(t),global.TtwLog.info("evtType : "+n),SUtilCustomEvent.dispatchEvent(t,n)};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.event;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;