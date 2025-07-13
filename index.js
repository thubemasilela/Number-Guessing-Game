const message = document.getElementById("message");
const inputBox = document.getElementById("inputBox");
const submitBtn = document.getElementById("submitBtn");

const minNum = 0;
const maxNum = 100;
const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(num);

let attempts = 0;

submitBtn.onclick = game;

function game() {
  const guess = Number(inputBox.value);

  /*Check if the user has entered a valid number */
  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    message.textContent = "Please enter a number between " + minNum + " - " + maxNum;
    window.alert("Invalid input");
  } else {
    attempts++;

    /*Responds according to guess */
    if (guess < num) {
      message.textContent = "TOO LOW! TRY AGAIN!";
    } else if (guess > num) {
      message.textContent = "TOO HIGH! TRY AGAIN!";
    } else {
      message.textContent = "CORRECT!! That was the correct number (" + num + "). It took you " + attempts + " attempts!";
    }
  }
  
  // Clear the input box and focus back on inputBox
  inputBox.value = "";
  inputBox.focus();
}