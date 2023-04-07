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
    if (joke.type === "general") {
      /* create container */
      const containerjoke = document.createElement("div");

      const general = document.createElement("h2");
      general.innerText = joke.type;

      const setup = document.createElement("h1");
      setup.innerText = joke.setup; /* same name as api attribute */

      const button = document.createElement("button");
      button.innerText = "View punchline";
      /* button.onclick;
    window.location = "../jokes.html"; */

      /*  const button = document.querySelector("button");
    button.innerText = "View punchline";

    button.addEventListener("click", () => {
        window.location = URL "../jokes.html"
     });

    /* const punchline = document.createElement("button");
    punchline.innerText = joke.punchline; */

      /*  adding elements to little container*/
      containerjoke.appendChild(general);
      containerjoke.appendChild(setup);
      containerjoke.appendChild(button);
      /*  containerjoke.appendChild(punchline); */

      /* adding little container to main containers */
      container.appendChild(containerjoke);
    }
  });

  document.body.appendChild(container);
});
