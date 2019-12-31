//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/__define/000_define_global.mongodb.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mongodb;

global.mongodb = global.mongodb || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mongodb;

/**
 * @function
 * @param {Object} d
 * <code>
	{
		host : "127.0.0.1"
		, port : 27017
		, dbNm : "admin"
		, query : ""
		, cbComplete : function( error, result ){
			debugger;
			if( error )
			{
				throw new Error();
				return;
			}

			console.log( result );
		}
	}
 * </code>
 *
 * @example
 * <code>
	global.mongodb.exec({
		host : "127.0.0.1"
		, port : 59322
		, dbNm : "admin"
		, query : "db.getCollectionNames();"
		, cbComplete : function( error, result ){
			debugger;
			if( error )
			{
				throw new Error();
				return;
			}

			console.log( result );
		}
	});
 * </code>
 */
global.mongodb.exec = function( d ){ SUtilMongoDB.exec( d ); };

/**
 * @function
 * @param {String} host "127.0.0.1"
 * @param {Number} port 27017
 * @param {String} db "admin"
 * @param {String} query MongoDB's Javascript Query
 * @param {Function} cbFunction function( error, stdout, stderr ){} print(), printjson() 등을 사용한 문자열을 줄을 나누어 반환해준다.
 * @example
 * <code>
	SUtilMongoDB.setMongoPath( 'E:\\GitHub_B2LiNK\\Development-Binary-Windows\\Binary\\MongoDB\\3.6.2\\mongo.exe' );
	SUtilMongoDB.execAsync( "127.0.0.1", 59322, "admin", "printjson(db);", function( error, stdout, stderr ){} )

	var result = SUtilMongoDB.execAsync( "127.0.0.1", 59322, "admin", `
		var r = [];
		db.getSiblingDB( "member" ).getCollection( "member_basic" ).find({}).forEach(function( doc ){
			r.push( doc );
		});
		print( JSON.stringify( r ) );`
		, function( error, stdout, stderr ){
			debugger;
		}
	);
 * </code>
 */
global.mongodb.execAsync = function( host, port, db, query, cbFunction ){ return SUtilMongoDB.execAsync( host, port, db, query, cbFunction ); };

/**
 * @function
 * @param {String} host "127.0.0.1"
 * @param {Number} port 27017
 * @param {String} db "admin"
 * @param {String} query MongoDB's Javascript Query
 * @param {String} jsName
 * @return {String} print(), printjson() 등을 사용한 문자열을 줄을 나누어 반환해준다.
 * @example
 * <code>
	global.mongodb.execSync( "127.0.0.1", 59322, "admin", "printjson(db);" )

	var result = global.mongodb.execSync( "127.0.0.1", 59322, "admin", `
		var r = [];
		db.getSiblingDB( "member" ).getCollection( "member_basic" ).find({}).forEach(function( doc ){
			r.push( doc );
		});
		print( JSON.stringify( r ) );
	`);
 * </code>
 */
global.mongodb.execSync = function( host, port, db, query ){ return SUtilMongoDB.execSync( host, port, db, query ); };

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;