setInterval(function() {
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		var lastSeen = document.getElementsByClassName("_2ruUq _3xjAz")[0].innerText;
		console.log(time + ' ' + lastSeen);
	}
	catch(err) {
		
	}
}, 1000);
