function registrationSubmitHandler(form) {
  const fullname = form.querySelector("input[name='registration-name']");
  const password = form.querySelector("input[name='registration-password']");
  const repeatedPassword = form.querySelector(
    "input[name='registration-repeated-password']"
  );

  if (password.value !== repeatedPassword.value) {
    repeatedPassword.setCustomValidity("Password Must be Matching.");
  } else {
    repeatedPassword.setCustomValidity("");
  }

  localStorage.setItem("fullname", fullname.value);
  localStorage.setItem("password", password.value);

  displayAuthenticationBox();
}
