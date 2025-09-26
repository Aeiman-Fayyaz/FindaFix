// Booking Form Validation
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dateTime = document.getElementById("dateTime").value.trim();

  document
    .querySelectorAll(".error-msg")
    .forEach((el) => el.classList.remove("show"));

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    document.getElementById("nameError").classList.add("show");
    valid = false;
  }
  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").innerText = "Valid email is required";
    document.getElementById("emailError").classList.add("show");
    valid = false;
  }
  if (phone === "" || phone.length < 10) {
    document.getElementById("phoneError").innerText =
      "Valid phone number is required";
    document.getElementById("phoneError").classList.add("show");
    valid = false;
  }
  if (dateTime === "") {
    document.getElementById("dateError").innerText =
      "Please select a date & time";
    document.getElementById("dateError").classList.add("show");
    valid = false;
  }

  if (valid) {
    alert("🎉 Booking confirmed successfully!");
    bookingForm.reset();
  }
});
