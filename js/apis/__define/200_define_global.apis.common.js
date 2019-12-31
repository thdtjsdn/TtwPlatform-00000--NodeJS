//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_global.apis.common.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;