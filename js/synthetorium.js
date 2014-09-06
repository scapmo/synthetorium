$(function(){


	/* Color Cycle - jQuery Plugin - v0.1.0 - created by: hello@jonathangrover.com */

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