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
		document.getElementById("countdownTitle").style.display = "none"; 
		document.getElementById("countdownOverTitle").style.display = "block"; 
		document.getElementById("countdown").style.display = "none";  
		document.getElementById("emojiContent").classList.remove("hidden");  
		clearInterval(x);  
	   }  
	   //seconds  
	  }, 0)  
	}());  

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
	location.hash = lang;
	location.reload();
}
// Define the language reload anchors
var language = {
	eng: {
		occupation: "Front-end web developer",
		navabout: "About",
		navcountdown: "Countdown",
		navthingsiliketodo: "Things I like to do",
		navprojects: "Projects",
		navcontact: "Contact",
		titleaboutme: "About me",
		descaboutme: "Hi! I'm Alexander from El Salvador, and I like to create programs, mostly websites but I've also developed Discord bots in the past. I'm interested on working on new and innovative projects. I can work alone and with teams. My native language is Spanish but I can fluently speak and understand English. In my free time I like to play videogames (mostly CoD and Rocket League) but also listen to Lofi music.",
		countdowntitle: "Countdown to my birthday",
		countdownovertitle: "It's my birthday!",
		daystext: "days",
		hourstext: "hours",
		minutestext: "minutes",
		secondstext: "seconds",
		thingsiliketodotitle: "Things I like to do",
		writecode: "Write code",
		playvideogames: "Play videogames",
		cook: "Cook",
		workout: "Work out",
		readbooks: "Read books",
		drinkcoffee: "Drink coffee",
		listenmusic: "Listen to music",
		projectstitle: "My projects",
		reproductordemusica: "Music player",
		reproductordemusicadesc: "Project for portfolio to play music.",
		todolist: "To-do list",
		todolistdesc: "Personal project to create a to-do list.",
		downloadytvideos: "Download YT videos",
		downloadytvideosdesc: "Personal project to download videos and audios from YouTube.",
		lacocinadalex: "La Cocina d'Alex",
		lacocinadalexdesc: "La Cocina d'Alex is a website full of cooking recipes for everyone (currently Spanish only).",
		alex22svart: "Alex22 SV - art",
		alex22svartdesc: "Personal website to show my art.",
		phoenixapi: "PhoenixAPI",
		phoenixapidesc: "Discord bot to manage your exaroton servers.",
		contactmetitle: "Contact me",
		contactmedesc: "You can contact me through any of my social media, I'm mostly active on Discord so feel free to DM me there if you want a faster response.",
		licensetext: "Website under",
		designtext: "Desing"
	},
	es: {
		occupation: "Desarrollador web front-end",
		navabout: "Acerca",
		navcountdown: "Cuenta regresiva",
		navthingsiliketodo: "Cosas que me gustan hacer",
		navprojects: "Proyectos",
		navcontact: "Contacto",
		titleaboutme: "Acerca de mí",
		descaboutme: "Hola! mi nombre es Alexander y soy de El Salvador. Me gusta crear programas, más que nada sitios web, aunque también he desarrollado bots de Discord en el pasado. Estoy interesado en trabajar en proyectos nuevos e inovadores. Suelo trabajar solo pero puedo organizarme con equipos. Puedo hablar el inglés y el español. En mi tiempo libre suelo jugar videojuegos (principalmente Call of Duty y Rocket League) pero también escuchar música Lofi.",
		countdowntitle: "Cuenta regresiva a mi cumpleaños",
		countdownovertitle: "¡Es mi cumpleaños!",
		daystext: "días",
		hourstext: "horas",
		minutestext: "minutos",
		secondstext: "segundos",
		thingsiliketodotitle: "Cosas que me gustan hacer",
		writecode: "Escribir código",
		playvideogames: "Jugar videojuegos",
		cook: "Cocinar",
		workout: "Hacer ejercicio",
		readbooks: "Leer libros",
		drinkcoffee: "Tomar café",
		listenmusic: "Escuchar música",
		projectstitle: "Mis proyectos",
		reproductordemusica: "Reproductor de música",
		reproductordemusicadesc: "Proyecto de portafolio para reroducir música.",
		todolist: "Lista de Tareas",
		todolistdesc: "Proyecto para crear una lista de tareas.",
		downloadytvideos: "Descarga Videos de YT",
		downloadytvideosdesc: "Proyecto para descargar videos y audios de YouTube.",
		lacocinadalex: "La Cocina d'Alex",
		lacocinadalexdesc: "La Cocina d'Alex es un sitio web que busca compartir recetas de cocina para todos.",
		alex22svart: "Alex22 SV - arte",
		alex22svartdesc: "Sitio web personal para mostrar mi arte.",
		phoenixapi: "PhoenixAPI",
		phoenixapidesc: "Bot de Discord para administrar servidores de exaroton.",
		contactmetitle: "Contáctame",
		contactmedesc: "Puedes contactarme a través de cualquiera de mis redes sociales, paso mayormente activo en Discord así que puedes escribirme por privado si quieres una respuesta rápida.",
		licensetext: "Sitio web bajo licencia",
		designtext: "Diseño"
	}
};
// Check if a hash value exists in the URL
if (window.location.hash) {
	// Set the content of the webpage 
	// depending on the hash value
	if (window.location.hash == "#eng") {
		document.getElementById("occupation").textContent = language.eng.occupation;
		document.getElementById("navAbout").textContent = language.eng.navabout;
		document.getElementById("navCountdown").textContent = language.eng.navcountdown;
		document.getElementById("navThingsILikeToDo").textContent = language.eng.navthingsiliketodo;
		document.getElementById("navProjects").textContent = language.eng.navprojects;
		document.getElementById("navContact").textContent = language.eng.navcontact;
		document.getElementById("titleAboutMe").textContent = language.eng.titleaboutme;
		document.getElementById("descAboutMe").textContent = language.eng.descaboutme;
		document.getElementById("countdownTitle").textContent = language.eng.countdowntitle;
		document.getElementById("countdownOverTitle").textContent = language.eng.countdownovertitle;
		document.getElementById("daysText").textContent = language.eng.daystext;
		document.getElementById("hoursText").textContent = language.eng.hourstext;
		document.getElementById("minutesText").textContent = language.eng.minutestext;
		document.getElementById("secondsText").textContent = language.eng.secondstext;
		document.getElementById("thingsILikeToDoTitle").textContent = language.eng.thingsiliketodotitle;
		document.getElementById("writeCode").textContent = language.eng.writecode;
		document.getElementById("playVideogames").textContent = language.eng.playvideogames;
		document.getElementById("cook").textContent = language.eng.cook;
		document.getElementById("workout").textContent = language.eng.workout;
		document.getElementById("readBooks").textContent = language.eng.readbooks;
		document.getElementById("drinkCoffee").textContent = language.eng.drinkcoffee;
		document.getElementById("listenMusic").textContent = language.eng.listenmusic;
		document.getElementById("projectsTitle").textContent = language.eng.projectstitle;
		document.getElementById("reproductorDeMusica").textContent = language.eng.reproductordemusica;
		document.getElementById("reproductorDeMusicaDesc").textContent = language.eng.reproductordemusicadesc;
		document.getElementById("todoList").textContent = language.eng.todolist;
		document.getElementById("todoListDesc").textContent = language.eng.todolistdesc;
		document.getElementById("downloadYtVideos").textContent = language.eng.downloadytvideos;
		document.getElementById("downloadYtVideosDesc").textContent = language.eng.downloadytvideosdesc;
		document.getElementById("laCocinadAlex").textContent = language.eng.lacocinadalex;
		document.getElementById("laCocinadAlexDesc").textContent = language.eng.lacocinadalexdesc;
		document.getElementById("alex22svArt").textContent = language.eng.alex22svart;
		document.getElementById("alex22svArtDesc").textContent = language.eng.alex22svartdesc;
		document.getElementById("phoenixapi").textContent = language.eng.phoenixapi;
		document.getElementById("phoenixapiDesc").textContent = language.eng.phoenixapidesc;
		document.getElementById("contactMeTitle").textContent = language.eng.contactmetitle;
		document.getElementById("contactMeDesc").textContent = language.eng.contactmedesc;
		document.getElementById("licenseText").textContent = language.eng.licensetext;
		document.getElementById("designText").textContent = language.eng.designtext;
	}
}