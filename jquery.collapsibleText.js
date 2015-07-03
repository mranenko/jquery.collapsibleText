/*******************************************************************************
	JQuery plugin to define a "Read More" section in a block of static text.
	Version 0.1 - July 3, 2015
 	Customizable options:
 		readLessText: "Read Less"
		readMoreText: "Read More"
*******************************************************************************/

(function($) {
	$.fn.collapsibleText = function (userOptions) {
		this.each(function() {
			if ($(this).children(".hidden")) {

				// Default options
				var defaultOptions = {
					readLessText: "Read Less",
					readMoreText: "Read More"
				};
				var options = $.extend({}, defaultOptions, userOptions);

				// Initialize container
				var collapsibleContainer = $(this);
				collapsibleContainer.hide();

				// Attach less/more toggles
				var readLessToggle = $("<a/>", {
						class: "toggle",
						html: options.readLessText + " <i class='fa fa-angle-up'></i>"
					})
					.click(_readLess)
					.insertAfter(collapsibleContainer)
					.hide();
				var readMoreToggle = $("<a/>", {
						class: "toggle",
						html: options.readMoreText + " <i class='fa fa-angle-down'></i>"
					})
					.click(_readMore)
					.insertAfter(collapsibleContainer);

				// Read less/more functionality
				function _readLess() {
					collapsibleContainer.slideUp(250);
					readLessToggle.toggle();
					readMoreToggle.toggle();
				}
				function _readMore() {
					collapsibleContainer.slideDown(500);
					readLessToggle.toggle();
					readMoreToggle.toggle();
				}

			}
		});
	}
}(jQuery));