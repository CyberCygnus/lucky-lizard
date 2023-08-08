# Lucky Lizard

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

In `style.css`, `flex: 1 0 calc(50% - 10px);` is used in the `.choice` class. This property is shorthand for setting three properties of a flex item: `flex-grow`, `flex-shrink`, and `flex-basis`.

- `flex-grow: 1;` - This allows the item to grow and take up any extra space in the container if it's available. The `1` value means all flex items will grow at the same rate.

- `flex-shrink: 0;` - This means that the item should not shrink if the container becomes too small.

- `flex-basis: calc(50% - 10px);` - This sets the initial main size of the item before it's distributed space according to the flex factors (`flex-grow` and `flex-shrink`). `calc(50% - 10px)` is used to calculate the width of each item. It's set to 50% of the container's width minus 10px for the margin around items.
  Source: [Using CSS flexible boxes - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

## Credits

### Content

### Media
