(function(e,l){if(!global.apis.ip.adminCheckAvailable__http$ClientRequest(e,l))return void global.apis.response.send_404__adminCheckAvailable__http$ClientRequest(e,l);var r=global.apis.url.getQueryFromURL(e.url);global.apis.response.setHeaders__b2ker(l);try{var n=SUtilCP.sExec(r.cmd);global.apis.response.send_200_String(e,l,n.toString("utf8"))}catch(i){global.apis.response.send_200_False__ErrorLog(e,l,r,"에러")}});