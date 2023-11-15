/*Building a Number-guessing Game*/



	let randomNumber = Math.floor((Math.random() * 100) + 1);

	let tries = 0;

	let maxTries = 3;

	function submitGuess() {

	event.preventDefault();

	  let userGuess = document.getElementById("guess").value;


	  if(isNaN(userGuess) || userGuess < 1 || userGuess > 100 ) {
	  	document.getElementById("message").textContent = "Invalid input! Please enter a number between 1 and 100";
	  } else {
	  	tries ++;

	  	if(userGuess === randomNumber) {
	  		document.getElementById("message").textContent = "Congrats! You found the number in " + tries + "tries.";
	  	} else if(tries >= maxTries) {
	  		document.getElementById("message").textContent = "Sorry, you didn't guess the number in" + maxTries + "tries. The number was" + randomNumber + ".";
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