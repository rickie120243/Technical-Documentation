var showterm=function(term){
	return "<b>"+term.entry+"("+term.page+")"+"</b> : <br/>"+"藏文解釋 : "+term.tdefinition+"<br/> 中文解釋 : "+term.cdefinition;
}
var showentry=function(term){
	return "<div onClick='showdetails(this.innerHTML)'>"+term.entry+"("+term.page+")</div>";
}

var doentrySearch=function(tofind){
	var arr=entrySearch(tofind);
	document.getElementById("display1").innerHTML=arr.map(showentry).join("<br/>");
}

var showdetails=function(tofind){
	var arr=entrySearch(tofind.replace(/\(\d+.\d+\)/,""));
	document.getElementById("display2").innerHTML=arr.map(showterm).join("<br/>");
}