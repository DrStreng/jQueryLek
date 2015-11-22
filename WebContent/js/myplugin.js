//
// (function($){
//
// 	var methods = {
// 		init:function(options){},
// 		setText: function(options){
//
// 			var settings = $.extend({
// 				'text': 'Podaj wartosc'
// 			},options);
//
// 			var inputText = settings.text;
//
// 			this.val(inputText);
//
// 			this.focus(function(){
// 				if( $(this).val() === inputText){
// 					$(this).val("");
// 				}
// 			});
// 			this.blur(function(){
// 				if($(this).val() === ""){
// 					$(this).val(inputText);
// 				};
// 			});
// 		},
// 		setRequired: function(options){
// 			$(this).css({background-color:red});
// 		}
// 	};
//
//
// 	// $.fn.background =function(){
//
// 	// };
//
// 	$.fn.inputFocus = function(method){
//
// 		return this.each(function(){
// 			if(methods[method]){
// 				methods[method].apply(this, Array.prototype.slice.call(arguments,1));
// 			}else{
// 				methods.init.apply(this,arguments);
// 			}
// 		});
// 	};
//
// })(jQuery);
