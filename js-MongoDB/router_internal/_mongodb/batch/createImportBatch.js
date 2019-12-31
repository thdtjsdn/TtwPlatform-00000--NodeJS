//----------------------------------------------------------------------------------------------------;
var fileNm = "/js-MongoDB/router_internal/_mongodb/batch/CreateImportBatch.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @property {String}
 */
var _queryPath = "../../../TtwPlatform-00000--NodeJS/js-MongoDB/router_internal/_mongodb/batch/createImportBatch";

//수정하기 - 20180417 - 송선우 - 에러안나게 수정하기;
/**
 * @property {String}
 */
try
{
	var _query = global.b2link.fs.getDBJS( _queryPath + ".dbjs" );
}
catch( e )
{
}

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
	http://localhost:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=linux
	http://localhost:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=linux
	http://localhost:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=linux
	http://localhost:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=linux
	http://localhost:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=linux
	http://localhost:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=linux
	http://localhost:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=linux
	http://localhost:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=linux
	http://localhost:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=linux
	http://localhost:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=linux

	http://222.239.10.120:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=linux
	http://222.239.10.120:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=linux
	http://222.239.10.120:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=linux
	http://222.239.10.120:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=linux
	http://222.239.10.120:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=linux
	http://222.239.10.120:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=linux
	http://222.239.10.120:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=linux
	http://222.239.10.120:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=linux
	http://222.239.10.120:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=linux
	http://222.239.10.120:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=linux

	http://222.239.10.120:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=mac
	http://222.239.10.120:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=mac
	http://222.239.10.120:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=mac
	http://222.239.10.120:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=mac
	http://222.239.10.120:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=mac
	http://222.239.10.120:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=mac
	http://222.239.10.120:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=mac
	http://222.239.10.120:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=mac
	http://222.239.10.120:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=mac
	http://222.239.10.120:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=mac

	http://222.239.10.122:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=win
	http://222.239.10.122:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=win
	http://222.239.10.122:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=win
	http://222.239.10.122:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=win
	http://222.239.10.122:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=win
	http://222.239.10.122:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=win
	http://222.239.10.122:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=win
	http://222.239.10.122:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=win
	http://222.239.10.122:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=win
	http://222.239.10.122:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=win

	http://222.239.10.123:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=win
	http://222.239.10.123:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=win
	http://222.239.10.123:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=win
	http://222.239.10.123:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=win
	http://222.239.10.123:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=win
	http://222.239.10.123:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=win
	http://222.239.10.123:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=win
	http://222.239.10.123:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=win
	http://222.239.10.123:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=win
	http://222.239.10.123:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=win

	http://222.239.10.126:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=win
	http://222.239.10.126:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=win
	http://222.239.10.126:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=win
	http://222.239.10.126:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=win
	http://222.239.10.126:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=win
	http://222.239.10.126:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=win
	http://222.239.10.126:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=win
	http://222.239.10.126:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=win
	http://222.239.10.126:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=win
	http://222.239.10.126:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=win





	global.b2link.request.get( "http://localhost:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=linux", function(r){});
	global.b2link.request.get( "http://localhost:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=linux", function(r){});

	global.b2link.request.get( "http://localhost:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=mac", function(r){});
	global.b2link.request.get( "http://localhost:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=mac", function(r){});

	global.b2link.request.get( "http://localhost:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=win", function(r){});
	global.b2link.request.get( "http://localhost:49320/_mongodb/batch/createImportBatch?port=59320&SCODE=SYS0020&os=win", function(r){});
	global.b2link.request.get( "http://localhost:45320/_mongodb/batch/createImportBatch?port=55320&SCODE=SYS0030&os=win", function(r){});
	global.b2link.request.get( "http://localhost:45420/_mongodb/batch/createImportBatch?port=55420&SCODE=SYS0031&os=win", function(r){});
	global.b2link.request.get( "http://localhost:45520/_mongodb/batch/createImportBatch?port=55520&SCODE=SYS0033&os=win", function(r){});
	global.b2link.request.get( "http://localhost:49322/_mongodb/batch/createImportBatch?port=59323&SCODE=SYS0040&os=win", function(r){});
	global.b2link.request.get( "http://localhost:42322/_mongodb/batch/createImportBatch?port=52322&SCODE=SYS0060&os=win", function(r){});
	global.b2link.request.get( "http://localhost:46320/_mongodb/batch/createImportBatch?port=56320&SCODE=SYS0090&os=win", function(r){});
	global.b2link.request.get( "http://localhost:44320/_mongodb/batch/createImportBatch?port=54320&SCODE=SYS0100&os=win", function(r){});
	global.b2link.request.get( "http://localhost:43320/_mongodb/batch/createImportBatch?port=57320&SCODE=SYS0110&os=win", function(r){});


	//----------------------------------------------------------------------------------------------------;

	var a = [
		"member.member_basic"
	];

	//----------------------------------------------------------------------------------------------------;

	var result = [];

	global.b2link.request.get( "http://localhost:30000/_mongodb/batch/createImportBatch?port=59322&SCODE=SYS0010&os=win", function(r){
		var ar = JSON.parse( r )[ 0 ].split( "\n" );

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];

			var jo;
			var j=0, jLen=ar.length;
			for( ; j<jLen; ++j )
			{
				jo = ar[ j ];
				if( -1 != jo.indexOf( io ) )
				{
					result.push( jo );
				}
			}
		}

		//원하는 결과 커맨드 문자열;
		result;
	});
 * </code>
 */
(function( req, res ){
	//global.TtwLog.log( "- [ S ] - _mongodb/batch/CreateImportBatch():void----------" );

	//IP를 검증한다;
	if( !global.b2link.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
	{
		//admin 용도의 라우터에 불분명한 접속일시 Client Browser에 404 에러를 보낸다.;
		global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest( req, res );
		return;
	}

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//CORS 처리;
	global.b2link.response.setHeaders__b2ker( res );

	var query = _query.replace( /\<\!=port=\!\>/gi, q.port ).replace( /\<\!=SCODE=\!\>/gi, q.SCODE )
		.replace( "<!=os=!>", q.os );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( _queryPath + ".query", query );

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	global.server.req_DB( req, res, { db : "admin", q : query }, function( error, result ){
		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			//global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.b2link.response.send_200_JSON( req, res, error );
			return;
		}

		//;
		var f0 = global.b2link.fs.writeFile_UTF8;
		var path_batch = "../../../Export-MongoDB/CreateImportBatch-";

			 if( "linux" == q.os ) f0( path_batch + "Linux-" + q.SCODE + "-localhost.sh", result );
		else if( "mac" == q.os ) f0( path_batch + "Mac-" + q.SCODE + "-localhost.sh.command", result );
		else if( "win" == q.os ) f0( path_batch + "Window-" + q.SCODE + "-localhost.bat", result );

		//MongoDB Query 실행 후 결과를 Client에 전송하기;
		global.b2link.response.send_200_JSON( req, res, result );
	});

	//global.TtwLog.log( "- [ E ] - _mongodb/batch/CreateImportBatch():void----------" );
});