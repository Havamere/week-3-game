var words = ["bard","beholder","cleric","dragon","druid","kobold","mage","monk","orc","paladin","ranger","rogue","skeletons","vampire","warrior"];

	// Create code to randomly choose one of the mystery words 
var wordChoice = words[Math.floor(Math.random()*words.length)];
console.log(wordChoice);

var mysteryWord = [];
mysteryWord.length = wordChoice.length;

window.onload = function () {
	document.getElementById("#mystery-word").innerHTML=wordChoice;
}
var guessedLetters = [];

var wrongGuesses = 0;

document.onkeyup = function(event) {
	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	guessedLetters.push(userGuess);

	for (var a=0; a<guessedLetters.length; a++) {
		if (userGuess == a) {
			guessedLetters.pop(userGuess);
		} else {
			for (var b=0; b<wordChoice.length; b++) {
				if (userGuess == b) {
					mysteryWord[b] = userGuess;
				} else {
					wrongGuesses++;
				}
			}
		}	
	}
}