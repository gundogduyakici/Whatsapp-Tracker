setInterval(function() {
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		if(document.getElementsByClassName("selectable-text")[0]) {
			var lastSeen = document.getElementsByClassName("selectable-text")[0].innerText;
			console.log(time + ' ' + lastSeen);
		}		
	}
	catch(err) {
		console.log(err);
		alert('Opps.. An unexpected error has occurred!');
	}
}, 1000);
