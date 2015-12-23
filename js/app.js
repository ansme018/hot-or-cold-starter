
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Universal variables ---*/

var guessCount = 0;
var correctGuess = false;
var num = Math.floor((Math.random() * 100) + 1); 


  /*--- Generate Random Number ---*/

console.log(num);

  /*--- User submits #userGuess using #guessButton ---*/
$('form').submit(function() {
  var userGuess =$('#userGuess').val();
    console.log(num);
    console.log(userGuess);
  $('#guessList ul').append('<li>'+ userGuess + '</li>');
  
    guessCount += 1;
  $("#count").text(guessCount);
    
  var difference = userGuess - num;
  
  if (userGuess == num) {
    $('#feedback').append("You win! You guessed the right Number!");
    correctGuess = true;
    } else if (difference >= 1 && difference <= 10) {
    $('#feedback').text('VERY Hot');
    } else if (difference < 10 && difference <= 20){
    $('#feedback').text('Hot');
    } else if (difference < 20 && difference <= 30){
    $('#feedback').text('Warm');
    } else if (difference < 30 && difference <= 50){
    $('#feedback').text('Cool');
    } else if ( difference > 50){
    $('#feedback').text('Ice Cold');
    };

    return false;
 });
});


/*---- To start a new game ----*/
    $('.new').click(function(){
        newGame();
    });

/*--- Function that resets game --*/
    function newGame(){
        guessCount = 0;
        correctGuess = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        num = (Math.floor(Math.random()*10));
        console.log("new random number is " + num);
    }



