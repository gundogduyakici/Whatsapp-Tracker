setInterval(function() {
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		if(document.getElementsByClassName("_2YPr_ i0jNr")[0]) {
			var lastSeen = document.getElementsByClassName("zzgSd _3e6xi")[0].innerText;
			console.log(time + ' ' + lastSeen);
		}		
	}
	catch(err) {
		console.log(err);
		alert('Opps.. An unexpected error has occurred!');
	}
}, 1000);
