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

    /*
     * Fix shifting fixed navbar to the right 
     */

    $(window).load(function(){
        var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
        $.fn.modal.Constructor.prototype.setScrollbar = function () 
        {
            oldSSB.apply(this);
            if(this.bodyIsOverflowing && this.scrollbarWidth) 
            {
                $('.navbar-fixed-top, .navbar-fixed-bottom').css('padding-right', this.scrollbarWidth);
            }       
        }

        var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
        $.fn.modal.Constructor.prototype.resetScrollbar = function () 
        {
            oldRSB.apply(this);
            $('.navbar-fixed-top, .navbar-fixed-bottom').css('padding-right', '');
        }
    });
});