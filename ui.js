var showterm=function(term){
	return "<b>"+term.entry+"("+term.page+")"+"</b> : <br/>"+"藏文解釋 : "+term.tdefinition+"<br/> 中文解釋 : "+term.cdefinition;
}

var showentry=function(term){
	var str = JSON.stringify(term,"","");
	return "<li onClick='showdetails("+str+")'>"+term.entry+"<p>"+term.page+"</p></li>";
}

var doentrySearch=function(tofind){
	var arr=entrySearch(tofind);
	document.getElementById("display1").innerHTML=arr.map(showentry).join("<br/>");
}

var showdetails=function(tofind){
	//var arr=entrySearch(tofind.replace(/\(\d+.\d+\)/,""));
	document.getElementById("display2").innerHTML=drawtable(tofind);

	var table = document.getElementById("details");
	var tds = table.getElementsByTagName("td");
	tds[0].innerHTML = tofind.page; tds[1].innerHTML = tofind.entry;
}

var drawtable = function(obj){

    var tablestart = "<table id = 'details'>";
    var thstart = "<th>";
    var thend = "</th>";
    var tableend = "</table>";
    var trstart = "<tr>";
    var trend = "</tr>";
    var tdstart = "<td>";
    var tdend = "</td>";
    var data = "&nbsp;";//non-breaking-space (讓td tag有東西，但顯示出的是空格;td tag沒東西的話，格子會不存在，排版會亂掉)
    var tablehead = "<tr>" + thstart + "頁碼" + thend + thstart + "詞條" + thend + thstart + "藏文解釋" + thend 
    					   + thstart + "中文解釋" + thend + thstart + "略語1" + thend + thstart + "略語2" + thend 
    					   + thstart + "略語3" + thend + thstart + "同義詞1" + thend + thstart + "同義詞2" + thend 
    					   + thstart + "同義詞3" + thend + thstart + "註記" + thend + "</tr>";

	var tablecontent = tablestart + tablehead;

	for (var i = 0; i < obj.tdefinitions.length; i++){
		for(var j = 0; j < obj.tdefinitions[i].cdefinitions.length; j++){
		tablecontent += "<tr>" + tdstart + "&nbsp;" + tdend + tdstart + "&nbsp;" + tdend + tdstart + obj.tdefinitions[i].tdef + tdend 
							   + tdstart + obj.tdefinitions[i].cdefinitions[j].cdef + tdend + tdstart + "&nbsp;" + tdend 
							   + tdstart + "&nbsp;" + tdend + tdstart + "&nbsp;" + tdend + tdstart + "&nbsp;" + tdend 
							   + tdstart + "&nbsp;" + tdend + tdstart + "&nbsp;" + tdend + tdstart + "&nbsp;" + tdend + "</tr>";
		}
    }
    return tablecontent + tableend + "<button onClick='edit()'>Edit</button>";
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