$(document).ready(function(){
    $(".navigation ul li a").hover(function(){
        $(this).parent("li").addClass("active");
        $(this).next(".subNav").slideDown();
    });
     
    $(".navigation ul li").mouseleave(function(){
        $(this).children(".subNav").slideUp();
        $(this).removeClass("active");
    });
});