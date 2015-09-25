var trytry = function(){
	var table = document.getElementById("edited_details");
	var tr = table.getElementsByTagName("tr");
	var out = [];
	for(var i = 1; i < tr.length; i++){
		var arr = [];
		for(var j = 0; j < tr[i].cells.length; j++){
			arr.push(tr[i].cells[j].innerHTML);
		}	
		out.push(arr);
	}
	console.log(out);
}
	
/*var kick_null_object=function(json){
	var newjson = [];
	for (i=0;i<json.length;i++){
		if (json[i].Entry !== "" || json[i]["Tibetan Defination"] !== "" || json[i].中文解釋 !== "") newjson.push(json[i]);
	}
	return newjson;
}

var build_cdef_obj=function(json){
// cdef_obj = {page:"", entry:"", tdefinition:"", cdefinition:{cdef:"", abbreviations:[], synonyms:[], note:""}}
	var newjson = [];
	for (i=0;i<json.length;i++){
		var cdef_obj={}, cdef={}, abrr_arr=[], syn_arr=[];
		cdef_obj["page"]=json[i].Page; cdef_obj["entry"]=json[i].Entry; cdef_obj["tdefinition"]=json[i]["Tibetan Defination"];
		cdef["cdef"] = json[i].中文解釋;
		abrr_arr.push(json[i].略語1); abrr_arr.push(json[i].略語2); abrr_arr.push(json[i].略語3);
		syn_arr.push(json[i].同義詞1); syn_arr.push(json[i].同義詞2); syn_arr.push(json[i].同義詞3);
		cdef["abbreviations"] = abrr_arr;
		cdef["synonyms"] = syn_arr;
		cdef["note"] = json[i].注記;
		cdef_obj["cdefinition"] = cdef; newjson.push(cdef_obj);
	}
	return newjson;
};

var build_tdef_obj = function(json){
// tdef_obj = {page:"", entry:"", tdefinition:{tdef:"",cdefinitions:[{cdef:"", abbreviations:[], synonyms:[], note:""}, {cdef:"", abbreviations:[!=="增"], synonyms:[], note:""}]}}
	var newjson = []; tdef_obj={}, tdef={}, cdefinitions=[];
	for (i=0;i<json.length;i++){
		if ( !tdef_obj["page"]) tdef_obj["page"]=json[i].page; 
		if ( !tdef_obj["entry"]) tdef_obj["entry"]=json[i].entry;
		if ( !tdef["tdef"]) tdef["tdef"]=json[i].tdefinition; 
		cdefinitions.push(json[i].cdefinition);
		if ((json[i+1] && json[i+1].entry !== "") || (json[i+1] && json[i+1].tdefinition !== "") || (json[i+1] && json[i+1].cdefinition.abbreviations.indexOf("增") !== -1) || !json[i+1] ){
			tdef["cdefinitions"] = cdefinitions; tdef_obj["tdefinition"]=tdef; newjson.push(tdef_obj); cdefinitions=[]; tdef={}; tdef_obj={};
		}
	}
	return newjson;
}

var build_entry_obj =function(json){
	var newjson=[]; entry_obj={}; tdefinitions=[];
	for(i=0;i<json.length;i++){
		if ( !entry_obj["page"]) entry_obj["page"]=json[i].page; 
		if ( !entry_obj["entry"]) entry_obj["entry"]=json[i].entry;
		tdefinitions.push(json[i].tdefinition);
		if ((json[i+1] && json[i+1].entry !== "") || !json[i+1]){
			entry_obj["tdefinitions"]=tdefinitions; newjson.push(entry_obj); tdefinitions = []; entry_obj={};
		}
	}
	return newjson;
}
*/
//var out = kick_null_object(json);
//var out1 = build_cdef_obj(out);
//var out2 = build_tdef_obj(out1);
//var output = build_entry_obj(out2);
//fs.writeFileSync("./output.json",JSON.stringify(output,"","  "),"utf8");