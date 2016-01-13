$( document ).ready(function() {

    var overflow_wr = $('#fixed-menu');

    $('.nav-menu-btn').on('click', function(){
        overflow_wr.fadeIn();
    });
    $('#nav-menu-close-btn').on('click', function(){
        overflow_wr.fadeOut();
    });



});
