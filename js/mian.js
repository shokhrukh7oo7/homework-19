let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let trueEmail = "shoxrux@mail.com";
  let truePassword = "12345";

  if (email === trueEmail && password === truePassword) {
    window.location.href = "./table.html";
  } else {
    alert("wrong email or password");
  }
});
