/*Building a Number-guessing Game*/


/*
Step 1: Create an html doc with a numerical input field for the user and a submit and reset button to restart game.
Step 2: Create a css file to style html page.
Step 3: In javascript, declare variables for the number of attempts the user can guess and to have only whole integers.
Step 4: Define a function that will print various messages if specifiied conditions from user input are met. 
Step 5: Define a variable that will reset the game.
*/



/*

JavaScript

First, I declared a few variables, one intialized for the number of tries and another variable for the maximum amount of tries before resetting the game.
I then declared another variable to generate a random number from 1 - 100 using the Math.random method. I also used the Math.floor method to ensure 
that the numbers are rounded down to the nearest whole number.

Next, I defined a function with an event as a parameter that will be called when the user inputs a number. To prevent the submit button from submitting a 
form due to no backend, I used the preventDefault event method to cancel it. I then declared another variable called userGuess and assigned it to access the 
id of the input field from the html doc. The value property will be used to get the current number the user entered. Within the function, I set up some conditional 
statements to print the messages based on user inputs.

Finally, I defined another function that will rest the amount of user tries as well as clearing the input and messages.

*/







	let randomNumber = Math.floor((Math.random() * 100) + 1);

	let tries = 0;

	let maxTries = 3;

	function submitGuess(event) {
  
  	  event.preventDefault();

	  let userGuess = document.getElementById("guess").value;


	  if(isNaN(userGuess) || userGuess < 1 || userGuess > 100 ) {
	  	document.getElementById("message").textContent = "Invalid input! Please enter a number between 1 and 100.";
	  } else {
	  	tries ++;

	  	if(userGuess === randomNumber) {
	  		document.getElementById("message").textContent = "Congrats! You found the number in " + tries + "tries.";
	  	} else if(tries >= maxTries) {
	  		document.getElementById("message").textContent = "Sorry, you didn't guess the number in " + maxTries + " tries. The number was " + randomNumber + ".";
	  	} else if(userGuess < randomNumber) {
	  		document.getElementById("message").textContent = "Too Low. Try again!";
	  	} else if(userGuess > randomNumber) {
	  		document.getElementById("message").textContent = "Too High. Try again!";
	  	}
	  }
	}	


	function resetGame() {
	  randomNumber = Math.floor(Math.random() * 100) + 1;
	  tries = 0;
	  document.getElementById("guess").value = "";
	  document.getElementById("message").textContent = "";	
	}