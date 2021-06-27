// Import content from another script
import { joke } from './joke';

// Import style
import './../../scss/custom/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // Get joke as soon as page loads
  getJoke('general');
});

document.querySelector('#get-joke').addEventListener('click', (e) => {
  const jokeType = document.querySelector('#hear-joke #joke-type').value;

  // Make button disabled until joke fetching is completed
  document.querySelector('#get-joke').disabled = true;

  getJoke(jokeType);
});

// Get joke from API and display it on page
const getJoke = (jokeType) => {
  joke
    .getJoke(jokeType)
    .then((joke) => {
      document.querySelector(
        '#joke'
      ).innerHTML = `<div class="setup">${joke.setup.trim()}</div><br /><div class="punchline">${joke.punchline.trim()}</div>`;

      // Enable button
      document.querySelector('#get-joke').disabled = false;
    })
    .catch((error) => {
      document.querySelector(
        '#joke'
      ).innerHTML = `<div class="error">Something went wrong !!</div>`;

      //Enable button
      document.querySelector('#get-joke').disabled = false;
    });
};
