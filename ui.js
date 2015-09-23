var showentry=function(term){
	var str = JSON.stringify(term,"","");
	return "<li onClick='showdetails("+str+")'>"+term.entry+"<p>"+term.page+"</p></li>";
}

var doentrySearch=function(tofind){
	var arr=entrySearch(tofind);
	document.getElementById("display1").innerHTML=arr.map(showentry).join("<br/>");
}

var doabbSearch=function(tofind){
	var arr=abbSearch(tofind);
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
			var abb1 = obj.tdefinitions[i].cdefinitions[j].abbreviations[0];
			var abb2 = obj.tdefinitions[i].cdefinitions[j].abbreviations[1];
			var abb3 = obj.tdefinitions[i].cdefinitions[j].abbreviations[2];
			var syn1 = obj.tdefinitions[i].cdefinitions[j].synonyms[0];
			var syn2 = obj.tdefinitions[i].cdefinitions[j].synonyms[1];
			var syn3 = obj.tdefinitions[i].cdefinitions[j].synonyms[2];
		tablecontent += "<tr>" + tdstart + "&nbsp;" + tdend + tdstart + "&nbsp;" + tdend + tdstart + obj.tdefinitions[i].tdef + tdend 
							   + tdstart + obj.tdefinitions[i].cdefinitions[j].cdef + tdend + tdstart + abb1 + tdend 
							   + tdstart + abb2 + tdend + tdstart + abb3 + tdend + tdstart + syn1 + tdend 
							   + tdstart + syn2 + tdend + tdstart + syn3 + tdend + tdstart + "&nbsp;" + tdend + "</tr>";
		}
    }
    return tablecontent + tableend + "<button onClick='edit()'>Edit</button>";
}

/*var addRow=function(){
	var table = document.getElementById("edited_details");
    var cells=table.getElementsByTagName("tr")
    console.log(cells[0].innerHTML);
    var row = table.insertRow(cells.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
//    cell1.innerHTML = "<input></input>";
//    cell2.innerHTML = "<input></input>";
} */

var cancel=function(){
	document.getElementById("display2").innerHTML=localStorage.undo;
}
	
var edit=function(){
	var table=document.getElementById("details").innerHTML;
	var edittable="<button onClick='addRow()'>Add Row</button>"+"<button onClick='save_edit()'>Save</button>"+"<button onClick='cancel()'>Cancel</button>"
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