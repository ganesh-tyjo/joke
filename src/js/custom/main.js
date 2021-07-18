// Import content from another script
import { joke } from './joke';

// Import style
import './../../scss/custom/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // Get joke as soon as page loads
  getJoke('general');
});

document.querySelector('#get-joke').addEventListener('click', (e) => {
  const jokeType = document.querySelector(
    '#hear-joke-section #joke-type'
  ).value;

  // Make button disabled until joke fetching is completed
  document.querySelector('#get-joke').disabled = true;

  getJoke(jokeType);
});

document.querySelector('#create-joke').addEventListener('click', (e) => {
  const jokeType = document.querySelector(
    '#create-joke-section #joke-type'
  ).value;
  const setup = document
    .querySelector('#create-joke-section #setup')
    .value.trim();
  const punchline = document
    .querySelector('#create-joke-section #punchline')
    .value.trim();

  if (setup == '' || punchline == '') return;

  // Make button disabled until joke creation is completed
  document.querySelector('#create-joke').disabled = true;

  createJoke(jokeType, setup, punchline);
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

// Create joke using API
const createJoke = (jokeType, setup, punchline) => {
  joke
    .createJoke(jokeType, setup, punchline)
    .then((res) => {
      console.log(res);

      if (res.id != '') alert('joke created successfully');
      else alert('something went wrong');

      //Enable button
      document.querySelector('#create-joke').disabled = false;
    })
    .catch((error) => {
      console.log(error);

      //Enable button
      document.querySelector('#create-joke').disabled = false;
    });
};
