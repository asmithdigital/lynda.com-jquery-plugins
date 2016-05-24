/**
 * Ads rotator plugin
 *
 * Pulls in random ads via AJAX
 *
 */
(function($) {
	'use strict';

	$.fn.adsRotator = function () {
	
		var $ads_area = this,
			// where the ads come from
			ads_sources = ['ad1.html', 'ad2.html', 'ad3.html', 'ad4.html', 'ad5.html'],
			// how many ads should be displayed
			num_displayed = 2,
			// the collection of random ads, starting with none
			selected_ads = [];
	
		// collect as many random ads as we need
		for (var i = 0; i < num_displayed; i++) {
			// retrieve a random index from the array
			// see fn definition below
			var ad_index = randomIntFromInterval(0, ads_sources.length - 1);
		
			// add it to the selected ads array
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
			var selected_ad = ads_sources.slice(ad_index, ad_index + 1)
			selected_ads = selected_ads.concat(selected_ad);
		
			// remove the selected ad from the ads_sources array
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
			ads_sources.splice(ad_index, 1);
		}
	
		if (selected_ads.length > 0) {
			// clear out the ads area
			$ads_area.html('');
	
			// jQuery.each is a safe way to iterate over an array of stuff
			jQuery.each(selected_ads, function loadAd(idx, src) {
				$.get( 'ads/' + src, function( data ) {
					$ads_area.append(data);
				});
			});
		}
	
		// http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript
		function randomIntFromInterval(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
	};

})(jQuery);