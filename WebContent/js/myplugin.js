(function($){

  var methods = {
		init: function(options){},
		validateCena: function(options){
			$('.errors1').remove();
			var settings = $.extend({
				'min': 0,
			}, options);
			if($(this).val() > settings.min){
				  $(this).css({'color':'black','border':'2px solid black'});
			}else{
				  $(this).css({'color':'red','border':'2px solid red'});
				$(this).after('<span class="errors1">zle</span>');
			}
		},
    validateEmail: function(options){
      $('.errors2').remove();
      var reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if($(this).val() ===""){
        $(this).after('<span class="errors2">Nie uzupelniles</span>');
      }
      else if(!reg.test($(this).val())){
        $(this).after('<span class="errors2">blad</span>');
        $(this).css({'color':'red','border':'2px solid red'});
      }
      else if(reg.test($(this).val())){
         $(this).css({'color':'black','border':'2px solid black'});
      }
    },

    validateNazwa:function(options){
      $('.errors3').remove();
      if($(this).val() === ""){
        $(this).after('<span class="errors3">Nie uzupelniles</span>');
        $(this).css({'color':'red','border':'2px solid red'});
      }
      else if(!isNaN($(this).val())){
        $(this).after('<span class="errors3">bez liczb pls</span>');
         $(this).css({'color':'red','border':'2px solid red'});
      }
      else if($(this).val().length <= 2){
        $(this).after('<span class="errors3">Za krotkie</span>');
         $(this).css({'color':'red','border':'2px solid red'});
      }
      else if($(this).val().length > 2){
         $(this).css({'color':'black','border':'2px solid black'});
      }
    },
    validateCheckbox:function(options){
      $('.errors4').remove();
      if($(this).is(':checked')){

      }else{
        $(this).after('<span class="errors4">Nie zaznaczyles</span>');
        $(".errors4").css({'color':'red'});
      }
    },

		setText: function(options){
			var settings = $.extend({
				'text': 'Podaj wartość'
			}, options);
			var inputText = settings.text;
			this.val(inputText);
			this.focus(function(){
				if($(this).val() === inputText)
					$(this).val("");
				});
			this.blur(function(){
				if($(this).val() === "")
					$(this).val(inputText);
				});
		},
		setRequired: function(options){
			$(this).css({'background-color': "green"});
		}
	};

	$.fn.inputFocus = function(method) {
		var args = Array.prototype.slice.call(arguments,1);
		return this.each(function() {
		if (methods[method]) {
			methods[method].apply($(this), args );
			}else
			methods.init.apply(this, args);
		});
	};


  $.fn.cotam1 =function(){
    return this.each(function(){
      $(this).text("No co tam!");
    });
  };

// ..........................

$.fn.cotam2 =function(text){
  return this.each(function(){
    $(this).text(text);
  });
};

// ..........................
$.fn.cotam3 =function(options){

  var settings = $.extend({
    text :"Tygrys",
    color :null,
    fontStyle :null
  },options);

  return this.each(function(){
    $(this).text(settings.text);
    if(settings.color){
      $(this).css('color',settings.color);
    }
    if(settings.fontStyle){
      $(this).css('fontStyle',settings.fontStyle);
    }
  });
};

})(jQuery);
