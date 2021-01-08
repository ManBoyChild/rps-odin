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
playAgainBtn.addEventListener("click,", resetGame);

function playGame(e) {
    playerSelection(e);
    resultMessage.innerText = playRound(playerInput, computerPlay())
    console.log(playerWins, computerWins, draws);
    winCounter.innerText = `${playerWins}`;
    loseCounter.innerText = `${computerWins}`;
    drawCounter.innerText = `${draws}`;
    bigWinner();
}

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
    winnerMessage.innerText = "";
}

function playerSelection (event) {
    let playerChoiceText = document.querySelector(".playerChoice");
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

// Listing the computer choices in an array
let choices = ["Rock", "Paper", "Scissors"];

// This is the computer player
// First an array of the different choices is initialized
// Second the choice is randomized from the array
// Finally the random choice is returned and stored in compPlayer
function computerPlay () {
    let computerChoiceText = document.querySelector(".computerChoice");
    let computerchoiceResult = document.querySelector(".computerResult");
    
    let randomSelect = Math.floor(Math.random() * choices.length);
    computerchoiceResult.innerText = ` ${choices[randomSelect]}`;
    return choices[randomSelect]; 
}

// This function plays a single round of Rock, Paper, Scissors
// It takes the random computer choice and player input as values
// Both player and computer choices are converted to upper to nullify and strange inputs
// The choices are put through 6 if else statments to see who wins
function playRound (player, computer) {
    // Deals with any strange inputs from the user
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