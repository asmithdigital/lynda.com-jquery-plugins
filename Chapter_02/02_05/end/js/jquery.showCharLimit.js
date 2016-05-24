/**
 * Character counter
 *
 * A simple plugin that makes the maxlength of a field visible
 */
(function($) {
	'use strict';
	
	$.fn.showCharLimit = function () {
		return this.each(function(index, element) {
			$(element).keyup(function updateCharCounter() {
				var $me = $(this),
					maxLength = parseInt($me.attr('maxlength'), 10),
					charCount = $me.val().length,
					$counter = $me.siblings('.limit');

				$counter.text('limit: ' + maxLength + ' characters. remaining: ' + (maxLength - charCount));
			});
		});
	};

})(jQuery);