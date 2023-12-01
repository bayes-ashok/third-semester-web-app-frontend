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

  // Load stored "Remember Me" data from local storage
  const storedData = localStorage.getItem("rememberMeData");
  if (storedData) {
    const data = JSON.parse(storedData);
    emailInput.value = data.email;
    passwordInput.value = data.password;
    rememberMeCheckbox.checked = true;
  }

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

    // Check if "Remember Me" is checked and save data to local storage
    if (rememberMeCheckbox.checked) {
      const rememberMeData = JSON.stringify({ email, password });
      localStorage.setItem("rememberMeData", rememberMeData);
    } else {
      localStorage.removeItem("rememberMeData");
    }

    // If both email and a password (any value) are provided, we can perform the login action
    // for now redirect to fb
    window.location.href = "https://www.fb.com";
  });
});


//validation in signup
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const nameInput = document.getElementById("sName");
  const emailInput = document.getElementById("sEmail");
  const passwordInput = document.getElementById("sPW");
  const confirmPasswordInput = document.getElementById("sCPW");
  const citizenshipPhotoInput = document.getElementById("citizenshipPhoto");
  const emailWarningSignUp = document.getElementById("emailWarningSignUp");
  const passwordWarningSignUp = document.getElementById("passwordWarningSignUp");
  const confirmPasswordWarningSignUp = document.getElementById("confirmPasswordWarningSignUp");
  const nameWarningSignUp = document.getElementById("nameWarningSignUp");
  const citizenshipPhotoWarningSignUp = document.getElementById("citizenshipPhotoWarningSignUp");

  // // Validate an email address
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate a strong password
  function isValidStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return strongPasswordRegex.test(password);
  }

  // Input event listener to the email field for real-time validation
  emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    if (!isValidEmail(email)) {
      emailWarningSignUp.innerText = "Please enter a valid email address.";
      emailWarningSignUp.style.color = "red";
    } else {
      emailWarningSignUp.innerText = "";
    }
  });

  // Input event listener to the password field for real-time validation
  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    if (!isValidStrongPassword(password)) {
      passwordWarningSignUp.innerText = "Password must be strong (at least 8 characters with uppercase, lowercase, digits, and at least one special character among \"@\", \"#\", \"$\", \"%\", \"^\", \"&\", or \"+\").";
      passwordWarningSignUp.style.color = "red";
    } else {
      passwordWarningSignUp.innerText = "";
    }
  });

  // Input event listener to the name field for real-time validation
  nameInput.addEventListener("input", function () {
    const name = nameInput.value;
    if (!name) {
      nameWarningSignUp.innerText = "Name cannot be empty.";
      nameWarningSignUp.style.color = "red";
    } else {
      nameWarningSignUp.innerText = "";
    }
  });

  // Input event listener to the citizenship photo field for real-time validation
  citizenshipPhotoInput.addEventListener("change", function () {
    const citizenshipPhoto = citizenshipPhotoInput.files[0];
    if (!citizenshipPhoto) {
      citizenshipPhotoWarningSignUp.innerText = "Citizenship photo is required.";
      citizenshipPhotoWarningSignUp.style.color = "red";
    } else {
      citizenshipPhotoWarningSignUp.innerText = "";
    }
  });

  // Click event listener to the "Register" button
  document.getElementById("registerButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const citizenshipPhoto = citizenshipPhotoInput.files[0];

    // Name validation
    if (!name) {
      nameWarningSignUp.innerText = "Name cannot be empty.";
      nameWarningSignUp.style.color = "red";
      return;
    } else {
      nameWarningSignUp.innerText = "";
    }

    // Email validation
    if (!isValidEmail(email)) {
      emailWarningSignUp.innerText = "Please enter a valid email address.";
      emailWarningSignUp.style.color = "red";
      return;
    } else {
      emailWarningSignUp.innerText = "";
    }

    // Password and confirm password match
    if (password !== confirmPassword) {
      confirmPasswordWarningSignUp.innerText = "Passwords do not match.";
      confirmPasswordWarningSignUp.style.color = "red";
      return;
    } else {
      confirmPasswordWarningSignUp.innerText = "";
    }

    // Password validation
    if (!isValidStrongPassword(password)) {
      passwordWarningSignUp.innerText = "Password must be strong (at least 8 characters with uppercase, lowercase, digits, and at least one special character among \"@\", \"#\", \"$\", \"%\", \"^\", \"&\", or \"+\").";
      passwordWarningSignUp.style.color = "red";
      return;
    } else {
      passwordWarningSignUp.innerText = "";
    }

    // Citizenship photo validation
    if (!citizenshipPhoto) {
      citizenshipPhotoWarningSignUp.innerText = "Citizenship photo is required.";
      citizenshipPhotoWarningSignUp.style.color = "red";
      return;
    } else {
      citizenshipPhotoWarningSignUp.innerText = "";
    }

    document.querySelector(".modal-body").style.display = "none";
    document.getElementById("otpInputField").style.display = "block";
    document.getElementById("exampleModalLabel").textContent = "Enter OTP";
  });
});











