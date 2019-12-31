//----------------------------------------------------------------------------------------------------;
var fileNm = "js-File/router/file/single_sync/upload_textAsDataURL.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.router.file.PATH.single_sync + "upload.dbjs" );

/**
 *
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
	http://localhost:port/file/single_sync/upload_textAsDataURL?_storeItemKey=345345345&file_id=transaction_blueprint.xlsx_1506048942477&fileNm=transaction_blueprint.xlsx&totalBytes=18016
	http://localhost:port/file/single_sync/upload_textAsDataURL?
		_storeItemKey=345345345
		&file_id=transaction_blueprint.xlsx_1506048942477
		&fileNm=transaction_blueprint.xlsx
		&totalBytes=18016
* </code>
*/
var _store={};(function(l,e){global.TtwLog.timeStamp("- [ S ] - file/single_sync/upload_textAsDataURL():void----------");var o=global.b2link.url.getQueryFromURL_Decode(l.url);global.b2link.request.get__checkSessionToSessionServer(l,e,o.sid,function(){var n="";l.on("data",function(l){n+=l}),l.on("end",function(){o.totalBytes>global.router.file.CONST.DATA_URL.MAX_SIZE&&global.b2link.response.send_200_False__ErrorLog(l,e,o,"파일용량이 2mb 이상입니다.");var i="./file/upload/"+global.b2link.STATIC.CONFIG.URL.SCODE+"/",a=Buffer.from(n,"base64");global.b2link.fs.writeFile_Binary(i+Date.now()+"_"+o.fileNm,a,null),global.b2link.response.send_200_String(l,e,JSON.stringify(o))})}),global.TtwLog.timeStamp("- [ E ] - file/single_sync/upload_textAsDataURL():void----------")});