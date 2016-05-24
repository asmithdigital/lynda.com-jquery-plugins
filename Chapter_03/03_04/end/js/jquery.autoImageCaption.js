/**
 * Auto image caption
 *
 * Pulls text from the title attribute and creates a caption
 *
 * Options:
 *	- wrapperTag (string): 
 *	- wrapperClass (string):
 *  - captionTag (string):
 *  - captionClass (string):
 *  - bgColor (css color spec):
 *  - color (css color spec):
 *
 */
(function($) {
	'use strict';
	
	$.fn.autoImageCaption = function (options) {
	
		var opts = $.extend({
			wrapperTag: 'div',
			wrapperClass: 'captioned-image',
			captionTag: 'span',
			captionClass: 'caption',
			bgColor: null,
			color: null
		}, options);
	
		/**
		 * Add captions to the images, pulled from their title attributes
		 */
	
		return this.each(function (idx, el) {
			var $img = $(el);
		
			// check if the parent has been captioned manually
			if ($img.parent('.' + opts.wrapperClass).length === 0) {
				$img
					.wrap('<'+ opts.wrapperTag +' class="'+ opts.wrapperClass +'"></'+ opts.wrapperTag +'>')
					.after('<'+ opts.captionTag +' class="'+ opts.captionClass +'">' + $img.attr('title') + '</'+ opts.captionTag +'>');
			}
			
			// if appearance options are there
			if (opts.bgColor) {
				// style the image's wrapper
				$img.parent().css('background-color', opts.bgColor);
			}
			
			if (opts.color) {
				// style the image's caption
				$img.siblings('.' + opts.captionClass).css('color', opts.color);
			}
		});
	};

})(jQuery);