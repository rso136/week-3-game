var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if ((userGuess === 'a') || (userGuess === 'b') || (userGuess === 'c') || (userGuess === 'd') || (userGuess === 'e') || (userGuess === 'f') || (userGuess === 'g') || (userGuess === 'h') || (userGuess === 'i') || (userGuess === 'j') || (userGuess === 'k') || (userGuess === 'l') || (userGuess === 'm') || (userGuess === 'n') || (userGuess === 'o') || (userGuess === 'p') || (userGuess === 'q') || (userGuess === 'r') || (userGuess === 's') || (userGuess === 't') || (userGuess === 'u') || (userGuess === 'v') || (userGuess === 'w') || (userGuess === 'x') || (userGuess === 'y') || (userGuess === 'z')){

		if (userGuess === computerGuess) {
			lettersGuessed.push(userGuess);
			wins++;
			lettersGuessed = [];
			guessesLeft = 9;
			var newGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			computerGuess = newGuess;
		}

		if (userGuess !== computerGuess) {
			lettersGuessed.push(userGuess);
			guessesLeft--;
		}

		if (guessesLeft === 0) {
			losses++;
			lettersGuessed = [];
			guessesLeft = 9;
		}

		var html = "<h2>Guess what letter I'm thinking of!</h2>" +
		"<h3>Wins: " +
		wins +
		"</h3>" +
		"<h3>Losses: " +
		losses +
		"</h3>" +
		"<h3>Guesses left: " +
		guessesLeft +
		"</h3>" +
		"<h3>Your guesses so far: " +
		lettersGuessed +
		"</h3>";

		document.querySelector('#game').innerHTML = html;
	}
}