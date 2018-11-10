var word = require("./word.js");
var selectedWord = new word("tariq");

var game = function() {
	//randomly selects a word and uses the word constructor to store it
	console.log(selectedWord);
	//inquires player to guess and keep track of remaining guesses
	console.log(selectedWord.createLetters());
	console.log(selectedWord);
}

game();