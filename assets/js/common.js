$(document).ready(function () {
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

	// request.send();

	$("#giphy-anchor").click(function(e) {
		request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
		request.send();
		$('#giphy').show();
		e.preventDefault();
	});

	var $ken = $('.ken');
	var $kenPos, $fireballPos;

	function hadoken(){
	  $ken.show(); // reveal ken with konami code
	  $ken.addClass('hadoken'); 
	  setTimeout(function() { $ken.removeClass('hadoken'); }, 500); 
	  setTimeout(function() {
	      var $fireball = $('<div/>', { class:'fireball' });
	      $fireball.appendTo($ken);
	              
	      var isFireballColision = function(){ 
	          return $fireballPos.left + 75 > $(window).width() ? true : false;
	      };
	  
	      var explodeIfColision = setInterval(function(){
	                  
	          $fireballPos = $fireball.offset();
	          //console.log('fireballInterval:',$fireballPos.left);
	  
	          if (isFireballColision()) {
	              $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px'); 
	              clearInterval(explodeIfColision);
	              setTimeout(function() { $fireball.remove(); }, 500); 
	          }
	  
	      }, 50);
	  
	      setTimeout(function() { $fireball.addClass('moving'); }, 20);
	              
	      setTimeout(function() { 
	          $fireball.remove(); 
	          clearInterval(explodeIfColision);
	      }, 3020);
	  
	  }, (250));
	};

	function explodeMessage(){
		var $message = $('.message');
		var x, y;
		var max = 2000;
		$message.html($message.text().replace(/./g, "<span>$&</span>"));
		$message.children().each(function(){
			x = (Math.random() * max) - max/2;
			y = (Math.random() * max) - max/2;
			$(this).css({
				'transform' : 'translate(' + x + 'px ,' + y +'px)'
			});
		});
	};

	var easter_egg = new Konami(function() {
		hadoken();
		explodeMessage();
		setTimeout(function() {$('.logo').addClass('spin');}, 20);
	});
});