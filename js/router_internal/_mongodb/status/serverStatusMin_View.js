(function(e,n){return global.apis.ip.adminCheckAvailable__http$ClientRequest(e,n)?(global.apis.url.getQueryFromURL(e.url),global.apis.response.setHeaders__b2ker(n),global.server.req_DB(e,n,{db:"admin",q:"db.serverStatus();"},function(l,r){if(l)return void global.apis.response.send_200_JSON(e,n,l);global.mongodb.member.delete_mpw__Array(r);var i=r;global.apis.response.send_200_String(e,n,JSON.stringify({asserts:i.asserts,connections:i.connections,extra_info:i.extra_info,globalLock:i.globalLock,mem:i.mem,wiredTiger:{cache:{"tracked dirty bytes in the cache":i.wiredTiger.cache["tracked dirty bytes in the cache"]}}},null,"	"))}),void 0):void global.apis.response.send_404__adminCheckAvailable__http$ClientRequest(e,n)});