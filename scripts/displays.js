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
  const jokeInput = document.querySelector("input[name='joke-content']");

  if (!!joke.joke) {
    jokeBox.innerHTML = joke.joke;
    jokeInput.value = joke.joke;
  }
}
