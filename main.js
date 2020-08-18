const burgerMenu = document.querySelector(".burger");
const mainMenu = document.querySelector(".main-menu");
const body = document.querySelector("body");

const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

burgerMenu.addEventListener("click", () => {
  console.log("burger menu clicked");
  mainMenu.style.display === "block"
    ? (mainMenu.style.display = "none")
    : (mainMenu.style.display = "block");
});

// document.addEventListener("click", (event) => {
//   if (!mainMenu.contains(event.target)|| !burgerMenu.contains(event.target)||) {
//     mainMenu.style.display = "none";
//     console.log("menu close");
//   }
// });

// function hide_menu(e) {
//   if (e.target != mainMenu) {
//     mainMenu.style.display = "none";
//     console.log("closed");
//   }
// }

// document.body.addEventListener("click", hide_menu);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if (fullNameValue === "") {
    setError(fullName, "Name cannot be blank");
  } else {
    setSuccess(fullName);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Please Enter a Valid Phone Number");
  } else {
    setSuccess(phone);
  }

  submitingSuccess();
}

function setError(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  // adding  message inside small
  small.innerText = message;

  // adding error class
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;

  // adding success
  formControl.className = "form-control success";
}
//---------------------- after the validation

function submitingSuccess() {
  const submissionValidation = document.querySelector(
    ".submission-validation small"
  );

  const successMessage = "Thank you! We'll contact you soon!";
  const errorMessage = " Please check your error and try again";
  if (
    fullName.parentElement.className === "form-control success" &&
    phone.parentElement.className === "form-control success" &&
    email.parentElement.className === "form-control success"
  ) {
    submissionValidation.innerText = successMessage;

    document.getElementById("form").reset();
  } else {
    submissionValidation.innerText = errorMessage;
  }
}
