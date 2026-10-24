const AUTH_KEY = "7XiIP6bwFzsoypPp1nr5TIj5h98SyZIN";
const USERNAME = "1234";
const PASSWORD = "1234";

if (document.body.hasAttribute("data-auth-required")) {
  if (sessionStorage.getItem(AUTH_KEY) !== "true") {
    window.location.replace("access.html");
  } else {
    document.body.hidden = false;
  }

  document.getElementById("logout").addEventListener("click", () => {
    sessionStorage.removeItem(AUTH_KEY);
    window.location.replace("access.html");
  });
}

const loginForm = document.getElementById("login-form");
const authenticatedActions = document.getElementById("authenticated-actions");
if (authenticatedActions && loginForm) {
  const isAuthenticated = sessionStorage.getItem(AUTH_KEY) === "true";
  loginForm.hidden = isAuthenticated;
  authenticatedActions.hidden = !isAuthenticated;
}

const addQualificationButton = document.getElementById("add-qualification");
if (addQualificationButton) {
  addQualificationButton.addEventListener("click", () => {
    window.location.assign("addqual.html");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("login-error");

    if (username === USERNAME && password === PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      window.location.replace("access.html");
      return;
    }

    error.hidden = false;
    document.getElementById("password").focus();
  });
}
