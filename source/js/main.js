//event functions

//nav img
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

//nav scroll
$(function() {
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
});