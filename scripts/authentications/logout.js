function logoutClickHandler() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  localStorage.setItem("isAuthenticated", false);
  window.location.href = "http://127.0.0.1:5500/pages/authentication.html";
}
