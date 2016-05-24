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
 *
 */
(function($) {
	'use strict';
	
	$.fn.autoImageCaption = function (options) {
	
		var opts = $.extend({
			wrapperTag : 	'div',
			wrapperClass : 	'captioned-image',
			captionTag : 	'span',
			captionClass : 	'caption'
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
		});
	};

})(jQuery);