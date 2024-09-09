setInterval(function() {
	let dt = new Date();
	let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		if(document.getElementsByClassName("x78zum5 x1cy8zhl xisnujt x1nxh6w3 xcgms0a x16cd2qt")[0]) {
			let divElement = document.getElementsByClassName("x78zum5 x1cy8zhl xisnujt x1nxh6w3 xcgms0a x16cd2qt")[0];
			let spanElement = divElement.querySelector('span');
			let title = spanElement.getAttribute('title');
			console.log(time + ' ' + title);
		}		
	}
	catch(err) {
		console.log(err);
		alert('Opps.. An unexpected error has occurred!');
	}
}, 1000);
