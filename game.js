let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".scoree").textContent = 20;

let score = 20;
let highscore = 0;

document.querySelector(".click-button").addEventListener("click", function () {
  const valuee = Number(document.querySelector(".valuee").value);

  // when no input
  if (!valuee) {
    document.querySelector(".home-h112").textContent = "Enter a valid Number";
  }

  // when player wins the game
  else if (valuee === secretNumber) {
    document.querySelector(".home-h112").textContent = "You won";
    document.querySelector(".home-h113").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    //implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscoree").textContent = highscore;
    }
  }

  // when guessed number is not equal to the number
  else if (valuee !== secretNumber) {
    if (score > 1) {
      document.querySelector(".home-h112").textContent =
        valuee > secretNumber ? "Too high" : "Too Low";
      score--;
      document.querySelector(".scoree").textContent = score;
    }
  }

  // when number is high
  else if (valuee > secretNumber) {
    if (score > 1) {
      document.querySelector(".home-h112").textContent = "Too high";
      score--;
      document.querySelector(".scoree").textContent = score;
    }

    //when player lost the game
    else {
      document.querySelector(".home-h112").textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "rgb(255, 50, 50)";
    }
  }

  // when number is low
  else if (valuee < secretNumber) {
    if (score > 1) {
      document.querySelector(".home-h112").textContent = "Too low";
      score--;
      document.querySelector(".scoree").textContent = score;
    }

    //when player lost the game
    else {
      document.querySelector(".home-h112").textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "rgb(255, 50, 50)";
    }
  }
});

//when player select reset button
document.querySelector(".againbutton").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  document.querySelector(".scoree").textContent = score;
  document.querySelector("body").style.backgroundColor = "#040035";
  document.querySelector(".home-h113").textContent = "?";
  document.querySelector(".valuee").value = "";
  document.querySelector(".home-h112").textC;
  ontent = "Start Guessing";
});
