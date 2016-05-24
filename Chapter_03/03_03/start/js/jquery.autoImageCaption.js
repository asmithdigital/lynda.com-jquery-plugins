/**
 * Auto image caption
 *
 * Pulls text from the title attribute and creates a caption
 */
(function($) {
	'use strict';
	
	$.fn.autoImageCaption = function () {
	
		/**
		 * Add captions to the images, pulled from their title attributes
		 */
	
		return this.each(function (idx, el) {
			var $img = $(el);
		
			// check if the parent has been captioned manually
			if ($img.parent('.captioned-image').length === 0) {
				$img
					.wrap('<div class="captioned-image"></div>')
					.after('<span class="caption">' + $img.attr('title') + '</span>');
			}
		});
	
	};

})(jQuery);