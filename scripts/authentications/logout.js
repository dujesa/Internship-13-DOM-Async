function logoutClickHandler() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  localStorage.setItem("isAuthenticated", false);
  window.location.href = authenticationUrl;
}
