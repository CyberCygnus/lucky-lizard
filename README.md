# Lucky Lizard

The Lucky Lizard game is a fun variation of the traditional Rock, Paper, Scissors game, with the addition of two more choices: Lizard and Spock (represented by emojis).

- [Lucky Lizard](#lucky-lizard)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Unfixed Bugs](#unfixed-bugs)
  - [Deployment](#deployment)
  - [Code Explanations](#code-explanations)
    - [CSS Flex Property in `.choice`](#css-flex-property-in-choice)
    - [JavaScript](#javascript)
      - [`dealerChoice()`](#dealerchoice)
      - [`determineWinner(player, dealer)`](#determinewinnerplayer-dealer)
      - [`playGame(playerChoice)`](#playgameplayerchoice)
      - [Introduced `gameInProgress` state variable.](#introduced-gameinprogress-state-variable)
      - [Event Handlers](#event-handlers)
      - [](#)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)

## Features

### Existing Features

### Features Left to Implement

- Another feature idea

## Testing

### Validator Testing

- HTML

- CSS

- JavaScript
  - [Jshint validator](https://jshint.com/)

### Unfixed Bugs

## Deployment

## Code Explanations

### CSS Flex Property in `.choice`

In `style.css`, `flex: 0 1 calc(20% - 10px);` is used in the `.choice` class. This property is shorthand for setting three properties of a flex item: `flex-grow`, `flex-shrink`, and `flex-basis`.

- `flex-grow: 0;` - This allows the item to grow and take up any extra space in the container if it's available. The `0` value means all flex items will not grow beyond their initial size even if there is additional space in the container.

- `flex-shrink: 1;` - This means that the item can shrink if the container becomes too small. A value of `1` means all flex items will shrink at the same rate if necessary.

- `flex-basis: calc(20% - 10px);` - This sets the initial main size of the item before it's distributed space according to the flex factors (`flex-grow` and `flex-shrink`). `calc(20% - 10px)` is used to calculate the width of each item. It's set to 20% of the container's width minus 10px for the margin around items.
  Source: [Using CSS flexible boxes - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

### JavaScript

The script uses a set of global variables to manage the game state:

- `gameRules`: An object that maps each choice to an array of choices it can defeat.
- `playerScore` and `dealerScore`: Counters for the player's and dealer's scores.

#### `dealerChoice()`

Generates a random choice for the dealer among the available game symbols.

#### `determineWinner(player, dealer)`

Compares the player's and dealer's choices to decide the round's outcome.

#### `playGame(playerChoice)`

Executes the main game logic. This includes determining the winner, updating scores, and reflecting the results in the UI.

#### Introduced `gameInProgress` state variable.

- A state variable, `gameInProgress`, has been added to track if a game round is currently ongoing. This prevents new rounds from starting while one is already in progress, ensuring game integrity.
- The `playGame` function now checks if a game round is in progress before initiating a new one. This ensures that players can't trigger multiple game rounds by clicking rapidly.

#### Event Handlers

Bind user interactions with the game symbols to trigger game rounds.

**Implementation:**  
For each choice symbol (button) with the class `.choice`, a click event listener is attached. Upon a click, the chosen symbol is passed to the `playGame()` function, initiating a game round.

####

## Credits

### Content

### Media
