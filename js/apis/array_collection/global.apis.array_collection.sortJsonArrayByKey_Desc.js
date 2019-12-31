//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/array_collection/global.apis.array_collection.sortJsonArrayByKey_Desc.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * ArrayItem 정렬 순서 변경
	 * @function
	 * @param {Object} item0
	 * @param {Object} item1
	 * @return {Number}
	 */
	var _sortByFunc = function( item0, item1 )
	{
		//if( typeof item0 === "undefined" ) return -1;
		//if( typeof item1 === "undefined" ) return 1;

		var key = item0.__proto__.__sortKey__;
		item1.__proto__.__sortKey__ = key;

		var x = item0[ key ];
		var y = item1[ key ];

		return (x < y) ? 1 : ((x > y) ? -1 : 0);
	};

	/**
	 * JSON Array를 입력받은 key의 value 기준으로 내림차순 정렬
	 * @function
	 * @param {Array} a JsonArray
	 * @param {String} key
	 * @param {String} value
	 * @return {Array} a
	 * @example
	 * <code>
		 global.apis.array_collection.sortJsonArrayByKey_Desc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 1 }, { nm : "aaa", val : 5 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );

		 global.apis.array_collection.sortJsonArrayByKey_Desc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 5 }, { nm : "aaa", val : 1 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );
	 * </code>
	 */
	global.apis.array_collection.sortJsonArrayByKey_Desc = function( a, key )
	{
		global.Rh2Log.timeStamp( "---- [ S ] - global.apis.array_collection.sortJsonArrayByKey_Desc():{Object}----------" );

		a[ 0 ].__proto__.__sortKey__ = key;

		a.sort( _sortByFunc );

		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) delete a[ i ].__proto__.__sortKey__;

		global.Rh2Log.timeStamp( "---- [ E ] - global.apis.array_collection.sortJsonArrayByKey_Desc():{Object}----------return a;" );
		return a;
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;