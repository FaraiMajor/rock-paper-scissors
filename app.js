let selection = "",
    computerScore = 0,
    playerScore = 0,
    draw = 0,
    playerSelection = "",
    computerSelection = "";


function computerPlay() {
    let play = Math.floor(Math.random() * 3) + 1;
    if (play === 1) {
        selection = "rock";
        return selection;
    } else if (play === 2) {
        selection = "paper";
        return selection;
    } else {
        selection = "scissors";
        return selection;
    }
}


function playRound(playerSelection, computerSelection) {
    //prompt player to make a pick
    let playerHand = prompt("Enter one: rock, paper, or scissors");

    computerSelection = computerPlay();
    playerSelection = playerHand;

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("You won! rock beats scissors");
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("You won! paper beats rock");
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log("You won! scissors beats paper");
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("You lost! rock beats scissors");
        computerScore++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log("You lost! paper beats rock");
        computerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("You lost! scissors beats paper");
        computerScore++;
    } else {
        console.log("DRAW!!!!")
        draw++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('You win!     (You: ' + playerScore + '  Computer: ' + computerScore + ' Draw: ' + draw + ')');
    } else {
        console.log('You lost...  (You: ' + playerScore + '  Computer: ' + computerScore + ' Draw: ' + draw + ')');
    }
}
game();