$(document).ready(function () {

  $(".nav li").hover(function(){
    $(".down",this).toggleClass("down2").css("color","#1ABC9C");
    $(".border",this).slideDown();
    $(".nav2 li").hover(function(){
      $("ul",this).slideDown();
      },function(){
        $("ul",this).hide();
    });
    },function(){
      $(".down",this).toggleClass("down2").css("color","#fff");
      $(".border",this).hide();
  });

});
