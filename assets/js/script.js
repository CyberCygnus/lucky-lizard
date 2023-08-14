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

// Functions
/**
   Generates a random choice for the dealer among the available game symbols.
   The symbol represents the dealer's choice.
   */
function dealerChoice() {
  let choices = ["🪨", "📃", "✂️", "🦎", "🖖"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// game logic
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

  dealerChoiceSymbol.innerText = dealer; // Show dealer's choice
  // dealerChoiceSymbol.style.fontSize = "4em"; // Make the dealer's choice symbol four times bigger

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
  const dealerChoiceSymbol = document.getElementById("dealer-choice-symbol"); // Get reference to dealer choice symbol

  playerScoreElement.innerText = playerScore;
  dealerScoreElement.innerText = dealerScore;

  dealerChoiceSymbol.innerText = ""; // Clear the dealer's choice symbol
  dealerChoiceSymbol.style.backgroundColor = "transparent"; // Reset background color

  document.getElementById("result-message").innerText = "Make your choice!";
}

/* Modal */
var modal = document.getElementById("myModal"); // Get the modal
var btn = document.getElementById("fixedButton"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
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
