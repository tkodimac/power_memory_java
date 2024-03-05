// Define the word pairs for the game
const words = ['apple', 'banana', 'orange', 'grape', 'melon', 'strawberry', 'pineapple', 'peach'];

// Duplicate the word pairs to create matching pairs
const wordPairs = [...words, ...words];

// Shuffle the word pairs
wordPairs.sort(() => Math.random() - 0.5);

// Create the memory cards
const cardContainer = document.getElementById('card-container');

wordPairs.forEach((word, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.word = word;
  card.textContent = '?'; // Hide word initially

  card.addEventListener('click', () => {
    card.textContent = word; // Reveal word
    // Implement card flip logic here
  });

  cardContainer.appendChild(card);
});

// Implement card flip logic and game rules
// Add interactivity and game logic
// Add event listeners for the restart button

// Add additional JavaScript code to handle game logic, interactivity, and responsiveness