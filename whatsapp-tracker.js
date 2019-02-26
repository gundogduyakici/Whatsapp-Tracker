setInterval(function() {
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		var lastSeen = document.getElementsByClassName("O90ur")[0].innerText;
		console.log(time + ' ' + lastSeen);
	}
	catch(err) {
		
	}
}, 1000);