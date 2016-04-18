 	// Words to play the game with
var words = ["bard","beholder","cleric","dragon","druid","kobold","mage","monk","orc","paladin","ranger","rogue","skeletons","vampire","warrior"];

var rewardsArr = [
	{word: "bard" , source: "assets/images/bard.jpg"},
	{word: "beholder" , source: "assets/images/beholder.jpg"},
	{word: "cleric" , source: "assets/images/cleric.jpg"},
	{word: "dragon" , source: "assets/images/dragon.jpg"},
	{word: "druid" , source: "assets/images/druid.jpg"},
	{word: "kobold" , source: "assets/images/kobold.jpg"},
	{word: "mage" , source: "assets/images/mage.jpg"},
	{word: "monk" , source: "assets/images/monk.jpg"},
	{word: "orc" , source: "assets/images/orc.jpg"},
	{word: "paladin" , source: "assets/images/paladin.jpg"},
	{word: "ranger" , source: "assets/images/ranger.jpg"},
	{word: "rogue" , source: "assets/images/rogue.jpg"},
	{word: "skeletons" , source: "assets/images/skeletons.jpg"},
	{word: "vampire" , source: "assets/images/vampire.jpg"},
	{word: "warrior" , source: "assets/images/warrior.jpg"}
];

	// Create code to randomly choose one of the mystery words 
var wordChoice = words[Math.floor(Math.random()*words.length)];

console.log(wordChoice);
console.log(rewardsArr[wordChoice]-"");

document.querySelector("#reward").src=rewardsArr[wordChoice].source;

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
	// 			if (userGuess == wordChoice.atChar(b)) {
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