
//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis;

global.b2link = global.apis = global.apis || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.STATIC;

global.apis.STATIC = global.apis.STATIC || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.STATIC;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - global.apis.STATIC.CONFIG;

global.apis.STATIC.CONFIG = global.apis.STATIC.CONFIG || {};





global.TtwLog.timeStamp( "--------------------------------------------------[ S ] - global.apis.STATIC.CONFIG.URL" );
global.apis.STATIC.CONFIG.URL = global.apis.STATIC.CONFIG.URL || {};
//------------------------------;
global.apis.STATIC.CONFIG.URL.JS_B2LINK = "./js/apis/";
//------------------------------;
global.apis.STATIC.CONFIG.URL.PROXY = "./ttwP/";//global.apis.STATIC.CONFIG.URL.PROXY;
//------------------------------;
global.apis.STATIC.CONFIG.URL.SCODE = "";//시스템 개별 정의;
global.TtwLog.timeStamp( "--------------------------------------------------[ E ] - global.apis.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - global.apis.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - global.apis.STATIC.CONST;
global.apis.STATIC.CONST = global.apis.STATIC.CONST || {};
//--------------------------------------------------[ E ] - global.apis.STATIC.CONST;

//----------------------------------------------------------------------------------------------------;

//------------------------------global.apis.STATIC.CONST.SCODES;
(function(){
	global.apis.STATIC.CONST.SCODES = global.apis.STATIC.CONST.SCODES || {};

	var _ = global.apis.STATIC.CONST.SCODES;
		_.__defineGetter__( "SESSION_SERVER"						, function(){ return "SYS0010"; } );
		_.__defineGetter__( "B2KER"									, function(){ return "SYS0020"; } );
		_.__defineGetter__( "BRAND_PORTAL"							, function(){ return "SYS0030"; } );
		_.__defineGetter__( "FILE_SERVER"							, function(){ return "SYS0040"; } );
		_.__defineGetter__( "WEB_HOOK_SERVER"						, function(){ return "SYS0050"; } );
		_.__defineGetter__( "WEB_SOCKET_MESSAGE_SERVER"				, function(){ return "SYS0060"; } );
		_.__defineGetter__( "EXCEL_SERVER"							, function(){ return "SYS0070"; } );
		_.__defineGetter__( "WEB_SOCKET_APP_COMMUNICATION_SERVER"	, function(){ return "SYS0080"; } );
})();
//------------------------------global.apis.STATIC.CONST.SCODES;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.STATIC.REGEXP;

global.apis.STATIC.REGEXP = global.apis.STATIC.REGEXP || {};

//----------------------------------------------------------------------------------------------------global.apis.STATIC.REGEXP.MATCH;

global.apis.STATIC.REGEXP.MATCH = global.apis.STATIC.REGEXP.MATCH || {};

/**
 * @property {RegExp}
 */
global.apis.STATIC.REGEXP.MATCH.URI_HTTP0 = /^http[s]*:\/\//;

/**
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.URL;
	var url = "http://localhost:8080/public/index.js?title=index&page=1";
	var arr = url.match( pattern );
	console.log( arr[ 0 ] );//http://localhost:8080/public/index.js;
	console.log( arr[ 1 ] );//http://;
	console.log( arr[ 2 ] );//localhost:8080/;
	console.log( arr[ 3 ] );//public/index.js;
 * </code>
 */
global.apis.STATIC.REGEXP.MATCH.URL = /(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/;

//----------------------------------------------------------------------------------------------------global.apis.STATIC.REGEXP.REPLACE;

global.apis.STATIC.REGEXP.REPLACE = global.apis.STATIC.REGEXP.REPLACE || {};

/**
 * @property {RegExp}
 * @D:\Github_B2LiNK\B2LiNK-B2Ker-Dev\WebPage\root\ui_template\b2link_settlement\common\edit_info_tax_bill.js
 */
//global.apis.STATIC.REGEXP.REPLACE.MONEY_COMMA0 = /(\d)(?=(\d{3} )+\.)/g;

/**
 * @property {RegExp}
 * @see global.apis.util.getMoney
 */
global.apis.STATIC.REGEXP.REPLACE.MONEY_COMMA1 = /\B(?=(\d{3})+(?!\d))/g;

/**
 * @property {RegExp}
 * @see global.apis.util.getRemoveCommaFormatFloat
 */
global.apis.STATIC.REGEXP.REPLACE.MONEY_COMMA2 = /[^\d]+/g;

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.STATIC.REGEXP;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.array;

global.apis.array = global.apis.array || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.array;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.array_collection;

global.apis.array_collection = global.apis.array_collection || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.array_collection;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.common;

global.apis.common = global.apis.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.common;


//./global.apis.common.clearInterval.js;
//global.apis.common.clearInterval=function(l){clearInterval(l)};
global.apis.common.clearInterval=function(e){return"number"==typeof e?global.clearInterval(e):"object"==typeof e&&e.close(),e};

//./global.apis.common.clearInterval_dispatchEvent.js;
//global.apis.common.clearInterval_dispatchEvent=function(l){clearTimeout(l),global.apis.event.dispatchCustomEvent(tEl,global.apis.event.INTERVAL_END,l)};
global.apis.common.clearInterval_dispatchEvent=function(e,l){return"number"==typeof e?global.clearInterval(e):"object"==typeof e&&e.close(),global.apis.event.dispatchCustomEvent(l,global.apis.event.INTERVAL_END,e),e};

//./global.apis.common.clearTimeout.js;
//global.apis.common.clearTimeout=function(o){clearTimeout(o)};
global.apis.common.clearTimeout=function(o){return"number"==typeof o?global.clearTimeout(o):"object"==typeof o&&o.close(),o};

//./global.apis.common.clearTimeout_dispatchEvent.js;
//global.apis.common.clearTimeout_dispatchEvent=function(l){clearTimeout(l),global.apis.event.dispatchCustomEvent(tEl,global.apis.event.TIMEOUT_END,l)};
global.apis.common.clearTimeout_dispatchEvent=function(e,l){return"number"==typeof e?global.clearTimeout(e):"object"==typeof e&&e.close(),global.apis.event.dispatchCustomEvent(l,global.apis.event.TIMEOUT_END,e),e};

//./global.apis.common.setInterval.js;
//global.apis.common.setInterval=function(n,t){return setInterval(n,t)};
global.apis.common.setInterval=function(n,t){return setInterval(n,t)};

//./global.apis.common.setInterval_dispatchEvent.js;
//global.apis.common.setInterval_dispatchEvent=function(t,n){var l=setInterval(t,n);return global.apis.event.dispatchCustomEvent(tEl,global.apis.event.INTERVAL_START,l),l};
global.apis.common.setInterval_dispatchEvent=function(n,t,e){var l=setInterval(n,t);return global.apis.event.dispatchCustomEvent(e,global.apis.event.INTERVAL_START,l),l};

//./global.apis.common.setTimeout.js;
//global.apis.common.setTimeout=function(o,t){return setTimeout(o,t)};
global.apis.common.setTimeout=function(o,t){return setTimeout(o,t)};

//./global.apis.common.setTimeout_dispatchEvent.js;
//global.apis.common.setTimeout_dispatchEvent=function(t,e,n){var l=setTimeout(t,e);return global.apis.event.dispatchCustomEvent(n,global.apis.event.TIMEOUT_START,l),l};
global.apis.common.setTimeout_dispatchEvent=function(t,e,n){var l=setTimeout(t,e);return global.apis.event.dispatchCustomEvent(n,global.apis.event.TIMEOUT_START,l),l};


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.compressCSS;

global.apis.compressCSS = global.apis.compressCSS || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.compressCSS;

/**
 * Native Module 'CompressCSS' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.compressCSS.install();

	global.compressCSS.*** API 추가
 * </code>
 */

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.compressHTML;

global.apis.compressHTML = global.apis.compressHTML || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.compressHTML;

/**
 * Native Module 'CompressHTML' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.compressHTML.install();

	global.compressHTML.*** API 추가
 * </code>
 */

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.compressJS;

global.apis.compressJS = global.apis.compressJS || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.compressJS;

/**
 * Native Module 'CompressJS' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.compressJS.install();

	global.compressJS.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.apis.compressJS.install=function(){return global.compressJS?void global.TtwLog.warn("Native Module( CompressJS )가 이미 설치 되어 있다."):(global.b2link["import"].native_modules__API("CompressJS.dll","../js-CompressJS/","compressJS"),void(global.compressJS=global.Lib.Ttw.compressor))},global.apis.compressJS.install._=global.Lib.Ttw.autoLoad_JS,console;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.compress_zip;

global.apis.compress_zip = global.apis.compress_zip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.compress_zip;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.console;

global.apis.console = global.apis.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.console;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.date;

global.apis.date = global.apis.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.date;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.debug;

global.apis.debug = global.apis.debug || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.debug;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.diff;

global.apis.diff = global.apis.diff || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.diff;

/**
 * Native Module 'Diff' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.diff.install();
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.apis.diff.install=function(){return global.differ?void global.TtwLog.warn("Native Module( Diff )가 이미 설치 되어 있다."):void global.b2link["import"].native_modules__API("Diff.dll","../js-Diff/","diff")},global.apis.diff.install._=global.Lib.Ttw.autoLoad_JS,console;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
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
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.fn;

global.apis.fn = global.apis.fn || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.fn;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRES;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};

var _ = require( "fs" );
global.REQUIRES.__defineGetter__( "fs", function(){ return _; } );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.fs;

global.apis.fs = global.apis.fs || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.fs;

/**
 * @function
 * @param {String} path
 * @param {Object} routers
 * <code>
	{
		b2link_router : 1
	}
 * </code>
 */
global.apis.fs.autoLoad_JS=function(a,o){global.Lib.Ttw.autoLoad_JS.addJSFiles___Define(a,o),global.Lib.Ttw.autoLoad_JS.addJSFiles_Package(a,o);var l=global.Lib.Ttw.autoLoad_JS.addRouter__JSFiles_Services;for(var i in o)l(a+i+"/")};

/**
 * @function
 * @param {Array} a
 * <code>
	[
		  [ "JavaScript Import - B2LiNK-B2Ker-Dev"					, "./js__b2link__b2ker/"					, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"			, "./js__b2link__excelServer/"				, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-FileServer-Dev"				, "./js__b2link__fileServer/"				, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-SessionServer-Dev"			, "./js__b2link__sessionServer/"			, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-WebHookServer-Dev"			, "./js__b2link__webHookServer/"			, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-WebSocket-MessageServer-Dev", "./js__b2link__webSocketMessageServer/"	, { b2link_router : 1 } ]
	]
 * </code>
 */
global.apis.fs.autoLoad_JSs=function(o){for(var a,l=0,n=o.length;n>l;++l)a=o[l],global.TtwLog.warn(a[0]),global.apis.fs.autoLoad_JS(a[1],a[2])};

/**
 * 경로를 지정하여 새폴더를 생성한다.
 * d:/a/b/c/
 * d:/a/b/가 존재 하지 않아도 전체 경로의 빈 폴더를 생성한다.
 * @function
 * @param {String} path
 * @return {*}
 */
!function(){global.REQUIRES=global.REQUIRES||{};var e=require("fs");global.REQUIRES.__defineGetter__("fs",function(){return e}),global.apis.fs.createDirectories=function(e){return global.REQUIRES.fs.mkdirSync(e,global.apis.fs.createDirectories.options)},global.apis.fs.createDirectories.options={recursive:!0}}();

/**
 * 경로를 지정하여 새폴더를 생성한다.
 * d:/a/b/c/
 * d:/a/b/가 존재 해야만 생성된다.
 * @function
 * @param {String} path
 * @return {*}
 */
!function(){global.REQUIRES=global.REQUIRES||{};var r=require("fs");global.REQUIRES.__defineGetter__("fs",function(){return r}),global.apis.fs.createDirectory=function(r){return global.REQUIRES.fs.mkdirSync(r)}}();

/**
 * *.dbjs 파일을 불러온다.
 * global._$TATIC_CONST_DEBUG가 true 이면 매번 파일을 갱신한다.
 * global._$TATIC_CONST_DEBUG가 false 이면 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path
 * @return {String}
 */
!function(){var t={};global.apis.fs.getDBJS=function(e){return t[e]||(t[e]=STtwUtilFsReadStream.getFile(e).toString("utf8")),global._$TATIC_CONST_DEBUG&&(t[e]=STtwUtilFsReadStream.getFile(e).toString("utf8"),SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),t[e])),t[e]},global.apis.fs.getDBJS.clear=function(){t={}}}();

/**
 * *.dbjs 파일을 불러온다.
 * dbjs 내부 문자열중에 <require>global.mongodb.***</require>를 소스로 치환해준다.
 * MongoDB 상에 <require>global.mongodb.***</require>의 API가 존재할시엔 그냥 API를 호출한다.(차후)
 * global._$TATIC_CONST_DEBUG가 true/false 상관없이 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path
 * @return {String}
 */
!function(){var r={};global.apis.fs.getDBJS__require=function(e){var i,l=16,t=10,a=-1,n=-1;if(!r[e]){for(var o=STtwUtilFsReadStream.getFile(e).toString("utf8");;){if(a=o.indexOf("<require>global."),-1==a)break;if(n=o.indexOf("</require>"),-1!=n){i=n+t;var f=o.slice(a,i),g=o.slice(a+l,n),u=Lib.Ttw.eval(g);if(!u)return global.TtwLog.error(g+" 경로에 문제가 있음."),new Error(g+" 경로에 문제가 있음.");var b=u.toString();o=o.replace(f,b)}}r[e]=o}return global._$TATIC_CONST_DEBUG&&SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),r[e]),r[e]},global.apis.fs.getDBJS__require.clear=function(){r={}}}();

/**
 * *.dbjs 파일을 불러온다.
 * global._$TATIC_CONST_DEBUG가 true 이면 매번 파일을 갱신한다.
 * global._$TATIC_CONST_DEBUG가 false 이면 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path *.dbjs 파일 경로
 * @param {String} nm_db Database Name
 * @param {String} nm_col Collection Name
 * @return {Object}
 * <code>
	{
		nm_db : {String}//Database Name;
		, nm_col : {String}//Collection Name;
		, q : {String}//Query;
		, s : {String}//"c", "r", "u", "d";
	}
 * </code>
 */
!function(){var t={};global.apis.fs.getDBJSObj=function(e,l,r){if(!t[e]){var a=STtwUtilFsReadStream.getFile(e).toString("utf8"),o=global.mongodb.dbjs.getCRUDStatusFromQuery(a,l,r);t[e]={nm_db:l,nm_col:r,q:a,s:o.replace("_","")}}if(global._$TATIC_CONST_DEBUG){var a=STtwUtilFsReadStream.getFile(e).toString("utf8"),o=global.mongodb.dbjs.getCRUDStatusFromQuery(a,l,r);t[e]={nm_db:l,nm_col:r,q:a,s:o.replace("_","")},SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),t[e].q)}return t[e]},global.apis.fs.getDBJSObj.clear=function(){t={}}}();

/**
 * *.dbjs 파일을 불러온다.
 * dbjs 내부 문자열중에 <require>global.mongodb.***</require>를 소스로 치환해준다.
 * MongoDB 상에 <require>global.mongodb.***</require>의 API가 존재할시엔 그냥 API를 호출한다.(차후)
 * global._$TATIC_CONST_DEBUG가 true/false 상관없이 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path *.dbjs 파일 경로
 * @param {String} nm_db Database Name
 * @param {String} nm_col Collection Name
 * @return {Object}
 * <code>
	{
		nm_db : {String}//Database Name;
		, nm_col : {String}//Collection Name;
		, q : {String}//Query;
		, s : {String}//"c", "r", "u", "d";
	}
 * </code>
 */
!function(){var r={};global.apis.fs.getDBJSObj__require=function(e,i,l){var t,a=16,o=10,n=-1,b=-1;if(!r[e]){for(var g=STtwUtilFsReadStream.getFile(e).toString("utf8");;){if(n=g.indexOf("<require>global."),-1==n)break;if(b=g.indexOf("</require>"),-1!=b){t=b+o;var u=g.slice(n,t),f=g.slice(n+a,b),_=Lib.Ttw.eval(f);if(!_)return global.TtwLog.error(f+" 경로에 문제가 있음."),new Error(f+" 경로에 문제가 있음.");var c=_.toString();g=g.replace(u,c)}}var s=global.mongodb.dbjs.getCRUDStatusFromQuery(g,i,l);r[e]={nm_db:i,nm_col:l,q:query,s:s.replace("_","")}}return global._$TATIC_CONST_DEBUG&&SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),r[e].q),r[e]},global.apis.fs.getDBJSObj__require.clear=function(){r={}}}();

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.apis.fs.getDirectoryList=function(t){return STtwUtilFsReadStream.getList_Directory(t)};

/**
 * @function
 * @param {String} path
 * @return {Byte}
 */
global.apis.fs.getFile=function(e){return STtwUtilFsReadStream.getFile(e)};

/**
 * @function
 * @param {String} path
 * @return {String}
 */
global.apis.fs.getFile_UTF8=function(t){return STtwUtilFsReadStream.getFile(t).toString("utf8")};

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.apis.fs.getFileList=function(t){return STtwUtilFsReadStream.getList_File(t)};

/**
 * @function
 * @param {String} path directory path
 * @param {String} extension ".json", ".txt", ... file extension
 * @return {Array}
 */
global.apis.fs.getFileList_Extension=function(t,e){return STtwUtilFsReadStream.getList_File_Extension(t,e)};

/**
 * *.html 파일 내부의 엘리먼트중에 <include-html></include-html>을 찾아서 매칭 html 구문으로 치환해준다.
 * @function
 * @param {String} path *.html *.thtml
 * @return {String} HTML
 */
global.apis.fs.getIncludeHTML=function(l){var n=global.apis.fs.getFile_UTF8(l);return global.apis.html.include(n)};

/**
 * @function
 * @param {String} path
 * @return {String}
 */
global.apis.fs.getJS__includeJS=function(e){for(var l,i=12,n=13,t=-1,a=-1,f=STtwUtilFsReadStream.getFile(e).toString("utf8");;){if(t=f.indexOf("<include-js>global."),-1==t)break;if(a=f.indexOf("</include-js>"),-1!=a){l=a+n;var r=f.slice(t,l),c=f.slice(t+i,a),g=global.apis.fs.getFile_UTF8(c);f=f.replace(r,g)}}return f};

/**
 * @function
 * @param {String} path
 * @return {Object}
 */
global.apis.fs.getJSON_UTF8=function(l){return JSON.parse(global.apis.fs.getFile_UTF8(l))};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.apis.fs.writeFile=function(i,t,e,l){STtwUtilFsWriteStream.writeFile(i,t,e,l)};

/**
 * @function
 * @param {String} fileNm
 * @param {ByteArray} d
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.apis.fs.writeFile_Binary=function(i,t,e,l){STtwUtilFsWriteStream.writeFile_Binary(i,t,e,l)};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Function} cb_Complete function( error ){}
 */
global.apis.fs.writeFile_UTF8=function(i,t,e){STtwUtilFsWriteStream.writeFile_UTF8(i,t,e),e&&e()};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 */
global.apis.fs.writeFile_UTF8__NCallBack=function(i,l){STtwUtilFsWriteStream.writeFile_UTF8(i,l)};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Function} cb_Complete
 */
global.apis.fs.writeQuery=function(i,t,e){STtwUtilFsWriteStream.writeFile_UTF8(i,t,e)};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.html;

global.apis.html = global.apis.html || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.html;

/**
 * html 구문 중 <include-html></include-html>을 찾아서 매칭 html 구문으로 치환해준다.
 * @function
 * @param {String} html
 * @return {String} html
 */
global.apis.html.include = function( html ){ return STtwUtilNodeHTML.includeHTML( html ); };

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.import;

global.apis.import = global.apis.import || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.import;

/**
 * *.dll *.dylib *.so를 Process상에 호출한다.
 * @function
 * @param {String} path
 * @return {*}
 */
global.b2link["import"].tll=function(l){global.b2link["import"].tll._(l)},global.b2link["import"].tll._=global.Lib.Ttw.importTll;

/**
 * 대상 폴더의 API를 등록한다.
 * @function
 * @param {String} modNm "uncompressSource.dll"
 * @param {String} pathAPI "../js-UncompressSource/"
 * @param {String} packageNm "uncompressSource"
 */
global.b2link["import"].native_modules__API=function(e,l,o){var t,n=global.REQUIRES.fs.existsSync,r=global.b2link["import"].tll,a=global.process.cwd()+"/",_=e,d=a+"./node_modules/exes/",i=a+"../TtwPlatform-00000--NodeJS/native_modules/",s=a+"../../TtwPlatform-00000--NodeJS/native_modules/",u=a+"../../../TtwPlatform-00000--NodeJS/native_modules/";n(d)&&(t=d),n(i)&&(t=i),n(s)&&(t=s),n(u)&&(t=u);var m=(r(t+_),t+l),v=global.b2link[o].install._;return v.addJSFiles___Define(m,{router:1,router_external:1,router_internal:1}),v.addJSFiles_Package(m,{router:1,router_external:1,router_internal:1}),m};

/**
 * 대상 폴더의 API와 Router를 등록한다.
 * @function
 * @param {String} modNm "uncompressSource.dll"
 * @param {String} pathAPI "../js-UncompressSource/"
 * @param {String} packageNm "uncompressSource"
 */
global.b2link["import"].native_modules__API_Router=function(e,_,l){var r=global.apis.util.import__native_modules__API(e,_,l),i=global.b2link[l].install._;i.addRouter__JSFiles_Services(r+"router/"),i.addRouter__JSFiles_Services(r+"router_external/"),i.addRouter__JSFiles_Services(r+"router_internal/")};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.ip;

global.apis.ip = global.apis.ip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.ip;

/**
 * @function
 * @param {String} ip
 * @return {Boolean}
 */
