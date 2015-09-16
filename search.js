var entrySearch=function(tofind){
	var out=[];
	for(var i=0;i<terms.length;i++){
		if(terms[i].entry.indexOf(tofind)>-1){
			out.push(terms[i]);
		}
	}
	return out;
}