setInterval(function() {
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		var lastSeen = document.getElementsByClassName("_3Id9P _1VzZY")[0].innerText;
		console.log(time + ' ' + lastSeen);
	}
	catch(err) {
		console.log(err);
		alert('Opps.. An unexpected error has occurred!');
	}
}, 1000);
