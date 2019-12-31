//----------------------------------------------------------------------------------------------------;
var fileNm = "js-File/router/file/single_sync/upload_readAsArrayBuffer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.router.file.PATH.single_sync + "upload.dbjs" );

/**
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:port/file/single_sync/upload_readAsArrayBuffer?_storeItemKey=1506046739595&id=electron-api.json_1506046739595&fileNm=electron-api.json&totalBytes=624043&offset=0&total_offset=0
	http://localhost:port/file/single_sync/upload_readAsArrayBuffer?
		_storeItemKey=1506046739595
		&id=electron-api.json_1506046739595
		&fileNm=electron-api.json
		&totalBytes=624043
		&offset=0
		&total_offset=0
* </code>
*/
var _store={},_createStoreItem=function(e){var t=_store[e._storeItemKey]={};return t},_createStoreItem__WriteStream=function(e,t,o,r){var l="./file/upload/"+global.b2link.STATIC.CONFIG.URL.SCODE+"/";e.ws=global.REQUIRES.fs.createWriteStream(l+e.fileNm_Save);var s=function(){e.ws.removeListener("close",a),e.ws.removeListener("error",i),e.ws.removeListener("finish",n),a=null,i=null,n=null},n=function(t){s(),global.TtwLog.timeStamp("[ FINISH ] - "+e.fileNm_Save+" - "+e.offset+" / "+e.total_offset)},a=function(e){global.TtwLog.log("[ CLOSE ] - "+e),s()},i=function(e){s(),global.TtwLog.error("[ ERROR ] - "+e),global.b2link.response.send_200_False__ErrorLog(o,r,t,e)};e.ws.on("close",a),e.ws.on("error",i),e.ws.on("finish",n)},_dispose_StoreItem=function(e){var t=_store[e];t.ws.end(),global.TtwLog.timeStamp("[ DELETE ] - File Upload StoreItem : "+t.fileNm_Save+" - "+t.offset+" / "+t.total_offset),delete _store[e]},_setStoreItem=function(e,t){e._storeItemKey=t._storeItemKey,e.fileNm=t.fileNm,e.fileNm_Save=Date.now()+"_"+t.fileNm,e.id=t.id,e.isEnd=0,e.total_offset=t.total_offset,e.totalBytes=t.totalBytes};(function(e,t){global.TtwLog.timeStamp("- [ S ] - file/single_sync/upload_readAsArrayBuffer():void----------");var o=global.b2link.url.getQueryFromURL_Decode(e.url);global.b2link.request.get__checkSessionToSessionServer(e,t,o.sid,function(){var r,l={};e.on("data",function(s){var n=Number(e.headers["content-length"]);l[n]||(l[n]={b:new Buffer(n),i:0}),r=l[n];try{for(var a=0,i=s.byteLength;i>a;++a)r.b.writeUInt8(s[a],r.i),++r.i}catch(_){return void global.b2link.response.send_200_False__ErrorLog(e,t,o,_)}}),e.on("end",function(){var l=_store[o._storeItemKey];_store[o._storeItemKey]||(l=_createStoreItem(o),_setStoreItem(l,o),_createStoreItem__WriteStream(l,o,e,t));try{l.ws.write(r.b,function(r){return r?(global.TtwLog.error("[ ERROR ] - "+r),void global.b2link.response.send_200_False__ErrorLog(e,t,o,r)):void 0})}catch(s){return global.TtwLog.error("[ ERROR ] - "+s),void global.b2link.response.send_200_False__ErrorLog(e,t,o,s)}l.offset=o.offset,global.TtwLog.timeStamp("[ UPLOADING ] - File Upload : "+l.fileNm_Save+" - "+l.offset+" / "+l.total_offset),l.total_offset==o.offset&&(global.TtwLog.timeStamp("[ COMPLETE ] - File Upload : "+l.fileNm_Save+" - "+l.offset+" / "+l.total_offset),l.isEnd=1),global.b2link.response.send_200_String(e,t,JSON.stringify(l)),1==l.isEnd&&_dispose_StoreItem(o._storeItemKey)})}),global.TtwLog.timeStamp("- [ E ] - file/single_sync/upload_readAsArrayBuffer():void----------")});