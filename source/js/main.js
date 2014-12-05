var Body = {
	resizeDivs: function() {
		$(".content-wrapper").css('width', $(window).width());
		$(".content-wrapper").css('min-height', screen.height);
	},

	appear: function() {
			$('.scroll-appear').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + $(window).height()) {
				$(this).css('opacity', 1)
			}
		});
	},

	setMinWidth: function() {
		$("body").css('min-width', parseInt(screen.width * 0.5) + "px");
		$(".content-wrapper").css('min-width', parseInt(screen.width * 0.5) + "px");

		$(".exp-p").css('min-width', parseInt(screen.width * 0.35) + "px");
		$(".exp-a").css('min-width', parseInt(screen.width * 0.35) + "px");
	}
}

var NavBar = {
	scrollRatio: 0,
	docHeight: 0,

	
	getDocHeight: function() {
		var body = document.body;
	    var html = document.documentElement;

		docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
	            		html.clientHeight, html.scrollHeight, html.offsetHeight );
	},

	getScrollRatio: function() {
		scrollRatio = $(document).scrollTop() / (1.0 * docHeight);
	},

	anchorScroll: function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);
		    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    	if (target.length) {
		    		$('html,body').animate({scrollTop: target.offset().top}, 1250);
		        	return false;
		      	}
		    }
		});
	},

	scrollAdjust: function() {
		var oldDocHeight = docHeight;

		this.getDocHeight();

		if(docHeight != oldDocHeight) {
			window.scrollTo(0, scrollRatio * docHeight);
		}
	},

	bindImgEvents: function() {
		document.getElementById('nav-img-a').onmouseover=function () {
		    document.getElementById('nav-img').src = "../img/logo-invert.png";
		};

		document.getElementById('nav-img-a').onmouseout=function () {
		    document.getElementById('nav-img').src = "../img/logo-default.png";
		};

		document.getElementById('nav-img-a').onmousedown=function () {
		    document.getElementById('nav-img').src = "../img/logo-glow.png";
		};

		document.getElementById('nav-img-a').onmouseup=function () {
		    document.getElementById('nav-img').src = "../img/logo-invert.png";
		};
	}
}

var Home = {

	appear: function() {
		$(".appear").css('opacity', 1);
	},

	resizeElements: function() {
		var contentSize = $(".content-wrapper").width();
	    var h1Size = parseInt(contentSize * 0.15);
	    var marginCorrection = parseInt(-contentSize * 0.0075);
	    var h3Size = parseInt(contentSize * 0.025);

	    if (h1Size < 85){
	    	h1Size = 85;
	    	marginCorrection = -4;
	    }
	    else if(h1Size > 200){
	    	h1Size = 200;
	    	marginCorrection = -10;
	    }

	    if(h3Size < 25){
	    	h3Size = 25;
	    }
	    else if(h3Size > 40){
	    	h3Size = 40;
	    }

	    var imgSize = parseInt(h3Size * 1.25);

	    $(".h1-resize").css('font-size', h1Size + "px");
	    $(".h1-resize").css('margin-left', marginCorrection + "px"); //adjust for large text

	    $(".h3-resize").css('font-size', h3Size + "px");

	    $("#home-img").css('width', imgSize + "px");
	    $("#home-img").css('height', imgSize + "px");
	}
}

//DOM ready function calls
$(document).ready(function() {
    NavBar.anchorScroll();
	NavBar.bindImgEvents();
	NavBar.getDocHeight();
	NavBar.getScrollRatio();

	Body.resizeDivs();
	Body.setMinWidth();

	Home.resizeElements();
 });

//window load function calls
$(window).load(function() {
	Home.appear();
});

//window resize function calls
$(window).resize(function() {
  	Body.resizeDivs();
  	Body.setMinWidth();

	Home.resizeElements();
	NavBar.scrollAdjust();
});

//window scroll functions
$(window).scroll(function() {
	Body.appear();

	NavBar.getScrollRatio();
});