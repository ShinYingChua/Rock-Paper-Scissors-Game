let computerSelection;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;

function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function playRound() {
    if (computerSelection === playerSelection) {
        narratorText.innerText = 'It is a Tie!';
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === 'scissors') {
        narratorText.innerText = "SY choose rock! You lost this round!";
        ++computerPoints;
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === 'paper') {
        narratorText.innerText = "SY choose rock! You win this round!";
        ++playerPoints;
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === 'scissors') {
        narratorText.innerText = "SY choose paper! You lost this round!";
        ++computerPoints;
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === 'rock') {
        narratorText.innerText = "SY choose paper! You win this round!";
        ++playerPoints;
    }
    else if (computerSelection === "scissors" && playerSelection === 'paper') {
        narratorText.innerText = "SY choose scissors! You lost this round!";
        ++computerPoints;
        checkWinner();
    }
    else if (computerSelection === "scissors" && playerSelection === 'rock') {
        narratorText.innerText = "SY choose scissors! You win this round!";
        ++playerPoints;
        checkWinner();
    }
}

function checkWinner() {
    if (playerPoints < 5 && computerPoints < 5) {
    } else {
        declareWinner();
        playerPoints = 0;
        computerPoints = 0;
    }
}

function declareWinner() {
    if (playerPoints === 5) {
        narratorText.innerText = "Congratulations, you won the game!"
    } else if (computerPoints === 5) {
        narratorText.innerText = "Sorry, you lost the game! Let's play again!"
    }
}

function updateScore() {
    score.innerText = `SCORE: ${playerPoints} / ${computerPoints}`;
}

const rockButton = document.querySelector('#rock-btn');
rockButton.addEventListener('click', function () {
    computerPlay();
    playerSelection = 'rock';
    playRound();
    updateScore();
});

const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener('click', function () {
    computerPlay();
    playerSelection = 'paper';
    playRound();
    updateScore();
});

const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener('click', function () {
    computerPlay();
    playerSelection = 'scissors';
    playRound();
    updateScore();
});

const score = document.querySelector('#score');
updateScore();
const narratorText = document.querySelector(".narrator-text");

const images = document.querySelectorAll('.fist-img');
const leftFist = images.item(0);
const rightFist = images.item(1);

rockButton.addEventListener('click', function () {
    revealLeft();
    revealRight();
})

scissorsButton.addEventListener('click', function () {
    revealLeft();
    revealRight();
})

paperButton.addEventListener('click', function () {
    revealLeft();
    revealRight();
})

function revealLeft() {
    if (playerSelection === 'rock') {
        leftFist.src = 'images/rock.png';
    } else if (playerSelection === 'paper') {
        leftFist.src = 'images/paper.png';
    } else if (playerSelection === 'scissors') {
        leftFist.src = 'images/scissors.png';
    } else {
        console.log('ERROR')
    }
}

function revealRight() {
    if (computerSelection === 'rock') {
        rightFist.src = 'images/rock_inv.png';
    } else if (computerSelection === 'paper') {
        rightFist.src = 'images/paper_inv.png';
    } else if (computerSelection === 'scissors') {
        rightFist.src = 'images/scissors_inv.png';
    } else {
        console.log('ERROR')
    }
}