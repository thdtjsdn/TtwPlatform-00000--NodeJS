(function(e,a){if(!global.b2link.ip.adminCheckAvailable__http$ClientRequest(e,a))return void global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest(e,a);global.b2link.url.getQueryFromURL(e.url);global.b2link.response.setHeaders__JSON(a),global.server.req_DB(e,a,{db:"admin",q:'for(var e,a=function(e){return(e/1024/1024).toFixed(2)+"MB"},t={},i=db.adminCommand({listDatabases:1,nameOnly:1}).databases,n=0,o=0,s=0,r=0,z=i.length;z>r;++r){e=i[r];var S=db.getSiblingDB(e.name),d=S.stats();t[e.name]={dataSize:a(d.dataSize),storageSize:a(d.storageSize),indexSize:a(d.indexSize)},n+=d.dataSize,o+=d.storageSize,s+=d.indexSize;for(var g,l=S.getCollectionNames(),m=0,c=l.length;c>m;++m){g=l[m];var u=S.getCollection(g),b=u.stats();t[e.name+"."+g]={count:b.count,size:a(b.size),storageSize:a(b.storageSize)}}}return t.All={dataSize:a(n),storageSize:a(o),indexSize:a(s)},t;'},function(i,n){return i?void global.b2link.response.send_200_JSON(e,a,i):void global.b2link.response.send_200_String(e,a,JSON.stringify(n,null,"	"))})});