const score = document.querySelector("#score");
const playerChoice = document.querySelectorAll(".playerChoice");
const showPlayerScore = document.querySelector("#player-score");
const showComputerScore = document.querySelector("#computer-score");
const roundsBtn = document.querySelectorAll(".rounds");
const introScreen = document.querySelector('.intro');
const gameScreen = document.querySelector('.container');
let winnerScreen = document.querySelector('.winner-screen');
let winnerText = document.querySelector('.winner-screen .text');
let playAgainBtn = document.querySelector('.winner-screen button');


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
    let playerScore = 0;
    let computerScore = 0;
    showPlayerScore.textContent = `${playerScore}`
    showComputerScore.textContent = `${computerScore}`
}


playGame = function(playerScore,computerScore) {
    computerScore = 0;
    playerScore = 0;
    introScreen.classList.remove('fadeOut');
    introScreen.classList.add('fadeIn');
    let ROUNDS = 0;
    roundsBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            ROUNDS = btn.value;
            console.log(ROUNDS);
            introScreen.classList.add('fadeOut');
            introScreen.classList.remove('fadeIn');
            gameScreen.classList.remove('fadeOut');
            gameScreen.classList.add('fadeIn');
        })
    })
    
    updateScore();
    playerChoice.forEach(choice =>{
        choice.addEventListener("click", () => {
            let playerSelection = choice.value;
            let PlayRound = playRound(playerSelection);
            if(PlayRound == "You win!") {
                console.log("You win!");
                playerScore++;
                showPlayerScore.textContent = `${playerScore}`
                console.log(playerScore);
            }
            else if(PlayRound == "You lose!") {
                console.log("You lose!");
                computerScore++;
                showComputerScore.textContent = `${computerScore}`
                console.log(computerScore);
            }
            else{
                console.log("It's a tie!");
            }
            console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
            if(playerScore == ROUNDS || computerScore == ROUNDS) {
                if(playerScore == ROUNDS){
                    gameScreen.classList.remove('fadeIn');
                    gameScreen.classList.add('fadeOut');
                    winnerScreen.classList.add('fadeIn');
                    winnerText.textContent = "You Won!";
                    return;
                }
                else if(computerScore == ROUNDS){
                    gameScreen.classList.remove('fadeIn');
                    gameScreen.classList.add('fadeOut');
                    winnerScreen.classList.add('fadeIn');
                    winnerText.textContent = "You Lost!";
                    return;
                }
            }
        })
    })
}

playGame();

let pScore = 0;
let cScore = 0;
resetScore = function(){
    updateScore();
}

playAgainBtn.addEventListener('click', e =>
{
    winnerScreen.classList.remove('fadeIn');
    winnerScreen.classList.add('fadeOut');
    resetScore();
    playGame(pScore,cScore);
});


// TO DO:
//show the plays on screen
// show what the computer chose
// show what the player chose
// show who won