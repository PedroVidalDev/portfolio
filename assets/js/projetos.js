$('.sub-btn').next('.sub-menu').slideToggle();

$(document).ready(function(){
    $('.projeto-box').hover(function(){
        $(this).children('.sub-menu').slideToggle();
    })
})