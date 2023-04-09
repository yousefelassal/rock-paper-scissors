const score = document.querySelector("#score");
const playerChoice = document.querySelectorAll(".playerChoice");
const showPlayerScore = document.querySelector("#player-score");
const showComputerScore = document.querySelector("#computer-score");
const roundsBtn = document.querySelectorAll(".rounds");
const introScreen = document.querySelector('.intro');


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


updateScore = function(){
    showPlayerScore.textContent = `${playerScore}`
    showComputerScore.textContent = `${computerScore}`
}

let computerScore = 0;
let playerScore = 0;
playGame = function() {
    let ROUNDS = 0;
    roundsBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            ROUNDS = btn.value;
            console.log(ROUNDS);
        })
    })
    endGame = function() {
        if(playerScore == ROUNDS) {
            alert("You win!");
        }
        else if(computerScore == ROUNDS) {
            alert("You lose!");
        }
    }
    
    
    updateScore();
    playerChoice.forEach(choice =>{
        choice.addEventListener("click", () => {
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
            if(playerScore == ROUNDS || computerScore == ROUNDS) {
                updateScore();
                endGame();
                return;
            }
        })
    })
}

playGame();

resetScore = function(){
    playerScore = 0;
    computerScore = 0;
}