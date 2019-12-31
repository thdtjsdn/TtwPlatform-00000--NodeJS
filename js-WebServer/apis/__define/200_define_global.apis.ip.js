//----------------------------------------------------------------------------------------------------;
var fileNm = "js-WebServer/b2link/__define/200_define_global.b2link.ip.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.ip;

global.b2link.ip = global.b2link.ip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.ip;

/**
 * @function
 * @param {String} ip
 * @return {Boolean}
 */
!function(){var f={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":1,"222.239.10.121":0,"222.239.10.122":1,"222.239.10.123":1,"222.239.10.124":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":1,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":1,"::ffff:222.239.10.123":1,"::ffff:222.239.10.124":0};global.b2link.ip.adminCheckAvailable=function(l){return f.hasOwnProperty(l)?f[l]:0}}();

/**
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientRequest} res
 * @return {Boolean}
 */
global.b2link.ip.adminCheckAvailable__http$ClientRequest=function(e,l){try{return global.b2link.ip.adminCheckAvailable(e.client.remoteAddress)}catch(i){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.client Error : "+i)}try{return global.b2link.ip.adminCheckAvailable(e.connection.remoteAddress)}catch(i){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.connection Error : "+i)}};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;