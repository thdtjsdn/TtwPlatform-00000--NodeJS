(function(n,e){if(!global.b2link.ip.adminCheckAvailable__http$ClientRequest(n,e))return void global.b2link.response.send_404__adminCheckAvailable__http$ClientRequest(n,e);global.b2link.url.getQueryFromURL(n.url);global.b2link.response.setHeaders__b2ker(e),global.server.req_DB(n,e,{db:"admin",q:'var a=db.adminCommand({listDatabases:1,nameOnly:1}).databases,db0=db.getSiblingDB("_instance"),col=db0.dbs;col.remove({});for(var nm_db,i=0,iLen=a.length;iLen>i;++i)nm_db=a[i].name,print("nm_db : "+nm_db),"_instance"!=nm_db&&"__instance"!=nm_db&&"admin"!=nm_db&&"local"!=nm_db&&col.insert({_id:nm_db});'},function(l,i){return l?void global.b2link.response.send_200_JSON(n,e,l):void global.server.req_DB(n,e,{db:"admin",q:'var db0=db.getSiblingDB("_instance"),col=db0.getCollection("dbs"),tCol=db0.getCollection("cols");tCol.remove({}),col.find({}).forEach(function(o){for(var t=db.getSiblingDB(o._id),l=t.getCollectionNames(),e=0,i=l.length;i>e;++e){var n=l[e];print("nm_col : "+n),"system.js"!=n&&tCol.insert({_id:n,db:o._id})}});'},function(l,i){return l?void global.b2link.response.send_200_JSON(n,e,l):void global.b2link.response.send_200_True(n,e)})})});