!function(){var f={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":1,"222.239.10.121":0,"222.239.10.122":1,"222.239.10.123":1,"222.239.10.124":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":1,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":1,"::ffff:222.239.10.123":1,"::ffff:222.239.10.124":0};global.apis.ip.adminCheckAvailable=function(l){return f.hasOwnProperty(l)?f[l]:0}}();

/**
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientRequest} res
 * @return {Boolean}
 */
global.apis.ip.adminCheckAvailable__http$ClientRequest=function(e,l){try{return global.apis.ip.adminCheckAvailable(e.client.remoteAddress)}catch(i){global.TtwLog.error("global.apis.ip.adminCheckAvailable__http$ClientRequest::req.client Error : "+i)}try{return global.apis.ip.adminCheckAvailable(e.connection.remoteAddress)}catch(i){global.TtwLog.error("global.apis.ip.adminCheckAvailable__http$ClientRequest::req.connection Error : "+i)}};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.log;

global.apis.log = global.apis.log || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.log;

//./global.apis.log.comment_Dash_20.js;
global.apis.log.comment_Dash_20 = function(){global.TtwLog.timeStamp( "//--------------------;" );};

//./global.apis.log.comment_Dash_30.js;
global.apis.log.comment_Dash_30 = function(){global.TtwLog.timeStamp( "//------------------------------;" );};

//./global.apis.log.comment_Dash_40.js;
global.apis.log.comment_Dash_40 = function(){global.TtwLog.timeStamp( "//----------------------------------------;" );};

//./global.apis.log.comment_Dash_50.js;
global.apis.log.comment_Dash_50 = function(){global.TtwLog.timeStamp( "//--------------------------------------------------;" );};

//./global.apis.log.comment_Dash_60.js;
global.apis.log.comment_Dash_60 = function(){global.TtwLog.timeStamp( "//------------------------------------------------------------;" );};

//./global.apis.log.comment_Dash_70.js;
global.apis.log.comment_Dash_70 = function(){global.TtwLog.timeStamp( "//----------------------------------------------------------------------;" );};

//./global.apis.log.comment_Dash_80.js;
global.apis.log.comment_Dash_80 = function(){global.TtwLog.timeStamp( "//--------------------------------------------------------------------------------;" );};

//./global.apis.log.comment_Dash_90.js;
global.apis.log.comment_Dash_90 = function(){global.TtwLog.timeStamp( "//------------------------------------------------------------------------------------------;" );};

//./global.apis.log.comment_Dash_100.js;
global.apis.log.comment_Dash_100 = function(){global.TtwLog.timeStamp( "" );};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.math;

global.apis.math = global.apis.math || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.math;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.obj;

global.apis.obj = global.apis.obj || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.obj;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.os;

global.apis.os = global.apis.os || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.os;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.process;

global.apis.process = global.apis.process || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.process;

/**
 * CPU 사용량 계산 함수
 * @function global.apis.process.getCPUUsage
 */
!function(){global.REQUIRES||(global.REQUIRES=global.REQUIRES||{}),global.REQUIRES.os||(global.REQUIRES.os=require("os"));var e=global.process,l=100,n=0,o=new Array(l),a=2e3,g=-1,s=e.hrtime(),t=e.cpuUsage(),r=function(){var l=global.REQUIRES.os,o=e.hrtime(s),a=e.cpuUsage(t);s=e.hrtime(),t=e.cpuUsage();var g=1e3*o[0]+o[1]/1e6,r=a.user/1e3,c=a.system/1e3,b=100*(r+c)/g/l.cpus().length;n=b};global.apis.process.getCPUUsage=function(){return n},global.apis.process.getCPUUsage.REFRASH_END=function(){global.apis.common.clearInterval(g)},global.apis.process.getCPUUsage.REFRASH_START=function(e){g=global.apis.common.setInterval(r,e)},global.apis.process.getCPUUsage.REFRASH_START(a),global.apis.process.getCPUUsage.__defineGetter__("cpu_usage_percents_max_length",function(){return l}),global.apis.process.getCPUUsage.__defineSetter__("cpu_usage_percents_max_length",function(e){l=e,o.length=0,o=null,o=new Array(e)})}();

/**
 * NodeJS App의 status를 가져온다.
 * @function global.apis.process.getStatusTotal
 * @result {Object}
 * <code>
	{
	}
 * </code>
 */
!function(){var e=1048576,o=function(o){return Number(o)/e+"Mb"};global.apis.process.getStatusTotal=function(){var e=global.process,r={};e.CPUPercent=global.apis.process.getCPUUsage()+"%",e.getIOCounters&&(r.IOCount=e.getIOCounters()),e.memoryUsage&&(r.UsageMemory=e.memoryUsage()),e.getProcessMemoryInfo&&(r.ProcessMemory=e.getProcessMemoryInfo()),e.getSystemMemoryInfo&&(r.SystemMemory=e.getSystemMemoryInfo());var s;s=r.IOCount;for(var t in s)s[t]=o(s[t]);s=r.UsageMemory;for(var t in s)s[t]=o(s[t]);s=r.SystemMemory;for(var t in s)s[t]=o(s[t]);return e.cpus&&(r.OS_CPUs=e.cpus()),r}}();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.request;

global.apis.request = global.apis.request || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.request;

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers { a : 1, b : 2 }
 */
global.apis.request.get=function(t,r,e){var o=STtwUtilURL.getParseResult(t),l=o.host.split(":"),n={encoding:"utf8",options:{host:l[0],port:l[1],path:o.path,headers:e?e:null},cbFunctions:{end:r,error:global.apis.request.get._error}};try{STtwUtilHttp.request_GET(n)}catch(g){global.TtwLog.error(g)}},global.apis.request.get._error=function(t){global.TtwLog.error(t)};

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers { a : 1, b : 2 }
 */
global.apis.request.get__Binary=function(t,r,e){var o=STtwUtilURL.getParseResult(t),n=o.host.split(":"),l={encoding:"binary",options:{host:n[0],port:n[1],path:o.path,headers:e?e:null},cbFunctions:{end:r}};try{STtwUtilHttp.request_GET__Binary(l)}catch(a){global.TtwLog.error(a)}},global.apis.request.get__Binary._error=function(t){global.TtwLog.error(t)};

/**
 * Session을 체크한 후 Callback 함수를 호출한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {Function} cb_complete function( result ){} Session 체크 후 실행시킬 Callback 함수(성공 & 실패)
 */
//global.apis.request.get__member_session$checkSession=function(e,s,l,i){global.apis.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+l.sid,i,e.headers)};
global.apis.request.get__member_session$checkSession=function(e,s,l,i){global.apis.request.get(global.apis.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+l.sid,i,e.headers)};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 */
//global.apis.request.get__member_session$checkSessionAndReqMongoDB=function(l,e,o,n,r){var b=global.server;global.apis.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+o.sid,function(_){return 0==global.apis.response.getResultStatus(_)?(global.apis.response.send_200_False(l,e),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db=n,o.q=r,global.b2link_router.STATIC.REQUEST_COUNT.P1(),b.req_DB(l,e,o,function(n,r){return n?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(l,e,o,n)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_JSON(l,e,r))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},l.headers)};
global.apis.request.get__member_session$checkSessionAndReqMongoDB=function(l,e,o,n,r){var b=global.server;global.apis.request.get(global.apis.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o.sid,function(_){return 0==global.apis.response.getResultStatus(_)?(global.apis.response.send_200_False(l,e),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db=n,o.q=r,global.b2link_router.STATIC.REQUEST_COUNT.P1(),b.req_DB(l,e,o,function(n,r){return n?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(l,e,o,n)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_JSON(l,e,r))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},l.headers)};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
//사용하지 않는 Repository를 위한 try catch;
try{!function(){var e=global.apis.fs.getDBJS("./js__b2link__sessionServer/b2link_router/member/session/check_session.dbjs");global.apis.request.get__member_session$checkSessionAndReqMongoDB__CallBack=function(s,n,o,l,r,i){var b=global.server,b=global.server;o.db="member",o.q=e.replace("<!=sid=!>",o.sid),b.req_DB(s,n,o,function(e,a){return e?void global.apis.response.send_200_False(s,n):void(0==a?global.apis.response.send_301_DestroySession(s,n):1==a&&(o.db=l?l:"admin",o.q=r,b.req_DB(s,n,o,function(e,o){i(s,n,e,o)})))})}}();}catch(e){}

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} q query
 * @param {String} db mongod Name
 * @param {String} nq next query
 */
//global.apis.request.get__member_session$checkSessionAndReqNameFromsid=function(e,l,o){var r=global.server;global.apis.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+o.sid,function(_){return 0==global.apis.response.getResultStatus(_)?(global.apis.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db="member",o.q='member_session$getProp__idFromsid("'+o.sid+'")',global.b2link_router.STATIC.REQUEST_COUNT.P1(),r.req_DB(e,l,o,function(_,b){return _?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(e,l,o,_)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),o.db="member",o.q="member_public$getProp_NameFrom_id("+b+")",global.b2link_router.STATIC.REQUEST_COUNT.P1(),void r.req_DB(e,l,o,function(r,_){return r?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(e,l,o,r)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_JSON(e,l,_))}))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers)};
global.apis.request.get__member_session$checkSessionAndReqNameFromsid=function(e,l,o){var r=global.server;global.apis.request.get(global.apis.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o.sid,function(_){return 0==global.apis.response.getResultStatus(_)?(global.apis.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db="member",o.q='member_session$getProp__idFromsid("'+o.sid+'")',global.b2link_router.STATIC.REQUEST_COUNT.P1(),r.req_DB(e,l,o,function(_,b){return _?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(e,l,o,_)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),o.db="member",o.q="member_public$getProp_NameFrom_id("+b+")",global.b2link_router.STATIC.REQUEST_COUNT.P1(),void r.req_DB(e,l,o,function(r,_){return r?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(e,l,o,r)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_JSON(e,l,_))}))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers)};

/**
 * 사용금지
 * 제거금지(특별 케이스에서만 사용중)
 * 이 API를 직업 wrapping한 router 생성 금지(소스 체크를 통해 찾기가능)
 * Session check 없이 MongoDB에 Query가 가능한 API
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} db mongod Name
 * @param {String} q query
 */
//global.apis.request.get__ReqMongoDB=function(l,o,e,r){var n=global.server;global.b2link_router.STATIC.REQUEST_COUNT.P1(),n.req_DB(l,o,{db:e,q:r},function(e,n){return e?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_False__ErrorLog(l,o,r,e)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.apis.response.send_200_JSON(l,o,n))})};
global.apis.request.get__ReqMongoDB=function(e,l,o,r){var b=global.server;global.b2link_router.STATIC.REQUEST_COUNT.P1(),b.req_DB(e,l,{db:o,q:r},function(o,b){return o?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),global.apis.response.setHeaders__b2ker(l),void global.apis.response.send_200_False__ErrorLog(e,l,r,o)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),global.apis.response.setHeaders__b2ker(l),void global.apis.response.send_200_JSON(e,l,b))})};

/**
 * Sync 방식 http/https 요청 API
 * @function
 * @param {String} url
 * @param {Object} headers { a : 1, b : 2 }
 * @param {Object} data { a : 1, b : 2 } get은 URI에 붙기 때문에 필요없지만 혹시 모를 편의성때문에 추가 함
 * @return {*}
 */
global.apis.request.getSync = SUtilHttp.getSync;

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers
 * @param {String|Object} data
 * @example
 * <code>
	global.apis.request.post(
		"http://www.example.org/example.txt"
		, {
			"abort" : function(){}//request;
			, "connect" : function( response, socket, head ){}//request;
			, "continue" : function(){}//request;
			, "data" : function( chunk ){ console.log( chunk ); }//res;
			, "end" : function( data ){ console.log( data ); }//res;
			, "error" : function( error ){ console.log( error ); }//request, res;
			, "response" : function( response ){ console.log( response ); }//request;
			, "socket" : function( socket ){ console.log( socket ); }//request;
			, "upgrade" : function( response, socket, head ){}//request;
			, "timeout" : function(){}//reqeust;
		}
		, { "asd" : "asd", "bcv" : "bcv" }
		, ""//String or Buffer;
	);

	global.apis.request.post(
		"html5rocks.com"
		, {
			"abort" : function(){}//request;
			, "connect" : function( response, socket, head ){}//request;
			, "continue" : function(){}//request;
			, "data" : function( chunk ){ console.log( chunk ); }//res;
			, "end" : function( data ){ console.log( data ); }//res;
			, "error" : function( error ){ console.log( error ); }//request, res;
			, "response" : function( response ){ console.log( response ); }//request;
			, "socket" : function( socket ){ console.log( socket ); }//request;
			, "upgrade" : function( response, socket, head ){}//request;
			, "timeout" : function(){}//reqeust;
		}
		, { "asd" : "asd", "bcv" : "bcv" }
		, ""//String or Buffer;
	);
 * </code>
 */
global.apis.request.post=function(t,o,e,l){var s=STtwUtilURL.getParseResult(t);if(s.protocol&&s.host){var r=s.host.split(":"),i={encoding:"utf8",options:{host:r[0],port:r[1],path:s.path,headers:e?e:null,rejectUnauthorized:!1},cbFunctions:o,data:l};global.b2link_router.STATIC.REQUEST_COUNT.P1(),"https:"==s.protocol?STtwUtilHttps.request_POST(i):STtwUtilHttp.request_POST(i)}};

/**
 * Sync 방식 http/https 요청 API
 * @function
 * @param {String} url
 * @param {Object} headers { a : 1, b : 2 }
 * @param {Object} data { a : 1, b : 2 }
 * @return {*}
 */
global.apis.request.postSync__FormData__Object = SUtilHttp.postSync__FormData__Object;

/**
 * Sync 방식 http/https 요청 API
 * @function
 * @param {String} url
 * @param {Object} headers { a : 1, b : 2 }
 * @param {Object} data "a=1&b=2&c=3"
 * @return {*}
 */
global.apis.request.postSync__FormData__String = SUtilHttp.postSync__FormData__String;

/**
 * Sync 방식 http/https 요청 API
 * @function
 * @param {String} url
 * @param {Object} headers { a : 1, b : 2 }
 * @param {Object} data { a : 1, b : 2 }
 * @return {*}
 */
global.apis.request.postSync__JSON__Object = SUtilHttp.postSync__JSON__Object;

/**
 * Sync 방식 http/https 요청 API
 * @function
 * @param {String} url
 * @param {Object} headers { a : 1, b : 2 }
 * @param {Object} data JSON.stringify({ a : 1, b : 2 })
 * @return {*}
 */
global.apis.request.postSync__JSON__String = SUtilHttp.postSync__JSON__String;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.response;

global.apis.response = global.apis.response || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.response;

/**
 * Client Browser에 false를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_200_False=function(e,s){s&&(global.apis.response.setHeaders__b2ker(s),global.server.sendResponse_200_False(e,s))};

/**
 * 사용금지
 * Client Browser에 Error Log(문자열:String) 데이터를 보낸다.
 * 아직 Error Log 미정의
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q query
 * @param {*} error
 */
global.apis.response.send_200_False__ErrorLog=function(e,r,l,o){global.TtwLog.error(l.q+" Error : "+o),r&&(global.apis.response.setHeaders__b2ker(r),global.apis.response.send_200_False(e,r))};

//--------------------------------------------------;

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송 완료시 Callback 함수를 호출 한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {Object} d
 * <code>
	{
		filePath : ""
		, fileNm : ""
		, cbFunction : function( e ){}
	}
 * </code>
 * @param {String} filePath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//FileName에 encodeURI가 없음;
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File=function(e,t,l){if(global.TtwLog.timeStamp("req.url : "+e.url),t){var n,a=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;l.cbFunction&&t.on("finish",function(e){l.cbFunction(e,l.filePath)});try{n=global.REQUIRES.fs.lstatSync(l.filePath)}catch(i){return void global.apis.response.send_404(t)}if(n.isFile()){t.writeHead(200,{"Content-Type":a[global.REQUIRES.path.extname(l.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+l.fileNm});var r=global.REQUIRES.fs.createReadStream(l.filePath);r.pipe(t)}else n.isDirectory()?(t.writeHead(200,{"Content-Type":a.txt}),t.end()):global.apis.response.send_500(t)}};
//FileName에 encodeURI가 있음;
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File=function(e,t,n){if(t){var a,i=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;n.cbFunction&&t.on("finish",function(e){n.cbFunction(e,n.filePath)});try{a=global.REQUIRES.fs.lstatSync(n.filePath)}catch(l){return void global.apis.response.send_404(t)}if(a.isFile()){t.writeHead(200,{"Content-Type":i[global.REQUIRES.path.extname(n.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(n.fileNm)});var o=global.REQUIRES.fs.createReadStream(n.filePath);o.pipe(t)}else a.isDirectory()?(t.writeHead(200,{"Content-Type":i.txt}),t.end()):global.apis.response.send_500(t)}};
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File=function(e,t,n){if(global.TtwLog.timeStamp("req.url : "+e.url),t){var l,a=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;n.cbFunction&&t.on("finish",function(e){n.cbFunction(e,n.filePath)});try{l=global.REQUIRES.fs.lstatSync(n.filePath)}catch(i){return void global.apis.response.send_404(e,t)}if(l.isFile()){t.writeHead(200,{"Content-Type":a[global.REQUIRES.path.extname(n.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(n.fileNm)});var r=global.REQUIRES.fs.createReadStream(n.filePath);r.pipe(t)}else l.isDirectory()?(t.writeHead(200,{"Content-Type":a.txt}),t.end()):global.apis.response.send_500(e,t)}};

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송 완료시 Callback 함수를 호출 하지 않는 다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {Object} d
 * <code>
	{
		filePath : ""
		, fileNm : ""
	}
 * </code>
 * @param {String} filePath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//FileName에 encodeURI가 없음;
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_NCallback=function(e,t,l){if(global.TtwLog.timeStamp("req.url : "+e.url),t){var a,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;try{a=global.REQUIRES.fs.lstatSync(l.filePath)}catch(r){return void global.apis.response.send_404(t)}if(a.isFile()){t.writeHead(200,{"Content-Type":n[global.REQUIRES.path.extname(l.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+l.fileNm});var i=global.REQUIRES.fs.createReadStream(l.filePath);i.pipe(t)}else a.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.apis.response.send_500(t)}};
//FileName에 encodeURI가 있음;
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_NCallback=function(e,t,a){if(t){var l,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;try{l=global.REQUIRES.fs.lstatSync(a.filePath)}catch(i){return void global.apis.response.send_404(t)}if(l.isFile()){t.writeHead(200,{"Content-Type":n[global.REQUIRES.path.extname(a.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(a.fileNm)});var r=global.REQUIRES.fs.createReadStream(a.filePath);r.pipe(t)}else l.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.apis.response.send_500(t)}};
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_NCallback=function(e,t,l){if(global.TtwLog.timeStamp("req.url : "+e.url),t){var a,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;try{a=global.REQUIRES.fs.lstatSync(l.filePath)}catch(r){return void global.apis.response.send_404(e,t)}if(a.isFile()){t.writeHead(200,{"Content-Type":n[global.REQUIRES.path.extname(l.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(l.fileNm)});var i=global.REQUIRES.fs.createReadStream(l.filePath);i.pipe(t)}else a.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.apis.response.send_500(e,t)}};

/**
 * Client Browser에 File을 전달한다.
 * 파일 URI를 주입 받는다.
 * 파일 URI에 ROOT Path를 더하여 파일을 찾아 전송한다.
 * 파일 전송 완료시 Callback 함수를 호출 한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 * @param {String} uri URI 문자열
 * @param {Function} cbFunction function( e ){}
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_URI=function(e,t,r,l,o){return global.TtwLog.timeStamp("---- [ S ] - global.apis.response.sendStream_200_File_URI():void----------"),void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_URI=function(e,r,t,_,l){return void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};

/**
 * Client Browser에 File을 전달한다.
 * 파일 URI를 주입 받는다.
 * 파일 URI에 ROOT Path를 더하여 파일을 찾아 전송한다.
 * 파일 전송 완료시 Callback 함수를 호출 하지 않는 다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 * @param {String} uri URI 문자열
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_URI_NCallback=function(e,t,a,l){if(t){var _,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,r=_path.join(a,unescape(l));try{_=global.REQUIRES.fs.lstatSync(r)}catch(i){return void global.apis.response.send_404(t)}if(_.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(r).split(".").reverse()[0]]});var o=global.REQUIRES.fs.createReadStream(r);o.pipe(t)}else _.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.apis.response.send_500(t)}};
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_File_URI_NCallback=function(e,t,a,l){if(t){var _,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,r=_path.join(a,unescape(l));try{_=global.REQUIRES.fs.lstatSync(r)}catch(i){return void global.apis.response.send_404(e,t)}if(_.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(r).split(".").reverse()[0]]});var o=global.REQUIRES.fs.createReadStream(r);o.pipe(t)}else _.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.apis.response.send_500(e,t)}};

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송완료 여부를 알수있는 Callback이 없다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_FileFromURI=function(e,r,t){return global.TtwLog.timeStamp("---- [ S ] - global.apis.response.sendStream_200_FileFromURI():void----------"),void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_FileFromURI=function(e,r,t){return void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송완료 여부를 알수있는 Callback이 없다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_FileFromURI_NCallback=function(e,t,l){if(t){var r,a=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,_=STtwUtilHttpServer.getURIFromURL(e.url),n=_path.join(l,unescape(_));try{r=global.REQUIRES.fs.lstatSync(n)}catch(i){return void global.apis.response.send_404(t)}if(r.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(n).split(".").reverse()[0]]});var o=global.REQUIRES.fs.createReadStream(n);o.pipe(t)}else r.isDirectory()?(t.writeHead(200,{"Content-Type":a.txt}),t.end()):global.apis.response.send_500(t)}};
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.apis.response.sendStream_200_FileFromURI_NCallback=function(e,t,l){if(t){var r,a=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,_=STtwUtilHttpServer.getURIFromURL(e.url),n=_path.join(l,unescape(_));try{r=global.REQUIRES.fs.lstatSync(n)}catch(i){return void global.apis.response.send_404(e,t)}if(r.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(n).split(".").reverse()[0]]});var o=global.REQUIRES.fs.createReadStream(n);o.pipe(t)}else r.isDirectory()?(t.writeHead(200,{"Content-Type":a.txt}),t.end()):global.apis.response.send_500(e,t)}};

//--------------------------------------------------;

/**
 * Client Browser에 문자열(HTMLString) 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} str
 */
global.apis.response.send_200_HTML=function(e,s,n){s&&(global.apis.response.setHeaders__b2ker(s),global.server.sendResponse_200_String(e,s,n))};

/**
 * Client Browser에 JSON(String) 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Array|Object} obj Array 또는 Object
 */
global.apis.response.send_200_JSON=function(e,s,n){s&&(global.apis.response.setHeaders__b2ker(s),global.server.sendResponse_200_String(e,s,JSON.stringify(n)))};

/**
 * Client Browser에 JSON(String) 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Array|Object} obj Array 또는 Object
 */
global.apis.response.send_200_JSON_Pretty=function(e,s,n){s&&(global.apis.response.setHeaders__b2ker(s),s.setHeader("Content-Type", "application/json; charset=utf-8" ),global.server.sendResponse_200_String(e,s,JSON.stringify(n,null,'\t')))};

/**
 * Client Browser에 문자열(String) 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} str
 */
global.apis.response.send_200_String=function(e,n,s){n&&(global.apis.response.setHeaders__b2ker(n),global.server.sendResponse_200_String(e,n,s))};

/**
 * Client Browser Session을 파괴 시켰다는 메세지는 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_200_String_DestroySessionComplete=function(e,s){s&&(global.apis.response.setHeaders__b2ker(s),global.server.sendResponse_200_String(e,s,"destroySessionComplete"))};

/**
 * Client Browser에 true를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_200_True=function(e,s){s&&(global.apis.response.setHeaders__b2ker(s),global.server.sendResponse_200_True(e,s))};

/**
 * Client Browser Session을 파괴 시키기 위해 destroySession url로 redirection하는 response를 보낸다.
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_301_DestroySession=function(e,n){n&&(global.apis.response.setHeaders__b2ker(n),n.writeHead(301,{Location:global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION}),n.end())};

/**
 * Client Browser에 404 Error code를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_404=function(e,s){s&&(global.apis.response.setHeaders__b2ker(s),SUtilHttpServerResponse.responseWrite_404(s))};

/**
 * Client Browser에 500 code를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_500=function(e,s){s&&(global.apis.response.setHeaders__b2ker(s),SUtilHttpServerResponse.responseWrite_500(s))};

//----------------------------------------------------------------------------------------------------;

/**
 * Client Browser cookie를 설정하는 response를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} d
 */
global.apis.response.setHeader__setcookie=function(e,s,i){s&&s.setHeader("set-cookie","connect.sid="+i.sid+"; session_id="+i.sid+"; Expires="+i.d_ex+"; HttpOnly")};

/**
 * Client Browser cookie를 지우는 response를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.setHeader__setcookie__null=function(e,s){s&&s.setHeader("set-cookie","connect.sid=; session_id=; Expires=; HttpOnly")};

//--------------------------------------------------;

/**
 * CORS처리 함수 - B2Ker
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__b2ker=function(e){e.setHeader("X-Powered-By","B2KER"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수 - BrandPortal
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__brandPortal=function(e){e.setHeader("X-Powered-By","B2LiNK-BrandPortal"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수 - ExcelServer
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__excelServer=function(e){e.setHeader("X-Powered-By","B2LiNK-ExcelServer"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수 - FileServer
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__fileServer=function(e){e.setHeader("X-Powered-By","B2LiNK-FileServer"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__HTML=function(e){e.setHeader("X-Powered-By","B2KER"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept"),e.setHeader("Content-Type","text/html; charset=utf-8")},console;

/**
 * CORS처리 함수
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__JSON=function(e){e.setHeader("X-Powered-By","B2KER"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept"),e.setHeader("Content-Type","application/json; charset=utf-8")};

/**
 * CORS처리 함수
 * @function
 * @param {http.ClientResponse} res
 */
global.apis.response.setHeaders__Text=function(e){e.setHeader("X-Powered-By","B2KER"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept"),e.setHeader("Content-Type","text/plain; charset=utf-8")};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.router;

global.apis.router = global.apis.router || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.router;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.router_file;

global.apis.router_file = global.apis.router_file || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.router_file;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.router_resource;

global.apis.router_resource = global.apis.router_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.router_resource;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.server_api;

global.apis.server_api = global.apis.server_api || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.server_api;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.server_http;

global.apis.server_http = global.apis.server_http || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.server_http;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.service;

global.apis.service = global.apis.service || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.service;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.session;

global.apis.session = global.apis.session || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.session;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q
 */
global.apis.session.get_or_create__Session=function(e,t,n){var s,i,l=STtwUtilHttpClientRequest.getHeader_Cookie(e),o=0;return l&&(l.hasOwnProperty("connect.sid")&&(i=l["connect.sid"],o=1),l.Expires&&(s=l.expires)),i&&null!=i&&""!=i&&"null"!=i||(i=STtwUtilHttpClientResponse.create_Session(e),o=0),s&&null!=s&&""!=s&&"null"!=s||(s=STtwUtilHttpClientResponse.create_Date__Expired()),{bFirstSession:o,sid:i,d_ex:s}};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.status;

global.apis.status = global.apis.status || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.status;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.string;

global.apis.string = global.apis.string || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.string;


//----------------------------------------------------------------------------------------------------global.apis.string.a***;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
global.apis.string.applyBrace = SUtilString.applyBraceStrFromObj__NV_NA;

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
global.apis.string.applyBrackets = SUtilString.applyBracketsStrFromObj__NV_NA;

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
global.apis.string.applyParentheses = SUtilString.applyParenthesesStrFromObj__NV_NA;

//----------------------------------------------------------------------------------------------------global.apis.string.a***;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.timer;

global.apis.timer = global.apis.timer || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.timer;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.uncompressSource;

global.apis.uncompressSource = global.apis.uncompressSource || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.uncompressSource;

/**
 * Native Module 'uncompressSource' Package를 설치한다
 * @function
 * @example
 * <code>
	global.apis.uncompressSource.install();

	global.uncompressSource.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.apis.uncompressSource.install=function(){return global.uncompressSource?void global.TtwLog.warn("Native Module( uncompressSource )가 이미 설치 되어 있다."):(global.b2link["import"].native_modules__API("UnCompressCSSJSHTML.tll","../js-UncompressSource/","uncompressSource"),void(global.uncompressSource=global.Lib.Ttw.unCompressCSSJSHTML))},global.apis.uncompressSource.install._=global.Lib.Ttw.autoLoad_JS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.uri;

global.apis.uri = global.apis.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.decodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURI(o)),n[o]},global.apis.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURIComponent(o)),n[o]},global.apis.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.encodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURI(o)),n[o]},global.apis.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.apis.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURIComponent(o)),n[o]},global.apis.uri.encodeURIComponent._clear=function(){n={}}}();

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
global.apis.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.url;

global.apis.url = global.apis.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.url;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
global.apis.url.getQueryFromURL=function(r){try{return global.server.getQueryFromURL(r)}catch(e){return SUtilHttpServer.getQueryFromURL(r)}};

/**
 * encodeURIComponent된 url을 decodeURIComponent 한다. 는 기본적으로 진행함
 * encodeURIComponent를 사용하지 않고 자체 변환된 url도 풀어준다.
 * @function
 * @param {String} url
 * @return {Object}
 */
//global.apis.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&").replace(/!MTg3!/gi,"+"),JSON.parse(l)};
global.apis.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&").replace(/!MTg3!/gi,"+").replace(/!Mzc=!/gi,"%"),JSON.parse(l)};

//--------------------------------------------------;

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.apis.url.getServerURL_APIServer_SCODE=function(e){return global.apis.url.getServerURLByServers(e+"_APIServer")};

/**
 * @function
 * @return {String}
 */
global.apis.url.getServerURL_APIServer_Self=function(){return global.apis.url.getServerURLByServers(global.apis.STATIC.CONFIG.URL.SCODE+"_APIServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.apis.url.getServerURL_ScrapServer_SCODE=function(r){return global.apis.url.getServerURLByServers(r+"_ScrapServer")};

/**
 * @function
 * @return {String}
 */
global.apis.url.getServerURL_ScrapServer_Self=function(){return global.apis.url.getServerURLByServers(global.apis.STATIC.CONFIG.URL.SCODE+"_ScrapServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.apis.url.getServerURL_WebServer_SCODE=function(e){return global.apis.url.getServerURLByServers(e+"_WebServer")};

/**
 * @function
 * @return {String}
 */
global.apis.url.getServerURL_WebServer_Self=function(){return global.apis.url.getServerURLByServers(global.apis.STATIC.CONFIG.URL.SCODE+"_WebServer")};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.util;

global.apis.util = global.apis.util || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.util;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

global.apis.event.cbFunctions=global.apis.event.cbFunctions||function(){},global.apis.event.cbFunctions.uncaughtException=global.apis.event.cbFunctions.uncaughtException||{},function(){var n={},e=global.apis.event.cbFunctions.uncaughtException.MongoError=function(e){if(-1!=e.message.indexOf("failed to connect")){var o=global.apis.response.send_200_False;for(var l in n)o(null,n[l]),delete n[l]}};e._add_res=function(e,o){n[e]=o},e._del_res=function(e){delete n[e]}}();

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.event.webHook;

global.apis.event.webHook = global.apis.event.webHook || function(){};

//----------------------------------------------------------------------------------------------------;

global.apis.event.webHook.error = global.apis.event.webHook.error || {};

/**
 * uncaughtException으로 발생한 Error를 WebHook으로 전달한다.
 * @function
 * @param {Error} er uncaughtException
 */
global.apis.event.webHook.error.uncaughtException = function( er )
{
	var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_APIServer";
	//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_ScrapServer";
	//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_WebServer";
	var host = global.apis.url.getServerURLByServers( APP_NAME );

	if( !host )
	{
		global.TtwLog.error( "[ ERROR ] - 정보를 전송하기 위한 Host 정보가 없다" );
		return;
	}

	if( -1 != host.indexOf( "localhost" ) )
	{
		global.TtwLog.error( "[ ERROR ] - Local 개발 환경에서는 WebHook를 전송하지 않는다." );
		return;
	}

	if( !global.fnUseWebHookAPI )
	{
		global.TtwLog.error( "[ ERROR ] - global.fnUseWebHookAPI 가 없다." );
		return;
	}

	var path = "";

		 if( -1 != host.indexOf( ".120" ) ) path = global.apis.event.webHook.error.uncaughtException.p120;
	else if( -1 != host.indexOf( ".122" ) ) path = global.apis.event.webHook.error.uncaughtException.p122;
	else if( -1 != host.indexOf( ".123" ) ) path = global.apis.event.webHook.error.uncaughtException.p123;
	else path = global.apis.event.webHook.error.uncaughtException.p123;

	var _description = er.toString();

	try{ if( "[object Object]" == _description ) _description = JSON.stringify( er ); }catch( er ){}

	var q = {
		body : "[ " + APP_NAME + " ] - uncaughtException - " + new Date().toString()
		, connectColor : "#FF0000"//승인;
		//, connectColor : "#0000FF"//참조;
		//, connectColor : "#000000"//공지;
		//, connectInfo : [{ title : "Error Detail", description : "" }]
		, connectInfo : [{ title : "Error Detail", description : _description }]
		//, connectInfo : [{ title : "Error Detail", description : er.toString() }]
		//, connectInfo : [{ title : "Error Detail", description : JSON.stringify( er, null, "\t" ) }]
	};

	//if( d.connectInfo ) q.connectInfo = d.connectInfo;

	try
	{
		if( global.fnUseWebHookAPI._sendCommon ) global.fnUseWebHookAPI._sendCommon( q, path, "" );
	}
	catch( e )
	{
		global.TtwLog.error( "[ ERROR ] - global.apis.event.webHook.error.uncaughtException - global.fnUseWebHookAPI._sendCommon 가 없다." );
		global.TtwLog.error( "[ ERROR ] - " + e );
	}
};

global.apis.event.webHook.error.uncaughtException.p120 = "/connect-api/webhook/11320800/b0a022c6b896c53da2d2767753228027";
global.apis.event.webHook.error.uncaughtException.p122 = "/connect-api/webhook/11320800/39051eb2274975f868acf012d10c04b6";
global.apis.event.webHook.error.uncaughtException.p123 = "/connect-api/webhook/11320800/00c38735fba2d2287f87fe96ab0a166f";

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.event.webHook;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 *
 * @function
 * @param {Array} arrays
 * @return {Array}
 * @example
 * <code>
	var a = global.apis.array.mergeArrays( [ [ 0, 1, 2, 3, 4 ], [ 11, 22, 33, 44 ], ... ] );
	console.log( a );
 * </code>
 */
global.apis.array.mergeArrays = function( arrays )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.array.mergeArrays():{Array}----------" );

	if( arrays.length === 0 ) return [];

	var tmp = arrays[ 0 ];
	for( var i=1; i<arrays.length; ++i )
	{
		//수정하기 - 20170707_1254 - 송선우 - Length 체크를 하는 ArrayMerge API와 Length 체크를 하지 않는 ArrayMerge API가 따로 있는게 좋을 듯;
		/*/
		tmp = tmp.concat( arrays[ i ] );
		/*/
		if( arrays[ i ] && arrays[ i ].length > 0 ) tmp = tmp.concat( arrays[ i ] );
		//*/
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.array.mergeArrays():{Array}----------return tmp;" );
	return tmp;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * ArrayItem 정렬 순서 변경
	 * @function
	 * @param {Object} item0
	 * @param {Object} item1
	 * @return {Number}
	 */
	var _sortByFunc = function( item0, item1 )
	{
		//if( typeof item0 === "undefined" ) return -1;
		//if( typeof item1 === "undefined" ) return 1;

		var key = item0.__proto__.__sortKey__;
		item1.__proto__.__sortKey__ = key;

		var x = item0[ key ];
		var y = item1[ key ];

		return (x < y) ? -1 : ((x > y) ? 1 : 0);
	};

	/**
	 * JSON Array를 입력받은 key의 value 기준으로 오름차순 정렬
	 * @function
	 * @param {Array} a JsonArray
	 * @param {String} key
	 * @param {String} value
	 * @return {Array} a
	 * @example
	 * <code>
		 global.apis.array_collection.sortJsonArrayByKey_Asc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 1 }, { nm : "aaa", val : 5 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );

		 global.apis.array_collection.sortJsonArrayByKey_Asc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 5 }, { nm : "aaa", val : 1 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );
	 * </code>
	 */
	global.apis.array_collection.sortJsonArrayByKey_Asc = function( a, key )
	{
		global.Rh2Log.timeStamp( "---- [ S ] - global.apis.array_collection.sortJsonArrayByKey_Asc():{Object}----------" );

		a[ 0 ].__proto__.__sortKey__ = key;

		a.sort( _sortByFunc );

		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) delete a[ i ].__proto__.__sortKey__;

		global.Rh2Log.timeStamp( "---- [ E ] - global.apis.array_collection.sortJsonArrayByKey_Asc():{Object}----------return a;" );
		return a;
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * ArrayItem 정렬 순서 변경
	 * @function
	 * @param {Object} item0
	 * @param {Object} item1
	 * @return {Number}
	 */
	var _sortByFunc = function( item0, item1 )
	{
		//if( typeof item0 === "undefined" ) return -1;
		//if( typeof item1 === "undefined" ) return 1;

		var key = item0.__proto__.__sortKey__;
		item1.__proto__.__sortKey__ = key;

		var x = item0[ key ];
		var y = item1[ key ];

		return (x < y) ? 1 : ((x > y) ? -1 : 0);
	};

	/**
	 * JSON Array를 입력받은 key의 value 기준으로 내림차순 정렬
	 * @function
	 * @param {Array} a JsonArray
	 * @param {String} key
	 * @param {String} value
	 * @return {Array} a
	 * @example
	 * <code>
		 global.apis.array_collection.sortJsonArrayByKey_Desc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 1 }, { nm : "aaa", val : 5 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );

		 global.apis.array_collection.sortJsonArrayByKey_Desc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 5 }, { nm : "aaa", val : 1 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );
	 * </code>
	 */
	global.apis.array_collection.sortJsonArrayByKey_Desc = function( a, key )
	{
		global.Rh2Log.timeStamp( "---- [ S ] - global.apis.array_collection.sortJsonArrayByKey_Desc():{Object}----------" );

		a[ 0 ].__proto__.__sortKey__ = key;

		a.sort( _sortByFunc );

		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) delete a[ i ].__proto__.__sortKey__;

		global.Rh2Log.timeStamp( "---- [ E ] - global.apis.array_collection.sortJsonArrayByKey_Desc():{Object}----------return a;" );
		return a;
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} data
 * @return {boolean}
 */
global.apis.compress_zip.compress_file = function( data )
{
	window.TtwLog.timeStamp( "---- [ S ] - global.apis.compress_zip.compress_file():{String}----------" );

	if( data.pop && data.push )
	{
		_array( data );
	}
	else
	{
		_object( data );
	}

	window.TtwLog.timeStamp( "---- [ E ] - global.apis.compress_zip.compress_file():{String}----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * String format
 * @function
 * @param {Date} Date
 * @return {*}
 * @author  cpark
 *
 * TODO : Add Parameter to format date
 * ex) YY/MM/DD HH:MM:SS
 *
 * When d is string type, It only excepts format in "yyyy-mm-dd"
 */
global.apis.date.dateFormatter = function( d, format )
{
	if( typeof d === "string" ) d = new Date( d );

	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var milliSeconds = d.getMilliseconds();

	var formattedDate = null;

	if( !format )
	{
		formattedDate = year + "-" + month + "-" + day;
	}
	else if( format.toLowerCase() == "array" )
	{
		formattedDate = [];
		formattedDate.push( year );
		formattedDate.push( month );
		formattedDate.push( day );
		formattedDate.push( hours );
		formattedDate.push( minutes );
		formattedDate.push( milliSeconds );
	}
	else if( format.toLowerCase() == "object" )
	{
		formattedDate = { y : year, m : month, d : day, ho : hours, mi : minutes, se : seconds };
	}
	else if ( format.toLowerCase() == "string" )
	{
		formattedDate = year + "-" + month + "-" + day;
	}
	else
	{
		formattedDate = year + "-" + month + "-" + day;
	}

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 문자열 데이트 또는 데이트를 Object 형태로 변경하여 반환한다.
 * @function
 * @param {Date|String} Date or 2017-05-04-02-03-10
 * @return {Object}
 */
global.apis.date.dateFormatter__Object = function( d )
{
	if( typeof d === "string" ) d = new Date( d );

	var formattedDate = { y : Number( d.getFullYear() ), m : Number( d.getMonth() + 1 ), d : Number( d.getDate() ), ho : Number( d.getHours() ), mi : Number( d.getMinutes() ), se : Number( d.getSeconds() ) };

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Get array date From Excel Number Format
 * @function
 * @param  {String} 42930
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 * @example
 * <code>
	var n_d1 = 42930;
	var getArrayDate =  global.apis.date.getArrayDateFromExcelNumber;
	var d1 = getArrayDate( n_d1 );

	console.log( JSON.stringify( d1 ) );
 * </code>
 */
global.apis.date.getArrayDateFromExcelNumber = function( n )
{
	var d = new Date( 1899, 12, n );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜가 아닙니다." + s );
		return null;
	}

	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
global.apis.date.getArrayDateFromNewDate = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.apis.date.getArrayDateFromNewDate():{Array}----------" );

	var d = new Date();

	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.apis.date.getArrayDateFromNewDate():{Array}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
global.apis.date.getDateStringFromArrayDate_Dash = function( a )
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.apis.date.getDateStringFromArrayDate_Dash():{String}----------" );
	////////global.TtwLog.timeStamp( "---- [ E ] - global.apis.date.getDateStringFromArrayDate_Dash():{String}----------" );
	return a.join( "-" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Get object date From Excel Number Format
 * @function
 * @param  {String} 42930
 * @return {Object} { y : 2017, m : 7, d : 15, ho : 0, mi : 0, se : 0 }
 * @example
 * <code>
	var n_d1 = 42930;
	var getObjectDate =  global.apis.date.getObjectDateFromExcelNumber;
	var d1 = getObjectDate( n_d1 );

	console.log( JSON.stringify( d1 ) );
 * </code>
 */
global.apis.date.getObjectDateFromExcelNumber = function( n )
{
	var d = new Date( 1899, 12, n );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜가 아닙니다." + s );
		return null;
	}

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Object} {y : 2017, m : 2, d : 25, ho : 11, mi : 20, se : 50}
 */
global.apis.date.getObjectDateFromNewDate = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.apis.date.getObjectDateFromNewDate():{Object}----------" );

	var d = new Date();

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.apis.date.getObjectDateFromNewDate():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Get object date.
 * @function
 * @param  {String} "yyyy-mm-dd" or "yyyy-mm-dd hh:mi:ss"
 * @return {Object} { y : 2017, m : 5, d : 26, ho : 15, mi : 32, se : 46 }
 *
 * @author  James
 * @example
 * <code>
	var s_d1 = "2017-05-26 10:57:37";
	var getObjectDate =  global.apis.date.getObjectDateFromString;
	var n_d1 = getObjectDate( s_d1 );

	var s_d2 = "2017-05-26";
	var n_d2 = getObjectDate( s_d2 );

	console.log( JSON.stringify( n_d1 ) );
	console.log( JSON.stringify( n_d2 ) );
 * </code>
 */
global.apis.date.getObjectDateFromString = function( s )
{
	var d = new Date( s );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜 문자열이 아닙니다." + s );
		return null;
	}

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 호출 시점의 [ year, month, day, hour, minute, seconds ]를 생성한 후 join( "-" )으로 반환한다.
 * @function
 * @return {String}
 */
global.apis.date.getStringDate_Dash = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.apis.date.getStringDate_Dash():{String}----------" );
	////////global.TtwLog.timeStamp( "---- [ E ] - global.apis.date.getStringDate_Dash():{String}----------" );
	return global.apis.date.getArrayDateFromNewDate().join( "-" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 모든 item의 자료타입은 같아야 한다.
	 * 0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
	 *
	 * @function
	 * @param {Array} data
	 */
	var _array = function( data )
	{
		if( "object" != data[ 0 ] )
		{
			//모든 item의 자료타입은 같아야 한다.;
			//0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
			return;
		}

		var io;
		var i=0, iLen=data.length;
		for( ; i<iLen; ++i )
		{
			io = data[ i ];
			if( "object" == typeof( io ) )
			{
				_object( io );
			}
		}
	};

	/**
	 *
	 * @function
	 * @param {Object} data
	 */
	var _object = function( data )
	{
		var io;
		for( var s in data )
		{
			io = data[ s ];

			if( "price" == s )
			{
				if( "number" != typeof( io ) )
				{
					//price는 Number여야 한다.;
					debugger;
					//data[ s ] = Number( io );
				}
			}
			else if( 0 == s.indexOf( "quantity" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}



			if( 0 == s.indexOf( "_ids$" ) )
			{
				if( "object" != typeof( io ) || !io )
				{
					//_ids$***는 Object여야 한다.;
					debugger;
				}

				var jo;
				for( var s0 in io )
				{
					jo = io[ s0 ];
					if( "number" != typeof( jo ) || jo < -1 )
					{
						//_ids$***.??는 uint여야 한다 / 기본값은 -1;
						debugger;
						//data[ s ][ s0 ] = parseInt( jo );
					}
				}
			}
			else if( 0 == s.indexOf( "_id$" ) )
			{
				if( "number" != typeof( io ) || io < -1 )
				{
					//_id$***는 uint여야 한다 / 기본값은 -1;
					debugger;
					//data[ s ] = parseInt( io );
				}
			}
			else if( 0 == s.indexOf( "cd$" ) )
			{
				if( "string" != typeof( io ) && !io )
				{
					//cd$***.??는 String이여야 한다;
					debugger;
					//기본 값 셋팅 로직;
				}
			}
			/*/
			else if( 0 == s.indexOf( "nm$" ) )
			{
			}
			//*/
			//20170524 - quantity_ 로 시작하는 구문중에 quantity_predict_release만 Array임 나머지는 uint;
			else if( s != "quantity_predict_release" && 0 == s.indexOf( "quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
			else if( 0 == s.indexOf( "total_quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//total_quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
		}
	};

	/**
	 * MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수
	 * _id*** 키 값 - uint 체크
	 *  cd*** 키 값 - String 체크
	 *  //nm*** 키 값 - String 체크
	 *
	 * @function
	 * @param {Object} data
	 */
	global.apis.debug._check_mongodb_queryParameter = function( data )
	{
		window.TtwLog.timeStamp( "---- [ S ] - global.apis.debug._check_mongodb_queryParameter():void----------" );

		if( data.pop && data.push )
		{
			_array( data );
		}
		else
		{
			_object( data );
		}

		window.TtwLog.timeStamp( "---- [ E ] - global.apis.debug._check_mongodb_queryParameter():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	var _ = global.apis.event;

	//영문이든, 숫자든, 사용하게될 이벤트 리스트 정의 하기;

	//----------------------------------------------------------------------------------------------------APPENDED;

	/**
	 * 부모 HTMLElement에 자식 HTMLElement를 appendChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.APPENDED_CHILD = "appended_child";

	//----------------------------------------------------------------------------------------------------CHANGED;

	/**
	 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CHANGED_LOCALE = "changed_locale";

	//----------------------------------------------------------------------------------------------------CREATED;

	/**
	 * CustomElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_CUSTOM_ELEMENT = "created_custom_element";

	/**
	 * Element가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_EL = "created_element";

	/**
	 * <import-html>의 실제 HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_EL = "created_import-html_element";

	/**
	 * <import-html url_js="">의 JS Controller가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_JS = "created_import-html_js";

	/**
	 * <include-html>의 실제HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_INCLUDE_HTML_EL = "created_include-html_element";

	//----------------------------------------------------------------------------------------------------CREATION;

	/**
	 * Object(어떤 형태이든) 가 최종적으로 완료된 상태일 시 발생되는 이벤트
	 * 내부적인 비동기 처리는 제외
	 * INITIALIZED 보다 후에 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.CREATION_COMPLETE = "creation_complete";

	//----------------------------------------------------------------------------------------------------DATA;

	/**
	 * DATA 작성을 취소 할 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_WRITE_CANCEL = "data_write_cancel";

	/**
	 * DATA 작성이 완료 되었을 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_WRITE_COMPLETE = "data_write_complete";

	//----------------------------------------------------------------------------------------------------DISPOSED;

	/**
	 * HTMLElement를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_EL = "disposed_element";

	/**
	 * HTMLElement의 JS Controller를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_JS = "disposed_js";

	//----------------------------------------------------------------------------------------------------INTERVAL;

	/**
	 * setInterval 로 구동된 interval을 clearInterval로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_END = "interval_end";

	/**
	 * setInterval 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_START = "interval_start";

	//----------------------------------------------------------------------------------------------------INITIALIZED;

	/**
	 * 현재 객체의 초기화가 완료된 후 발생되는 이벤트
	 * CREATION_COMPLETE 보다 먼저 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED = "initialized";

	/**
	 * 현재 객체(JS상일시 Target HTMLElement)의 자식 객체의 Initialize가 완료된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED_ALL_CHILDREN = "initialized_all_children";

	//----------------------------------------------------------------------------------------------------HIDED;

	/**
	 * Element의 js Controller에서 hide()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.HIDED_EL = "hided_element";

	//----------------------------------------------------------------------------------------------------LIST;

	/**
	 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_DATA_CHANGED = "list_data_changed";

	/**
	 * LIST형 Component에서 Item을 Click으로 선택 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECT_ITEM = "list_select_item";

	/**
	 * LIST형 Component에서 Item을 Double Click으로 선택 완료 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECTED_ITEM = "list_selected_item";

	//----------------------------------------------------------------------------------------------------NAVIGATION;

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_DATA_CHANGED = "navigation_data_changed";

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_ITEM_SELECTED = "navigation_item_selected";

	//----------------------------------------------------------------------------------------------------LOADED;

	/**
	 * Element의 모든 자식객체가 로딩 완료 후 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.LOADED_CHILDREN = "loaded_children";

	//----------------------------------------------------------------------------------------------------REMOVED;

	/**
	 * 부모 HTMLElement에서 자식 HTMLElement를 removeChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REMOVED_CHILD = "removed_child";

	//----------------------------------------------------------------------------------------------------RESIZE;

	/**
	 * HTMLElement의 Size를 변경 시킨후 발생시키는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESIZED_EL = "resized_element";

	//----------------------------------------------------------------------------------------------------RESPONSE;

	/**
	 * 데이터를 응답 받은 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESPONSE_DATA = "response_data";

	//----------------------------------------------------------------------------------------------------REQUEST;

	/**
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REQUEST_DATA = "requese_data";

	//----------------------------------------------------------------------------------------------------SEARCH_UI;

	/**
	 * Search UI 상 INPUT Tag에 Typing를 진행할시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SEARCH_UI_INPUTED_TEXT = "search_ui_inputed_text";

	/**
	 * Search UI 상 SELECT Tag의 아이템을 선택 했을시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SEARCH_UI_SELECTED_TYPE = "search_ui_selected_type";

	//----------------------------------------------------------------------------------------------------SHOWED;

	/**
	 * Element의 js Controller에서 show()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.SHOWED_EL = "showed_element";

	//----------------------------------------------------------------------------------------------------SIGN;

	/**
	 * sign in이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_FAILURE = "sign_in_failure";

	/**
	 * sign in이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_SUCCESS = "sign_in_success";

	/**
	 * sign out이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_FAILURE = "sign_out_failure";

	/**
	 * sign out이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_SUCCESS = "sign_out_success";

	//----------------------------------------------------------------------------------------------------TABLE;

	/**
	 * Table Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TABLE_DATA_CHANGED = "table_data_changed";

	//----------------------------------------------------------------------------------------------------TIMEOUT;

	/**
	 * setTimeout 으로 구동된 timeout을 clearTimeout으로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_END = "timeout_end";

	/**
	 * setTimeout 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_START = "timeout_start";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	_.__initialize_Events = function()
	{
		global.apis.log.comment_Dash_100();
		global.TtwLog.timeStamp( "	B2LiNK Events List" );
		global.apis.log.comment_Dash_100();

		for( var s in _ )
		{
			if( "function" != typeof( _[ s ] ) )
			{
				_[ s ] = "b2link_" + _[ s ];
				global.TtwLog.info( "global.apis.event." + s + ' - "' + _[ s ] + '"' );
			}
		}
		global.apis.log.comment_Dash_100();
		delete _[ "__initialize_Events" ];
	};

	//----------------------------------------------------------------------------------------------------;

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRES;

	//----------------------------------------------------------------------------------------------------;

	global.REQUIRES = global.REQUIRES || {};

	var _ = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _; } );

	//----------------------------------------------------------------------------------------------------;

	var _CWD_ = global.process.cwd() + "/";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {String} code "SYS0037_APIServer"
	 * @param {String} filePath "asd/qwe/zxc/"
	 * @return {uint|String}
	 * <code>
	 	0 : 파일 생성 중

		1 : 파일이 없음 처음 요청임

		String Data : 생성 된 파일 데이터
	 * </code>
	 */
	global.apis.fs.getQueryResultCache = function( code, filePath )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.getQueryResultCache():{String}----------" );

		var result = global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath( code, filePath );

		//파일 경로가 나옴;

		//파일 읽어서 파일 데이터 반환;
		if( "string" == typeof( result ) ) return window.b2link.fs.getFile_UTF8( result );

		//파일 경로 반환 - Client에 Stream으로 연결;
		//if( "string" == typeof( result ) ) return result;

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.getQueryResultCache():{String}----------return fStr;" );
		return result;
	};

	//----------------------------------------------------------------------------------------------------;

	global.apis.fs.getQueryResultCache.LIST = {
		//  SYS0010_APIServer : null
		//, SYS0010_WebServer : null
		//, SYS0011_APIServer : null
		//, SYS0011_WebServer : null
		//, SYS0015_APIServer : null
		//, SYS0015_WebServer : null
		//, SYS0040_APIServer : null
		//, SYS0050_APIServer : null
		//, SYS0060_APIServer : null
		//, SYS0070_APIServer : null
		//, SYS0070_WebServer : null
		//, SYS0120_APIServer : null
		//, SYS0120_WebServer : null
		//, SYS0130_APIServer : null
		//, SYS0130_WebServer : null
		//, SYS0020_APIServer : null
		//, SYS0020_WebServer : null
		  SYS0030_APIServer : {
			  path : "../../../B2LiNK-OnSight--Micro-Dev/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight--Micro-Dev/cache/APIServer/"
		}
		, SYS0030_WebServer : {
			  path : "../../B2LiNK-OnSight--Micro-Dev/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight--Micro-Dev/cache/WebServer/"
		}
		, SYS0031_APIServer : {
			  path : "../../../B2LiNK-OnSight--Macro-Dev/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight--Macro-Dev/cache/APIServer/"
		}
		, SYS0031_WebServer : {
			  path : "../../B2LiNK-OnSight--Macro-Dev/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight--Macro-Dev/cache/WebServer/"
		}
		//, SYS0032_APIServer : null
		//, SYS0033_APIServer : null
		//, SYS0033_WebServer : null
		//, SYS0034_APIServer : null
		//, SYS0034_WebServer : null
		//, SYS0035_APIServer : null
		//, SYS0035_WebServer : null
		, SYS0037_APIServer : {
			  path : "../../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/APIServer/"
		}
		, SYS0037_WebServer : {
			  path : "../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight-DB-Processing--QueryCache/cache/WebServer/"
		}
		//, SYS0100_APIServer : null
		//, SYS0100_WebServer : null
		//, SYS0210_APIServer : null
		//, SYS0210_WebServer : null
		//, SYS0215_APIServer : null
		//, SYS0215_WebServer : null

		, SYS0310_APIServer : {
			  path : "../../../B2LiNK-OnSight-Dev--QueryCache/cache/APIServer/"
			, path0 : "../../../B2LiNK-OnSight-Dev--QueryCache/cache/APIServer/"
		}
		, SYS0310_WebServer : {
			  path : "../../B2LiNK-OnSight-Dev--QueryCache/cache/WebServer/"
			, path0 : "../../B2LiNK-OnSight-Dev--QueryCache/cache/WebServer/"
		}

		//, SYS0110_APIServer : null
		//, SYS0110_WebServer : null
		//, SYS4110_APIServer : null
		//, SYS4110_WebServer : null
		//, SYS4111_APIServer : null
		//, SYS4111_WebServer : null
		//, SYS4112_APIServer : null
		//, SYS4112_WebServer : null
		//, SYS4113_APIServer : null
		//, SYS4113_WebServer : null
		//, SYS4120_APIServer : null
		//, SYS4120_WebServer : null
		//, SYS4130_APIServer : null
		//, SYS4130_WebServer : null
		//, SYS4135_APIServer : null
		//, SYS4135_WebServer : null
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {String} code "SYS0037_APIServer"
	 * @param {String} filePath "asd/qwe/zxc/"
	 * @return {String}
	 */
	global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath = function( code, filePath )
	{

		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath():{String}----------" );
		var fileNm;
		var path;

		if( -1 != filePath.indexOf( "/" ) )
		{
			var paths = filePath.split( "/" );
			fileNm = paths.pop() + ".result";

			path = _CWD_ + global.apis.fs.getQueryResultCache.LIST[ code ].path + paths.join( "/" );
		}
		else
		{
			path = _CWD_ + global.apis.fs.getQueryResultCache.LIST[ code ].path;
			fileNm = filePath + ".result";
		}

		if( global.REQUIRES.fs.existsSync( path + fileNm ) )
			return path + fileNm;

		if( global.REQUIRES.fs.existsSync( path + fileNm + ".ing" ) )
			return 0;

		if( !global.REQUIRES.fs.existsSync( path ) )
		{
			window.b2link.fs.createDirectories( path );

			global.apis.fs.writeFile_UTF8( path + fileNm + ".ing", "" );
			return 1;
		}

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath():{String}----------return null;" );
		return null;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRES;

	//----------------------------------------------------------------------------------------------------;

	global.REQUIRES = global.REQUIRES || {};

	var _ = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _; } );

	//----------------------------------------------------------------------------------------------------;

	var _CWD_ = global.process.cwd() + "/";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {String} code "SYS0037_APIServer"
	 * @param {String} filePath "asd/qwe/zxc/"
	 * @return {uint|String}
	 * <code>
	 	0 : 파일 생성 중

		1 : 파일이 없음 처음 요청임

		String Data : 생성 된 파일 데이터
	 * </code>
	 */
	global.apis.fs.getQueryResultCache__Stream = function( code, filePath )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.getQueryResultCache__Stream():{String}----------" );

		var result = global.apis.fs.getQueryResultCache.getPathFromCodeAndFilePath( code, filePath );

		//파일 경로가 나옴;

		//파일 읽어서 파일 데이터 반환;
		//if( "string" == typeof( result ) ) return window.b2link.fs.getFile_UTF8( result );

		//파일 경로 반환 - Client에 Stream으로 연결;
		if( "string" == typeof( result ) ) return result;

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.getQueryResultCache__Stream():{String}----------return fStr;" );
		return result;
	};

	//----------------------------------------------------------------------------------------------------;

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRES;

	//----------------------------------------------------------------------------------------------------;

	global.REQUIRES = global.REQUIRES || {};

	var _ = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _; } );

	//----------------------------------------------------------------------------------------------------;

	var _CWD_ = global.process.cwd() + "/";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {String} code "SYS0037_APIServer"
	 * @param {String} filePath "asd/qwe/zxc/"
	 * @param {Array|Object} resultData
	 * @return {Boolean}
	 */
	global.apis.fs.writeQueryResultCache = function( code, filePath, resultData )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.fs.writeQueryResultCache():{String}----------" );

		if( -1 != filePath.indexOf( "/" ) )
		{
			var paths = filePath.split( "/" );
			fileNm = paths.pop() + ".result";

			path = _CWD_ + global.apis.fs.getQueryResultCache.LIST[ code ].path + paths.join( "/" );
		}
		else
		{
			path = _CWD_ + global.apis.fs.getQueryResultCache.LIST[ code ].path;
			fileNm = filePath + ".result";
		}

		var path_ing = path + fileNm + ".ing";


		var fData;

		if( null == resultData )
		{
			global.TtwLog.error( "[ ERROR ] - global.apis.fs.writeQueryResultCache - 결과가 null이다." );

			//파일 생성 중 표기 파일 삭제;
			if( global.REQUIRES.fs.existsSync( path_ing ) ) SUtilFsWriteStream.deleteFile( path_ing );

			return null;
		}

		if( resultData.pop || "object" == typeof( resultData ) )
		{
			try
			{
				//사용 금지 - JSON을 Pretty 해서 저장하면 HTML과 결합하여 사용시 문제 발생 소지 존재함;
				//fData = JSON.stringify( resultData, null, "\t" );

				fData = JSON.stringify( resultData );
			}
			catch( er )
			{
				global.TtwLog.error( "[ ERROR ] - global.apis.fs.writeQueryResultCache - " + er );

				//파일 생성 중 표기 파일 삭제;
				if( global.REQUIRES.fs.existsSync( path_ing ) ) SUtilFsWriteStream.deleteFile( path_ing );

				return false;
			}
		}


		//쿼리 결과 데이터 파일 생성;
		global.apis.fs.writeFile_UTF8( path + fileNm, fData );

		//파일 생성 중 표기 파일 삭제;
		if( global.REQUIRES.fs.existsSync( path_ing ) ) SUtilFsWriteStream.deleteFile( path_ing );

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.fs.writeQueryResultCache():{String}----------return true;" );
		return true;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * LogServer에 쿼리를 주입하여 구동한다.
 * @function
 * @param {String} query 삽입할 쿼리를 문자열로 넣는다.
 * @param {Function} cbComplete LogDB에 데이터를 삽입 요청하고 결과를 반환받아 실행하는 콜백 함수
 */
global.apis.logServer.executeQuery = function( query, cbComplete )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.logServer.executeQuery():void----------" );

	var t = global.apis.logServer.CONST;

	//LogServer(SYS0011)에 로그 전송;
	global.mongodb.exec({ host : t.HOST, port : t.PORT, dbNm : t.DB, query : query
		, cbComplete : function( error, result ){
			if( error )
			{
				throw new Error();
				return;
			}

			if( cbComplete ) cbComplete( error, result );
		}
	});

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.logServer.executeQuery():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * LogServer에 Log를 1개 삽입한다.
 * @function
 * @param {String} nm_db 삽입할 대상 데이터베이스
 * @param {String} nm_col 삽입할 대상 콜렉션
 * @param {String} data 삽입할 데이터를 문자열로 넣는다.
 * @param {Function} cbComplete LogDB에 데이터를 삽입 요청하고 결과를 반환받아 실행하는 콜백 함수
 */
global.apis.logServer.insertOneLog = function( nm_db, nm_col, data, cbComplete )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.logServer.insertOneLog():void----------" );

	var t = global.apis.logServer.CONST;

	//LogServer(SYS0011)에 로그 전송;
	global.mongodb.exec({ host : t.HOST, port : t.PORT, dbNm : t.DB
		, query : 'db.getSiblingDB( "' + nm_db + '").getCollection("' + nm_col + '").insertOne("' + data + '");'
		, cbComplete : function( error, result ){
			if( error )
			{
				throw new Error();
				return;
			}

			if( cbComplete( error, result ) );
		}
	});

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.logServer.insertOneLog():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 필수 키 값 목록을 가지고 대상 오브젝트의 hasOwnProperty를 통해 존재 여부를 체크한다.
 * @function
 * @param {Object} t 필수 키 값 목록을 가지고 체크할 대상 오브젝트
 * @param {Array} a hasOwnProperty의 대상이될 필수 키값 목록
 * @return {Boolean}
 * @example
 * <code>
 * </code>
 */
global.apis.obj.check_RequiredValueHasOwnProperty = function( t, a )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.obj.check_RequiredValueHasOwnProperty():{Boolean}----------" );

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( !t.hasOwnProperty( a[ i ] ) )
		{
			debugger;
			//global.TtwLog.timeStamp( "---- [ E ] - global.apis.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 0;" );
			return 0;
		}
	}

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 키 값 목록을 기준으로 obj를 숫자 오름차순 정렬하여 배열을 반환한다.
 * @function
 * @param {Object} o 키 값 목록을 기준으로 숫자 오름차순 정렬할 대상 obj
 * @return {Array}
 * @example
 * <code>
 * </code>
 */
global.apis.obj.sortJSONObject_key_NumberASC = function( o )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.apis.obj.sortJSONObject_key_NumberASC():{Array}----------" );

	var keys = [];
	for( p in o ) keys.push( p );
	keys.sort(function(a, b){ return a-b; });//숫자크기대로 정렬;

	var a = [];
	var i=0, iLen=keys.length;
	for( ; i<iLen; ++i ) a[ i ] = o[ keys[ i ] ];

	//global.Rh2Log.timeStamp( "---- [ E ] - global.apis.obj.sortJSONObject_key_NumberASC():{Array}----------return a;" );

	return a;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 키 값 목록을 기준으로 obj를 문자열 오름차순 정렬하여 배열을 반환한다.
 * @function
 * @param {Object} o 키 값 목록을 기준으로 문자열 오름차순 정렬할 대상 obj
 * @return {Array}
 */
global.apis.obj.sortJSONObject_key_StringASC = function( o )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.apis.obj.sortJSONObject_key_StringASC():{Array}----------" );

	var keys = Object.keys( o );
		keys.sort();//문자열 오름차순 정렬;

	var a = [];
	var i=0, iLen=keys.length;
	for( ; i<iLen; ++i ) a[ i ] = o[ keys[ i ] ];

	//global.Rh2Log.timeStamp( "---- [ E ] - global.apis.obj.sortJSONObject_key_StringASC():{Array}----------return a;" );
	return a;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );

/**
 * 소스 수정 금지
 * OS Type을 대문자 영문 문자열로 반환한다.
 * @function
 * @return {String} 대문자로 반환한다.
 * @example
 * <code>
	"AIX"
	"DARWIN"
	"FREEBSD"
	"LINUX"
	"OPENBSD"
	"SUNOS"
	"WIN32"
 * </code>
 */
global.apis.os.__defineGetter__( "NAME", function(){
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.os.NAME():{String}----------" );

	var s = global.REQUIRES.os.platform();

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.os.NAME():{String}----------return a;" );
	return s.toUpperCase();
});

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} sid Session 체크를 위한 데이터
 * @param {Function} cbFunction Session 인증 후 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.apis.request.get__checkSessionToSessionServer = function( req, res, sid, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.request.get__checkSessionToSessionServer():void----------" );

	var t = global.server;

	global.apis.request.get(
		/*/
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + sid
		/*/
		global.apis.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + sid
			//추가 - 20180125_1408 - 송선우;
			+ "&SCODE=" + global.apis.STATIC.CONFIG.URL.SCODE
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			if( 0 == global.apis.response.getResultStatus( result ) )
			{
				global.apis.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			cbFunction( req, res );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.request.get__checkSessionToSessionServer():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {String} sid Session 체크를 위한 데이터
 * @param {Function} cbFunction Session 인증 후 실행될 Callback 함수
 *	function( result ){} 형태로 작성되는 함수.
 */
global.apis.request.get__checkSessionToSessionServer__WebSocket = function( req, sid, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.request.get__checkSessionToSessionServer__WebSocket():void----------" );

	var t = global.server;

	global.apis.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + sid
		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.apis.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + sid
			//추가 - 20180125_1408 - 송선우;
			+ "&SCODE=" + global.apis.STATIC.CONFIG.URL.SCODE
		//*/
		, function( result )
		{
			//console.log( "typeof( result ) : " + typeof( result ) );
			//console.log( "result : " + result );

			/*/
			if( 0 == global.apis.response.getResultStatus( result ) )
			{
				global.apis.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			cbFunction( req, res );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
			/*/
			cbFunction( result );
			//*/
		}
		//, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.request.get__checkSessionToSessionServer__WebSocket():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.apis.request.get__member_session$checkSessionAndReqMongoDB__CallBack = function( req, res, q, db, nq, cbFunction )
{
	//global.TtwLog.timeStamp( "\n" );
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------" );

	var t = global.server;

	global.apis.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.apis.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/session/check_session?sid=" + q.sid
			//추가 - 송선우 - 20180124_2048;
			+ "&mid=" + q.mid + "&SCODE=" + q.SCODE
		//*/
		, function( result )
		{
			//console.log( "typeof( result ) : " + typeof( result ) );
			//console.log( "result : " + result );

			if( 0 == global.apis.response.getResultStatus( result ) )
			{
				global.apis.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//cbFunction.req = req;
			//cbFunction.res = res;
			t.req_DB( req, res, q
				, function( error, result ){
					cbFunction( req, res, error, result );
				}
			);

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------" );
	//global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {Object} nq next query Session 인증 후 실행될 Query
 * <code>
	{
		nm_db : {String}//Database Name;
		, nm_col : {String}//Collection Name;
		, q : {String}//Query;
		, s : {String}//"c", "r", "u", "d";
	}
 * </code>
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.apis.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack = function( req, res, q, db, nq, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack():void----------" );

	var t = global.server;

	//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값;
	//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	var queryCRUDStatus;

	//URL을 기반으로 수행하고자 하는 Router의 DataBase Name과 Collection Name을 구한다;
	/*/
	var url = global.server.getURLParse( req.url );
	var a_path = url.pathname.split( "/" );//host, port를 제외한 URI;
	var nm_db = a_path[ 1 ];
	var nm_col = a_path[ 2 ];
	//*/

	//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
	//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
	if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq.q, nq.nm_db, nq.nm_col ) )
	{
		global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.apis.response.send_200_False( req, res );
		return;
	}
	//*/

	//"member" 예외 처리;
	if( nq.nm_db != "member" && nq.nm_col != "_authority_matrix" )
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq.q, nq.nm_db, nq.nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.apis.response.send_200_False( req, res );
			return;
		}
		//*/

		//주입된 Query의 구문을 분석하여 C, R, U, D 중 어떤 타입인지 체크한다;
		queryCRUDStatus = global.mongodb.dbjs.getCRUDStatusFromQuery( nq.q, nq.nm_db, nq.nm_col );
	}
	else
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq.q, nq.nm_db, nq.nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.apis.response.send_200_False( req, res );
			return;
		}
		//*/

		queryCRUDStatus = "O";//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	}

	//Session ID 체크, 권한 체크 후 원하는 Query를 구동한다;
	global.apis.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		//*/

		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.apis.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + q.sid
			//추가 - 송선우 - 20180124_2048;
			+ "&mid=" + q.mid + "&SCODE=" + q.SCODE
		//*/

		//*/
		//SessionServer 연결 용(전체 프로젝트) - 권한 체크 포함;
		global.apis.url.getServerURLByServers( "session_server" ) + "/member/session/check_sessionAndAuthority?"
			+ "sid=" + q.sid//Session ID;
			+ "&SCODE=" + q.SCODE//System Code;
			+ "&queryCRUDStatus=" + queryCRUDStatus//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값 - queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
			+ "&nm_db=" + nq.nm_db//권한 체크를 할 대상 DataBase Name;
			+ "&nm_col=" + nq.nm_col//권한 체크를 할 대상 Collection Name;

			//추가 - 송선우 - 20180124_2048;
			+ "&mid=" + q.mid
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
			if( 0 == global.apis.response.getResultStatus( result ) )//Response 결과가 Error;
			{
				//------------------------------[ S ] - 유저별 권한 체크;
				//Response 결과 코드가 18(global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
				if( global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == result )
				{
					//r은 Response Code;
					//d는 부가 데이터;
					//m은 메세지;
					var o = { r : result, d : nq.nm_db + "." + nq.nm_col };

					//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
					global.apis.response.send_200_JSON( req, res, o );

					global.b2link_router.STATIC.REQUEST_COUNT.M1();

					return;
				}
				//------------------------------[ E ] - 유저별 권한 체크;

				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.apis.response.send_200_False( req, res );
				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq.q;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
			t.req_DB( req, res, q, function( error, result ){ cbFunction( req, res, error, result ); } );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.apis.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack = function( req, res, q, db, nq, cbFunction )
{
	//global.TtwLog.timeStamp( "\n" );
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack():void----------" );

	var t = global.server;

	//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값;
	//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	var queryCRUDStatus;

	//URL을 기반으로 수행하고자 하는 Router의 DataBase Name과 Collection Name을 구한다;
	var url = global.server.getURLParse( req.url );
	var a_path = url.pathname.split( "/" );//host, port를 제외한 URI;
	var nm_db = a_path[ 1 ];
	var nm_col = a_path[ 2 ];

	//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
	//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
	if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq, nm_db, nm_col ) )
	{
		global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.apis.response.send_200_False( req, res );
		return;
	}
	//*/

	//"member" 예외 처리;
	if( nm_db != "member" && nm_col != "_authority_matrix" )
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq, nm_db, nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.apis.response.send_200_False( req, res );
			return;
		}
		//*/

		//주입된 Query의 구문을 분석하여 C, R, U, D 중 어떤 타입인지 체크한다;
		queryCRUDStatus = global.mongodb.dbjs.getCRUDStatusFromQuery( nq, nm_db, nm_col );
	}
	else
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq, nm_db, nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.apis.response.send_200_False( req, res );
			return;
		}
		//*/

		queryCRUDStatus = "O";//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	}

	//Session ID 체크, 권한 체크 후 원하는 Query를 구동한다;
	global.apis.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		//*/

		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.apis.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + q.sid
			//추가 - 송선우 - 20180124_2048;
			+ "&mid=" + q.mid + "&SCODE=" + q.SCODE
		//*/

		//*/
		//SessionServer 연결 용(전체 프로젝트) - 권한 체크 포함;
		global.apis.url.getServerURLByServers( "session_server" ) + "/member/session/check_sessionAndAuthority?"
			+ "sid=" + q.sid//Session ID;
			+ "&SCODE=" + q.SCODE//System Code;
			+ "&queryCRUDStatus=" + queryCRUDStatus//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값 - queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
			+ "&nm_db=" + nm_db//권한 체크를 할 대상 DataBase Name;
			+ "&nm_col=" + nm_col//권한 체크를 할 대상 Collection Name;

			//추가 - 송선우 - 20180124_2048;
			+ "&mid=" + q.mid
		//*/
		, function( result )
		{
			//global.console.log( "typeof( result ) : " + typeof( result ) );
			//global.console.log( "result : " + result );

			//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
			if( 0 == global.apis.response.getResultStatus( result ) )//Response 결과가 Error;
			{
				//------------------------------[ S ] - 유저별 권한 체크;
				//Response 결과 코드가 18(global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
				if( global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == result )
				{
					//r은 Response Code;
					//d는 부가 데이터;
					//m은 메세지;
					var o = { r : result, d : nm_db + "." + nm_col };

					//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
					global.apis.response.send_200_JSON( req, res, o );

					global.b2link_router.STATIC.REQUEST_COUNT.M1();

					return;
				}
				//------------------------------[ E ] - 유저별 권한 체크;

				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.apis.response.send_200_False( req, res );
				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
			t.req_DB( req, res, q, function( error, result ){ cbFunction( req, res, error, result ); } );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack():void----------" );
	//global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	var _result_r = {
		0 : 1
		//, 1 : 1//사용안함;
		, 2 : 0//Bad Value;
		, 3 : 0//OBSOLETE_DuplicateKey;
		, 18 : 0//AuthenticationFailed;
		, 24 : 0//LockTimeout;
	};

	var _fnStore = {
		0 : 0
		, 1 : 1

		//삭제 예정;
		, 18 : 0//AuthenticationFailed;

		, "false" : 0
		, "true" : 1

		, "result.r" : function( result ){
			return _result_r[ result.r ];
		}
	};

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	global.apis.response.getResultStatus = function( result )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.response.getResultStatus():{*}----------" );
		//global.TtwLog.timeStamp( "Input result : " );
		//global.TtwLog.timeStamp( result );

		try
		{
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ];
				//global.TtwLog.timeStamp( "return r : " + r );
				//global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.getResultStatus():{*}----------return r;" );
				return r;
			}

			//MongoDB 표준 에러 코드를 준수해야한다;
			//{ r : NaN, m : "" };
			if( result.hasOwnProperty( "r" ) )
			{
				if( _fnStore.hasOwnProperty( "result.r" ) )
				{
					var r = _fnStore[ "result.r" ]( result );
					//global.TtwLog.timeStamp( "return r : " + r );
					//global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.getResultStatus():{*}----------return r;" );
					return r;
				}
			}

			//삭제하기 - 20170514 - 송선우 - 사용되는 모든 소스에서 제거하기;
			//{ state : NaN, ??? : ?? };
			if( result.hasOwnProperty( "state" ) )
			{
				var r = _fnStore[ result.state ];
				//global.TtwLog.timeStamp( "return r : " + r );
				//global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.getResultStatus():{*}----------return r;" );
				return r;
			}

			if( "string" == typeof( result ) ) if( -1 != result.indexOf( "404 Not Found" ) ) return 0;
		}
		catch( er )
		{
			global.TtwLog.error( "global.apis.response.getResultStatus Error : " + er );
		}

		//global.TtwLog.timeStamp( "return result : " );
		//global.TtwLog.timeStamp( result );

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.getResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 클라이언트에게 Redirect 할 URL 정보와 301 response Code를 전송한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} url redirect 할 URL
 */
global.apis.response.send_301 = function( req, res, url )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.response.send_301():void----------" );

	global.TtwLog.timeStamp( "url : " + url );

	global.apis.response.setHeaders__b2ker( res );

	res.writeHead( 301, { Location : url } );
	res.end();

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.send_301():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * admin 용도의 라우터에 불분명한 접속일시 Client Browser에 404 에러를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.apis.response.send_404__adminCheckAvailable__http$ClientRequest = function( req, res )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.response.send_404__adminCheckAvailable__http$ClientRequest():void----------" );

	global.TtwLog.error( "!!!!!!!!!! Warning !!!!!!!!!!" );
	global.TtwLog.error( "req.url : " + req.url );
	global.TtwLog.error( "IP/Port : " + req.client.remoteAddress + ":" + req.client.remotePort );
	global.TtwLog.error( "!!!!!!!!!! Warning !!!!!!!!!!" );
	global.apis.response.send_404( req, res );

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.response.send_404__adminCheckAvailable__http$ClientRequest():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES || {};
global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[ "result" ] = "text/plain";

/**
 * Router Query 결과에 대해 Cache 파일 존재 유무를 확인 후 데이터를 클라이언트에 전송하고 결과를 반환한다.
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
	}
 * </code>
 * @param {http.ClientResponse} res
 * <code>
	{
	}
 * </code>
 *
 * @param {String} SCODE
 * @param {String} NAME
 * @param {Object} queryParameter
 *
 * @return {Boolean|String} true면 이 함수에서 send response 실행후 Router Flow가 종료된다.
 *	Cache 파일이 없으면 Cache File Name으로 사용될 문자열을 반환 한다.
 */
global.apis.router.checkQueryCacheFile = function( req, res, SCODE, NAME, queryParameter )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router.checkQueryCacheFile():{Boolean}----------" );

	//Cache File 이름 지정 - Parameter 조합으로 구성됨;
	var NAME_CACHE = NAME;

	for( var s in queryParameter )
	{
		if( "sid" == s ) continue;

		var sData = queryParameter[ s ];

		/*/
		if( "object" == typeof( sData ) ) NAME_CACHE += "-" + JSON.stringify( sData ).replace( /\"/gi, "" ).replace( /\:/gi, "：" );
		else NAME_CACHE += "-" + ;
		/*/
		NAME_CACHE += "-" + sData;
		//*/
	}

	NAME_CACHE = NAME_CACHE.replace( /\"/gi, "" ).replace( /\:/gi, "：" );

	//Cache File 존재 유무 조회 및 생성 중 유무 조회;
	var resultCache = global.apis.fs.getQueryResultCache( SCODE, NAME_CACHE );

	//Cache File이 존재함;
	if( ( 0 != resultCache ) && ( 1 != resultCache ) && ( "string" == typeof( resultCache ) ) )
	{
		//파일 읽어서 파일 데이터 반환;
		global.apis.response.send_200_String( req, res, resultCache );

		//파일 경로 반환 - Client에 Stream으로 연결;
		//var a = resultCache.split( "/" );
		//global.apis.response.sendStream_200_File_NCallback( req, res, { filePath : resultCache, fileNm : a[ a.length - 1 ] } );

		global.TtwLog.log( "- [ E ] - response.send_200_String - " + NAME_CACHE );
		return true;
	}
	else if( 0 == resultCache )
	{
		global.apis.response.send_200_JSON( req, res, { r : 0, m : "Cache Data 생성 중, 잠시 후 다시 요청 요망" } );
		global.TtwLog.log( "- [ E ] - response.send_200_JSON - " + NAME_CACHE + " - Cache Data 생성 중, 잠시 후 다시 요청 요망" );
		return true;
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.router.checkQueryCacheFile():{Boolean}----------return false;" );
	return NAME_CACHE;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES || {};
global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[ "result" ] = "text/plain";

/**
 * Router Query 결과에 대해 Cache 파일 존재 유무를 확인 후 데이터를 클라이언트에 전송하고 결과를 반환한다.
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
	}
 * </code>
 * @param {http.ClientResponse} res
 * <code>
	{
	}
 * </code>
 *
 * @param {String} SCODE
 * @param {String} NAME
 * @param {Object} queryParameter
 *
 * @return {Boolean|String} true면 이 함수에서 send response 실행후 Router Flow가 종료된다.
 *	Cache 파일이 없으면 Cache File Name으로 사용될 문자열을 반환 한다.
 */
global.apis.router.checkQueryCacheFile__Stream = function( req, res, SCODE, NAME, queryParameter )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router.checkQueryCacheFile__Stream():{Boolean}----------" );

	//Cache File 이름 지정 - Parameter 조합으로 구성됨;
	var NAME_CACHE = NAME;

	for( var s in queryParameter )
	{
		if( "sid" == s ) continue;

		NAME_CACHE += "-" + queryParameter[ s ];
	}

	//Cache File 존재 유무 조회 및 생성 중 유무 조회;
	var resultCache = global.apis.fs.getQueryResultCache__Stream( SCODE, NAME_CACHE );

	//Cache File이 존재함;
	if( ( 0 != resultCache ) && ( 1 != resultCache ) && ( "string" == typeof( resultCache ) ) )
	{
		//파일 읽어서 파일 데이터 반환;
		//global.apis.response.send_200_String( req, res, resultCache );

		//파일 경로 반환 - Client에 Stream으로 연결;
		var a = resultCache.split( "/" );
		global.apis.response.sendStream_200_File_NCallback( req, res, { filePath : resultCache, fileNm : a[ a.length - 1 ] } );

		global.TtwLog.log( "- [ E ] - response.send_200_String - " + NAME_CACHE );
		return true;
	}
	else if( 0 == resultCache )
	{
		global.apis.response.send_200_JSON( req, res, { r : 0, m : "Cache Data 생성 중, 잠시 후 다시 요청 요망" } );
		global.TtwLog.log( "- [ E ] - response.send_200_JSON - " + NAME_CACHE + " - Cache Data 생성 중, 잠시 후 다시 요청 요망" );
		return true;
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.router.checkQueryCacheFile__Stream():{Boolean}----------return false;" );
	return NAME_CACHE;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
/**
 * 세션 체크 후 파일을 Client Browser에 전달한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {Object} q Query Object
 *
 * @param {String} path 파일이 존재하는 대상폴더( 파일이름 포함 )
 */
global.apis.router_file.download = function( req, res, q, path ){
	global.Rh2Log.timeStamp( "---- [ S ] - global.apis.router_file.download():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.apis.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증;
	global.apis.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		if( !global.apis.response.getResultStatus( result ) )//"true" == OK;
		{
			global.apis.response.send_200_False( req, res );
			return;
		}

		var stats = global.REQUIRES.fs.existsSync( path );

		if( stats )
		{
			var d = { filePath : path, fileNm : q.fileNm, cbFunction :  null };
			global.apis.response.sendStream_200_File( req, res, d );
		}
		else
		{
			global.apis.response.send_200_False__ErrorLog( req, res, q, "file is not exist." );
			return;
		}
	});

	global.Rh2Log.timeStamp( "---- [ E ] - global.apis.router_file.download():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRE = global.REQUIRE || {};
	var _fs = require( "fs" );
	global.REQUIRE.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e )
{
	//....;
}

/**
 * 파일을 다운로드 한후 삭제하는 함수.
 * response가 완료된 후 실행된다.
 * @param  {???} e
 * @param  {String} d
 *<code>
	D:/aaa/aaa/aaa/aaa.xlsx
 *</code>
 */
var deleteFile = function( e, d ){ global.REQUIRES.fs.unlink( d ,function(err){ if( err ) console.log( err ); global.CSJLog.log("Delete Complete."); }); };

/**
 * 세션 체크 후 파일을 Client Browser에 전달, 파일을 삭제한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {Object} q Query Object
 *
 * @param {String} path 파일이 존재하는 대상폴더( 파일이름 포함 )
 */
global.apis.router_file.downloadAndDelete = function( req, res, q, path ){
	global.Rh2Log.timeStamp( "---- [ S ] - global.apis.router_file.downloadAndDelete():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증;
	global.apis.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		if( !global.apis.response.getResultStatus( result ) )//"true" == OK;
		{
			global.apis.response.send_200_False( req, res );
			return;
		}

		var stats = global.REQUIRES.fs.existsSync( path );

		if( stats )
		{
			var d = { filePath : path, fileNm : q.fileNm, cbFunction :  deleteFile };
			global.apis.response.sendStream_200_File( req, res, d );
		}
		else
		{
			global.apis.response.send_200_False__ErrorLog( req, res, q, "file is not exist." );
			return;
		}
	});

	global.Rh2Log.timeStamp( "---- [ E ] - global.apis.router_file.downloadAndDelete():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/*/
https://www.sitepoint.com/mime-types-complete-list/

data:application/haansofthwp;base64,
data:application/javascript;base64,
data:application/pdf;base64,
data:application/x-msdownload;base64,
data:application/x-shockwave-flash;base64,
data:application/x-zip-compressed;base64,
data:;base64,
data:image/bmp;base64,
data:image/jpeg;base64,
data:image/png;base64,
data:image/x-icon;base64,
data:text/css;base64,
data:text/html;base64,
data:text/plain;base64,
data:text/xml;base64,
//*/

/**
 * Base64 데이터를 POST 방식으로 전달 받은 후 콜백 함수를 실행 한다.
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @param {Function} cbFunction function( req, res, data, base64Type ){}
 *
 * @example
 * <code>
 * </code>
 */
global.apis.router_file.post_ReceiveData__Base64 = function( req, res, cbFunction )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router_file.post_ReceiveData__Base64():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//Query;

	//Client로 부터 전송 받을 데이터;
	var _data = "";

	//Client로 부터 데이터를 전송 받는 이벤트;
	req.on( "data", function( chunk ){ _data += chunk; });

	//Client로 부터 데이터 전송 완료 이벤트;
	req.on( "end", function(){
		var idx = _data.indexOf( "base64," );
		if( -1 == idx )
		{
			global.TtwLog.error( "global.apis.router_file.post_ReceiveData__Base64 Error : base64 문자열이 아니다." );

			global.apis.response.send_200_False( req, res );

			debugger;

			return;
		}

		var lastIdx = idx + 7;
		var base64Type = _data.substring( 0, lastIdx );

		cbFunction( req, res, _data, base64Type );
	});

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.router_file.post_ReceiveData__Base64():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * HTTP Post 방식으로 데이터 전송이 완료되면 콜백함수를 호출한다.
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @param {Function} cbFunction function( req, res, data ){}
 *
 * @example
 * <code>
 * </code>
 */
global.apis.router_file.post_ReceiveData__String = function( req, res, cbFunction )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router_file.post_ReceiveData__String():void----------" );

	//var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//Client로 부터 전송 받을 데이터;
	var _data = "";

	//Client로 부터 데이터를 전송 받는 이벤트;
	req.on( "data", function( chunk ){ _data += chunk; });

	//Client로 부터 데이터 전송 완료 이벤트;
	req.on( "end", function(){ cbFunction( req, res, _data ); });

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.router_file.post_ReceiveData__String():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 세션 체크 후 B2LiNK-Resource-IMG/의 파일을 Client Browser에 전달한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
		, filePath : "/SYS0030/asd/asd/test.png
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {String} rootPath 파일이 존재하는 대상 폴더의 최상위 경로
 */
global.apis.router_resource._common_FileSend_RootPathAndFilePath = function( req, res, rootPath ){
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.router_resource._common_FileSend_RootPathAndFilePath():void----------" );

	var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.apis.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.;
	global.apis.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){
		if( !result )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.apis.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}

		//Client Browser에 File을 전달한다.;
		global.apis.response.sendStream_200_File_URI_NCallback( req, res, rootPath, q.filePath );
	});

	global.TtwLog.log( "---- [ E ] - global.apis.router_resource._common_FileSend_RootPathAndFilePath():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * SUtilHttpServer.evt_request__API_Only Overriding 한다.
 * URI, IP, PORT, SCODE, Session ID등을 파일로그에 축적한다.
 * @function
 * @dependency
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 */
global.apis.server_api.overrideInterface_collectURILog_File = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_api.overrideInterface_collectURILog_File():void----------" );

	var filePath = global.process.cwd() + "/log/uri_" + global.apis.date.getStringDate_Dash() + ".log";
	var _fn0 = function( data ){ global.REQUIRES.fs.appendFileSync( filePath, data ); };
		_fn0(
			"\n, {"
			+ '"ip" : ""'
			+ ', "port" : 0'
			+ ', "date" : "' + new Date().toString() + '"'
			+ ', "SCODE" : "SYS0000"'
			+ ', "uri" : "/"'
			+ ', "sid" : ""'
			+ '}'
		);

	SUtilHttpServer.evt_request__API_Only = function( req, res ){
		var q = global.apis.url.getQueryFromURL( req.url );//URL to Query Object;
		var uri = STtwUtilHttpServer.getURIFromURL( req.url );

		_fn0(
			"\n, {"
			+ '"ip" : "' + req.client.remoteAddress + '"'
			+ ', "port" : ' + req.client.remotePort
			+ ', "date" : "' + new Date().toString() + '"'
			+ ', "SCODE" : "' + q.SCODE + '"'
			+ ', "uri" : "' + uri + '"'
			+ ', "sid" : "' + q.sid + '"'
			+ '}'
		);
	};

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_api.overrideInterface_collectURILog_File():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;

global.apis.server_http.globalServer__setMode__Dev__CommonJS_SameJSCSS=function(){global._$TATIC_CONST_DEBUG&&function(){var e=SUtilHttpServer.__evt_request__APIAndFilePath=SUtilHttpServer.evt_request__APIAndFilePath,t=global.process.cwd()+"/../../Development-Browser-Libraries/WebPage/root/",l=(global.apis.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.thtml"),global.apis.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.tjs"));SUtilHttpServer.evt_request__APIAndFilePath=function(r,s){var a=r.client.address().address.replace("::ffff:",""),o=SUtilHttpServer.getURIFromURL(r.url);if(0==o.indexOf("/js/"))return void global.apis.response.sendStream_200_File_URI_NCallback(r,s,t,o);if(-1!=o.indexOf("/ui/member/public/forgotPassword")&&global.apis.response.setHeaders__b2ker(s),".html"!=global.REQUIRES.path.extname(r.url)){if(".js"==global.REQUIRES.path.extname(r.url)&&-1==r.url.indexOf("_index-add-html-befor.js")){var n="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(r.url),i=global.apis.fs.getFile_UTF8(n);return i=l.replace("<!=JS_SOURCE=!>",i),void global.apis.response.send_200_String(r,s,i)}return void e(r,s)}var b="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(r.url);if(!global.REQUIRES.fs.existsSync(b))return void e(r,s);var p=global.apis.fs.getFile_UTF8(b),c=b.replace(".html",".css").replace(".thtml",".css");global.REQUIRES.fs.existsSync(c)&&(p=p.replace(">",'><LINK rel="stylesheet" type="text/css" href="'+c.replace("../WebPage/root/","http://"+a+"/")+'">'));var n=b.replace(".html",".js").replace(".thtml",".js");return global.REQUIRES.fs.existsSync(n)?(p=p+'\n<SCRIPT type="text/javascript" src="http://'+a+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>\n<SCRIPT type="text/javascript" src="'+n.replace("../WebPage/root/","http://"+a+"/")+'" async="false" defer="true"></SCRIPT>\n',void global.apis.response.send_200_HTML(r,s,p)):(p=p+'\n<SCRIPT type="text/javascript" src="http://'+a+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>',void global.apis.response.send_200_HTML(r,s,p))}}()};

global.apis.server_http.globalServer__setMode__Dev__CommonTemplate_SameJSCSS=function(){global._$TATIC_CONST_DEBUG&&function(){var e=SUtilHttpServer.__evt_request__APIAndFilePath=SUtilHttpServer.evt_request__APIAndFilePath,t=global.process.cwd()+"/../../Development-Browser-Libraries/WebPage/root/",l=global.apis.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.thtml"),r=global.apis.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.tjs");SUtilHttpServer.evt_request__APIAndFilePath=function(s,a){var o=s.client.address().address.replace("::ffff:",""),n=SUtilHttpServer.getURIFromURL(s.url);if(0==n.indexOf("/js/"))return void global.apis.response.sendStream_200_File_URI_NCallback(s,a,t,n);if(-1!=n.indexOf("/ui/member/public/forgotPassword")&&global.apis.response.setHeaders__b2ker(a),".html"!=global.REQUIRES.path.extname(s.url)){if(".js"==global.REQUIRES.path.extname(s.url)&&-1==s.url.indexOf("_index-add-html-befor.js")){var i="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(s.url),p=global.apis.fs.getFile_UTF8(i);return p=r.replace("<!=JS_SOURCE=!>",p),void global.apis.response.send_200_String(s,a,p)}return void e(s,a)}var b="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(s.url);if(!global.REQUIRES.fs.existsSync(b))return void e(s,a);var _=global.apis.fs.getFile_UTF8(b),c=b.replace(".html",".css").replace(".thtml",".css");global.REQUIRES.fs.existsSync(c)&&(_='<LINK rel="stylesheet" type="text/css" href="'+c.replace("../WebPage/root/","http://"+o+"/")+'">\n'+_),_=l.replace("<!=HTML_CONTENT=!>",_);var i=b.replace(".html",".js").replace(".thtml",".js");return global.REQUIRES.fs.existsSync(i)?(_=_+'\n<SCRIPT type="text/javascript" src="http://'+o+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>\n<SCRIPT type="text/javascript" src="'+i.replace("../WebPage/root/","http://"+o+"/")+'" async="false" defer="true"></SCRIPT>\n',void global.apis.response.send_200_HTML(s,a,_)):(_=_+'\n<SCRIPT type="text/javascript" src="http://'+o+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>',void global.apis.response.send_200_HTML(s,a,_))}}()};

global.apis.server_http.globalServer__setMode__Dev__CommonTemplate_SameJSCSS_IncludeHTML=function(){global._$TATIC_CONST_DEBUG&&function(){var e=SUtilHttpServer.__evt_request__APIAndFilePath=SUtilHttpServer.evt_request__APIAndFilePath,t=global.process.cwd()+"/../../Development-Browser-Libraries/WebPage/root/",l=global.apis.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.thtml"),r=global.apis.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.tjs");SUtilHttpServer.evt_request__APIAndFilePath=function(s,a){var o=s.client.address().address.replace("::ffff:",""),n=SUtilHttpServer.getURIFromURL(s.url);if(0==n.indexOf("/js/"))return void global.apis.response.sendStream_200_File_URI_NCallback(s,a,t,n);if(-1!=n.indexOf("/ui/member/public/forgotPassword")&&global.apis.response.setHeaders__b2ker(a),".html"!=global.REQUIRES.path.extname(s.url)){if(".js"==global.REQUIRES.path.extname(s.url)&&-1==s.url.indexOf("_index-add-html-befor.js")){var i="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(s.url),_=global.apis.fs.getFile_UTF8(i);return _=r.replace("<!=JS_SOURCE=!>",_),void global.apis.response.send_200_String(s,a,_)}return void e(s,a)}var p="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(s.url);if(!global.REQUIRES.fs.existsSync(p))return void e(s,a);var b=global.apis.fs.getFile_UTF8(p);b=SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTML(b,"../WebPage/root/");var c=p.replace(".html",".css").replace(".thtml",".css");global.REQUIRES.fs.existsSync(c)&&(b='<LINK rel="stylesheet" type="text/css" href="'+c.replace("../WebPage/root/","http://"+o+"/")+'">\n'+b),b=l.replace("<!=HTML_CONTENT=!>",b);var i=p.replace(".html",".js").replace(".thtml",".js");return global.REQUIRES.fs.existsSync(i)?(b=b+'\n<SCRIPT type="text/javascript" src="http://'+o+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>\n<SCRIPT type="text/javascript" src="'+i.replace("../WebPage/root/","http://"+o+"/")+'" async="false" defer="true"></SCRIPT>\n',void global.apis.response.send_200_HTML(s,a,b)):(b=b+'\n<SCRIPT type="text/javascript" src="http://'+o+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>',void global.apis.response.send_200_HTML(s,a,b))}}()};

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능
 * 화면소스 개발모드에서만 사용한다.
 * Release 모드에서는 필요없음
 * @function
 */
global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------" );

	if( global._$TATIC_CONST_DEBUG )
	(function(){
		var _0 = SUtilHttpServer.__evt_request__APIAndFilePath = SUtilHttpServer.evt_request__APIAndFilePath;
		var _1 = global.process.cwd() + "/../../Development-Browser-Libraries/WebPage/root/";
		//var _2 = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

		SUtilHttpServer.evt_request__APIAndFilePath = function( req, res ){
			var uri = SUtilHttpServer.getURIFromURL( req.url );

			//if( _2[ uri ] ) _0( req, res );

			//global.apis.response.setHeaders__b2ker( res );

			if( 0 == uri.indexOf( "/js/" ) )
			{
				//공통 모듈 파일을 가져와서 내려주기;
				//global.apis.response.sendStream_200_File_NCallback( req, res, _1 );
				global.apis.response.sendStream_200_File_URI_NCallback( req, res, _1, uri );
				return;
			}

			_0( req, res );
		};
	})();

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES || {
	bmp : "image/bmp"
	, css : "text/css"
	//, dbjs : "application/javascript"//오픈 금지;
	, gif : "image/gif"
	, html : "text/html"
	//, less : "text/css"//오픈 금지;
	, list : "text/plain"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	, js : "application/javascript"
	, json : "text/json"
	, png : "image/png"
	//, tjs : "application/javascript"//오픈 금지;
	//, thtml : "text/html"//오픈 금지;
	, txt : "text/plain"
	, xml : "text/xml"
	//, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

	//Font;
	, ttf : "application/x-font-ttf"
	, woff : "application/x-font-woff"
	, woff2 : "application/x-font-woff"
};

/**
 * WebServer용 HTTPServer를 생성한다.
 * @function
 * @param {http.Server}
 * @return {http.Server}
 *
 * @dependency
 * global.Lib.Ttw.CLASS.AutoLoad_JS
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 *
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 * SUtilHttpServer.evt_request__httpServer_200_False
 * SUtilHttpServer.evt_request__httpServer_200_True
 * SUtilHttpServer.evt_request__httpServer_200_String
 */
global.apis.server_http.legacyServer__WebServer__Express = function( server )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.legacyServer__WebServer__Express():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = server;

		//_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	try
	{
		global.apis.fs.autoLoad_JSs([
			[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		]);
	}
	catch( e )
	{
		global.TtwLog.warn( global.process.cwd() + "/js/ 폴더가 존재하지 않는다." );
	}


	/*/
	(function(){
		var f = F.route;
		var o = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
		for( var s in o ) f( s, o[ s ] );
	})();
	//*/

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.legacyServer__WebServer__Express():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * WebServer용 HTTPServer를 생성한다.
 * @function
 * @param {http.Server}
 * @return {http.Server}
 *
 * @dependency
 * global.Lib.Ttw.CLASS.AutoLoad_JS
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 *
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 * SUtilHttpServer.evt_request__httpServer_200_False
 * SUtilHttpServer.evt_request__httpServer_200_True
 * SUtilHttpServer.evt_request__httpServer_200_String
 */
global.apis.server_http.legacyServer__WebServer__TotalJS = function( server )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.legacyServer__WebServer__TotalJS():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = server;

		//_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	global.apis.fs.autoLoad_JSs([
		[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
	]);

	/*/
	(function(){
		var f = F.route;
		var o = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
		for( var s in o ) f( s, o[ s ] );
	})();
	//*/

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.legacyServer__WebServer__TotalJS():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * WebServer용 HTTPServer를 생성한다.
 * @function
 * @return {http.Server}
 *
 * @dependency
 * global.Lib.Ttw.CLASS.AutoLoad_JS
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 *
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 * SUtilHttpServer.evt_request__httpServer_200_False
 * SUtilHttpServer.evt_request__httpServer_200_True
 * SUtilHttpServer.evt_request__httpServer_200_String
 */
global.apis.server_http.newServer__WebServer = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.apis.server_http.newServer__WebServer():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = global.Instance.httpServer_API = new global.Lib.Ttw.CLASS.Http.Server.HttpServer_API({ instanceKey : "global.Instance.httpServer__API", requestMode : "all" });

		_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	try
	{
		if( SUtilFsReadStream.checkWhetherFile( "./js/" ) )
		{
			global.apis.fs.autoLoad_JSs([
				[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
			]);
		}
	}
	catch( e )
	{
		global.TtwLog.warn( "HTTPServer 패키지에 ./js/ 가 존재 하지 않습니다 - 필요시 추가하면 자동 구동됩니다." );
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.apis.server_http.newServer__WebServer():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * {HTTPClientRequest} req 객체의 QueryParameters에서 Session 관련 정보만 추출하여 URI Parameter로 반환한다.
 * @function
 * @param {Object} queryParameters {HTTPClientRequest}의 Query Data
 * <code>
	{
		sid : ""
		, mid : ""
		, d_ex : ""
		, SCODE : ""
	}
 * </code>
 * @return {String}
 */
global.apis.session.getSessionQuery = function( queryParameters )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.apis.session.getSessionQuery():{String}----------" );

	var q = queryParameters;
	var params = "&sid=" + q.sid + "&mid=" + q.mid + "&d_ex=" + q.d_ex + "&SCODE=" + q.SCODE;

	//global.TtwLog.timeStamp( "---- [ E ] - global.apis.session.getSessionQuery():{String}----------" );
	return params;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * @property {uint}
	 */
	var _count = 0;

	/**
	 * @property {uint}
	 */
	var _interval = -1;

	/**
	 * 최종 스테이터스 문자열 값
	 * @property {String}
	 */
	var _LAST_STATUS = "";

	/**
	 * @property {Object}
	 */
	var _sendObj = {
		body : ""
		, connectInfo : [
			  { title : "CPU Percent", description : "" }
			, { title : "IOCount", description : "" }
			, { title : "UsageMemory", description : "" }
			, { title : "ProcessMemory", description : "" }
			, { title : "SystemMemory", description : "" }
			, { title : "ServerConnections", description : "" }
		]
	};

	/**
	 * 중지하기
	 * @function
	 */
	var _END = function(){
		global.apis.common.clearInterval( _interval );
		_interval = -1;
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.
	 *
	 * @function
	 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
	 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
	 * @param {String} sid Session 체크를 위한 데이터
	 * @param {Function} cbFunction Session 인증 후 실행될 Callback 함수
	 *	function( req, res, error, result ){} 형태로 작성되는 함수.
	 */
	global.apis.status.send__WebHook__Jandi = function()
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.status.send__WebHook__Jandi():void----------" );

		//CPU 사용량이 2%가 넘지 않으면 전송하지 않는다.;
		//try{ if( 2 > global.apis.process.getCPUUsage() ) return; }catch( e ){ return; }

		//CPU 사용량이 5%가 넘지 않으면 전송하지 않는다.;
		try{ if( 5 > global.apis.process.getCPUUsage() ) return; }catch( e ){ return; }

		if( global.apis.STATIC.CONFIG.URL.SCODE );

		var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_APIServer";
		//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_ScrapServer";
		//var APP_NAME = global.apis.STATIC.CONFIG.URL.SCODE + "_WebServer";

		var host = global.apis.url.getServerURLByServers( APP_NAME );

		if( !host )
		{
			global.TtwLog.error( "[ ERROR ] - 정보를 전송하기 위한 Host 정보가 없다" );
			return;
		}

		//*/
		if( -1 != host.indexOf( "localhost" ) )
		{
			global.TtwLog.warn( "[ ERROR ] - Local 개발 환경에서는 WebHook를 전송하지 않는다." );
			_END(); return;
		}
		//*/

		if( !global.fnUseWebHookAPI )
		{
			global.TtwLog.error( "[ ERROR ] - global.fnUseWebHookAPI 가 없다." );
			_END(); return;
		}

		//*/
		var path = "";

			 if( -1 != host.indexOf( ".120" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH;
		else if( -1 != host.indexOf( ".122" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__122_PATH;
		else if( -1 != host.indexOf( ".123" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;

		if( "" == path )
		{
			global.TtwLog.error( "[ ERROR ] - 120, 122, 123에 상응하는 path 가 없다." );
			_END(); return;
		}
		/*/
		var path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;
		//*/

		//NodeJS App의 status를 가져온다.;
		var r = global.apis.process.getStatusTotal();

		//FileServer에는 참조하기 위한 Instance가 존재 하지 않음;
		if( "SYS0040" != global.apis.STATIC.CONFIG.URL.SCODE )
		{
			try
			{
				r.ServerConns = global.server.server.server.connections;
			}
			catch( er )
			{
				global.TtwLog.error( "[ ERROR ] - global.apis.status.send__WebHook__Jandi::r.ServerConns = global.server.server.server.connections; Error : " + er );
			}
		}

		try
		{
			if( global.fnUseWebHookAPI._sendCommon )
			{
				var o = _sendObj;
					o.body = "[ " + APP_NAME + " Status ] - " + new Date().toString();
					//o.connectInfo[ 0 ].title = "CPU";
					//o.connectInfo[ 0 ].description = JSON.stringify( r.CPU, null, "\t" );
					o.connectInfo[ 0 ].description = global.apis.process.getCPUUsage() + "%";

					//o.connectInfo[ 1 ].title = "IOCount";
					o.connectInfo[ 1 ].description = JSON.stringify( r.IOCount, null, "\t" );

					//o.connectInfo[ 2 ].title = "UsageMemory";
					o.connectInfo[ 2 ].description = JSON.stringify( r.UsageMemory, null, "\t" );

					//o.connectInfo[ 3 ].title = "ProcessMemory";
					o.connectInfo[ 3 ].description = JSON.stringify( r.ProcessMemory, null, "\t" );

					//o.connectInfo[ 4 ].title = "SystemMemory";
					o.connectInfo[ 4 ].description = JSON.stringify( r.SystemMemory, null, "\t" );

					//o.connectInfo[ 5 ].title = "ServerConnections";
					o.connectInfo[ 5 ].description = JSON.stringify({ count : r.ServerConns }, null, "\t" );

				//마지막 스테이터스 값과 비교하여 동일한 값이면 알람메세지를 전송하지 않는다.;
				var statusJSON = JSON.stringify( _sendObj );
				//var statusObj = JSON.parse( statusJSON );
				if( _LAST_STATUS != statusJSON )
				{
					_LAST_STATUS = statusJSON;
					global.apis.fs.writeFile_UTF8( "./log/status_nodejs - " + global.apis.date.getStringDate_Dash() + ".log", statusJSON );
					global.fnUseWebHookAPI._sendCommon( _sendObj, path, "" );
					++_count;
				}
				else return;
			}
		}
		catch( e )
		{
			global.TtwLog.error( "[ ERROR ] - global.apis.status.send__WebHook__Jandi - global.fnUseWebHookAPI._sendCommon 가 없다." );
			global.TtwLog.error( "[ ERROR ] - " + e );
		}

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.status.send__WebHook__Jandi():void----------" );
	};

	global.apis.status.send__WebHook__Jandi.END = _END;
	global.apis.status.send__WebHook__Jandi.START = function(){
		global.apis.common.clearInterval( _interval );
		_interval = global.apis.common.setInterval( global.apis.status.send__WebHook__Jandi, 30000 );
	};

	global.apis.status.send__WebHook__Jandi.START();
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * @property {uint}
	 */
	var _interval = -1;

	/**
	 * 최종 스테이터스 문자열 값
	 * @property {String}
	 */
	var _LAST_STATUS = "";

	/**
	 * @property {Object}
	 */
	var _sendObj = {
		body : ""
		, connectInfo : [
			{ title : "Sender", description : "" }
			, { title : "", description : "" }
		]
	};

	/**
	 * 중지하기
	 * @function
	 */
	var _END = function(){
		global.TtwLog.log( "[ WARN ] - " + global.apis.STATIC.CONFIG.URL.SCODE + " MongoDB 상태 조회 종료 - " + _interval );

		global.apis.common.clearInterval( _interval );
		_interval = -1;
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * ServerStatus 중에서 MongoDB Error와 관련있는 Metric 값을 평가하고, 이상이 있으 경우 Jandi로 경고 메세지를 보낸다.
	 * @function
	 */
	global.apis.status.send__WebHook__Jandi_MongoDB = function()
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.apis.status.send__WebHook__Jandi_MongoDB():void----------" );

		var CONFIG_URL = global.apis.STATIC.CONFIG.URL;

		if( !CONFIG_URL.SCODE ){ global.TtwLog.warn( "[ WARN ] - SCODE가 없음" ); _END(); return; }

		if( "SYS0050" == CONFIG_URL.SCODE ){ global.TtwLog.warn( "[ WARN ] - SYS0050은 지원하지 않음." ); _END(); return; }
		if( "SYS0070" == CONFIG_URL.SCODE ){ global.TtwLog.warn( "[ WARN ] - SYS0070은 지원하지 않음." ); _END(); return; }

		var host = global.apis.url.getServerURL_APIServer_Self();

		if( !host )
		{
			global.JkLog.error( "[ ERROR ] - 정보를 전송하기 위한 Host 정보가 없다" );
			_END(); return;
		}

		//*///Local Test를 원하면 주석처리;
		if( -1 != host.indexOf( "localhost" ) )
		{
			global.JkLog.warn( "[ ERROR ] - Local 개발 환경에서는 WebHook를 전송하지 않는다." );
			_END(); return;
		}
		//*/

		if( !global.fnUseWebHookAPI )
		{
			global.JkLog.error( "[ ERROR ] - global.fnUseWebHookAPI 가 없다." );
			_END(); return;
		}

		//*///Local Test를 원하면 주석처리;
		var path = "";

			 if( -1 != host.indexOf( ".120" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH;
		else if( -1 != host.indexOf( ".122" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__122_PATH;
		else if( -1 != host.indexOf( ".123" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;
		//삭제하기 - 20171222 - 송선우 - 126번 서버를 위한 땜빵처리 - 120번으로 정상 이동후 삭제하기;
		//else if( -1 != host.indexOf( ".126" ) ) path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__120_PATH;

		if( "" === path )
		{
			global.JkLog.error( "[ ERROR ] - 120, 122, 123에 상응하는 path 가 없다." );
			_END(); return;
		}
		/*/
		var path = global._$TATIC_CONST_WEBHOOK_SERVER_STATUS__JANDI__123_PATH;
		//*/

		//--------------------------------------------------;

		//	IS ALIVE CHECK;

		//--------------------------------------------------;

		var _url = host + "/" + "_mongodb/status/isAlive";

		//MongoDB isAlive;
		global.apis.request.get( _url, function( result ){
			if( !global.apis.response.getResultStatus( result ) )
			{
				var address = global.server.server.server.address();
				//var address = global.server.server.address();

				_sendObj.body = "[ " + CONFIG_URL.SCODE + "_MongoDB isAlive ]";
				_sendObj.connectInfo[ 0 ].description = address.address + address.port;
				_sendObj.connectInfo[ 1 ].description = CONFIG_URL.SCODE + " MongoDB 연결 실패";

				global.fnUseWebHookAPI._sendCommon( _sendObj, path, "" );
				return;
			}

			//--------------------------------------------------;

			//	MongoDB Status CHECK;

			//--------------------------------------------------;

			//MongoDB Status 분석;
			global.apis.status.send__WebHook__Jandi_MongoDB.status( CONFIG_URL.SCODE, host, path );
		});

		//global.TtwLog.timeStamp( "---- [ E ] - global.apis.status.send__WebHook__Jandi_MongoDB():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * MongoDB Status 분석
	 * @function
	 * @param {String} SCODE
	 * @param {String} host
	 */
	global.apis.status.send__WebHook__Jandi_MongoDB.status = function( SCODE, host, path )
	{
		//var _url = host + "/" + "_mongodb/status/serverStatus";
		var _url = host + "/" + "_mongodb/status/serverStatusMin";

		//MongoDB Status;
		global.apis.request.get( _url, function( result ){

			//MongoDB 연계되어 있지만, B2Ker Framework 기반의 HTTP APIServer가 아닌 서버;
			if( -1 != result.indexOf( "Bad Request" ) || -1 != result.indexOf( "Error" ) )
			{
				global.JkLog.error( "[ ERROR ] - B2Ker Framework 기반의 HTTP APIServer가 아닌 서버" );
				_END(); return;
			}

			//MongoDB 연계가 아닌 서버의 처리;
			if( -1 != result.indexOf( "404 Not Found" ) )
			{
				global.JkLog.error( "[ ERROR ] - MongoDB 연계가 아닌 서버의 처리" );
				_END(); return;
			}

			var status = JSON.parse( result );

			/**
			 * Memory space
			 * Metrics to alert on:
			 *	mem.virtual (Virtual memory usage (MB))
			 *	mem.resident (Amount of memory used by the database process (MB))
			 *	extra_info.page_faults
			 */
			//status.mem;

			/**
			 *
			 */
			//status.extra_info.page_faults;

			/**
			 * Cache
			 * Metrics to alert on:
			 *	wiredTiger.cache.tracked dirty bytes in the cache
			 */
			//status.wiredTiger.cache;

			/**
			 * Number of read and write requests
			 * Metrics to alert on:
			 * 	globalLock.activeClients.readers
			 * 	globalLock.activeClients.writers
			 */
			//status.globalLock.activeClients;

			//--------------------------------------------------[ S ];
			var _bSend = 0;

			//Percentage of Connections Used
			//Metrics to alert on:
			//	100 x connections.current / ( connections.current + connections.available )
			status.connections.percent = 100 * status.connections.current / ( status.connections.current + status.connections.available );

			var t = _sendObj.connectInfo;
				t[ 1 ].title = "";
			if( status.mem.virtual > 3000
				|| status.mem.resident > 2500
				//|| status.extra_info.page_faults > 50000//기본값 25000 정도(송선우 랩탑 기준);
				//|| status.wiredTiger.cache["tracked dirty bytes in the cache"] > 100000
			)
			{
				t[ 1 ].title += "[ 메모리 문제 ]";
				_bSend = 1;
			}

			if( status.globalLock.activeClients.readers > 20
				|| status.globalLock.activeClients.writers > 20 )
			{
				t[ 1 ].title += "[ 사용자 수 문제 ]";
				_bSend = 1;
			}

			if( status.connections.percent > 90 )
			{
				t[ 1 ].title += "[ 접속률 문제 ]";
				_bSend = 1;
				status.connections.percent += "%";
			}

			//Asserts represent errors.
			//	Metrics to alert on:
			//|------------------------------------------------------------------------------------------------|
			//|                        Description                                        |        Name        |
			//|------------------------------------------------------------------------------------------------|
			//|    Number of message assertions raised during the selected time period    |    asserts.msg     |
			//|    Number of warning assertions raised during the selected time period    |    asserts.warning |
			//|    Number of regular assertions raised during the selected time period    |    asserts.regular |
			//|    Number of assertions corresponding to errors generated by users        |                    |
			//|    during the selected time period                                        |    asserts.user    |
			//|------------------------------------------------------------------------------------------------|
			if( status.asserts.regular > 0
				|| status.asserts.warning > 0
				|| status.asserts.msg > 0
				|| status.asserts.user > 0 )
			{
				t[ 1 ].title += "[ 쿼리 문제 ]";
				_bSend = 1;
			}

			if( _bSend )
			{
				var address = global.server.server.server.address();
				//var address = global.server.server.address();

				_sendObj.body = "[ " + SCODE + "_MongoDB Status ]";
				_sendObj.connectInfo[ 0 ].description = address.address + address.port;
				_sendObj.connectInfo[ 1 ].description = JSON.stringify( status, null, "\t" );

				/*/
				delete status.connections.percent;
				delete status.connections.totalCreated;
				/*/
				delete status.connections;
				//*/

				delete status.extra_info;

				/*/
				delete status.globalLock.totalTime;
				/*/
				delete status.globalLock
				//*/

				delete status.mem.resident;
				delete status.wiredTiger.cache;

				//마지막 스테이터스 값과 비교하여 동일한 값이면 알람메세지를 전송하지 않는다.;
				var statusJSON = JSON.stringify( status );
				//var statusObj = JSON.parse( statusJSON );
				if( _LAST_STATUS != statusJSON )
				{
					_LAST_STATUS = statusJSON;
					global.apis.fs.writeFile_UTF8( "./log/status_mongodb - " + global.apis.date.getStringDate_Dash() + ".log", statusJSON );
					global.fnUseWebHookAPI._sendCommon( _sendObj, path, "" );
					//++_count;
				}
				else return;
			}
			//--------------------------------------------------[ E ];

		});
	};

	//----------------------------------------------------------------------------------------------------;

	global.apis.status.send__WebHook__Jandi_MongoDB.END = _END;
	global.apis.status.send__WebHook__Jandi_MongoDB.START = function(){
		global.apis.common.clearInterval( _interval );
		_interval = global.apis.common.setInterval( global.apis.status.send__WebHook__Jandi_MongoDB, 30000 );
		//_interval = global.apis.common.setInterval( global.apis.status.send__WebHook__Jandi_MongoDB, 1000 );
	};

	//----------------------------------------------------------------------------------------------------;

	global.apis.status.send__WebHook__Jandi_MongoDB.START();

})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
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
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
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
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//20170906_1501;
//SYS00***_APIServer를 사용하길 권장함;
//
//session_server, b2ker_api_server, brand_portal_api_server, api_server등 삭제 예정임.;
//
//excel_server, file_server등도 시스템 코드로 교체 예정;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - 공용 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev;
		SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
			, session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		, SYS0010_WebServer : [ "http://localhost:33333", "http://localhost:33333", "http://localhost:33333" ]//B2LiNK-SessionServer-Dev;

		//사용하는 곳 목록;
		//B2LiNK-SessionServer-Dev;
		, SYS0011_APIServer : [ "http://localhost:31000", "http://localhost:31000", "http://localhost:31000" ]//B2LiNK-LogServer-Dev;
		, SYS0011_WebServer : [ "http://localhost:31333", "http://localhost:31333", "http://localhost:31333" ]//B2LiNK-LogServer-Dev;

		//모든 View 서비스에서 사용;
		, SYS0015_APIServer : [ "http://localhost:49324", "http://localhost:49324", "http://localhost:49324" ]//Development-Components-UI;
		, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev...;
		, SYS0040_APIServer : [ "http://localhost:49322", "http://localhost:49322" ]
			, file_server : [ "http://localhost:49322", "http://localhost:49322" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, SYS0050_APIServer : [ "http://localhost:47320", "http://localhost:47320" ]
			//, webhook_server : [ "http://localhost:47320", "http://localhost:47320" ]
		, SYS0050_APIServer : [ "https://api.b2link.co.kr/b2ker/webhook/router", "https://api.b2link.co.kr/b2ker/webhook/router" ]
			, webhook_server : [ "https://api.b2link.co.kr/b2ker/webhook/router", "https://api.b2link.co.kr/b2ker/webhook/router" ]
		//, SYS0050_APIServer : [ "https://test.api.b2link.co.kr/b2ker/webhook/router", "https://test.api.b2link.co.kr/b2ker/webhook/router" ]
			//, webhook_server : [ "https://test.api.b2link.co.kr/b2ker/webhook/router", "https://test.api.b2link.co.kr/b2ker/webhook/router" ]

		//사용하는 곳 목록;
		//B2LiNK-WebSocket-MessageServer-Dev, ...;
		//, SYS0060_APIServer : [ "http://localhost:42322", "http://localhost:42322" ]
		//, SYS0060_APIServer : [ "http://222.239.10.120:42322", "http://222.239.10.120:42322" ]
		, SYS0060_APIServer : [ "https://api.b2link.co.kr/b2ker/message/router", "https://api.b2link.co.kr/b2ker/message/router" ]
		//, SYS0060_APIServer : [ "https://test.api.b2link.co.kr/b2ker/message/router", "https://test.api.b2link.co.kr/b2ker/message/router" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev, ...;
		, SYS0070_APIServer : [ "http://localhost:48320", "http://localhost:48320" ]
			, excel_server : [ "http://localhost:48320", "http://localhost:48320" ]
		, SYS0070_WebServer : [ "http://localhost:48321", "http://localhost:48321" ]
			, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0120_APIServer : [ "http://localhost:49520", "http://localhost:49520" ]
		, SYS0120_WebServer : [ "http://localhost:49521", "http://localhost:49521" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0130_APIServer : [ "http://localhost:44520", "http://localhost:44520" ]
		, SYS0130_WebServer : [ "http://localhost:44521", "http://localhost:44521" ]
		//--------------------------------------------------[ E ] - 공용 서버;


		//--------------------------------------------------[ S ] - 비지니스 시스템 서버;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		, SYS0020_APIServer : [ "http://localhost:49320", "http://localhost:49320" ]
			, b2ker_api_server : [ "http://localhost:49320", "http://localhost:49320" ]
		, SYS0020_WebServer : [ "http://localhost:49321", "http://localhost:49321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, B2LiNK-OnSight--Micro-Dev, ...;
		, SYS0030_APIServer : [ "http://localhost:45320", "http://localhost:45320" ]
			, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		, SYS0030_WebServer : [ "http://localhost:45321", "http://localhost:45321" ]
		, SYS0030_WebServer_Domain : [ "http://localhost:45321", "http://localhost:45321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight--Macro-Dev, ...;
		, SYS0031_APIServer : [ "http://localhost:45420", "http://localhost:45420" ]
		, SYS0031_WebServer : [ "http://localhost:45421", "http://localhost:45421" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Admin, ...;
		, SYS0034_APIServer : [ "http://localhost:45324", "http://localhost:45324" ]
		, SYS0034_WebServer : [ "http://localhost:45322", "http://localhost:45322" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Tool-SKUMapper, ...;
		, SYS0035_APIServer : [ "http://localhost:45325", "http://localhost:45325" ]
		, SYS0035_WebServer : [ "http://localhost:45326", "http://localhost:45326" ]
		//, SYS0035_APIServer : [ "http://localhost:45325", "http://localhost:45325" ]
		//, SYS0035_WebServer : [ "http://localhost:45326", "http://localhost:45326" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//...;
		, SYS0037_APIServer : [ "http://localhost:45528", "http://localhost:45528" ]
		, SYS0037_WebServer : [ "http://localhost:45527", "http://localhost:45527" ]
		//, SYS0037_APIServer : [ "http://222.239.10.120:45528", "http://222.239.10.120:45528" ]
		//, SYS0037_WebServer : [ "http://222.239.10.120:45527", "http://222.239.10.120:45527" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-ProductServer-Dev ...;
		, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]
		//, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		//, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]
		//, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		//, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2B-Platform-Admin ...;
		, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]
		//, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		//, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]
		//, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		//, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2B-Platform-Dev ...;
		, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]
		//, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		//, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]
		//, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		//, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Dev ...;
		, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		//, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		//, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://dnsproxy.shop:49780", "http://dnsproxy.shop:49780" ]
		//, SYS0310_WebServer : [ "http://dnsproxy.shop:49781", "http://dnsproxy.shop:49781" ]
		//--------------------------------------------------[ E ] - 비지니스 시스템 서버;


		//--------------------------------------------------[ S ] - Util;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler, ...;
		, SYS0032_APIServer : [ "http://localhost:45323", "http://localhost:45323" ]
		//--------------------------------------------------[ E ] - Util;


		//--------------------------------------------------[ S ] - DB Server;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler-Storage-MongoDB, ...;
		, SYS0033_APIServer : [ "http://localhost:45520", "http://localhost:45520" ]
		, SYS0033_WebServer : [ "http://localhost:45521", "http://localhost:45521" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-China-Crawler-Storage-MongoDB ...;
		, SYS0110_APIServer : [ "http://localhost:43320", "http://localhost:43320" ]
		, SYS0110_WebServer : [ "http://localhost:43321", "http://localhost:43321" ]
		//--------------------------------------------------[ E ] - DB Server;


		//--------------------------------------------------[ S ] - Total.js;
		//Total.js - SuperAdmin - 사용하는 곳 목록;
		, SYS4110_APIServer : [ "http://localhost:40320", "http://localhost:40320" ]
		, SYS4110_WebServer : [ "http://localhost:40320", "http://localhost:40320" ]

		//Total.js - wiki - 사용하는 곳 목록;
		, SYS4111_APIServer : [ "http://localhost:40321", "http://localhost:40321" ]
		, SYS4111_WebServer : [ "http://localhost:40321", "http://localhost:40321" ]

		//Total.js - HelpDesk - 사용하는 곳 목록;
		, SYS4112_APIServer : [ "http://localhost:40322", "http://localhost:40322" ]
		, SYS4112_WebServer : [ "http://localhost:40322", "http://localhost:40322" ]

		//Total.js - Messanger - 사용하는 곳 목록;
		, SYS4113_APIServer : [ "http://localhost:40323", "http://localhost:40323" ]
		, SYS4113_WebServer : [ "http://localhost:40323", "http://localhost:40323" ]

		//Total.js - OpenPlatform - 사용하는 곳 목록;
		, SYS4120_APIServer : [ "http://localhost:40330", "http://localhost:40330" ]
		, SYS4120_WebServer : [ "http://localhost:40330", "http://localhost:40330" ]

		//Total.js - CMS - 사용하는 곳 목록;
		, SYS4130_APIServer : [ "http://localhost:40340", "http://localhost:40340" ]
		, SYS4130_WebServer : [ "http://localhost:40340", "http://localhost:40340" ]

		//Total.js - Eshop - 사용하는 곳 목록;
		, SYS4135_APIServer : [ "http://localhost:40345", "http://localhost:40345" ]
		, SYS4135_WebServer : [ "http://localhost:40345", "http://localhost:40345" ]
		//--------------------------------------------------[ E ] - Total.js;
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	global.apis.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//20170906_1501;
//SYS00***_APIServer를 사용하길 권장함;
//
//session_server, b2ker_api_server, brand_portal_api_server, api_server등 삭제 예정임.;
//
//excel_server, file_server등도 시스템 코드로 교체 예정;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - 공용 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev;
		SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
			, session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		, SYS0010_WebServer : [ "http://localhost:33333", "http://localhost:33333", "http://localhost:33333" ]//B2LiNK-SessionServer-Dev;

		//모든 View 서비스에서 사용;
		, SYS0015_APIServer : [ "https://resource.b2link.co.kr/router/", "https://resource.b2link.co.kr/router/", "https://resource.b2link.co.kr/router/" ]//Development-Components-UI;
		, SYS0015_WebServer : [ "https://resource.b2link.co.kr/view/", "https://resource.b2link.co.kr/view/", "https://resource.b2link.co.kr/view/" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "https://test.resource.b2link.co.kr/view/", "https://test.resource.b2link.co.kr/view/", "https://test.resource.b2link.co.kr/view/" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev...;
		, SYS0040_APIServer : [ "http://localhost:49322", "http://localhost:49322" ]
			, file_server : [ "http://localhost:49322", "http://localhost:49322" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, SYS0050_APIServer : [ "http://localhost:47320", "http://localhost:47320" ]
			//, webhook_server : [ "http://localhost:47320", "http://localhost:47320" ]
		, SYS0050_APIServer : [ "https://api.b2link.co.kr/b2ker/webhook/router/", "https://api.b2link.co.kr/b2ker/webhook/router/" ]
			, webhook_server : [ "https://api.b2link.co.kr/b2ker/webhook/router/", "https://api.b2link.co.kr/b2ker/webhook/router/" ]
		//, SYS0050_APIServer : [ "https://test.api.b2link.co.kr/b2ker/webhook/router/", "https://test.api.b2link.co.kr/b2ker/webhook/router/" ]
			//, webhook_server : [ "https://test.api.b2link.co.kr/b2ker/webhook/router/", "https://test.api.b2link.co.kr/b2ker/webhook/router/" ]

		//사용하는 곳 목록;
		//B2LiNK-WebSocket-MessageServer-Dev, ...;
		//, SYS0060_APIServer : [ "http://localhost:42322", "http://localhost:42322" ]
		//, SYS0060_APIServer : [ "http://222.239.10.120:42322", "http://222.239.10.120:42322" ]
		, SYS0060_APIServer : [ "https://api.b2link.co.kr/b2ker/message/router/", "https://api.b2link.co.kr/b2ker/message/router/" ]
		//, SYS0060_APIServer : [ "https://test.api.b2link.co.kr/b2ker/message/router/", "https://test.api.b2link.co.kr/b2ker/message/router/" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev, ...;
		, SYS0070_APIServer : [ "http://localhost:48320", "http://localhost:48320" ]
			, excel_server : [ "http://localhost:48320", "http://localhost:48320" ]
		, SYS0070_WebServer : [ "http://localhost:48321", "http://localhost:48321" ]
			, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]
		//--------------------------------------------------[ E ] - 공용 서버;


		//--------------------------------------------------[ S ] - 비지니스 시스템 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		, SYS0020_APIServer : [ "http://localhost:49320", "http://localhost:49320" ]
			, b2ker_api_server : [ "http://localhost:49320", "http://localhost:49320" ]
		, SYS0020_WebServer : [ "http://localhost:49321", "http://localhost:49321" ]

		//사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0030_APIServer : [ "http://localhost:45320", "http://localhost:45320" ]
			, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		, SYS0030_WebServer : [ "http://localhost:45321", "http://localhost:45321" ]

		//사용하는 곳 목록;
		//B2LiNK-OnSight-Dev, ...;
		, SYS0031_APIServer : [ "http://localhost:45420", "http://localhost:45420" ]
			, api_server : [ "http://localhost:45420", "http://localhost:45420" ]
		, SYS0031_WebServer : [ "http://localhost:45421", "http://localhost:45421" ]

		//사용하는 곳 목록;
		//B2LiNK-ProductServer-Dev ...;
		, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]
		//--------------------------------------------------[ E ] - 비지니스 시스템 서버;


		//--------------------------------------------------[ S ] - Util;
		//사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler, ...;
		, SYS0032_APIServer : [ "http://localhost:45323", "http://localhost:45323" ]
		//--------------------------------------------------[ E ] - Util;


		//--------------------------------------------------[ S ] - DB Server;
		//사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler-Storage-MongoDB, ...;
		, SYS0033_APIServer : [ "http://localhost:45520", "http://localhost:45520" ]
		, SYS0033_WebServer : [ "http://localhost:45521", "http://localhost:45521" ]

		//사용하는 곳 목록;
		//B2LiNK-China-Crawler-Storage-MongoDB ...;
		, SYS0110_APIServer : [ "http://localhost:43320", "http://localhost:43320" ]
		, SYS0110_WebServer : [ "http://localhost:43321", "http://localhost:43321" ]
		//--------------------------------------------------[ E ] - DB Server;
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	global.apis.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.apis.util.isNull = function( data )
{
	return (
		typeof data == undefined

		//----------;
		//작성 - 20161214_1412 - 송선우
		//현재 DB -> SERVER -> BROWSER 시 나오면 안되는 "undefined"가 나오고 있음(이호영 제보)
		//Database Schema 기반의 Document Validation 함수들이 완성되면 차후에 없을 예정(최석준 개발)
		|| data == "undefined"
		//----------;
		|| data == null
		|| data == ""
		|| data == NaN
	) ? true : false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.apis.util.isUndefined = function( data )
{
	return (
		typeof data == undefined
		|| data == "undefined"
		|| data == null
		|| data == NaN
	) ? true : false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_linux;

global.cp_linux = global.cp_linux || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_linux;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRES = global.REQUIRES || {};
	var _fs = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e ){}

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_linux.CONST;

global.cp_linux.CONST = global.cp_linux.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_linux.CONST;

//----------------------------------------------------------------------------------------------------;

global.cp_linux.CONST.PATH = global.cp_linux.CONST.PATH || {};

//----------------------------------------------------------------------------------------------------;

global.cp_linux.CONST.PATH.BINARY = global.cp_linux.CONST.PATH.BINARY || {};

//------------------------------------------------------------------------------------------;

(function(){
	var _zip = "zip";
	var _ = global.cp_linux.CONST.PATH.BINARY;
		_.__defineGetter__( "ZIP", function(){ return zip; } );
})();

//------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_linux.zip;

global.cp_linux.zip = global.cp_linux.zip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_linux.zip;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_linux.zip_sync;

global.cp_linux.zip_sync = global.cp_linux.zip_sync || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_linux.zip_sync;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip.compress_addFile = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip.compress_addFile():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip.compress_addFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip.compress_addFiles = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip.compress_addFiles():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip.compress_addFiles():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip.compress_directories = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip.compress_directories():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip.compress_directories():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip.compress_file = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip.compress_file():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip.compress_file():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip.compress_files = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip.compress_files():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip.compress_files():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip_sync.compress_addFile = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip_sync.compress_addFile():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip_sync.compress_addFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip_sync.compress_addFiles = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip_sync.compress_addFiles():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip_sync.compress_addFiles():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip_sync.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip_sync.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip_sync.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip_sync.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip_sync.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip_sync.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip_sync.compress_file = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip_sync.compress_file():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip_sync.compress_file():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_linux.zip_sync.compress_files = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_linux.zip_sync.compress_files():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_linux.zip_sync.compress_files():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_mac;

global.cp_mac = global.cp_mac || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_mac;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRES = global.REQUIRES || {};
	var _fs = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e ){}

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_mac.CONST;

global.cp_mac.CONST = global.cp_mac.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_mac.CONST;

//----------------------------------------------------------------------------------------------------;

global.cp_mac.CONST.PATH = global.cp_mac.CONST.PATH || {};

//----------------------------------------------------------------------------------------------------;

global.cp_mac.CONST.PATH.BINARY = global.cp_mac.CONST.PATH.BINARY || {};

//------------------------------------------------------------------------------------------;

(function(){
	var _zip = "zip";
	var _ = global.cp_mac.CONST.PATH.BINARY;
		_.__defineGetter__( "ZIP", function(){ return zip; } );
})();

//------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_mac.zip;

global.cp_mac.zip = global.cp_mac.zip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_mac.zip;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_mac.zip_sync;

global.cp_mac.zip_sync = global.cp_mac.zip_sync || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_mac.zip_sync;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip.compress_addFile = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip.compress_addFile():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip.compress_addFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip.compress_addFiles = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip.compress_addFiles():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip.compress_addFiles():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip.compress_directories = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip.compress_directories():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip.compress_directories():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip.compress_file = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip.compress_file():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip.compress_file():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip.compress_files = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip.compress_files():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip.compress_files():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip_sync.compress_addFile = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip_sync.compress_addFile():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip_sync.compress_addFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip_sync.compress_addFiles = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip_sync.compress_addFiles():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip_sync.compress_addFiles():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip_sync.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip_sync.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip_sync.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip_sync.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip_sync.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip_sync.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip_sync.compress_file = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip_sync.compress_file():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip_sync.compress_file():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_mac.zip_sync.compress_files = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_mac.zip_sync.compress_files():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_mac.zip_sync.compress_files():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_win;

global.cp_win = global.cp_win || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_win;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRES = global.REQUIRES || {};
	var _fs = require( "fs" );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e ){}

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_win.CONST;

global.cp_win.CONST = global.cp_win.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_win.CONST;

//----------------------------------------------------------------------------------------------------;

global.cp_win.CONST.PATH = global.cp_win.CONST.PATH || {};

//----------------------------------------------------------------------------------------------------;

global.cp_win.CONST.PATH.BINARY = global.cp_win.CONST.PATH.BINARY || {};

//------------------------------------------------------------------------------------------;

(function(){//7z;
	var rootPath = global.process.cwd();
	var path_7z = "Development-Binary-Windows/Binary/7z/7z.exe";

	var a = [
		  rootPath + path_7z
		, rootPath + "/../" + path_7z
		, rootPath + "/../../" + path_7z
		, rootPath + "/../../../" + path_7z
		, rootPath + "/../../../../" + path_7z
		, rootPath + "/../../../../../" + path_7z
	];

	var _7z = rootPath + "/../../" + path_7z;

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( global.REQUIRES.fs.existsSync( a[ i ] ) )
		{
			_7z = a[ i ];
			break;
		}
	}

	var _ = global.cp_win.CONST.PATH.BINARY;
		_.__defineGetter__( "7z", function(){ return _7z; } );
})();

//------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_win.zip;

global.cp_win.zip = global.cp_win.zip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_win.zip;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.cp_win.zip_sync;

global.cp_win.zip_sync = global.cp_win.zip_sync || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.cp_win.zip_sync;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip.compress_addFile = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip.compress_addFile():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip.compress_addFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip.compress_addFiles = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip.compress_addFiles():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip.compress_addFiles():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip.compress_directories = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip.compress_directories():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip.compress_directories():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip.compress_file = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip.compress_file():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip.compress_file():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip.compress_files = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip.compress_files():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip.compress_files():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip_sync.compress_addFile = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip_sync.compress_addFile():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip_sync.compress_addFile():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip_sync.compress_addFiles = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip_sync.compress_addFiles():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip_sync.compress_addFiles():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip_sync.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip_sync.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip_sync.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip_sync.compress_directory = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip_sync.compress_directory():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip_sync.compress_directory():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip_sync.compress_file = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip_sync.compress_file():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip_sync.compress_file():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param d {Object}
 * <code>
	{
	}
 * </code>
 *
 * @example
 * <code>
 * </code>
 */
global.cp_win.zip_sync.compress_files = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.cp_win.zip_sync.compress_files():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.cp_win.zip_sync.compress_files():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb;

global.mongodb = global.mongodb || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb;

/**
 * @function
 * @param {Object} d
 * <code>
	{
		host : "127.0.0.1"
		, port : 27017
		, dbNm : "admin"
		, query : ""
		, cbComplete : function( error, result ){
			debugger;
			if( error )
			{
				throw new Error();
				return;
			}

			console.log( result );
		}
	}
 * </code>
 *
 * @example
 * <code>
	global.mongodb.exec({
		host : "127.0.0.1"
		, port : 59322
		, dbNm : "admin"
		, query : "db.getCollectionNames();"
		, cbComplete : function( error, result ){
			debugger;
			if( error )
			{
				throw new Error();
				return;
			}

			console.log( result );
		}
	});
 * </code>
 */
global.mongodb.exec = function( d ){ SUtilMongoDB.exec( d ); };

/**
 * @function
 * @param {String} host "127.0.0.1"
 * @param {Number} port 27017
 * @param {String} db "admin"
 * @param {String} query MongoDB's Javascript Query
 * @param {Function} cbFunction function( error, stdout, stderr ){} print(), printjson() 등을 사용한 문자열을 줄을 나누어 반환해준다.
 * @example
 * <code>
	SUtilMongoDB.setMongoPath( 'E:\\GitHub_B2LiNK\\Development-Binary-Windows\\Binary\\MongoDB\\3.6.2\\mongo.exe' );
	SUtilMongoDB.execAsync( "127.0.0.1", 59322, "admin", "printjson(db);", function( error, stdout, stderr ){} )

	var result = SUtilMongoDB.execAsync( "127.0.0.1", 59322, "admin", `
		var r = [];
		db.getSiblingDB( "member" ).getCollection( "member_basic" ).find({}).forEach(function( doc ){
			r.push( doc );
		});
		print( JSON.stringify( r ) );`
		, function( error, stdout, stderr ){
			debugger;
		}
	);
 * </code>
 */
global.mongodb.execAsync = function( host, port, db, query, cbFunction ){ return SUtilMongoDB.execAsync( host, port, db, query, cbFunction ); };

/**
 * @function
 * @param {String} host "127.0.0.1"
 * @param {Number} port 27017
 * @param {String} db "admin"
 * @param {String} query MongoDB's Javascript Query
 * @param {String} jsName
 * @return {String} print(), printjson() 등을 사용한 문자열을 줄을 나누어 반환해준다.
 * @example
 * <code>
	global.mongodb.execSync( "127.0.0.1", 59322, "admin", "printjson(db);" )

	var result = global.mongodb.execSync( "127.0.0.1", 59322, "admin", `
		var r = [];
		db.getSiblingDB( "member" ).getCollection( "member_basic" ).find({}).forEach(function( doc ){
			r.push( doc );
		});
		print( JSON.stringify( r ) );
	`);
 * </code>
 */
global.mongodb.execSync = function( host, port, db, query ){ return SUtilMongoDB.execSync( host, port, db, query ); };

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.date;

global.mongodb.date = global.mongodb.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.date;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.dbjs;

global.mongodb.dbjs = global.mongodb.dbjs || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.dbjs;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.make_query;

global.mongodb.make_query = global.mongodb.make_query || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.make_query;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.member;

global.mongodb.member = global.mongodb.member || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.member;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.obj;

global.mongodb.obj = global.mongodb.obj || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.obj;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.regex;

global.mongodb.regex = global.mongodb.regex || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.regex;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.string;

global.mongodb.string = global.mongodb.string || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.string;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb.validation;

global.mongodb.validation = global.mongodb.validation || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb.validation;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 기준일(date) 에 day를 더하여 반환한다. 
 * @function
 * @param {Array} date 기준일
 * @param {uint} day 추가할 일
 * @return {Array} [ y, m, d, ho, mi, se ]
 */
global.mongodb.date.add_arrayDate_day = function( date, day)
{
	RayLog.log( "---- [ S ] - global.mongodb.date.add_arrayDate_day():{Object}----------" );

	var d = new Date( date[ 0 ], date[ 1 ], date[ 2 ], date[ 3 ], date[ 4 ], date[ 5 ]);

	d.setDate( d.getDate() + day );

	
	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDay(), d.getHours(), d.getMinutes(), d.getSeconds() ];
	RayLog.log( "---- [ E ] - global.mongodb.date.add_arrayDate_day():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Object Type 의 Date Format 의 값을 MongoDB 용으로 NumberInt 로 Convert 해준다.
 * @function
 * @param {Date|Object} {}
 * @return {Object}
 */
global.mongodb.date.convertDateToNumberInt = function( d )
{
	if( !d ) return {};

	var formattedDate = { y : NumberInt( d.y ), m : NumberInt( d.m ), d : NumberInt( d.d ), ho : NumberInt( d.ho ), mi : NumberInt( d.mi ), se : NumberInt( d.se ) };

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 호출한 시점의 data를 Array로 반환
 * 코드 생성을 위함. NumberInt()를 사용하게 되면 Object로 들어가게 되어 코드 생성을 못함.
 * 데이터 삽입용 아님.
 * @function
 * @return {Array} [ y, m, d, ho, mi, se ]
 */
global.mongodb.date.getArrayDateFromNewDate_forCd = function()
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getArrayDateFromNewDate_forCd():{Array}----------" );

	var d = new Date();
	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getArrayDateFromNewDate_forCd():{Array}----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 NumberInt 적용하여 Array로 반환
 * 데이터 삽입용
 * @function
 * @return {Array}
 * <code>
	[
		{NumberInt}
		, {NumberInt}
		, {NumberInt}
		, {NumberInt}
		, {NumberInt}
		, {NumberInt}
	]
 * </code>
 */
global.mongodb.date.getArrayNumberIntDate__Now = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getArrayNumberIntDate__Now():{Array}----------" );

	var d = new Date();
	var r = [
		NumberInt( d.getFullYear() )
		, NumberInt( d.getMonth() + 1 )
		, NumberInt( d.getDate() )
		, NumberInt( d.getHours() )
		, NumberInt( d.getMinutes() )
		, NumberInt( d.getSeconds() )
	];

	CSJLog.log( "---- [ E ] - global.mongodb.date.getArrayNumberIntDate__Now():{Array}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 빈 Object 타입의 Date를 반환한다.
 * @function
 * @return {String} "-"
 */
global.mongodb.date.getDate__Hyphen__Empty = function()
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.mongodb.date.getDate__Hyphen__Empty():{Object}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.mongodb.date.getDate__Hyphen__Empty():{Object}----------return "-";" );
	return "-";
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 빈 Object 타입의 Date를 반환한다.
 * @function
 * @return {Object} { y : "", m : "", d : "", ho : "", mi : "", se : "" }
 */
global.mongodb.date.getDate__Object__Empty = function()
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.date.getDate__Object__Empty():{Object}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.date.getDate__Object__Empty():{Object}----------" );

	return { y : "", m : "", d : "", ho : "", mi : "", se : "" };
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 두 날짜 사이의 날짜들을 배열에 담아 반환한다.
 * @param {String} d_start
 * @param {String} d_end
 * @return {Array} a
 * @example
 * <code>
	global.mongodb.date.getISODateListFromRange__StringDate( "2018-04-01", "2018-04-05" );
 * </code>
 */
global.mongodb.date.getISODateListFromRange__StringDate = function( d_start, d_end )
{
	//Rh2Log.timeStamp( "---- [ S ] - global.mongodb.date.getISODateListFromRange__StringDate():{Object}----------" );
	var a = [];
	var dateMove = new Date( d_start );
	var strDate = d_start;

	if( d_start == d_end )
	{
		var strDate = dateMove.toISOString().slice( 0, 10 );
		a.push( strDate );
	}
	else
	{
		while( strDate < d_end )
		{
			var strDate = dateMove.toISOString().slice( 0, 10 );
			a.push( strDate );
			dateMove.setDate( dateMove.getDate() + 1 );
		}
	}
	//Rh2Log.timeStamp( "---- [ E ] - global.mongodb.date.getISODateListFromRange__StringDate():{Object}----------" );
	return a;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 시작일과 종료일을 입력받아 기간을 반환한다
 * @function
 * @param {Object} start 시작일
 * <code>
	{
		"y" : {Number}
		, "m" : {Number}
		, "d" : {Number}
		, "ho" : {Number}
		, "mi" : {Number}
		, "se" : {Number}
	}
 * </code>
 * @param {Object} end 종료일
 * <code>
	{
		"y" : {Number}
		, "m" : {Number}
		, "d" : {Number}
		, "ho" : {Number}
		, "mi" : {Number}
		, "se" : {Number}
	}
 * </code>
 * @return {Object}
 * <code>
	{
		"y" : {NumberInt}
		, "m" : {NumberInt}
		, "d" : {NumberInt}
		, "ho" : {NumberInt}
		, "mi" : {NumberInt}
		, "se" : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getLeadTime = function( start, end )
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getLeadTime():{Object}----------" );

	var r = {};

	//Set the unit values in milliseconds;
	var msecPerMinute = 1000 * 60;
	var msecPerHour   = msecPerMinute * 60;
	var msecPerDay	= msecPerHour * 24;
	var msecPerMonth  = msecPerDay * 30;
	var msecPerYear   = msecPerMonth * 12;

	//Set a date and get the millisecond;
	var date = new Date( end.y, end.m - 1 , end.d, end.ho, end.mi, end.se );
	var dateMsec = date.getTime();
	

	date.setYear(  start.y );
	date.setMonth( start.m - 1);
	date.setDate(  start.d);
	date.setHours( start.ho, start.mi, start.se );

	//Get the difference in milliseconds;
	var interval = dateMsec - date.getTime();
	var p = 1;
	if( interval < 0)
	{
		interval = Math.abs( interval );	
		p = -1;
	} 

	//Calculate how many days the interval contains;
	//Subtract that many days from the interval to determine the remainder;
	var year = Math.floor( interval / msecPerYear );
	interval = interval - ( year * msecPerYear );

	var month = Math.floor( interval / msecPerMonth );
	interval = interval - ( month * msecPerMonth );

	var days = Math.floor( interval / msecPerDay );
	interval = interval - ( days * msecPerDay );

	//Calculate the hours, minutes, and seconds;
	var hours = Math.floor( interval / msecPerHour );
	interval = interval - ( hours * msecPerHour );

	var minutes = Math.floor( interval / msecPerMinute );
	interval = interval - ( minutes * msecPerMinute );

	var seconds = Math.floor( interval / 1000 );
	
	//Display the result;
	r.y = NumberInt( year * p);
	r.m = NumberInt( month * p );
	r.d = NumberInt( days * p );
	r.ho = NumberInt( hours * p );
	r.mi = NumberInt( minutes * p );
	r.se = NumberInt( seconds * p );

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getLeadTime():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 NumberInt 적용하여 Object로 반환
 * 데이터 삽입용
 * @function
 * @return {Object}
 * <code>
	{
		y : {NumberInt}
		, m : {NumberInt}
		, d : {NumberInt}
		, ho : {NumberInt}
		, mi : {NumberInt}
		, se : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getNumberIntDate__Now = function()
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getNumberIntDate__Now():{Object}----------" );

	var d = new Date();
	var r = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )
	};

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getNumberIntDate__Now():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 호출한 시점의 data를 Object로 반환
 * @function
 * @return {Object} { "y" : 2017,"m" : 1,"d" : 1"ho" : 1,"mi" : 1,"se" : 1 }
 */
global.mongodb.date.getObjectDateFromNewDate_forCd = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getObjectDateFromNewDate_forCd():{Object}----------" );

	var d = new Date();
	var r = { "y" : NumberInt( d.getFullYear() ), "m" : NumberInt( d.getMonth() + 1 ), "d" : NumberInt( d.getDate() ), "ho" : NumberInt( d.getHours() ), "mi" : NumberInt( d.getMinutes() ), "se" : NumberInt( d.getSeconds() ) };

	CSJLog.log( "---- [ E ] - global.mongodb.date.getObjectDateFromNewDate_forCd():{Object}----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Object} {y : 2017, m : 2, d : 25, ho : 11, mi : 20, se : 50}
 */
global.mongodb.date.getObjectDateFromNewDate_NumberInt = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getObjectDateFromNewDate_NumberInt():{Object}----------" );

	var d = new Date();

	var r = { y : NumberInt(d.getFullYear()), m : NumberInt(d.getMonth() + 1), d : NumberInt(d.getDate()), ho : NumberInt(d.getHours()), mi : NumberInt(d.getMinutes()), se : NumberInt(d.getSeconds()) };

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getObjectDateFromNewDate_NumberInt():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 NumberInt 적용하여 Object로 반환
 * 데이터 삽입용
 * @function
 * @return {Object}
 * <code>
	{
		y : {NumberInt}
		, m : {NumberInt}
		, d : {NumberInt}
		, ho : {NumberInt}
		, mi : {NumberInt}
		, se : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getObjectNumberIntDate__Now = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getObjectNumberIntDate__Now():{Object}----------" );

	var d = new Date();
	var r = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )
	};

	CSJLog.log( "---- [ E ] - global.mongodb.date.getObjectNumberIntDate__Now():{Object}----------return date;" );
	return r;
};
global.mongodb.date.getDate__Now = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getDate__Now():{Object}----------" );

	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );
	CSJLog.log( "[ WARN ] - global.mongodb.date.getDate__Now -> global.mongodb.date.getObjectNumberIntDate__Now로 변경." );

	var d = new Date();
	var r = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )
	};

	CSJLog.log( "---- [ E ] - global.mongodb.date.getDate__Now():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Date를 검증한다.
 * @function
 * @param {Array} [ 2017, 07, 31 ]
 * @return {Boolean}
 */
global.mongodb.date.getValidationDate__Array = function( date )
{
	TtwLog.log( "---- [ S ] - global.mongodb.date.getValidationDate__Array():{Boolean}----------" );

	var d = new Date( date[ 0 ], date[ 1 ], date[ 2 ] );

	if( "Invalid Date" == d.toString() ) return false;

	if( d == date[ 1 ] ) return false;

	TtwLog.log( "---- [ E ] - global.mongodb.date.getValidationDate__Array():{Boolean}----------return true;" );
	return true;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Date를 검증한다.
 * @function
 * @param {Array} { y : 2017, m : 6, d : 31 }
 * @return {Boolean}
 */
global.mongodb.date.getValidationDate__Object = function( date )
{
	TtwLog.log( "---- [ S ] - global.mongodb.date.getValidationDate__Object():{Boolean}----------" );

	var d = new Date( date.y, date.m, date.d );

	if( "Invalid Date" == d.toString() ) return false;

	if( d == date.m ) return false;

	TtwLog.log( "---- [ E ] - global.mongodb.date.getValidationDate__Object():{Boolean}----------return true;" );
	return true;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Date를 검증한다.
 * @function
 * @param {String} "2016-06-31"
 * @return {Boolean}
 */
global.mongodb.date.getValidationDate__String = function( date )
{
	TtwLog.log( "---- [ S ] - global.mongodb.date.getValidationDate__String():{Boolean}----------" );

	var d = new Date( date );

	if( "Invalid Date" == d.toString() ) return false;

	var a = date.split( "-" );

	if( d == a[ 1 ] ) return false;

	TtwLog.log( "---- [ E ] - global.mongodb.date.getValidationDate__String():{Boolean}----------return true;" );
	return true;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 날짜 Object에 대하여 NumberInt 적용
 * @function
 * @param {Object} date
 * <code>
	{
		"y" : {Number}
		, "m" : {Number}
		, "d" : {Number}
		, "ho" : {Number}
		, "mi" : {Number}
		, "se" : {Number}
	}
 * </code>
 * @return {Object}
 * <code>
	//Object;
	{
		"y" : {NumberInt}
		, "m" : {NumberInt}
		, "d" : {NumberInt}
		, "ho" : {NumberInt}
		, "mi" : {NumberInt}
		, "se" : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.objDateToNumberIntObjDate = function( date )
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.objDateToNumberIntObjDate():{Object}----------" );

	if( date.y ) date.y = NumberInt( date.y );
	//else return { r : 2, m : "BadValue - DATE 'YEAR' VALIDATION ERROR" };

	if( date.m ) date.m = NumberInt( date.m );
	//else return { r : 2, m : "BadValue - DATE 'MONTH' VALIDATION ERROR" };

	if( date.d ) date.d = NumberInt( date.d );
	//else return { r : 2, m : "BadValue - DATE 'DAY' VALIDATION ERROR" };

	if( date.ho ) date.ho = NumberInt( date.ho );
	else date.ho = NumberInt( 0 );

	if( date.mi ) date.mi = NumberInt( date.mi );
	else date.mi = NumberInt( 0 );

	if( date.se ) date.se = NumberInt( date.se );
	else date.se = NumberInt( 0 );

	Rh2Log.log( "---- [ E ] - global.mongodb.date.objDateToNumberIntObjDate():{Object}----------return date;" );
	return date;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Array date에 대하여 NumberInt 적용
 * @function
 * @param {Array} array_date
 * @return {Array}
 */
global.mongodb.date.setNumberIntDateArray = function( array_date )
{
	RayLog.log( "---- [ S ] - global.mongodb.date.setNumberIntDateArray():{Array}----------" );

	var i=0,iLen=array_date.length;
	for ( ;i<iLen;++i )
	{
		array_date[i] = NumberInt( array_date[i] );
	}
	
	RayLog.log( "---- [ E ] - global.mongodb.date.setNumberIntDateArray():{Array}----------return array_date;" );
	return array_date;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 날짜 Object에 대하여 NumberInt 적용 (리드타임용. year, month, day에 대해서도 0 처리)
 * @function
 * @param {Object} date
 * <code>
	{
		"y" : {Number}
		, "m" : {Number}
		, "d" : {Number}
		, "ho" : {Number}
		, "mi" : {Number}
		, "se" : {Number}
	}
 * </code>
 *
 * @return {Object}
 * <code>
	//Object;
	{
		"y" : {NumberInt}
		, "m" : {NumberInt}
		, "d" : {NumberInt}
		, "ho" : {NumberInt}
		, "mi" : {NumberInt}
		, "se" : {NumberInt}
	}
 */
global.mongodb.date.setNumberIntDateLeadTime = function( date )
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.setNumberIntDateLeadTime():{Object}----------" );

	if( date.y ) date.y = NumberInt( date.y );
	else date.y = NumberInt( 0 );

	if( date.m ) date.m = NumberInt( date.m );
	else date.m = NumberInt( 0 );

	if( date.d ) date.d = NumberInt( date.d );
	else date.d = NumberInt( 0 );

	if( date.ho ) date.ho = NumberInt( date.ho );
	else date.ho = NumberInt( 0 );

	if( date.mi ) date.mi = NumberInt( date.mi );
	else date.mi = NumberInt( 0 );

	if( date.se ) date.se = NumberInt( date.se );
	else date.se = NumberInt( 0 );

	Rh2Log.log( "---- [ E ] - global.mongodb.date.setNumberIntDateLeadTime():{Object}----------return date;" );
	return date;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 Object로 반환
 * @function
 * @return {Object}
 * <code>
	{
		y : {NumberInt}
		, m : {NumberInt}
		, d : {NumberInt}
		, ho : {NumberInt}
		, mi : {NumberInt}
		, se : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getDate__Now = function()
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getDate__Now():{Object}----------" );

	var d = new Date();
	var r = {
		y : d.getFullYear()
		, m : d.getMonth() + 1
		, d : d.getDate()
		, ho : d.getHours()
		, mi : d.getMinutes()
		, se : d.getSeconds()
	};

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getDate__Now():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){
	var a_d = [ "deleteMany", "deleteOne"	, "findOneAndDelete", "remove" ];
	var a_u = [ "update"	, "updateMany"	, "updateOne"		, "findOneAndUpdate", "findAndModify", "findOneAndReplace", "replaceOne" ];
	var a_c = [ "insert"	, "insertMany"	, "insertOne"		, "save" ];
	var a_r = [ "find"		, "findOne" ];

	var i=0, iLen=0;
		i=0, iLen=a_d.length; for( ; i<iLen; ++i ) a_d[ i ] = a_d[ i ] + "(";
		i=0, iLen=a_u.length; for( ; i<iLen; ++i ) a_u[ i ] = a_u[ i ] + "(";
		i=0, iLen=a_c.length; for( ; i<iLen; ++i ) a_c[ i ] = a_c[ i ] + "(";
		i=0, iLen=a_r.length; for( ; i<iLen; ++i ) a_r[ i ] = a_r[ i ] + "(";

	/**
	 * 주입된 Query의 구문을 분석하여 C, R, U, D 중 어떤 타입인지 체크한다
	 * @function
	 * @param {String} query
	 * @param {String} nm_db
	 * @param {String} nm_col
	 * @return {String}
	 */
	global.mongodb.dbjs.getCRUDStatusFromQuery = function( query, nm_db, nm_col )
	{
		//TtwLog.timeStamp( "---- [ S ] - global.mongodb.dbjs.getCRUDStatusFromQuery():{String}----------" );

		var check_syntax_init = "_col$" + nm_col + ".";

		var i=0, iLen=a_d.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_d[ i ] ) > -1 ) return "_d";
		var i=0, iLen=a_u.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_u[ i ] ) > -1 ) return "_u";
		var i=0, iLen=a_c.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_c[ i ] ) > -1 ) return "_c";
		var i=0, iLen=a_r.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_r[ i ] ) > -1 ) return "_r";

		//TtwLog.timeStamp( "---- [ E ] - global.mongodb.dbjs.getCRUDStatusFromQuery():{String}----------return null;" );

		//확인하기 - 2017.08.04 - 송선우 - return null 이 맞나 return "" 이 맞나;
		return null;
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){
	//--------------------------------------------------;
	var x = [
		  "_createWriteConcern"	, "_db"				, "_dbCommand"			, "_dbReadCommand"			, "_distinct"
		, "_fullName"			, "_genIndexName"	, "_getIndexesCommand"	, "_getIndexesSystemIndexes", "_indexSpec"
		, "_makeCommand"		, "_massageObject"	, "_mongo"				, "_parseRemove"			, "_parseUpdate"
		, "_printExtraInfo"		, "_shortName"		, "_validateForStorage"	, "_validateObject"			, "_validateRemoveDoc"
		, "_validateUpdateDoc"	, "reIndex"			, "renameCollection"	, "runCommand"				, "runReadCommand"
		, "drop"				, "dropIndex"		, "dropIndexes"			, "ensureIndex"
	];

	var i=0, iLen=x.length;
	for( ; i<iLen; ++i ) x[ i ] = x[ i ] + "(";
	//--------------------------------------------------;

	/**
	 * 주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다
	 * @function
	 * @param {String} query
	 * @param {String} nm_db
	 * @param {String} nm_col
	 * @return {Boolean} true면 금지된 구문이 존재함. false면 금지된 구문이 존재하지 않음.
	 */
	global.mongodb.dbjs.isProhibitedSyntaxFromQuery = function( query, nm_db, nm_col )
	{
		//TtwLog.timeStamp( "---- [ S ] - global.mongodb.dbjs.isProhibitedSyntaxFromQuery():{String}----------" );

		var check_syntax_init = "_col$" + nm_col + ".";

		var i=0, iLen=x.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + x[ i ] ) > -1 ) return 1;

		//TtwLog.timeStamp( "---- [ E ] - global.mongodb.dbjs.isProhibitedSyntaxFromQuery():{String}----------return 0;" );
		return 0;
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 'description' Property 용도 검색 배열 생성하기
 * @function
 * @param {String} s nm(Name)이 들어온다.
 */
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__description = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );

	return [
		{ description : makeQuery__RegExpPattern__SymbolString( s ) }
		, { description_kr : makeQuery__RegExpPattern__SymbolString( s ) }
		, { description_us : makeQuery__RegExpPattern__SymbolString( s ) }
		, { description_cn : makeQuery__RegExpPattern__SymbolString( s ) }
	];
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 'nm' Property 용도 검색 배열 생성하기
 * @function
 * @param {String} s nm(Name)이 들어온다.
 */
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );

	return [
		{ nm : makeQuery__RegExpPattern__SymbolString( s ) }
		, { nm_kr : makeQuery__RegExpPattern__SymbolString( s ) }
		, { nm_us : makeQuery__RegExpPattern__SymbolString( s ) }
		, { nm_cn : makeQuery__RegExpPattern__SymbolString( s ) }
	];
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 'nm.a' Property 용도 검색 배열 생성하기
 * @function
 * @param {String} s nm.a(Name All)이 들어온다.
 */
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a():{Array}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a():{Array}----------" );

	return [
		{ "nm.a" : makeQuery__RegExpPattern__SymbolString( s ) }
		, { "nm_kr.a" : makeQuery__RegExpPattern__SymbolString( s ) }
		, { "nm_us.a" : makeQuery__RegExpPattern__SymbolString( s ) }
		, { "nm_cn.a" : makeQuery__RegExpPattern__SymbolString( s ) }
	];
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * (, [ 이런 류의 정규식 사용시 패턴에 위배되는 정규식 검색 패턴을 만들기 위한 함수
 * @function
 * @param {String} s
 * @return {RegExp}
 */
global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString():{Object}----------" );

	if( -1 != s.indexOf( "(" ) ) s = s.replace( /\(/gi, "\\(" );
	if( -1 != s.indexOf( ")" ) ) s = s.replace( /\)/gi, "\\)" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\[/gi, "\\[" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\]/gi, "\\]" );
	//if( -1 != s.indexOf( "{" ) ) s = s.replace( /\{/gi, "\\{" );
	//if( -1 != s.indexOf( "}" ) ) s = s.replace( /\}/gi, "\\}" );

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString():{Object}----------" );
	return { $regex : "(.*" + s + ")" };
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * (, [ 이런 류의 정규식 사용시 패턴에 위배되는 정규식 검색 패턴을 만들기 위한 함수
 * @function
 * @param {String} s
 * @param {String} options "gi", "i", ...
 * @return {RegExp}
 */
global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options = function( s, options )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options():{Object}----------" );

	if( -1 != s.indexOf( "(" ) ) s = s.replace( /\(/gi, "\\(" );
	if( -1 != s.indexOf( ")" ) ) s = s.replace( /\)/gi, "\\)" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\[/gi, "\\[" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\]/gi, "\\]" );
	//if( -1 != s.indexOf( "{" ) ) s = s.replace( /\{/gi, "\\{" );
	//if( -1 != s.indexOf( "}" ) ) s = s.replace( /\}/gi, "\\}" );

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options():{Object}----------" );
	return { $regex : "(.*" + s + ")", $options : options };
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 가져온 회원 목록에서 비밀번호를 삭제한다.
 * @function
 * @param {Array} docs$member_basic
 */
global.mongodb.member.delete_mpw__Array = function( docs$member_basic )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.delete_mpw__Array():{Array}----------" );

	if( !docs$member_basic ) return;
	if( !docs$member_basic[ 0 ] ) return;
	if( !docs$member_basic[ 0 ].hasOwnProperty( "mpw" ) ) return;

	var io;
	var i=0, iLen=docs$member_basic.length;
	for( ; i<iLen; ++i )
	{
		io = docs$member_basic[ i ];
		delete io.mpw;
	}

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.delete_mpw__Array():{Array}----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 필수 키 값 목록을 가지고 대상 오브젝트의 hasOwnProperty를 통해 존재 여부를 체크한다.
 * @function
 * @param {Object} t 필수 키 값 목록을 가지고 체크할 대상 오브젝트
 * @param {Array} a hasOwnProperty의 대상이될 필수 키값 목록
 * @return {Boolean}
 * @example
 * <code>
 * </code>
 */
global.mongodb.obj.check_RequiredValueHasOwnProperty = function( t, a )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.obj.check_RequiredValueHasOwnProperty():{Boolean}----------" );

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( !t.hasOwnProperty( a[ i ] ) )
		{
			//debugger;
			//TtwLog.timeStamp( "---- [ E ] - global.mongodb.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 0;" );
			return 0;
		}
	}

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 숫자 또는 문자열의 왼쪽에 원하는 갯수만큼 "0"을 붙인다.
 * @function
 * @param {Number|String} n 숫자 또는 숫자 형태의 문자열
 * @param {Number} count 왼쪽에 붙일 0의 갯수
 * @return {String} "-"
 * @example
 * <code>
	var result = global.mongodb.string.lpad( "234", 7 );
	console.log( result );//0000234;
 * </code>
 */
global.mongodb.string.lpad = function( n, count )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.mongodb.string.lpad():{String}----------" );

	n = n + "";

	//global.Rh2Log.timeStamp( "---- [ E ] - global.mongodb.string.lpad():{String}----------" );

	return n.length >= count ? n : new Array( count - n.length + 1 ).join( "0" ) + n;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Json Object 를 체크하여 Integer 타입인 경우 NumberInt 로 Convert 해준다.
 * @function
 * @param {Object}
 *
 * ex)
 * var d = { ... };
 * integerToNumberInt( d );
 * db.insert( d );
 */
global.mongodb.validation.integerToNumberInt = function( obj )
{
	// cparkLog.log( "---- [ S ] - global.mongodb.validation.integerToNumberInt():{Object}----------" );

	if( !obj || ( obj.constructor.name.toLowerCase() != "object" && obj.constructor.name.toLowerCase() != "array" ) )
	{
		cparkLog.log( "not valid type" );
		return;
	}

	for( i in obj )
	{
		if( !obj[ i ] && obj[ i ] != 0 ) continue;

		if( obj[ i ].constructor.name.toLowerCase() == "number" && Number.isInteger( obj[ i ] ) )
			obj[ i ] = NumberInt( obj[ i ] );
		else if( obj[ i ].constructor.name.toLowerCase() == "object" ) integerToNumberInt( obj[ i ] );
		else if( obj[ i ].constructor.name.toLowerCase() == "array" ) integerToNumberInt( obj[ i ] );
	}

	// cparkLog.log( "---- [ E ] - global.mongodb.validation.integerToNumberInt():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
