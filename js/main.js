//animation in the login page for sajilo city
const typed = document.querySelector('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 40,
    backSpeed: 15,
    backDelay: 2000
  });
}

//email, pw validation, remember me in login page
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("inputField1");
  const passwordInput = document.getElementById("inputField2");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const emailWarning = document.getElementById("emailWarning");
  const passwordWarning = document.getElementById("passwordWarning");

  //email address validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //input event listener to the email field for real-time validation
  emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    if (!isValidEmail(email)) {
      emailWarning.innerText = "Please enter a valid email address.";
      emailWarning.style.color = "red";
    } else {
      emailWarning.innerText = "";
    }
  });

  // input event listener to the pw field for real-time validation
  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    if (!password) {
      passwordWarning.innerText = "Please enter a password.";
      passwordWarning.style.color = "red";
    } else {
      passwordWarning.innerText = "";
    }
  });

  // blur event listener to the email and password fields
  emailInput.addEventListener("blur", function () {
    if (!isValidEmail(emailInput.value)) {
      emailWarning.innerText = "Please enter a valid email address.";
      emailWarning.style.color = "red";
    } else {
      emailWarning.innerText = "";
    }
  });

  passwordInput.addEventListener("blur", function () {
    if (!passwordInput.value) {
      passwordWarning.innerText = "Please enter a password.";
      passwordWarning.style.color = "red";
    } else {
      passwordWarning.innerText = "";
    }
  });

  // click event listener to the "Login" button
  document.getElementById("loginButton").addEventListener("click", function () {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if a valid email is provided
    if (!isValidEmail(email)) {
      emailWarning.innerText = "Please enter a valid email address.";
      emailWarning.style.color = "red";
      return;
    }

    // Check if a password is provided
    if (!password) {
      passwordWarning.innerText = "Please enter a password.";
      passwordWarning.style.color = "red";
      return;
    }

    // If both email and a password (any value) are provided, we can perform the login action
    // for now redirect to fb
    window.location.href = "https://www.fb.com";
  });
});







