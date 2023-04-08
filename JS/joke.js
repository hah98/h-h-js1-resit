const urlParams = new URLSearchParams(window.location.search);
const jokeId = urlParams.get("id");

const URL = `https://api.noroff.dev/api/v1/jokes/${jokeId}`; // fetch one joke
const joke = "";

const container = document.createElement("div");

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    this.joke = data;
  } catch (error) {
    console.log(error);
    container.innerHTML = "error";
  }
}

fetchData().then(() => {
  /* create container */
  const containerjoke = document.createElement("div");
  containerjoke.className = "containerjoke"; // style i css HUSK DET HIBO

  const type = document.createElement("h2");
  type.innerText = this.joke.type;

  const setup = document.createElement("h1");
  setup.innerText = this.joke.setup; /* same name as api attribute */

  const button = document.createElement("button");
  button.className = "punchlineButton";
  button.innerText = "View punchline";

  // punchline hidden before clicked
  const punchline = document.createElement("p");
  punchline.className = "punchline";
  punchline.innerText = this.joke.punchline;
  punchline.style.display = "none";

  /*  adding elements to little container*/
  containerjoke.appendChild(type);
  containerjoke.appendChild(setup);
  containerjoke.appendChild(button);
  containerjoke.appendChild(punchline);

  /* adding little container to main containers */
  container.appendChild(containerjoke);
  document.body.appendChild(container);

  const punchlineButton = document.querySelector(".punchlineButton");
  punchlineButton.addEventListener("click", () => {
    punchlineButton.style.display = "none"; // hide button when clicked

    const punchline = document.querySelector(".punchline");
    punchline.style.display = "block";
  });
});
