// Mock Data
const service = [
  {
    id: 1,
    name: "Ali – Plumber",
    category: "Plumber",
    location: "Karachi",
    price: "1500 PKR",
    description:
      "Expert in fixing water leakages, pipe fittings and bathroom installations.",
    img: "./Images/Available-Services/ali-plumber.jpg",
  },
  {
    id: 2,
    name: "Sara – Math Tutor",
    category: "Tutor",
    location: "Lahore",
    price: "2000 PKR",
    description:
      "Experienced math tutor for O/A levels with personalized teaching methods.",
    img: "./Images/Available-Services/sara-math-tutor.jpg",
  },
  {
    id: 3,
    name: "Hassan – Electrician",
    category: "Electrician",
    location: "Islamabad",
    price: "1800 PKR",
    description:
      "Certified electrician for wiring, installations and appliance repair.",
    img: "./Images/Available-Services/hassan-electrician.jpg",
  },
  {
    id: 4,
    name: "Fatima – Cleaner",
    category: "Cleaner",
    location: "Karachi",
    price: "1200 PKR",
    description: "Reliable cleaning services for homes, offices and events.",
    img: "./Images/Available-Services/fatima-home-cleaner.jpg",
  },
  {
    id: 5,
    name: "Bilal – Painter",
    category: "Painter",
    location: "Lahore",
    price: "2500 PKR",
    description:
      "Applies paint, coatings, or finishes to surfaces enhance their appearance.",
    img: "./Images/Available-Services/bilal-painter.jpg",
  },
  {
    id: 6,
    name: "Nida – English Tutor",
    category: "Tutor",
    location: "Karachi",
    price: "2200 PKR",
    description:
      "Improve their language skills, including speaking, writing, reading, and grammar.",
    img: "./Images/Available-Services/nida-english-tutor.jpg",
  },
  {
    id: 7,
    name: "Omar – Mechanic",
    category: "Mechanic",
    location: "Islamabad",
    price: "3000 PKR",
    description: "Repairs, maintains, and services vehicles or machinery.",
    img: "./Images/Available-Services/omar-mechanic.jpg",
  },
  {
    id: 8,
    name: "Zainab – House Cleaner",
    category: "Cleaner",
    location: "Rawalpindi",
    price: "1300 PKR",
    description: "Reliable cleaning services for homes, offices and events.",
    img: "./Images/Available-Services/fatima-home-cleaner.jpg",
  },
  {
    id: 9,
    name: "Ahmed – Carpenter",
    category: "Carpenter",
    location: "Multan",
    price: "2000 PKR",
    description:
      "Builds, installs, and repairs wooden structures, furniture, and fixtures with precision and skill.",
    img: "./Images/Available-Services/ahmed-carpenter.jpg",
  },
  {
    id: 10,
    name: "Sana – Science Tutor",
    category: "Tutor",
    location: "Faislabad",
    price: "2100 PKR",
    description:
      "Helps students understand scientific concepts and improve their knowledge",
    img: "./Images/Available-Services/sana-science-tutor.jpg",
  },
];

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const providerId = parseInt(urlParams.get("id"));
const provider = service.find((s) => s.id === providerId);

const providerDetail = document.getElementById("providerDetail");
if (provider) {
  providerDetail.innerHTML = `
        <div class="provider-wrapper flex-column flex-md-row">
          <img src="${provider.img}" alt="${provider.name}" class="mb-3 mb-md-0">
          <div class="provider-content">
            <h3>${provider.name}</h3>
            <p>
              <strong>Category:</strong> ${provider.category} <br>
              <strong>Location:</strong> ${provider.location} <br>
              <strong>Price:</strong> ${provider.price}
            </p>
            <p><strong>Description:</strong> ${provider.description}</p>
          </div>
        </div>
      `;
} else {
  providerDetail.innerHTML = `<p class="text-center text-muted">Provider not found</p>`;
}

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
