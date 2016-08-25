$(document).ready(function(){
	/**************************/
	/* Konami Code Easter Egg */
	/**************************/
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
		$('.logo').addClass('spin');
		var $message = $('.message');
		var x, y;
		var max = 100;
		$message.html($message.text().replace(/./g, '<span>$&</span>'));
		$message.children().each(function(){
			x = (Math.random() * max) - max/2;
			y = (Math.random() * max) - max/2;
			$(this).animate({
				'top' : y +'vh',
				'left' : x + 'vh',
				'opacity' : 0
			}, 2000, function(){
				reassembleMessage($(this).text(), HIRE_ME_PLS, $(this));
				$message.css({'left':'40%'});
			});
		});
	};

	var COUNT = {};
	var HIRE_ME_PLS = 'hiremepls';
	var E_COUNT = 0;
	for (var i = 0; i < HIRE_ME_PLS.length; i++){ COUNT[HIRE_ME_PLS[i]] = true; }
	
	function reassembleMessage(char, str, element){
		if (str.indexOf(char) != '-1'){
			if (COUNT[char] || (char == 'e' && E_COUNT == 1)){
				element.css({'position':'absolute'});
				switch (char) {
					case 'h':
						element.animate({'top':'0px','left':'0','opacity':1}, 1000);
						break;
					case 'i':
						element.animate({'top':'0px','left':'12px','opacity':1}, 1000);
						break;
					case 'r':
						element.animate({'top':'0px','left':'17px','opacity':1}, 1000);
						break;
					case 'e':
						if (E_COUNT == 0){
							E_COUNT = 1;
							element.animate({'top':'0px','left':'25px','opacity':1}, 1000);
						}else if (E_COUNT == 1){
							E_COUNT = 2;
							element.animate({'top':'0px','left':'70px','opacity':1}, 1000);
						}
						break;
					case 'm':
						element.animate({'top':'0px','left':'50px','opacity':1}, 1000);
						break;
					case 'p':
						element.animate({'top':'0px', 'left':'90px','opacity':1}, 1000);
						break;
					case 'l':
						element.animate({'top':'0px','left':'105px','opacity':1}, 1000);
						break;
					case 's':
						element.animate({'top':'0px','left':'111px','opacity':1}, 1000);
						break;
					default:
						// do nothing;
				}
				COUNT[char] = false;
				return true;
			}
		}
		return false;
	}

	function disco(){
		$('body').addClass('disco');
		$('.disco-ball').slideDown('slow');
		$('.disco-ball').append('<audio id="audio" src="./assets/konami/take-on-me.m4a" autoplay></audio>');
	}

	var easter_egg = new Konami(function() {
		hadoken();
		explodeMessage();
		if (!$('body').hasClass('disco')) setTimeout(function() { disco(); }, 2000);
	});
	console.log('⬆️ ⬆️ ⬇️ ⬇️'); // hint
});