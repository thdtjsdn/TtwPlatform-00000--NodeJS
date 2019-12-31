//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/200_define_global.b2link.process.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.process;

global.b2link.process = global.b2link.process || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.process;

/**
 * CPU 사용량 계산 함수
 * @function global.b2link.process.getCPUUsage
 */
!function(){global.REQUIRES||(global.REQUIRES=global.REQUIRES||{}),global.REQUIRES.os||(global.REQUIRES.os=require("os"));var e=global.process,l=100,n=0,o=new Array(l),a=2e3,g=-1,s=e.hrtime(),t=e.cpuUsage(),r=function(){var l=global.REQUIRES.os,o=e.hrtime(s),a=e.cpuUsage(t);s=e.hrtime(),t=e.cpuUsage();var g=1e3*o[0]+o[1]/1e6,r=a.user/1e3,c=a.system/1e3,b=100*(r+c)/g/l.cpus().length;n=b};global.b2link.process.getCPUUsage=function(){return n},global.b2link.process.getCPUUsage.REFRASH_END=function(){global.b2link.common.clearInterval(g)},global.b2link.process.getCPUUsage.REFRASH_START=function(e){g=global.b2link.common.setInterval(r,e)},global.b2link.process.getCPUUsage.REFRASH_START(a),global.b2link.process.getCPUUsage.__defineGetter__("cpu_usage_percents_max_length",function(){return l}),global.b2link.process.getCPUUsage.__defineSetter__("cpu_usage_percents_max_length",function(e){l=e,o.length=0,o=null,o=new Array(e)})}();

/**
 * NodeJS App의 status를 가져온다.
 * @function global.b2link.process.getStatusTotal
 * @result {Object}
 * <code>
	{
	}
 * </code>
 */
!function(){var e=1048576,o=function(o){return Number(o)/e+"Mb"};global.b2link.process.getStatusTotal=function(){var e=global.process,r={};e.CPUPercent=global.b2link.process.getCPUUsage()+"%",e.getIOCounters&&(r.IOCount=e.getIOCounters()),e.memoryUsage&&(r.UsageMemory=e.memoryUsage()),e.getProcessMemoryInfo&&(r.ProcessMemory=e.getProcessMemoryInfo()),e.getSystemMemoryInfo&&(r.SystemMemory=e.getSystemMemoryInfo());var s;s=r.IOCount;for(var t in s)s[t]=o(s[t]);s=r.UsageMemory;for(var t in s)s[t]=o(s[t]);s=r.SystemMemory;for(var t in s)s[t]=o(s[t]);return e.cpus&&(r.OS_CPUs=e.cpus()),r}}();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;