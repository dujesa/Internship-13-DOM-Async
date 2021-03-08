function displayAuthenticationBox() {
  const loginBox = document.querySelector(".box__login");
  const registrationBox = document.querySelector(".box__registration");

  if (localStorage.getItem("fullname") && localStorage.getItem("password")) {
    loginBox.style.display = "inline-block";
    registrationBox.style.display = "none";
  } else {
    loginBox.style.display = "none";
    registrationBox.style.display = "inline-block";
  }
}

function displayJoke(joke) {
  const jokeBox = document.querySelector(".joke__content");
  const jokeContentInput = document.querySelector("input[name='joke-content']");
  const jokeIdInput = document.querySelector("input[name='joke-id']");

  if (!!joke.joke && !!joke.id) {
    jokeBox.innerHTML = joke.joke;
    jokeIdInput.value = joke.id;
    jokeContentInput.value = joke.joke;
  }
}

function displayRater() {
  const fetchNewElement = document.querySelector(".fetch__add-new");
  const fetchJokeElement = document.querySelector(".fetch__joke");

  const isJokeBoxActive = !fetchJokeElement.classList.contains("fetch--hidden");

  if (isJokeBoxActive) {
    fetchNewElement.classList.remove("fetch--hidden");
    fetchJokeElement.classList.add("fetch--hidden");
  } else {
    fetchNewElement.classList.add("fetch--hidden");
    fetchJokeElement.classList.remove("fetch--hidden");
  }
}

function displayRangList() {
  const rangList = document.querySelector(".rang-list__jokes");
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes"));

  const rangListContent = savedJokes.map((joke, index) => {
    return `
    <div class="jokes__joke">
              <span class="joke__ranking">${index + 1}.</span>
              <span class="joke__id">${joke.id}</span>
              <span class="joke__caption">${joke.content}</span>
              <span class="joke__rating">(Rating: ${joke.rating})</span>
              <span class="joke__delete" onclick="deleteJokeHandler(this)">Delete</span>
            </div>
    `;
  });

  rangList.innerHTML = rangListContent.join("");
}
