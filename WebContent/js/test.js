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

  $(".leki").click(function(){
    $(".section1").hide();
    $(".section2").show();
  });

  $(".glowna").click(function(){
    $(".section1").show();
    $(".section2").hide();
    $(".section3").hide();
    $(".section4").hide();
  });

  $(".Header1 a").click(function(){
    $(".section1").show();
    $(".section2").hide();
    $(".section3").hide();
    $(".section4").hide();
  });

  $(".logo").click(function(){
    $(".content-block").hide();
  });

  $(".tloClick").on({
    'click':function(){
      $(".background").css({
        'background': 'url(./images/tlo2.jpg)',
        'height': '220px',
        'position': 'relative',
        'background-size':' 100%',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
    });
      $(".Header1 a").css({
        'position': 'absolute',
        'margin-top': '40px',
        'margin-left': '90px',
        'color': '#fff',
        'text-decoration': 'none',
        'font': '900 60px/100px "Helvetica Neue", Helvetica, Arial, sans-serif',
        'letter-spacing': '-2px'
      });
    }
  });



});
