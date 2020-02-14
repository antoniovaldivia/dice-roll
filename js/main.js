
let setRandomDiceValue = () => {
    let DiceValue = Math.floor(Math.random() * 6) + 1; 
    if (DiceValue == 0 ) { 
    DiceValue = 1;
    }
    document.querySelector("#diceimg").setAttribute('src', `/img/dice${DiceValue}.svg`);
    document.querySelector("#rolledText").innerHTML = `You rolled ${DiceValue}`;
    // document.querySelector(`body`).setAttribute('title', `Random Dice Roll - ${DiceValue}`);
    document.title = `Random Dice Roll - ${DiceValue}`; 
    console.log(DiceValue);
};

document.querySelector("#rollBtn").addEventListener('click', setRandomDiceValue);


/* document.querySelector("body").addEventListener('mousemove', setRandomDiceValue);
 */
/* 
1. Get the random value.
2. Change html values.
3. Set the listener on click button.
4. Deal with the zero.
 */