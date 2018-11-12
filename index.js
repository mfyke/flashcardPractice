var word = require("./word.js");
var selectedWord;
var answers = ["california", "nevada", "utah", "hawaii", "arizona", "oklahoma", "arkansas", "florida", "virginia", "pennsylvania", "ohio", "massachusetts"];
var wordOb;
var remainingGuesses = 10;
//randomly selects a word and uses the word constructor to store it
var randword = function() {	
	var num = Math.floor(Math.random()*12);
	selectedWord = answers[num];
	wordOb = new word(selectedWord);
	wordOb.createLetters();
	answers.splice(num,1);
	// console.log(answers);
	// console.log(num);
	// console.log(selectedWord);
	// console.log(wordOb);
}

// randword();
//inquires player to guess and keep track of remaining guesses





