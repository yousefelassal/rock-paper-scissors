getComputerChoice = function() {
    choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

playRound = function(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection) {
        return "It's a tie!";
    }
    if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection == "paper") {
            return "You win!";
        }
        if(computerSelection == "scissors") {
            return "You lose!";
        }
    }
    if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection == "rock") {
            return "You win!";
        }
        if(computerSelection == "scissors") {
            return "You lose!";
        }
    }
    if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection == "rock") {
            return "You lose!";
        }
        if(computerSelection == "paper") {
            return "You win!";
        }
    }
}

game = function() {
    // best of 5 rounds (first to get 3)
    computerScore = 0;
    playerScore = 0;

    while(playerScore != 3 && computerScore != 3) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = getComputerChoice();
        PlayRound = playRound(playerSelection, computerSelection);
        console.log(PlayRound);
        if(PlayRound == "You win!") {
            playerScore++;
        }
        if(PlayRound == "You lose!") {
            computerScore++;
        }
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
}
game();