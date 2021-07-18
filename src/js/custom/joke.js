export const joke = {
  // Fetch random joke from API
  getJoke: (jokeType) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/${jokeType}`
      )
        .then((res) => res.json())
        .then((data) => resolve(data[0]))
        .catch((error) => reject(error));
    });
  },
  createJoke: (jokeType, setup, punchline) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/jokes/create`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            type: jokeType,
            setup: setup,
            punchline: punchline,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },
};
