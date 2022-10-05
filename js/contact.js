const form = document.querySelector("#contact");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#EmailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm (event) {
  event.preventDefault();

  if(checkLength(fullName.ariaValueMax, 5) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if(checkLength(subject.value, 14) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if(checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function checkLength(value) {
  if(value.trim().length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const isEmail = regEx.test(email);
  return isEmail;
}

form.addEventListener("sumbit", validateForm);