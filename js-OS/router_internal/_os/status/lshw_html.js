(function(e,l){if(!global.b2link.ip.adminCheckAvailable__http$ClientRequest(e,l))return void global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest(e,l);var n=global.b2link.url.getQueryFromURL(e.url);global.b2link.response.setHeaders__b2ker(l);try{var r=SUtilCP.sExec("lshw -html");global.b2link.response.send_200_String(e,l,r.toString("utf8"))}catch(t){global.b2link.response.send_200_False__ErrorLog(e,l,n,error)}});