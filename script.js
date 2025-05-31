'use strict'

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a draw! Play again.`);
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (computerChoice === 'rock' && humanChoice === 'scissors' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'scissors' && humanChoice === 'paper') {
    computerScore++;
    console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
  }
}

playRound(getHumanChoice(), getComputerChoice());