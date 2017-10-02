//= require jquery  
//= require bootstrap-sprockets

$(document).ready(function(){

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        startDelay: 1000,
        typeSpeed: 40,
        backSpeed: 30,
        backDelay: 800,
        cursorChar: '_',
        smartBackspace: true
    });
    
});