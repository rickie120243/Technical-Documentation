var fs=require("fs");
var terms=require("./GCD_9_721-730.json");

var rm_emptystring=function(arr){
	var entryid,tibetanid,chinesedefid;
	var newterms=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i].Entry) {
			entryid=i;
			newterms.push(arr[i]);
		}
		if(!arr[i].Entry) {
			newterms[newterms.length-1].TibetanDefination+=i-entryid+"."+arr[i].TibetanDefination
		}
	}
	console.log(newterms)

}

rm_emptystring(terms);