//----------------------------------------------------------------------------------------------------;
//var fileNm = "js-WebServer/b2link/__define/200_define_global.b2link.event.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.event;

global.b2link.event = global.b2link.event || {};

//----------------------------------------------------------------------------------------------------;

/*/
global.process.on( "uncaughtException", function( error ){
	try
	{
		//if( "MongoError" == error.name ) global.b2link.event.cbFunctions.uncaughtException.MongoError( error );

		//debugger;
		global.TtwLog.error( error );

		//uncaughtException으로 발생한 Error를 WebHook으로 전달한다.;
		//global.b2link.event.webHook.error.uncaughtException( error );
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
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", 1 );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 *
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", { a : 1 } );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 * </code>
 */
global.b2link.event.dispatchCustomEvent=function(t,n,e){SUtilCustomEvent.dispatchCustomEvent(t,n,e)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * global.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", 1 );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 *
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", { a : 1 } );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 * </code>
 */
global.b2link.event.dispatchEvent=function(t,n){global.TtwLog.info(t),global.TtwLog.info("evtType : "+n),SUtilCustomEvent.dispatchEvent(t,n)};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.event;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;