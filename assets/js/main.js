/*
	Read Only by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#header" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #header, #wrapper')
						.css('transition', 'none');

	});

})(jQuery);

// Birthday countdown
// Credits: Code With Random (https://www.codewithrandom.com/)
(function () {  
	const second = 1000,  
	   minute = second * 60,  
	   hour = minute * 60,  
	   day = hour * 24;  
	//Avoid having to update year when the countdown is over
	let today = new Date(),  
	  dd = String(today.getDate()).padStart(2, "0"),  
	  mm = String(today.getMonth() + 1).padStart(2, "0"),  
	  yyyy = today.getFullYear(),  
	  nextYear = yyyy + 1,  
	  dayMonth = "06/22/",  
	  birthday = dayMonth + yyyy;  
	today = mm + "/" + dd + "/" + yyyy;  
	if (today > birthday) {  
	 birthday = dayMonth + nextYear;  
	}  
	
	//Countdown 
	const countDown = new Date(birthday).getTime(),  
	  	x = setInterval(function() {    
	    const now = new Date().getTime(),  
		distance = countDown - now;  
	    document.getElementById("days").innerText = Math.floor(distance / (day)),  
		document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),  
		document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),  
		document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);  
	   //It's my birthday 
	   if (distance < 0) {  
		document.getElementById("headline").innerText = "¡Es mi cumpleaños!";  
		document.getElementById("countdown").style.display = "none";  
		document.getElementById("emojiContent").classList.remove("hidden");  
		clearInterval(x);  
	   }  
	   //seconds  
	  }, 0)  
	}());  