$(document).ready(function () {
	var q = "cat"; // search query
	
	var request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			var data = JSON.parse(request.responseText).data.image_url;
			document.getElementById("giphy").innerHTML = '<img src = "'+data+'"  title="GIF via Giphy">';
		} else {
			console.log("API error");
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	$("#giphy-anchor").click(function(e) {
		request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
		request.send();
		$('#giphy').show();
		e.preventDefault();
	});

	var EMOJIS = ['✨','✌︎','🌚','♕','⚡️','☹','💻'];
	var ind = 1;
	setInterval(function(){ 
		$('#emoji').html(EMOJIS[ind]);
		ind = (ind +  1) % EMOJIS.length;
	}, 250);
});