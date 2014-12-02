//nav img functions
var NavBar = {

	anchorScroll: function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);
		    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    	if (target.length) {
		    		$('html,body').animate({
		        		scrollTop: target.offset().top
		        	}, 1000);
		        	return false;
		      	}
		    }
		});
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

var Body = {
	resizeDivs: function() {
		$(".content-wrapper").css('width', $(window).width());
		$(".content-wrapper").css('min-height', $(window).height());
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
	    else if(h1Size > 225){
	    	h1Size = 225;
	    	marginCorrection = -11;
	    }
	    if(h3Size < 25){
	    	h3Size = 25;
	    }

	    var imgSize = parseInt(h3Size * 1.25);

	    $(".h1-resize").css('font-size', h1Size + "px");
	    $(".h1-resize").css('margin-left', marginCorrection + "px"); //adjust for large text

	    $(".h3-resize").css('font-size', h3Size + "px");

	    $("#home-img").css('width', imgSize + "px");
	    $("#home-img").css('height', imgSize + "px");
	}
}

$(document).ready(function() {
    NavBar.anchorScroll();
	NavBar.bindImgEvents();

	Body.resizeDivs();

	Home.resizeElements();
 });

$(window).load(function() {
	Home.appear();
});

$(window).resize(function() {
  	Body.resizeDivs();

	Home.resizeElements();
});