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
	var table="<button onClick='edit()'>Edit</button>"+"<table id='details'><thead><tr>"+
			"<th align='left'>Entry</th>"+"<th align='left'>藏文解釋</th>"+
			"<th align='left'>中文解釋</th>"+"<tbody><tr><td>"+obj.entry+"</td><td>"+
			obj.tdefinition+"</td><td>"+obj.cdefinition+"</td></tr></tbody></table>"+"<br/>";
	localStorage.undo=table;
	return table;
}

var cancel=function(){
	document.getElementById("display2").innerHTML=localStorage.undo;
}
	
var edit=function(){
	var table=document.getElementById("details").innerHTML;
	var edittable="<button onClick='save_edit()'>Save</button>"+"<button onClick='cancel()'>Cancel</button>"
					+"<table id='edited_details'>"+table.replace(/<td>/g,"<td contenteditable='true'>");
	document.getElementById("display2").innerHTML=edittable;
}

var save_edit=function(){
	var table=document.getElementById("edited_details").innerHTML;

	var savetable="<button onClick='edit()'>Edit</button>"+"<table id='details'>"+
					table.replace(/<td contenteditable="true">/g,"<td>");
	localStorage.undo=savetable;
	document.getElementById("display2").innerHTML=savetable;
}	