
$(document).ready(function() {
		
		//define array with all singer names
		var bands = ["madonna", "britneyspears", "bryanadams", "ericclapton", "adele", "eltonjohn"];

		//User can take only 10 guesses
		var guessCount = 10;

		//array to capture entered letters which are not part of the singer name
		var usedLetters = [ ];

		//variable to capture the singer name randomly
		var displayedBand = bands[Math.floor(Math.random() * bands.length)];

		//this will return # of blanks as per the singer selected randomly
		var blanks = displayedBand.split("").map(function(){return "_"});

		//variable to capture the winner
		var wins = 0;

		//displays wins
		document.getElementById("wins").innerHTML = wins;

		//display "_" characters onto the html page based on the random singer selected 
		document.getElementById("displayed-band").innerHTML = blanks.join(" ");

		//displays remaining guesses
		document.getElementById("guess-remain").innerHTML = guessCount;

		//displays letters already used
		document.getElementById("used-letters").innerHTML = usedLetters;
		
		//capture input from user key event
		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
			var index = displayedBand.indexOf(userGuess);

			//If the user guessed the correct letter/s
			while(index > -1) {
				//add it to blanks array to the position indicated by the index
				blanks[index] = userGuess;
				//display the data entered by the user
				document.getElementById("displayed-band").innerHTML = blanks.join(" ");
				//Go to the next index position for the same letter if it is available
				//index will return the position of the next occurrence of the letter 
				//in the singer name
				index = displayedBand.indexOf(userGuess,index + 1);
			};

			//If the user guessed the wrong letter/s
			if(displayedBand.indexOf(userGuess) == -1){
				//stops wrong letters from repeating
				if(usedLetters.indexOf(userGuess) == -1){
					//add the letter to the end of the array 
					usedLetters.push(userGuess);
					//decrease the counter by 1
					guessCount--;
					//display the decreased counter in the html
					document.getElementById("guess-remain").innerHTML = guessCount;
				};

				//display the wrong letter entered by the user
				document.getElementById("used-letters").innerHTML = 
															usedLetters.join(" ");
			};

			//if user guessed the singer correctly
			if(blanks.indexOf("_") == -1){
				//increment the winning counter
				wins++;
				//display the winning counter
				document.getElementById("wins").innerHTML = wins;
				//get the next singer from the displayband array
				displayedBand = bands[Math.floor(Math.random() * bands.length)];
				//get the number of "_" based on # of characters of the singer
				blanks = displayedBand.split("").map(function(){return "_"});
				//display # of "_" character onto the html page
				document.getElementById("displayed-band").innerHTML = blanks.join(" ");
				//initialize the guess counter to 10 attempts
				guessCount = 10;
				//display the guess counter again
				document.getElementById("guess-remain").innerHTML = guessCount;
				//initialize the used letters array to blank element
				usedLetters = [ ];
				//display the blank element
				document.getElementById("used-letters").innerHTML = 
															usedLetters.join(" ");
			};

			//if user exhausted all entries and couldn't guess the singer
			if(guessCount == 0){
				//get the next singer from the displayband array randomly
				displayedBand = bands[Math.floor(Math.random() * bands.length)];
				//get the number of "_" based on # of characters of the singer
				blanks = displayedBand.split("").map(function(){return "_"});
				//display "_" characters onto the html page
				document.getElementById("displayed-band").innerHTML = blanks.join(" ");
				//initialize the guess counter to 10 attempts
				guessCount = 10;
				//display the guess counter again
				document.getElementById("guess-remain").innerHTML = guessCount;
				//initialize the used letters array to blank element
				usedLetters = [ ];
				//display the blank element
				document.getElementById("used-letters").innerHTML = 
															usedLetters.join(" ");
			};

		};
	});