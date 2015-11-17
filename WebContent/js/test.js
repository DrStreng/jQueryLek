$(document).ready(function () {

    $('.nav li').hover(function () { 
    	$('ul', this).fadeIn();},function () {
    		$('ul', this).fadeOut();
	});

    $("#imie").inputFocus('setText',{text:"podaj imie"}).inputFocus('setRequired');
    $("#nazwisko").inputFocus('setText',{text:"podaj Nazwisko"}).inputFocus('setRequired');

    $(".hide").click(function(){
		$("h1").hide();
	});

	$('.background').hover(function(){
  		$("h1").toggleClass('hoverh1');
	});

	$('.background').hover(function(){
  		$(".logo").toggleClass('test');
	});

	$('.backgroundper').click(function(){
  		$("h1").toggleClass('toggleClassh1');
	});
	
	$(".show").click(function(){
		$("h1").show();
	});
	
	$(".fadeIn").click(function(){
		$("h1").fadeIn();
	});
	
	$(".fadeOut").click(function(){
		$("h1").fadeOut();
	});

	$(".fadeToggle").click(function(){
		$("h1").fadeToggle();
	});

	$(".reg").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$("h4").hide();
		$("h5").slideDown();
		$(".register").slideDown();

	});

	$(".1").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h4").hide();
		$(".register").hide();
		$("h2").slideDown();
	});

	$(".2").click(function(){
		$("h1").hide();
		$("h2").hide();
		$("h4").hide();
		$(".register").hide();
		$("h3").slideDown();
	});

	$(".3").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$(".register").hide();
		$("h4").slideDown();
	});
	
	$(".home1").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$(".register").hide();
		$("h4").hide();
	});

	$(".home2").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$(".register").hide();
		$("h4").hide();
	});

	$("button").click(function(){
        $("#p1").css("color", "red").slideUp(1000).slideDown(1000);
    });
});

