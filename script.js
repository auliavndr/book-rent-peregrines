// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// welcome alerts
function welcome() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (username && email && password != "") {
    alert("Welcome to Peregrine's!");
  }
}

// thank you alerts
function thankyou() {
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  if (email && date != "") {
    alert("Thank you for your order! Enjoy the book!");
  }
}

// open login
document
  .getElementById("open-login-html")
  .addEventListener("click", function () {
    window.open("login.html", "_self");
  });
