"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);
let score = 100;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ Enter a number !");
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b346";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    displayMessage("Correct Number !!!");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High 📈" : "Too Low 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over 🙆🏻");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(secretNumber);
});

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
