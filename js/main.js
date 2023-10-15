// Animation in the login page
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

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("inputField1");
  const passwordInput = document.getElementById("inputField2");
  const rememberMeCheckbox = document.getElementById("rememberMe");

  // Check if "rememberMe" data is stored in local storage and populate the fields if it exists
  if (localStorage.getItem("rememberMeData")) {
    const data = JSON.parse(localStorage.getItem("rememberMeData"));
    emailInput.value = data.email;
    passwordInput.value = data.password;
    rememberMeCheckbox.checked = true;
  }

  // Add a click event listener to the "Login" button
  document.getElementById("loginButton").addEventListener("click", function () {
    // Get the user input
    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if "Remember Me" is checked and save data to local storage
    if (rememberMeCheckbox.checked) {
      const rememberMeData = JSON.stringify({ email, password });
      localStorage.setItem("rememberMeData", rememberMeData);
    } else {
      // If "Remember Me" is not checked, remove the data from local storage
      localStorage.removeItem("rememberMeData");
    }

    // Perform other login actions as needed
    // Example: loginForm.submit();
  });
});
