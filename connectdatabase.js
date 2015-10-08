var terms=JSON.parse(localStorage.getItem('terms'));

var saveEdited=function(obj,p){
	db.child(p).set(obj);
	terms[p]=obj;
}