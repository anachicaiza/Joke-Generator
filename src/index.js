function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke() {
  let context =
    "You are an AI assistant that tells short and funny jokes and don't repeat itself.";
  let prompt =
    "Generate a UNIQUE and different joke every time the button is clicked. Display only the joke, avoid extra comments. Display it in basic HTML code but only the joke no extra tags. Example: <p>This is a joke</p>";
  let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeBox = document.querySelector("#joke");
  jokeBox.innerHTML = "Generating a joke for you, please wait..!";

  axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);
