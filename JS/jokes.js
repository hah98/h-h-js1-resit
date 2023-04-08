const URL = "https://api.noroff.dev/api/v1/jokes/";
const results = [];

const container = document.createElement("div");

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    this.results = data;

    console.log(data);
  } catch (error) {
    console.log(error);
    container.innerHTML = "error";
  }
}

fetchData().then(() => {
  this.results.forEach((joke) => {
    /* create container */
    const containerjoke = document.createElement("div");
    containerjoke.className = "containerjoke";
    containerjoke.setAttribute("data-id", joke.id); // give container same id as joke id

    const type = document.createElement("h2");
    type.innerText = joke.type;

    const setup = document.createElement("h1");
    setup.innerText = joke.setup; /* same name as api attribute */

    const button = document.createElement("button");
    button.className = "seeWholeJoke";
    button.innerText = "View whole joke";

    /*  adding elements to little container*/
    containerjoke.appendChild(type);
    containerjoke.appendChild(setup);
    containerjoke.appendChild(button);
    /*  containerjoke.appendChild(punchline); */

    /* adding little container to main containers */
    container.appendChild(containerjoke);
  });

  document.body.appendChild(container);

  /* navigate to joke page*/
  const seeWholeJokeButton = document.querySelectorAll(".seeWholeJoke");
  seeWholeJokeButton.forEach((button) => {
    button.addEventListener("click", () => {
      const jokeId = button.closest(".containerjoke").getAttribute("data-id");
      console.log("JOKE-ID", jokeId);

      // navigate to joke html
      window.location.href = `joke.html?id=${jokeId}`; // navigate to jokes.html with id as parameter
    });
  });
});
