$(function(){


	/* Color Cycle - jQuery Plugin - v0.1.0 - created by: hello@jonathangrover.com */

	// $('a').colorCycle();

/* Color Cycle - jQuery Plugin - v0.1.0 - created by: hello@jonathangrover.com */
(function ($) {
    
    $.fn.colorCycle = function( options ) {
        
        var settings = $.extend({
                 colors: ['#D3E2B6', '#C3DBB4', '#AACCB1', '#87BDB1', '#68B3AF', '#5B9FB4', '#63AABC', '#84BBD0', '#B0DEED', '#BEE1DD', ''],
                 animationStartRange: 100,
                 animationEndRange: 400,
                 loopStartRange: 1000,
                 loopEndRange: 4000
            }, options),
            $el = this,
            generateTime = function (min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            },
            selectColor = function () {
                return settings.colors[Math.floor(Math.random() * settings.colors.length)];
            },
            changeColor = function (ele) {
                ele.animate({
                    'background-color': selectColor()
                }, generateTime(settings.animationStartRange, settings.animationEndRange), function () {
                    setTimeout(function () {
                        changeColor(ele);
                    }, generateTime(settings.loopStartRange, settings.loopEndRange));
                });
            },
            initialize = function () {
                for (i = 0; i < $el.size(); i++){
                    changeColor($el.eq(i));
                }
            };
        
        initialize();
        return $el;  
    }
})(jQuery);

$('a').colorCycle();


	var player = $('#player1')[0];

	$('#player1-play').click(function(event){
		event.preventDefault();
		player.play();
	});

	$('#player1-stop').click(function(event){
		event.preventDefault();
		player.pause();
		player.load();
	});



});