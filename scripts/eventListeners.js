const validatePasswords = function () {
  const password = document.querySelector(
    'input[name="registration-password"]'
  );
  const repeatedPassword = document.querySelector(
    'input[name="registration-repeated-password"]'
  );

  if (password.value === repeatedPassword.value) {
    repeatedPassword.style.border = "1px solid green";
    repeatedPassword.setCustomValidity("");
  } else {
    repeatedPassword.style.border = "1px solid red";
  }
};

const jokeRaterSubmitHandler = function (form) {
  const idInput = form.querySelector("input[name='joke-id']");
  const contentInput = form.querySelector("input[name='joke-content']");
  const ratingInput = form.querySelector("input[name='joke-rating']");
  const contentBox = document.querySelector(".joke__content");

  let savedJokes = JSON.parse(localStorage.getItem("savedJokes"));
  savedJokes.push({
    id: idInput.value,
    content: contentInput.value,
    rating: ratingInput.value,
  });

  savedJokes.sort((jokeA, jokeB) => jokeB.rating - jokeA.rating);

  localStorage.setItem("savedJokes", JSON.stringify(savedJokes));

  ratingInput.value = "";
  contentBox.innerHTML = "";

  displayRater();
  displayRangList();
};

const deleteJokeHandler = function (event) {
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes"));
  const jokeId = event.parentElement.querySelector(".joke__id").innerHTML;
  const deletingJokeIndex = savedJokes.findIndex((joke) => joke.id === jokeId);

  savedJokes.splice(deletingJokeIndex, 1);

  localStorage.setItem("savedJokes", JSON.stringify(savedJokes));

  displayRangList();
};

const fetchNewJokeClickHandler = async function () {
  displayRater();

  const newJoke = await fetchJoke();
  displayJoke(newJoke);
};

const skipJokeClickHandler = async function () {
  const newJoke = await fetchJoke();
  displayJoke(newJoke);
};
