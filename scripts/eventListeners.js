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

const fetchNewJokeClickHandler = async function () {
  const fetchNewElement = document.querySelector(".fetch__add-new");
  const fetchJokeElement = document.querySelector(".fetch__joke");

  const isJokeBoxActive = !fetchJokeElement.classList.contains("fetch--hidden");

  if (isJokeBoxActive) {
    fetchNewElement.classList.remove("fetch--hidden");
    fetchJokeElement.classList.add("fetch--hidden");
  } else {
    fetchNewElement.classList.add("fetch--hidden");
    fetchJokeElement.classList.remove("fetch--hidden");

    const newJoke = await fetchJoke();
    displayJoke(newJoke);
  }
};

const skipJokeClickHandler = async function () {
  const newJoke = await fetchJoke();
  displayJoke(newJoke);
};
