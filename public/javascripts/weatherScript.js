// weatherScript.js

$(function(){
    // DOM is ready

    // make tab active
    $('.active').removeClass('active');
    $('#weather-tab').addClass('active');

    // ensures navbar isn't covering content by adding 10px of padding after navbar
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
    
    // get all li's with temp class (for temperature)
    var $tempLis = $('.temp');

    var listElts = document.getElementsByClassName('temp');

    // the CSS will modify the text to a different color based on its class name
    for(var elt of listElts){
        var text = elt.textContent;
        var num = text.match(/\d+/)[0];
        if(num >= 85){
            elt.className += ' ' + 'temp-hot';
        }
        if(num < 85 && num >= 75){
            elt.className += ' ' + 'temp-warm';
        }
        if(num < 75 && num >= 65){
            elt.className += ' ' + 'temp-fair';
        }
        if(num < 65 && num >= 45){
            elt.className += ' ' + 'temp-cool';
        }
        if(num < 45){
            elt.className += ' ' + 'temp-cold';
        }
    }

});

$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
 });