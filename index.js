var word = require("./word.js");
var selectedWord;
var answers = ["california", "nevada", "utah", "hawaii", "arizona", "oklahoma", "arkansas", "florida", "virginia", "pennsylvania", "ohio", "massachusetts"];
var wordOb;
var remainingGuesses = 10;
var inquirer = require("inquirer");
var guessedCharacters=[];
var correct;
var winningScore = answers.length;
var currentScore = 0;
//randomly selects a word and uses the word constructor to store it
var randword = function() {	
	var mult = answers.length;
	var num = Math.floor(Math.random()*mult);
	selectedWord = answers[num];
	wordOb = new word(selectedWord);
	wordOb.createLetters();
	answers.splice(num,1);
}

// randword();
//inquires player to guess and keep track of remaining guesses
var startGame = function () {
	remainingGuesses=10;
	answers = ["california", "nevada", "utah", "hawaii", "arizona", "oklahoma", "arkansas", "florida", "virginia", "pennsylvania", "ohio", "massachusetts"];
	randword();
	inquirer.prompt([
		{
			name: "start",
			message: "Welcome to the state name guessing game. Guess all the states I have traveled to in order to win the game. Would you like to start the game(y/n)?"	
		}
	]).then(function(answers) {
		if(answers.start=="y") {
			guessing();
		}
	});
}

var guessing = function() {
	inquirer.prompt([
		{
			name: "letter",
			message: wordOb.wordReturn()
		}
	]).then(function(answers) {
		if(guessedCharacters.indexOf(answers.letter)<0) {
		guessedCharacters.push(answers.letter)
		var precheck = wordOb.wordReturn();
		wordOb.checkLetter(answers.letter);
		var afterCheck = wordOb.wordReturn();
		// if guess is correct then keep guessing and do not decrease guesses
				if(precheck != afterCheck) {
					if (wordOb.wordReturn().indexOf("_")<0) {
						nextQuestion();
					}
					else{
					guessing();
					}
				}
				else{
					remainingGuesses--;
					console.log("Guesses Remaining: " + remainingGuesses);
					if(remainingGuesses==0) {
						loseGame();
					}
					else{
					guessing();
					}
				}
		// if guess is incorrect then lose a life and keep guessing
		}
		else {
			console.log("this letter has already been guessed");
			guessing();
		}

	});

}

var winGame = function() {
	console.log("You win!");
}
var loseGame = function() {
	console.log("You lose!");
}
var nextQuestion = function() {
	currentScore++;
	if(currentScore==winningScore) {
		winGame();
	}
	else{
	console.log("next question");
	remainingGuesses=10;
	randword();
	guessedCharacters=[]
	guessing();
	}
}


startGame();