document.addEventListener('DOMContentLoaded', function () {
	var q = "cat"; // search query
	
	var request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			var data = JSON.parse(request.responseText).data.image_url;
			// console.log(data);
			document.getElementById("giphy").innerHTML = '<img src = "'+data+'"  title="GIF via Giphy">';
		} else {
			console.log("API error");
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();

	$("#giphy-btn").click(function(e) {
		request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
		request.send();
		e.preventDefault();
	});

	$("#blog-btn").click(function(e){
		location.href = "http://blog.christina.codes";
	})
});