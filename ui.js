
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
			return "<table border='1'><tbody><tr><td>"+obj.entry+"</td><td>藏文解釋 :"+obj.tdefinition+"</td><td>中文解釋 :"+obj.cdefinition+"</td></tr></tbody></table>";
		}
		