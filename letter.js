var letter = function() {
	//string to store underlying character
	this.uChar = "";
	//boolean that stores if it has been guessed before
	this.guessed = false;
	//display character if guessed correctly or placeholder if has not been guessed
	this.display = function() {
		if(this.guessed==true) {
			return this.uChar;
		}
		else {
			return "_";
		}
	}
	//takes in character and checks it against underlying character updating value to true if it has been guessed
	this.check = function(char) {
		if(char == this.uChar) {
			this.guessed = true;
		}
	}
}

module.exports = letter;