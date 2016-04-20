// var words = ["bard","beholder","cleric","dragon","druid","kobold","mage","monk","orc","paladin","ranger","rogue","skeletons","vampire","warrior"];

// var rewardsObj = {
//  	bard : "assets/images/bard.jpg",
//  	beholder : "assets/images/beholder.jpg",
//  	cleric : "assets/images/cleric.jpg",
//  	dragon : "assets/images/dragon.jpg",
//  	druid : "assets/images/druid.jpg",
//  	kobold : "assets/images/kobold.jpg",
//  	mage : "assets/images/mage.jpg",
//  	monk : "assets/images/monk.jpg",
//  	orc : "assets/images/orc.jpg",
//  	paladin : "assets/images/paladin.jpg",
//  	ranger : "assets/images/ranger.jpg",
//  	rogue : "assets/images/rogue.jpg",
//  	skeletons : "assets/images/skeletons.jpg",
//  	vampire : "assets/images/vampire.jpg",
//  	warrior : "assets/images/warrior.jpg",
//  }

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
//var wordChoice = words[Math.floor(Math.random()*words.length)];
 var compChoice = [Math.floor(Math.random()*rewardsArr.length)];
 var wordChoice = rewardsArr[compChoice].word;

console.log(wordChoice)

var mysteryWord = [];
mysteryWord.length = wordChoice.length;

document.querySelector("#reward").src=rewardsArr[compChoice].source;

window.onload = function () {
	document.querySelector("#mystery-word").innerHTML=mysteryWord;
}
// counters for game updates
var counter = 0;
var wrongGuesses = 0;

document.onkeyup = function(event) {
	// Determines which exact key was selected. Makes it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	if (wrongGuesses == 8) {
		document.querySelector("#mystery-word").innerHTML = "You have lost.";
	} else if (mysteryWord.join("") == wordChoice) {
		document.querySelector("#reward").src=rewardsArr[compChoice].source;
		document.querySelector("#mystery-word").innerHTML = "You have won!";
	} else if (wordChoice.indexOf(userGuess) >= 0) {	// attempt use of indexOf and/or charAt
		mysteryWord[wordChoice.indexOf(userGuess)] = userGuess;
		document.querySelector("#mystery-word").innerHTML = mysteryWord;
		console.log(wordChoice.indexOf(userGuess));
	} else {
		wrongGuesses++;
		console.log(wrongGuesses);
		}
	}
}
// 	console.log(guessedLetters);
// 	wrongGuesses = wrongGuesses + counter;
// 	for (var d=0; d<mysteryWord.length; d++){
// 		display = display + mysteryWord[d];
// 	}
// 	document.querySelector("#mystery-word").innerHTML=display;
// }
// 		for (var b=0; b<wordChoice.length; b++) {
// 			if (userGuess == wordChoice.atChar(b)) {
// 				mysteryWord[b] = userGuess;
// 				counter = 0;
// 				console.log(mysteryWord);
// 			} 
// 		}
// 	}	
// }
//}