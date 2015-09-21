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

	var table = document.getElementById("results");
	var tds = table.getElementsByTagName("td");
	tds[11].innerHTML = tofind.page; tds[12].innerHTML = tofind.entry;
}

var drawtable = function(obj){

    var tablestart = "<table id = results>";
    var tableend = "</table>";
    var trstart = "<tr>";
    var trend = "</tr>";
    var tdstart = "<td>";
    var tdend = "</td>";
    var data = "&nbsp;";//non-breaking-space (讓td tag有東西，但顯示出的是空格;td tag沒東西的話，格子會不存在，排版會亂掉)
    var tablehead = "<tr>" + tdstart + "頁碼" + tdend + tdstart + "詞條" + tdend + tdstart + "藏文解釋" + tdend 
    					   + tdstart + "中文解釋" + tdend + tdstart + "略語1" + tdend + tdstart + "略語2" + tdend 
    					   + tdstart + "略語3" + tdend + tdstart + "同義詞1" + tdend + tdstart + "同義詞2" + tdend 
    					   + tdstart + "同義詞3" + tdend + tdstart + "註記" + tdend + "</tr>";

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