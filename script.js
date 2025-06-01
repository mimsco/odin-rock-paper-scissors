'use strict'

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
  }
  return computerChoice;
}

const getHumanChoice = function () {
  return prompt('Please type rock, paper or scissors').toLowerCase();
}

function playGame () {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a draw! Play again.`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'scissors' && humanChoice === 'paper') {
      console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore} and Computer score: ${computerScore}`);
  }

  const gameWinner = (humanScore > computerScore) ? 'human' : 'computer';

  console.log(`Final score: human: ${humanScore} and computer: ${computerScore}. The winner is ${gameWinner}!`);
}

playGame();