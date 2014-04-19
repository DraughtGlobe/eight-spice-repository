$(document).ready(function() {
    $('#pageLogo a').removeAttr('href').mouseover(function(){
        $('#pageHead').stop().animate('100', {
            width:'421px',
            opacity:'1.00'
        });
    }).mouseleave(function(){
        $('#pageHead').stop.animate('100', {
            width: '22px',
            opacity:'0.10'
        });
    });
});


