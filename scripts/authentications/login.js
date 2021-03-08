function loginSubmitHandler(form) {
  const fullname = form.querySelector("input[name='login-name']");
  const password = form.querySelector("input[name='login-password']");
  const fullnameLabel = form.querySelector(".form__label--login-name");
  const passwordLabel = form.querySelector(".form__label--login-password");

  const loginFullname = localStorage.getItem("fullname");
  const loginPassword = localStorage.getItem("password");

  if (!loginFullname || fullname.value !== loginFullname) {
    fullnameLabel.style.color = "red";
    fullnameLabel.setAttribute(
      "data-content",
      " (User with this name is not registered.)"
    );
    return;
  } else {
    fullnameLabel.style.color = "black";
    fullnameLabel.setAttribute("data-content", "");
  }

  if (!loginPassword || password.value !== loginPassword) {
    passwordLabel.style.color = "red";
    passwordLabel.setAttribute("data-content", " (Wrong password inputted.)");
    return;
  }

  localStorage.setItem("isAuthenticated", true);
  window.location.href = "http://127.0.0.1:5500/pages/jokes.html";
}
