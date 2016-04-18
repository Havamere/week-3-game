 	// Words to play the game with
var words = ["bard","beholder","cleric","dragon","druid","kobold","mage","monk","orc","paladin","ranger","rogue","skeletons","vampire","warrior"];

var rewardsObj = {
	"bard" : url("../images/bard.jpg"),
	"beholder" : url("../images/beholder.jpg"),
	"cleric" : url("../images/cleric.jpg"),
	"dragon" : url("../images/dragon.jpg"),
	"druid" : url("../images/druid.jpg"),
	"kobold" : url("../images/kobold.jpg"),
	"mage" : url("../images/mage.jpg"),
	"monk" : url("../images/monk.jpg"),
	"orc" : url("../images/orc.jpg"),
	"paladin" : url("../images/paladin.jpg"),
	"ranger" : url("../images/ranger.jpg"),
	"rogue" : url("../images/rogue.jpg"),
	"skeletons" : url("../images/skeletons.jpg"),
	"vampire" : url("../images/vampire.jpg"),
	"warrior" : url("../images/warrior.jpg"),
}

	// Create code to randomly choose one of the mystery words 
var wordChoice = words[Math.floor(Math.random()*words.length)];
console.log(wordChoice);

document.querySelector("#reward-section")innerHTML=rewardsObj[wordChoice];

var mysteryWord = [];
mysteryWord.length = wordChoice.length;

var display = "";

window.onload = function () {
	document.querySelector("#mystery-word").innerHTML=wordChoice;
}
var guessedLetters = [1];
var counter = 0;
var wrongGuesses = 0;

document.onkeyup = function(event) {
	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	console.log(guessedLetters);
	wrongGuesses = wrongGuesses + counter;
	for (var d=0; d<mysteryWord.length; d++){
		display = display + mysteryWord[d];
	}
	document.querySelector("#mystery-word").innerHTML=display;
}
	// for (var a=0; a<guessedLetters.length; a++) {
	// 	if (userGuess == guessedLetters[a]) {
	// 		guessedLetters.pop();
	// 	} else {
	// 		guessedLetters.push(userGuess);
	// 		for (var b=0; b<wordChoice.length; b++) {
	// 			if (userGuess == wordChoice[b]) {
	// 				mysteryWord[b] = userGuess;
	// 				counter = 0;
	// 				console.log(mysteryWord);
	// 			} else {
	// 				counter = 1;
	// 				if (wrongGuesses == 8) {
	// 					mysteryWord = "You have lost."
	// 				}
	// 			}
	// 		}
	// 	}	
	// }