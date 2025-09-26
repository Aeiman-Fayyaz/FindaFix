// Bootstrap Form Validation
const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.stopPropagation();
  } else {
    alertBox.classList.remove("d-none");
    form.reset();
  }
  form.classList.add("was-validated");
});
