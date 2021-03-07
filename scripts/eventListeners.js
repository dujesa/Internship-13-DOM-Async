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
