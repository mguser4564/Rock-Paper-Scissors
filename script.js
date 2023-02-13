let playerScore = 0;
let computerScore = 0;
let playerChoiceElement = document.querySelector("#player-choice");
let computerChoiceElement = document.querySelector("#computer-choice");
let resultElement = document.querySelector("#result");
let playerScoreElement = document.querySelector("#player-score");
let computerScoreElement = document.querySelector("#computer-score");
const btns = document.querySelectorAll('.Button')


function getPlayerChoice() {
  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const id = event.target.getAttribute('id');
      playRound(id);
    });
  });
};

function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3);
  if (ComputerChoice == 0) {
    return "ROCK"
  } else if (ComputerChoice == 1) {
    return "PAPER"
  } else if (ComputerChoice == 2) {
    return "SCISSORS"
  };
};

function playRound(PlayerChoice) {
  let playerChoice = PlayerChoice
  let computerChoice = getComputerChoice();
  let result = '';
  if (playerChoice == "ROCK" && computerChoice == "ROCK") {
    result = "TIE";
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    result = "COMPUTER";
    computerScore += 1;
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    result = "PLAYER";
    playerScore += 1;
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    result = "PLAYER";
    playerScore += 1;
  } else if (playerChoice == "PAPER" && computerChoice == "PAPER") {
    result = "TIE";
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    result = "COMPUTER";
    computerScore += 1;
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    result = "COMPUTER";
    computerScore += 1;
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    result = "PLAYER";
    playerScore += 1;
  } else if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
    result = "TIE";
  }

  playerChoiceElement.textContent = `Player: ${playerChoice}`;
  computerChoiceElement.textContent = `Computer: ${computerChoice}`;
  resultElement.textContent = `Result: ${result}`;
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;

  setTimeout(function() {
    announceWinner();
  }, 50);
};

function announceWinner() {
  if (playerScore == 5)
  {
    alert(`The game is over. The player wins!`)
  resetGame();
} 
  else if (computerScore == 5){
    alert(`The game is over. The computer wins!`)
  resetGame();
}
};

function resetGame(){
playerScore = 0;
computerScore = 0;
playerChoiceElement.textContent = `Player:`;
computerChoiceElement.textContent = `Computer:`;
resultElement.textContent = `Result:`;
playerScoreElement.textContent = `Player: 0`;
computerScoreElement.textContent = `Computer: 0`;
};

getPlayerChoice();
