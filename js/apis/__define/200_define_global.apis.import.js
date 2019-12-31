//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_global.apis.import.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;