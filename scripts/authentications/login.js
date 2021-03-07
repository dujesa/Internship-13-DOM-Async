function loginSubmitHandler(form) {
  const fullname = form.querySelector("input[name='login-name']");
  const password = form.querySelector("input[name='login-password']");
  const loginFullname = localStorage.getItem("fullname");
  const loginPassword = localStorage.getItem("password");
console.log("cdujn");
fullname.setCustomValidity("");
password.setCustomValidity("");

  if (!loginFullname || fullname.value !== loginFullname) {
    fullname.setCustomValidity("User with this name is not registered!");

    return;
  } else {
  }

  if (!loginPassword || password.value !== loginPassword) {
    password.setCustomValidity(
      "Password is not matching with registered user!"
    );

    return;
  } else {
  }

  console.log("Successfully logged in!");
}
