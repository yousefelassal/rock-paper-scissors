const score = document.querySelector("#score");
const playerChoice = document.querySelectorAll(".playerChoice");

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

playRound = function(playerSelection) {
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection) {
        return "It's a tie!";
    }
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            return "You win!";
        }
        if(computerSelection == "scissors") {
            return "You lose!";
        }
    }
    if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "You win!";
        }
        if(computerSelection == "scissors") {
            return "You lose!";
        }
    }
    if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return "You lose!";
        }
        if(computerSelection == "paper") {
            return "You win!";
        }
    }
}

let computerScore = 0;
let playerScore = 0;
playGame = function() {
    // best of 5 rounds (first to get 3)
    playerChoice.forEach(choice =>{
        choice.addEventListener("click", () => {
            let playerSelection = choice.value;
            let PlayRound = playRound(playerSelection);
            if(PlayRound == "You win!") {
                console.log("You win!");
                playerScore++;
            }
            else if(PlayRound == "You lose!") {
                console.log("You lose!");
                computerScore++;
            }
            else{
                console.log("It's a tie!");
                showScore.textContent = "It's a tie!";
            }
            console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
            score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
        })
    })
}

playGame();