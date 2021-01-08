const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playAgainBtn = document.querySelector(".playAgain");
let resultMessage = document.querySelector(".results");
let winCounter = document.querySelector(".playerScore");
let loseCounter = document.querySelector(".computerScore");
let drawCounter = document.querySelector(".draws");
let winnerMessage = document.querySelector(".bigWin");

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

function resetGame() {
    
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
    if (playerWins >= 3) {
        console.log("Congratulations! You won the best of 5!");
    } else if (computerWins >= 3) {
        console.log("Sorry, but the comouter has won the best of 5.");
    } else {
        console.log("It was a draw. Play another 5 rounds to determine a winner");
    }
}