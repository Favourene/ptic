$(document).ready(function(){
    var $a = $('#bar'),
    $home = $('#times'),
    $signup = $('#nav');
   

    $a.click(function(){
        $signup.fadeIn();
        $home.fadeIn();
        $a.fadeOut();
    })
   $home.click(function(){
    $signup.fadeOut();
    $home.fadeOut();
    $a.fadeIn();
   });
});