(function(e,n){if(!global.b2link.ip.adminCheckAvailable__http$ClientRequest(e,n))return void global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest(e,n);global.b2link.url.getQueryFromURL(e.url);global.b2link.response.setHeaders__JSON(n),global.server.req_DB(e,n,{db:"admin",q:'for(var a,e=function(a){return(a/1024/1024).toFixed(2)+"MB"},n={},t=db.adminCommand({listDatabases:1,nameOnly:1}).databases,i=0,d=0,r=0,s=0,o=t.length;o>s;++s){a=t[s];var S=db.getSiblingDB(a.name),m=S.stats();n[a.name]={"데이터 용량":e(m.dataSize),"저장소 용량":e(m.storageSize),"인덱스 용량":e(m.indexSize)},i+=m.dataSize,d+=m.storageSize,r+=m.indexSize}return n["전체"]={"데이터 용량":e(i),"저장소 용량":e(d),"인덱스 용량":e(r)},n;'},function(a,i){return a?void global.b2link.response.send_200_JSON(e,n,a):void global.b2link.response.send_200_String(e,n,JSON.stringify(i,null,"	"))})});