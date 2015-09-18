var showterm=function(term){
	return "<b>"+term.entry+"("+term.page+")"+"</b> : <br/>"+"藏文解釋 : "+term.tdefinition+"<br/> 中文解釋 : "+term.cdefinition;
}

var showentry=function(term){
	var str = JSON.stringify(term,"","");
	return "<div onClick='showdetails("+str+")'>"+term.entry+"("+term.page+")</div>";
}

var doentrySearch=function(tofind){
	var arr=entrySearch(tofind);
	document.getElementById("display1").innerHTML=arr.map(showentry).join("<br/>");
}

var showdetails=function(tofind){
	//var arr=entrySearch(tofind.replace(/\(\d+.\d+\)/,""));
	document.getElementById("display2").innerHTML=drawtable(tofind);
}

var drawtable = function(obj){
	//	var columnNumber = 10;
	return "<button onClick='edit()'>Edit</button>"+"<table id='details' border='1'><thead><tr>"+"<th>Entry</th>"+"<th>藏文解釋</th>"+"<th>中文解釋</th>"+
			"<tbody><tr><td>"+obj.entry+"</td><td>"+obj.tdefinition+"</td><td>"+
			obj.cdefinition+"</td></tr></tbody></table>"+"<br/>";
}
	
var edit=function(){
	var table=document.getElementById("details").innerHTML;
	var edittable="<button onClick='save_edit()'>Save</button>"+"<table id='edited_details' border='1'>"+
					table.replace(/<td>(.+?)<\/td>/g,"<td><textarea>$1</textarea>");
	document.getElementById("display2").innerHTML=edittable;
}

var save_edit=function(){
	var table=document.getElementById("edited_details").innerHTML;
	console.log(table);
	var savetable="<button onClick='edit()'>Save</button>"+"<table id='details' border='1'>"+
					table.replace(/<textarea>/g,"").replace(/<\/textarea>/g,"");
	document.getElementById("display2").innerHTML=savetable;
}	