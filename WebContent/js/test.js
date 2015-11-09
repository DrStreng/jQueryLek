window.onload = function(){
	console.log("test [JS] onload");
};

$('document').ready(function(){
	console.log("[JQuery] wywolanie gotowe");
});

$().ready(function(){
	$(".hide").click(function(){
		$("h1").hide();
	});
	
	$(".show").click(function(){
		$("h1").show();
	});
	
	$(".fadeIn").click(function(){
		$("h2").fadeIn();
	});
	
	$(".fadeOut").click(function(){
		$("h2").fadeOut();
	});
	
	
	$(".rozwin").click(function(){
		$("ul").slideDown();
		$(".rozwin").hide();
		$(".zwin").show();
	});
	
	$(".zwin").click(function(){
		$("ul").slideUp();
		$(".zwin").hide();
		$(".rozwin").show();
	});
	
	$(".fadeToggle").click(function(){
		$("h1").fadeToggle();
	});
	
	$(".fadeTo").click(function(){
		$("h1").fadeTo();
	});
});