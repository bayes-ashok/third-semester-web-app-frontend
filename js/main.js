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
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// page switch betn login and signup

// document.addEventListener("DOMContentLoaded", function() {
//   const loginForm = document.getElementById("loginForm");
//   const registerForm = document.getElementById("registerForm");
//   const showLoginFormLink = document.getElementById("showLoginForm");
//   const showRegisterFormLink = document.getElementById("showRegisterForm");

//   // Function to show the login form and hide the registration form
//   function showLoginForm() {
//     loginForm.style.display = "block";
//     registerForm.style.display = "none";
//   }

//   // Function to show the registration form and hide the login form
//   function showRegisterForm() {
//     loginForm.style.display = "none";
//     registerForm.style.display = "block";
//   }

//   // Add click event listeners to the "Login" and "Register" links
//   showLoginFormLink.addEventListener("click", showLoginForm);
//   showRegisterFormLink.addEventListener("click", showRegisterForm);
// });



