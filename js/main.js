// Function to get dice's random value


// Function to "roll" the dice by calling the previous function 3 times
let i = 0

let setRandomDiceValue = () => {  // Handler
	// Do the dice roll here
	 let DiceValue = Math.floor(Math.random() * 6) + 1; 
    // Update HTML content
    document.querySelector("#diceimg").setAttribute('src', `/dice-roll/img/dice${DiceValue}.svg`);
    document.querySelector("#rolledText").innerHTML = `You rolled ${DiceValue}`;
     // Change the document's title 
    document.title = `Random Dice Roll - ${DiceValue}`; 
	// Now check if we should set another timeout, or just reset the clock for next time
	if (i < 3) {
		setTimeout(setRandomDiceValue, 100)
		i++
	} else {
		i = 0
	}
}

document.querySelector("#rollBtn").addEventListener('click', setRandomDiceValue)  

/* Steps: 
1. Get the random value.
2. Change HTML values.
3. Set the listener on click button.
4. Deal with the zero.
5. Roll the dice?
 */
