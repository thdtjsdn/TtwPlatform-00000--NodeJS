(function(e,l){return global.b2link.ip.adminCheckAvailable__http$ClientRequest(e,l)?(global.b2link.url.getQueryFromURL(e.url),global.b2link.response.setHeaders__b2ker(l),global.server.req_DB(e,l,{db:"admin",q:"db.serverStatus();"},function(n,r){return n?void global.b2link.response.send_200_JSON(e,l,n):(global.mongodb.member.delete_mpw__Array(r),void global.b2link.response.send_200_String(e,l,JSON.stringify(r,null,"	")))}),void 0):void global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest(e,l)});