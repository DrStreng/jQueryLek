$(document).ready(function () {

    $('.nav li').hover(function () { 
    	$('ul', this).fadeIn();},function () {
    		$('ul', this).fadeOut();
	});

    $(".hide").click(function(){
		$("h1").hide();
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
		$("input").slideDown();
	});

	$(".1").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h4").hide();
		$("h5").hide();
		$("input").hide();
		$("h2").slideDown();
	});

	$(".2").click(function(){
		$("h1").hide();
		$("h2").hide();
		$("h4").hide();
		$("h5").hide();
		$("input").hide();
		$("h3").slideDown();
	});

	$(".3").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$("h5").hide();
		$("input").hide();
		$("h4").slideDown();
	});
	
	$(".home1").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$("h5").hide();
		$("input").hide();
		$("h4").hide();
	});

	$(".home2").click(function(){
		$("h1").hide();
		$("h3").hide();
		$("h2").hide();
		$("h5").hide();
		$("input").hide();
		$("h4").hide();
	});
});
