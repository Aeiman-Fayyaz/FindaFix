const services = [
  {
    id: 1,
    name: "Ali – Plumber",
    category: "Plumber",
    location: "Karachi",
    price: "1500 PKR",
    img: "./Images/Available-Services/ali-plumber.jpg",
    icon: "fa-wrench",
  },
  {
    id: 2,
    name: "Sara – Math Tutor",
    category: "Tutor",
    location: "Lahore",
    price: "2000 PKR",
    img: "./Images/Available-Services/sara-math-tutor.jpg",
    icon: "fa-book",
  },
  {
    id: 3,
    name: "Hassan – Electrician",
    category: "Electrician",
    location: "Islamabad",
    price: "1800 PKR",
    img: "./Images/Available-Services/hassan-electrician.jpg",
    icon: "fa-bolt",
  },
  {
    id: 4,
    name: "Fatima – Cleaner",
    category: "Cleaner",
    location: "Karachi",
    price: "1200 PKR",
    img: "./Images/Available-Services/fatima-home-cleaner.jpg",
    icon: "fa-broom",
  },
  {
    id: 5,
    name: "Bilal – Painter",
    category: "Painter",
    location: "Lahore",
    price: "2500 PKR",
    img: "./Images/Available-Services/bilal-painter.jpg",
    icon: "fa-paint-roller",
  },
  {
    id: 6,
    name: "Nida – English Tutor",
    category: "Tutor",
    location: "Karachi",
    price: "2200 PKR",
    img: "./Images/Available-Services/nida-english-tutor.jpg",
    icon: "fa-chalkboard-teacher",
  },
  {
    id: 7,
    name: "Omar – Mechanic",
    category: "Mechanic",
    location: "Islamabad",
    price: "3000 PKR",
    img: "./Images/Available-Services/omar-mechanic.jpg",
    icon: "fa-car",
  },
  {
    id: 8,
    name: "Zainab – House Cleaner",
    category: "Cleaner",
    location: "Rawalpindi",
    price: "1300 PKR",
    img: "./Images/Available-Services/zainab-home-cleaner.jpg",
    icon: "fa-soap",
  },
  {
    id: 9,
    name: "Ahmed – Carpenter",
    category: "Carpenter",
    location: "Multan",
    price: "2000 PKR",
    img: "./Images/Available-Services/ahmed-carpenter.jpg",
    icon: "fa-hammer",
  },
  {
    id: 10,
    name: "Sana – Science Tutor",
    category: "Tutor",
    location: "Faisalabad",
    price: "2100 PKR",
    img: "./Images/Available-Services/sana-science-tutor.jpg",
    icon: "fa-graduation-cap",
  },
];

const servicesList = document.getElementById("servicesList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderServices(list) {
  servicesList.innerHTML = "";
  if (list.length === 0) {
    servicesList.innerHTML = `<p class="text-center text-muted">No services found</p>`;
    return;
  }
  list.forEach((s) => {
    servicesList.innerHTML += `
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card service-card">
              <img src="${s.img}" alt="${s.name}">
              <div class="card-body">
                <h5 class="card-title"><i class="fa-solid ${s.icon} icon-badge"></i>${s.name}</h5>
                <p class="card-text">
                  <strong>Category:</strong> ${s.category} <br>
                  <strong>Location:</strong> ${s.location} <br>
                  <strong>Price:</strong> ${s.price}
                </p>
                <a href="provider.html?id=${s.id}" class="btn btn-cta">View</a>
              </div>
            </div>
          </div>
        `;
  });
}

function filterServices() {
  const searchVal = searchInput.value.toLowerCase();
  const catVal = categoryFilter.value;
  const filtered = services.filter(
    (s) =>
      (s.name.toLowerCase().includes(searchVal) ||
        s.location.toLowerCase().includes(searchVal)) &&
      (catVal === "" || s.category === catVal)
  );
  renderServices(filtered);
}

searchInput.addEventListener("keyup", filterServices);
categoryFilter.addEventListener("change", filterServices);

renderServices(services);
