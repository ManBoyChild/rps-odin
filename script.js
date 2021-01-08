const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playAgainBtn = document.querySelector(".playAgain");
let resultMessage = document.querySelector(".results");
let winCounter = document.querySelector(".playerScoreCount");
let loseCounter = document.querySelector(".computerScoreCount");
let drawCounter = document.querySelector(".drawScoreCount");

let playerInput = "";
let playerWins = 0;
let computerWins = 0;
let draws = 0;

rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);
playAgainBtn.addEventListener("click", resetGame);

// Called by each the three buttons. Executes a single round and updates all of the neccesary DOM
function playGame(e) {
    playerSelection(e);
    resultMessage.innerText = playRound(playerInput, computerPlay())
    winCounter.innerText = `${playerWins}`;
    loseCounter.innerText = `${computerWins}`;
    drawCounter.innerText = `${draws}`;
    bigWinner();
}

// Resets the game when the button is pressed
function resetGame (e) {
    let playerChoiceResult = document.querySelector(".playerResult");
    let computerchoiceResult = document.querySelector(".computerResult");
    let winnerMessage = document.querySelector(".bigWin");

    playerInput = "";
    playerWins = 0;
    computerWins = 0;
    draws = 0;

    playerChoiceResult.innerText = "";
    computerchoiceResult.innerText = "";
    resultMessage.innerText = "";
    winCounter.innerText = "";
    loseCounter.innerText = "";
    drawCounter.innerText = "";
    winnerMessage.innerText = "";
}

// To determine which button (Rock, Paper, Scissors) the player selected
function playerSelection (event) {
    let playerChoiceResult = document.querySelector(".playerResult");

    if (event.target.classList.contains("rock")) {
        playerInput = "Rock";
    } else if (event.target.classList.contains("paper")) {
        playerInput = "Paper";
    } else if (event.target.classList.contains("scissors")) {
        playerInput = "Scissors";
    }
    return playerChoiceResult.innerText = ` ${playerInput}`;
}

// This is the computer player who choses randomly from an array
function computerPlay () {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerchoiceResult = document.querySelector(".computerResult");
    
    let randomSelect = Math.floor(Math.random() * choices.length);
    computerchoiceResult.innerText = ` ${choices[randomSelect]}`;
    return choices[randomSelect]; 
}

// This function plays a single round of Rock, Paper, Scissors
function playRound (player, computer) {
    // Use toUppereCase() so inputs are equal
    player = player.toUpperCase();
    computer = computer.toUpperCase();

    if (player === computer){
        draws += 1;
        return `It's a draw. You picked ${player} and the computer picked ${computer}.`;
    } else if (player === "ROCK" && computer === "PAPER") {
        computerWins += 1;
        return `Sorry, you lose. You picked ${player} and the computer picked ${computer}.`;
    } else if (player === "PAPER" && computer === "SCISSORS") {
        computerWins += 1;
        return `Sorry, you lose. You picked ${player} and the computer picked ${computer}.`;
    } else if (player === "SCISSORS" && computer === "ROCK") {
        computerWins += 1;
        return `Sorry, you lose. You picked ${player} and the computer picked ${computer}.`;
    } else if (player === "PAPER" && computer === "ROCK") {
        playerWins += 1;
        return `Yay, you win. You picked ${player} and the computer picked ${computer}.`;
    } else if (player === "SCISSORS" && computer === "PAPER") {
        playerWins += 1;
        return `Yay, you win. You picked ${player} and the computer picked ${computer}.`;
    } else if (player === "ROCK" && computer === "SCISSORS") {
        playerWins += 1;
        return `Yay, you win. You picked ${player} and the computer picked ${computer}.`;
    }
}

// Announces the first person to reach a score of 5
function bigWinner() {
    let winnerMessage = document.querySelector(".bigWin");

    if (playerWins === 5) {
        winnerMessage.innerText = "Congratulations! You have beaten the computer! If you would like to play again, press the button bellow.";
    } else if (computerWins === 5) {
        winnerMessage.innerText = "Better luck next time! The computer beat you! If you would like to play again, press the button bellow.";
    } else {
        winnerMessage.innerText = "";
    }
}