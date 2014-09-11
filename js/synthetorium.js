$(function(){


	/* Color Cycle - jQuery Plugin - v0.1.0 - created by: hello@jonathangrover.com */


$('a.colorcycle').colorCycle({
      colors: ['#D3E2B6', '#C3DBB4', '#AACCB1', '#87BDB1', '#68B3AF', '#5B9FB4', '#99B2B7', '#D9CEB2', '#948C75', '#7A6A53', '#FF6933', '#63AABC', '#84BBD0', '#B0DEED', '#BEE1DD'],

  // starting and end range for animation time in milliseconds.
      animationStartRange: 500,
      animationEndRange: 2000,

  // starting and end range for loop time in milliseconds.
      loopStartRange: 500,
      loopEndRange: 2000

});


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

$(function(){
  rotatePics(7);
 
  function rotatePics(currentPhoto){
    var numberOfPhotos = $('#cycler img').length;
    currentPhoto = currentPhoto % numberOfPhotos;
 
    $('#cycler img').eq(currentPhoto).fadeOut(2000,function(){
      // Re-order the z-index
      $('#cycler img').each(function(i){
        $(this).css(
          'zIndex', ((numberOfPhotos - i ) + currentPhoto) % numberOfPhotos
        );
      });
 
    $(this).show();
 
    setTimeout(function() {
      rotatePics(++currentPhoto);
    },2000);
 
    });
  }
});

$( ".colorcycle" ).hover(
  function() {
    $( this ).find("img").show();
  }, function() {
    $( this ).find("img").hide();
  
});


});