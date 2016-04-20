 	// Words and img source to play the game with
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
var compChoice = [Math.floor(Math.random()*rewardsArr.length)];
var wordChoice = rewardsArr[compChoice].word;
console.log(wordChoice);

	//Shows user correct guesses.
var mysteryWord = [];
mysteryWord.length = wordChoice.length;

window.onload = function () {
	document.querySelector("#mystery-word").innerHTML=mysteryWord;
}
// counter needed to account for loss
var wrongGuesses = 0;

document.onkeyup = function(event) {
	// Determines which exact key was selected. Makes it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	// Checks if user entry is a match to any letter in  the mystery word and updates html if it is
	if (wordChoice.indexOf(userGuess) >= 0) {
		mysteryWord[wordChoice.indexOf(userGuess)] = userGuess;
		document.querySelector("#mystery-word").innerHTML = mysteryWord;
	// Accounts for winning condition
		if (mysteryWord.join("") == wordChoice) {
	 		document.querySelector("#reward").src=rewardsArr[compChoice].source;
	 		document.querySelector("#mystery-word").innerHTML = "You have won!";
	 	}
	// Covers letters that don't match any letters in the mystery word
	} else {
		wrongGuesses++;
		console.log(wrongGuesses);
	// Accounts for loss condition
		if (wrongGuesses == 8) {
		document.querySelector("#mystery-word").innerHTML = "You have lost.";
		}
	}
}
