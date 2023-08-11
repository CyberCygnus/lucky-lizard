// variables
const gameRules = {
  "🪨": ["✂️", "🦎"],
  "📃": ["🪨", "🖖"],
  "✂️": ["📃", "🦎"],
  "🦎": ["🖖", "📃"],
  "🖖": ["✂️", "🪨"],
};

let playerScore = 0;
let dealerScore = 0;

// event listeners

// functions
function dealerChoice() {
  const choices = ["🪨", "📃", "✂️", "🦎", "🖖"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// game logic
