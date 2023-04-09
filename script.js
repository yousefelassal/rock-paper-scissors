const score = document.querySelector("#score");
const playerChoice = document.querySelectorAll(".playerChoice");
const showPlayerScore = document.querySelector("#player-score");
const showComputerScore = document.querySelector("#computer-score");

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

endGame = function() {
    if(playerScore == 3) {
        alert("You win!");
    }
    else if(computerScore == 3) {
        alert("You lose!");
    }
}

updateScore = function(){
    showPlayerScore.textContent = `${playerScore}`
    showComputerScore.textContent = `${computerScore}`
}

let computerScore = 0;
let playerScore = 0;
playGame = function() {
    // best of 5 rounds (first to get 3)
    updateScore();
    playerChoice.forEach(choice =>{
        choice.addEventListener("click", () => {
            if(playerScore == 3 || computerScore == 3) {
                endGame();
                return;
            }
            let playerSelection = choice.value;
            let PlayRound = playRound(playerSelection);
            if(PlayRound == "You win!") {
                console.log("You win!");
                playerScore++;
                updateScore();
            }
            else if(PlayRound == "You lose!") {
                console.log("You lose!");
                computerScore++;
                updateScore();
            }
            else{
                console.log("It's a tie!");
            }
            console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
            score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
        })
    })
}

playGame();