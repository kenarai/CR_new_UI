    (function($) {
        var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
        $(window).resize(function() {
          if ($(window).width() <= 768) {
            elem.destroy();
          }
          else {
            elem.reinitialize();
          }
        });
    }(jQuery));
    