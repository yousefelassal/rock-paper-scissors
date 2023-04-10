const score = document.querySelector("#score");
const playerChoice = document.querySelectorAll(".playerChoice");
const showPlayerScore = document.querySelector("#player-score");
const showComputerScore = document.querySelector("#computer-score");
let playerPlay = document.querySelector("#player-play");
let computerPlay = document.querySelector("#computer-play");
let result = document.querySelector("#result");
let plays = document.querySelector(".result-container");
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
        if(playerSelection == "rock" && computerSelection == "rock") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id=\"rock-gif\" src=\"images/rock.gif\">";
                computerPlay.innerHTML = "<img id=\"rock-gif\" src=\"images/rock.gif\">";
                result.textContent = "It's a tie!";
                plays.classList.add('fadeIn');
            },300);
            return "It's a tie!";
        }
        if(playerSelection == "paper" && computerSelection == "paper") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='paper-gif' src='images/paper.gif'>";
                computerPlay.innerHTML = "<img id='paper-gif' src='images/paper.gif'>";
                result.textContent = "It's a tie!";
                plays.classList.add('fadeIn');
            },300);
            return "It's a tie!";
        }
        if(playerSelection == "scissors" && computerSelection == "scissors") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='scissors-gif' src='images/scissors.gif'>";
                computerPlay.innerHTML = "<img id='scissors-gif' src='images/scissors.gif'>";
                result.textContent = "It's a tie!";
                plays.classList.add('fadeIn');
            },300);
            return "It's a tie!";
            
        }
    }
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='rock-gif' src='images/rock.gif'>";
                computerPlay.innerHTML = "<img id='paper-gif' src='images/paper.gif'>";
                result.textContent = "You lose!";
                plays.classList.add('fadeIn');
            },300);
            return "You lose!";
        }
        if(computerSelection == "scissors") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='rock-gif' src='images/rock.gif'>";
                computerPlay.innerHTML = "<img id='scissors-gif' src='images/scissors.gif'>";
                result.textContent = "You win!";
                plays.classList.add('fadeIn');
            },300);
            return "You win!";
        }
    }
    if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='paper-gif' src='images/paper.gif'>";
                computerPlay.innerHTML = "<img id='rock-gif' src='images/rock.gif'>";
                result.textContent = "You win!";
                plays.classList.add('fadeIn');
            },300);
            return "You win!";
        }
        if(computerSelection == "scissors") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='paper-gif' src='images/paper.gif'>";
                computerPlay.innerHTML = "<img id='scissors-gif' src='images/scissors.gif'>";
                result.textContent = "You lose!";
                plays.classList.add('fadeIn');
            },300);
            return "You lose!";
        }
    }
    if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='scissors-gif' src='images/scissors.gif'>";
                computerPlay.innerHTML = "<img id='rock-gif' src='images/rock.gif'>";
                result.textContent = "You lose!";
                plays.classList.add('fadeIn');
            },300);
            return "You lose!";
        }
        if(computerSelection == "paper") {
            if(plays.classList.contains('fadeIn')) {
                plays.classList.remove('fadeIn');
                plays.classList.add('fadeOut');
            }
            setTimeout(()=>{
                plays.classList.remove('fadeOut');
                playerPlay.innerHTML = "<img id='scissors-gif' src='images/scissors.gif'>";
                computerPlay.innerHTML = "<img id='paper-gif' src='images/paper.gif'>";
                result.textContent = "You win!";
                plays.classList.add('fadeIn');
            },300);
            return "You win!";
        }
    }
}


playGame = function() {
    let playerScore = 0;
    let computerScore = 0;
    showPlayerScore.textContent = `${playerScore}`
    showComputerScore.textContent = `${computerScore}`
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
    
    playerChoice.forEach(choice =>{
        choice.addEventListener("click", () => {
            let playerSelection = choice.value;
            let PlayRound = playRound(playerSelection);
            if(PlayRound == "You win!") {
                console.log("You win!");
                playerScore++;
                setTimeout(()=>{
                    showPlayerScore.textContent = `${playerScore}`
                    console.log(playerScore);
                },300);
            }
            else if(PlayRound == "You lose!") {
                console.log("You lose!");
                computerScore++;
                setTimeout(()=>{
                    showComputerScore.textContent = `${computerScore}`
                    console.log(computerScore);
                },300);
            }
            else{
                console.log("It's a tie!");
            }
            console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
            if(playerScore == ROUNDS || computerScore == ROUNDS) {
                if(playerScore == ROUNDS){
                    gameScreen.classList.remove('fadeIn');
                    gameScreen.classList.add('fadeOut');
                    setTimeout(()=>{
                        winnerScreen.classList.add('fadeIn');
                        winnerText.textContent = "You Won!";
                    },500);
                    
                    return;
                }
                else if(computerScore == ROUNDS){
                    gameScreen.classList.remove('fadeIn');
                    gameScreen.classList.add('fadeOut');
                    setTimeout(()=>{
                        winnerScreen.classList.add('fadeIn');
                        winnerText.textContent = "You Lost!";
                    },500);
                    return;
                }
            }
        })
    })
}

playGame();

playAgainBtn.addEventListener('click', e =>
{
    winnerScreen.classList.remove('fadeIn');
    winnerScreen.classList.add('fadeOut');
    plays.classList.remove('fadeIn');
    plays.classList.add('fadeOut');
    let playerScore = 0;
    let computerScore = 0;
    showPlayerScore.textContent = `${playerScore}`
    showComputerScore.textContent = `${computerScore}`
    playGame();
});