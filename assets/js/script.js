// Variables
const gameRules = {
  "🪨": ["✂️", "🦎"],
  "📃": ["🪨", "🖖"],
  "✂️": ["📃", "🦎"],
  "🦎": ["🖖", "📃"],
  "🖖": ["✂️", "🪨"],
};
let playerScore = 0;
let dealerScore = 0;
let gameInProgress = false;
const detailedMessageElement = document.getElementById(
  "detailed-result-message"
);

/**
   Generates a random choice for the dealer among the available game symbols.
   The symbol represents the dealer's choice.
   */
function dealerChoice() {
  let choices = ["🪨", "📃", "✂️", "🦎", "🖖"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/**
 * Determines the winner of the game round based on player and dealer choices.
 */
function determineWinner(player, dealer) {
  if (player === dealer) {
    return "draw";
  }
  if (gameRules[player].includes(dealer)) {
    return "player";
  } else {
    return "dealer";
  }
}

/**
 * playGame
 * calculates the winner, updates scores, and displays results.
 */
function playGame(playerChoice) {
  if (gameInProgress) return; // <-- prevent new rounds while one is ongoing
  gameInProgress = true; // <-- Mark the start of a game round
  const dealer = dealerChoice();
  const winner = determineWinner(playerChoice, dealer);
  const messageElement = document.getElementById("result-message");
  const playerScoreElement = document.getElementById("player-score-value");
  const dealerScoreElement = document.getElementById("dealer-score-value");
  const dealerChoiceSymbol = document.getElementById("dealer-choice-symbol");

  dealerChoiceSymbol.innerText = dealer;

  // Change background color of dealer-choice-symbol div based on dealer's choice
  switch (dealer) {
    case "🪨":
      dealerChoiceSymbol.style.backgroundColor = "#343333";
      break;
    case "📃":
      dealerChoiceSymbol.style.backgroundColor = "#08607d";
      break;
    case "✂️":
      dealerChoiceSymbol.style.backgroundColor = "#901002";
      break;
    case "🦎":
      dealerChoiceSymbol.style.backgroundColor = "#116351";
      break;
    case "🖖":
      dealerChoiceSymbol.style.backgroundColor = "#7d7507";
      break;
  }
  const symbolNames = {
    "🪨": "Rock",
    "📃": "Paper",
    "✂️": "Scissors",
    "🦎": "Lizard",
    "🖖": "Spock",
  };

  if (winner === "player") {
    detailedMessageElement.innerText = `${playerChoice} ${symbolNames[playerChoice]} beats ${dealer} ${symbolNames[dealer]}`;
  } else if (winner === "dealer") {
    detailedMessageElement.innerText = `${dealer} ${symbolNames[dealer]} beats ${playerChoice} ${symbolNames[playerChoice]}`;
  } else {
    detailedMessageElement.innerText = ""; // Clear the detailed message on a draw
  }

  switch (winner) {
    case "player":
      playerScore++;
      messageElement.innerText = "You win!";
      playerScoreElement.innerText = playerScore;
      break;
    case "dealer":
      dealerScore++;
      messageElement.innerText = "Dealer wins!";
      dealerScoreElement.innerText = dealerScore;
      break;
    default:
      messageElement.innerText = "It's a draw!";
      break;
  }

  setTimeout(() => {
    gameInProgress = false; // <-- Mark the end of a game round
    if (playerScore >= 10) {
      endGame("Player");
    } else if (dealerScore >= 10) {
      endGame("Dealer");
    } else {
      dealerChoiceSymbol.innerText = "";
      detailedMessageElement.innerText = "";
      dealerChoiceSymbol.style.backgroundColor = "transparent";
      messageElement.innerText = "Make your choice!";
    }
  }, 1000);
}

/**
 * endGame
 * Concludes the current game round and displays the overall game winner.
 * Once a player or the dealer reaches a score threshold (e.g., 10 points),
 * the game is considered over. This function updates the game message to
 * show who won the overall game and provides options to either exit or
 * start a new game. The winner is determined based on the cumulative score
 * and is passed as a parameter to this function.
 */
function endGame(winner) {
  detailedMessageElement.innerText = "";
  gameInProgress = true; // Set this flag to true to lock out input.
  const messageElement = document.getElementById("result-message");
  messageElement.innerHTML = `${winner} wins the game! <br>  
  <button id="exit">Exit</button> <button id="new-game">New Game</button>`;
  document.getElementById("exit").addEventListener("click", function () {
    // exit logic here
    // Redirect to a different page or close the window/tab
    // window.close();
  });
  document.getElementById("new-game").addEventListener("click", function () {
    resetGame();
  });
}

/**
 * resetGame
 * Resets the game state to its initial configuration.
 * Sets both the player's and dealer's scores back to zero,
 * updates the displayed score values, and resets the game message
 * to prompt the player to make a new choice. Intended to be used after a game
 * has concluded and the player wishes to start a new game.
 */
function resetGame() {
  gameInProgress = false; // Reset this flag to allow game actions.

  playerScore = 0;
  dealerScore = 0;

  const playerScoreElement = document.getElementById("player-score-value");
  const dealerScoreElement = document.getElementById("dealer-score-value");
  const dealerChoiceSymbol = document.getElementById("dealer-choice-symbol");

  playerScoreElement.innerText = playerScore;
  dealerScoreElement.innerText = dealerScore;
  detailedMessageElement.innerText = "";
  dealerChoiceSymbol.innerText = "";
  dealerChoiceSymbol.style.backgroundColor = "transparent";
  detailedMessageElement.innerText = "";

  document.getElementById("result-message").innerText = "Make your choice!";
}

/**
 * Modal
 * A popup-Window that displays the game's rules.
 */
var modal = document.getElementById("myModal");
var btn = document.getElementById("fixedButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Event Listener
document.querySelectorAll(".choice").forEach(function (button) {
  button.addEventListener("click", function (event) {
    let playerChoice = event.target.innerText;
    playGame(playerChoice);
  });
});
