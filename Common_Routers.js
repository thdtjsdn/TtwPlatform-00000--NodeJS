(function(){
	var fs = require( "fs" );

	var cwd = global.process.cwd();
	var path0 = "";
	var path1 = "";

	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	(function(){
		var nm = "/../Development-Components-UI/WebPage/root/";
		path0 = cwd + "/.." + nm;      if( fs.existsSync( path0 ) ) path1 = path0;
		path0 = cwd + "/../.." + nm;   if( fs.existsSync( path0 ) ) path1 = path0;
		path0 = cwd + "/../../.." + nm;if( fs.existsSync( path0 ) ) path1 = path0;

		_[ "/libs/particles.js/2.0.0/background/default.html" ]//ip;
			= _[ "/view/libs/particles.js/2.0.0/background/default.html" ]//domain;
			= function( req, res ){ global.apis.response.sendStream_200_File_URI_NCallback( req, res, path1, SUtilHttpServer.getURIFromURL( req.url ) ); };

		//_[ "/libs/particles.js/2.0.0/background/Link-Dot.html" ] = _[ "/view/libs/particles.js/2.0.0/background/Link-Dot.html" ] = function( req, res ){ global.apis.response.sendStream_200_File_URI_NCallback( req, res, path1, SUtilHttpServer.getURIFromURL( req.url ) ); };
	})();

	(function(){
		var FN_PAD = function(n){return (n.toString().length==1)?"0"+n:n;};
		var FN_DATE_DASH = function(){var a=STtwUtilDate.getDate__Seconds_Array();var i=1,iLen=a.length;for(;i<iLen;++i){a[i]=FN_PAD(a[i]);};return a.join("-");};
		var FN_CB = function(){};

		var nm = "/TtwPlatform-Binary--Linux/log/";
		//var nm = "/TtwPlatform-Binary--Win/log/";
		var path0 = "";
		var path1 = "";
		path0 = cwd + "/.." + nm;       if( fs.existsSync( path0 ) ) path1 = path0;
		path0 = cwd + "/../.." + nm;    if( fs.existsSync( path0 ) ) path1 = path0;
		path0 = cwd + "/../../.." + nm; if( fs.existsSync( path0 ) ) path1 = path0;

		_[ "/TtwHello" ] = function( req, res ){
			try{
			var ip = req.client.remoteAddress;
			if( "::1" == ip ) return;
			fs.writeFile( path1 + FN_DATE_DASH() + " - " + ip + ".bak", req.url.split("?data=")[1], FN_CB );
			}catch(er){}
		};
	})();

})();