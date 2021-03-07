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

function displayApplicationBox() {

}
