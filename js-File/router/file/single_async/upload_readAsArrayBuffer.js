//----------------------------------------------------------------------------------------------------;
var fileNm = "js-File/router/file/single_async/upload_readAsArrayBuffer.js";
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
var _store={},_createStoreItem=function(e){var t=_store[e._storeItemKey]={};return t},_createStoreItem__WriteStream=function(e,t,o,r){var s="./file/upload/"+global.b2link.STATIC.CONFIG.URL.SCODE+"/";e.ws=global.REQUIRES.fs.createWriteStream(s+e.fileNm_Save);var l=function(){e.ws.removeListener("close",i),e.ws.removeListener("error",n),e.ws.removeListener("finish",a),i=null,n=null,a=null},a=function(t){l(),global.TtwLog.timeStamp("[ FINISH ] - "+e.fileNm_Save+" - "+e.offset+" / "+e.total_offset)},i=function(e){global.TtwLog.log("[ CLOSE ] - "+e),l()},n=function(e){l(),global.TtwLog.error("[ ERROR ] - "+e),global.b2link.response.send_200_False__ErrorLog(o,r,t,e)};e.ws.on("close",i),e.ws.on("error",n),e.ws.on("finish",a)},_dispose_StoreItem=function(e){var t=_store[e];t.ws.end(),global.TtwLog.timeStamp("[ DELETE ] - File Upload StoreItem : "+t.fileNm_Save+" - "+t.offset+" / "+t.total_offset),delete _store[e]},_writeStreamFromChunkDatas=function(e){SUtilFsWriteStream.writeStream__MultiBuffers__Array(e.storeItem.ws,e.chunkDatas,"binary",e.cbFunction)},_setStoreItem=function(e,t){e._storeItemKey=t._storeItemKey,e.fileNm=t.fileNm,e.fileNm_Save=Date.now()+"_"+t.fileNm,e.id=t.id,e.isEnd=0,e.total_offset=t.total_offset,e.totalBytes=t.totalBytes};(function(e,t){global.TtwLog.timeStamp("- [ S ] - file/single_sync/upload_readAsArrayBuffer():void----------");var o=global.b2link.url.getQueryFromURL_Decode(e.url);global.b2link.request.get__checkSessionToSessionServer(e,t,o.sid,function(){var r=[];e.on("data",function(e){r.push(e)}),e.on("end",function(){var s=_store[o._storeItemKey];_store[o._storeItemKey]||(s=_createStoreItem(o),_setStoreItem(s,o),_createStoreItem__WriteStream(s,o,e,t));var l={storeItem:s,chunkDatas:r,cbFunction:function(r){s.offset=o.offset,global.TtwLog.timeStamp("[ UPLOADING ] - File Upload : "+s.fileNm_Save+" - "+s.offset+" / "+s.total_offset),s.total_offset==o.offset&&(global.TtwLog.timeStamp("[ COMPLETE ] - File Upload : "+s.fileNm_Save+" - "+s.offset+" / "+s.total_offset),s.isEnd=1),global.b2link.response.send_200_String(e,t,JSON.stringify(s)),1==s.isEnd&&_dispose_StoreItem(o._storeItemKey)}};l.i=0,l.iLen=r.length,_writeStreamFromChunkDatas(l)})}),global.TtwLog.timeStamp("- [ E ] - file/single_sync/upload_readAsArrayBuffer():void----------")});