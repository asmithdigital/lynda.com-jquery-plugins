/**
 * Auto image caption
 *
 * Pulls text from the title attribute and creates a caption
 *
 * Options:
 *	- wrapper (object): 
 *		- tag (string)
 *		- class (string)
 *  - caption (object): 
 *		- tag (string)
 *		- class (string)
 *  - bgColor (css color spec):
 *  - color (css color spec):
 *
 */
(function($) {
	'use strict';
	
	$.fn.autoImageCaption = function (options) {
	
		var opts = $.extend(true, {}, {
			wrapper: {
				'tag' : 'div',
				'class' : 'captioned-image'
			},
			caption : {
				'tag' : 'span',
				'class' : 'caption'
			},
			bgColor: null,
			color: null
		}, options);
	
		/**
		 * Add captions to the images, pulled from their title attributes
		 */
	
		return this.each(function (idx, el) {
			var $img = $(el);
		
			// check if the parent has been captioned manually
			if ($img.parent('.' + opts.wrapper.class).length === 0) {
				$img
					.wrap('<'+ opts.wrapper.tag +' class="'+ opts.wrapper.class +'"></'+ opts.wrapper.tag +'>')
					.after('<'+ opts.caption.tag +' class="'+ opts.caption.class +'">' + $img.attr('title') + '</'+ opts.caption.tag +'>');
			}
			
			// if appearance options are there
			if (opts.bgColor) {
				// style the image's wrapper
				$img.parent().css('background-color', opts.bgColor);
			}
			
			if (opts.color) {
				// style the image's caption
				$img.siblings('.' + opts.caption.class).css('color', opts.color);
			}
		});
	};

})(jQuery);