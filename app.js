/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Have in mind:
/*
DOM select elements; 
Generate random number; 
Event listerers; 
Validate user input; 
Check if won scenario; 
Code for if won; 
Set message about guesses left and correct answer if lost in p class = 'message'
*/
const minNumber = document.body.querySelector(".min-num");
minNumber.innerHTML = 1;
const maxNumber = document.body.querySelector(".max-num");
maxNumber.innerHTML = 10;
minNumber.style.color = "red";
maxNumber.style.color = "green";
let threeGuess = 3;
const message = document.body.querySelector(".message");
//random number generator
const randomNum = Math.ceil(Math.random() * 10);

//listen input

document.getElementById("guess-btn").addEventListener("click", playGame);

//Play Game Function
let guessArray = [];
function playGame(event) {
  console.log(randomNum);
  let input = Number(document.getElementById("guess-input").value);

  if (input < 1 || input > 10) {
    alert("Wrong guess, please guess from 1 to 10");
    document.getElementById("guess-input").value = " ";
  } else if (guessArray.includes(input)) {
    alert(
      "You already guessed this number: " + input + " try different number"
    );
  } else {
    guessArray.push(input);
    if (randomNum === input) {
      message.innerHTML = "You won, Congradualations!";
      message.style.color = "green";
      createBtn();
    } else if (threeGuess === 1) {
      message.innerHTML =
        "You lost, please try again. TRUE ANSWER WAS: " + randomNum;
      message.style.color = "red";
      createBtn();
    } else {
      --threeGuess;
      message.innerHTML =
        "You missed, try again. Still have " + threeGuess + " guess.";
      message.style.color = "red";
      console.log(guessArray);
    }

    // Kodel jei darau input = ""; Man neclearina input, gal gali pakomentuoti kodel?
    document.getElementById("guess-input").value = " ";
  }
}

function createBtn() {
  const gameDiv = document.getElementById("game");
  const btn = document.createElement("button");
  btn.setAttribute("type", "submit");
  btn.name = "tryAgain";
  btn.innerHTML = "Try again";
  gameDiv.insertBefore(btn, gameDiv.lastElementChild);
  document.getElementById("guess-btn").remove();
  document
    .querySelector("button")
    .addEventListener("click", () => location.reload());
}
