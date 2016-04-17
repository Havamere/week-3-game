var mysteryWords = ["bard","beholder","cleric","dragon","druid","kobold","mage","monk","orc","paladin","ranger","rogue","skeletons","vampire","warrior"];

	// Create code to randomly choose one of the mystery words 
var wordChoice = mysteryWords[Math.floor(Math.random()*mysteryWords.length)];




document.onkeyup = function(event) {
	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

}