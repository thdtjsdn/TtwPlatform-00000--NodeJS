global.b2link.server_http.globalServer__setMode__Dev__CommonJS_SameJSCSS=function(){global._$TATIC_CONST_DEBUG&&function(){var e=SUtilHttpServer.__evt_request__APIAndFilePath=SUtilHttpServer.evt_request__APIAndFilePath,t=global.process.cwd()+"/../../Development-Browser-Libraries/WebPage/root/",l=(global.b2link.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.thtml"),global.b2link.fs.getFile_UTF8(global.process.cwd()+"/template/index--replace-source.tjs"));SUtilHttpServer.evt_request__APIAndFilePath=function(r,s){var a=r.client.address().address.replace("::ffff:",""),o=SUtilHttpServer.getURIFromURL(r.url);if(0==o.indexOf("/js/"))return void global.b2link.response.sendStream_200_File_URI_NCallback(r,s,t,o);if(-1!=o.indexOf("/ui/member/public/forgotPassword")&&global.b2link.response.setHeaders__b2ker(s),".html"!=global.REQUIRES.path.extname(r.url)){if(".js"==global.REQUIRES.path.extname(r.url)&&-1==r.url.indexOf("_index-add-html-befor.js")){var n="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(r.url),i=global.b2link.fs.getFile_UTF8(n);return i=l.replace("<!=JS_SOURCE=!>",i),void global.b2link.response.send_200_String(r,s,i)}return void e(r,s)}var b="../WebPage/root"+STtwUtilHttpServer.getURIFromURL(r.url);if(!global.REQUIRES.fs.existsSync(b))return void e(r,s);var p=global.b2link.fs.getFile_UTF8(b),c=b.replace(".html",".css").replace(".thtml",".css");global.REQUIRES.fs.existsSync(c)&&(p=p.replace(">",'><LINK rel="stylesheet" type="text/css" href="'+c.replace("../WebPage/root/","http://"+a+"/")+'">'));var n=b.replace(".html",".js").replace(".thtml",".js");return global.REQUIRES.fs.existsSync(n)?(p=p+'\n<SCRIPT type="text/javascript" src="http://'+a+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>\n<SCRIPT type="text/javascript" src="'+n.replace("../WebPage/root/","http://"+a+"/")+'" async="false" defer="true"></SCRIPT>\n',void global.b2link.response.send_200_HTML(r,s,p)):(p=p+'\n<SCRIPT type="text/javascript" src="http://'+a+'/js-common/_index-add-html-befor.js" async="false" defer="true"></SCRIPT>',void global.b2link.response.send_200_HTML(r,s,p))}}()};