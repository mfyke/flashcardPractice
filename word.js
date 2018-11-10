var letter = require("./letter.js");

var word = function(currentWord) {
	//new array of letters with the letters of the underlying word
	this.currentWord=currentWord;
	this.letters = [];
	this.createLetters = function() {
		for (var i = 0; i<currentWord.length; i++) {
			this.letters += new letter(currentWord.charAt(i));
		}
	}
	//function that returns string that is the word call the letter function and return the letters or underscores and concatinate them together
	this.wordReturn = function() {
		var wordProgress = "";
		for(var i = 0; i < this.letters.length; i++) {
			wordProgress += letters[i].display();
		}
		console.log(wordProgress);
	}
	//function that takes in character as an argument and calls the guess function from the letter object
	this.checkLetter = function(character) {
		for(var i = 0; i < this.letters.length; i++) {
			this.letters[i].check;
		}
	}
}

module.exports = word;