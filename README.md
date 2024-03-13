# Memory Word Game

## Table of Contents
+ [User Experience](#user-experience)
  + [User Stories](#user-stories)
  + [Design](#design)
    + [Colour Scheme](#colour-scheme)
    + [Typography](#typography)   
+ [Features](#features)
  + [Existing Features](#existing-features)
  + [Future Features](#future-features)
+ [Technologies Used](#technologies-used)
  + [Languages Used](#languages-used)
  + [Frameworks Libraries and Programmes Used](#frameworks-libraries-and-programmes-used)
+ [Testing](#testing)
  + [Validator Testing](#validator-testing)
  + [Lighthouse Testing](#lighthouse-testing)
  + [Responsiveness](#responsiveness)
  + [Problems Encountered](#problems-encountered)
+ [Deployment](#deployment)
  + [Deployment through GitHub Pages](#deployment-through-gitHub-pages)
+ [Credits](#credits)
  + [Code](#code)
  + [Acknowledgements](#acknowledgements)

## User Experience
### User Stories
- As a player, I want to be able to start a new game easily.
- As a player, I want to be able to flip cards to reveal the hidden words.
- As a player, I want to enjoy a visually pleasing and responsive game interface.
- As a player, I want to track the time taken to complete the game.

### Design
The Memory Word Game is a fun and challenging game that tests your memory skills. It involves flipping cards to find matching pairs of words. The game presents a grid of cards, each containing a hidden word. Players flip the cards to reveal the words and try to find matching pairs by remembering the locations of the words. The game aims to improve memory and concentration while providing an entertaining experience for players of all ages. Enjoy the challenge and see how many pairs you can match! Color Scheme The Memory Word Game features a color scheme designed to provide a visually appealing and engaging experience for players.

- **Blue (#61adec)**: The primary color used for the header and footer, creating a vibrant and inviting atmosphere for players.
- **Blue (#1971b8f9)**: The background color complements the overall game layout, providing a neutral and calming mini backdrop.
- **Black (#252323)**: Used for text and header elements, offering a clear and legible contrast against the background.
- **White (#fff)**: Utilized for text in the header and footer, ensuring visibility and readability against the blue background.
- **Chocolate (#d2691e)**: Utilized as a background color for the game, ensuring visibility and vividness against the game components.

#### Typography
The game utilizes a clear and easy-to-read font to ensure a comfortable reading experience for players.

## Features
### Existing Features
- Dynamic generation of cards with shuffled word pairs
- Interactive card flipping
- Restart button to start a new game

### Game Grid Layout

The Memory Word Game features a grid layout that provides an intuitive and interactive interface for players. The grid comprises a series of cards, each displaying a hidden word. These cards are arranged in rows and columns, creating a visually organized game board.

- **Responsive Design**: The grid layout is designed to be responsive, adapting to various screen sizes and devices for a seamless gaming experience.
- **Card Flipping Animation**: When a player clicks on a card, it flips to reveal the hidden word, adding an engaging visual element to the gameplay.
- **Matching Pairs**: Players aim to find matching pairs of words by flipping the cards, testing their memory and cognitive skills.

The grid layout enhances the gameplay experience, providing a structured and visually appealing platform for players to enjoy the Memory Word Game.

### Future Features
- Implement a timer to track the time taken to complete the game
- Add different difficulty levels with varying grid sizes
- Addition of an image style for cards to increase the visibility and feel.
- Adding a function to stop timer once all the cards have been matched.
- A game log chart for best time record of completion.
- Add custom 404 page

## Technologies Used
### Languages Used
- HTML
- CSS
- JavaScript

### Frameworks, Libraries, and Programmes Used
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site.
- [CSS roots](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) was used to declaring global CSS variables and apply them throughout the project. 
- [Visual Studio Code](https://code.visualstudio.com) was used as the main tool to write and edit code.
- [Codeanywhere](https://app.codeanywhere.com/) was used as a tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [GIMP](https://www.gimp.org/) was used to make and resize images for the README file.

## Testing
### Validator Testing
- HTML, CSS, and JavaScript code were validated using W3C Markup Validation Service and JShint.

### Lighthouse Testing
- The game was tested using Lighthouse for performance, accessibility, best practices, and SEO.

### Responsiveness
- The game was tested on various devices and screen sizes to ensure responsiveness.

### Bugs
- Insertion of images on the cards as background was a challenge as the text where appearing on the image. This was fixed by disenabling the image from the card.
- Cards revealed texts that were overlapping the card margin when the tab was minimized. It was resolved by changing the words with short words that could fit in the cards even when minimized. 
- Faced a problem when creating the timer for the game so that the user would enjoy a time-based game. the specific problem was with the logic of the timer and how to link the function of the timer to the logic function. I finally managed to overcome it by watching YouTube videos and advice from my mentor.
- header and footer not within the window bar view. tried to adjust the width and height of the Header, Main and Footer but still the page was showing incorrectly. I finally had to write a small code on the Java script which fixed the problem. 


## Deployment
### Deployment through GitHub Pages
This site was deployed through GitHub Pages using the following steps:

-Log into GitHub.

-Locate the repository.

-Click the "settings" option along the options bar.

-Then go to the "Pages" tab in the left-hand side sidebar.

-Then under "Source" click the "None" dropdown and select the "Master" branch

-Click the save button.

-The page will update and at the top, it will say: "Your site is ready to be published at https://tkodimac.github.io/power_memory_java/


## Credits
### Code
-Inspiration for most responsive functions for the game came from my mentor and slack group(https://app.slack.com)'.
General inspiration came from [Code institute](https://codeinstitute.net).

### Acknowledgements

-[Julia Konn](https://github.com/IuliiaKonovalova), my mentor and coding partner, assisted me greatly in project development , and selection control implementation and helped me withstand pressure.
- [Code Institute](https://codeinstitute.net/) tutors and Slack community members for their support and help.



