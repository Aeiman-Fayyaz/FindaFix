// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Dynamic Featured Services
const services = [
  {
    id: 1,
    name: "Ali – Plumber",
    category: "Plumber",
    location: "Karachi",
    price: "1500 PKR",
    rating: 4.5,
    img: "./Images/Featured-Services/plumbring.jpg" || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
  },
  {
    id: 2,
    name: "Sara – Math Tutor",
    category: "Tutor",
    location: "Lahore",
    price: "2000 PKR",
    rating: 5,
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400",
  },
  {
    id: 3,
    name: "Ahmed – Electrician",
    category: "Electrician",
    location: "Islamabad",
    price: "1800 PKR",
    rating: 4,
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400",
  },
];

let container = document.getElementById("featured-services");
container.innerHTML = services
  .map(
    (s) => `
      <div class="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition transform hover:-translate-y-2">
        <img src="${s.img} " alt="${s.name}" class="h-48 w-full object-cover">
        <div class="p-6 relative">
          <span class="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">${
            s.location
          }</span>
          <h5 class="text-lg font-semibold text-gray-800">${s.name}</h5>
          <p class="text-gray-500">${s.category}</p>
          <p class="font-bold text-blue-600">${s.price}</p>
          <div class="flex items-center mt-2 text-yellow-400">${"★".repeat(
            Math.floor(s.rating)
          )}${s.rating % 1 ? "☆" : ""}</div>
          <a href="provider.html?id=${
            s.id
          }" class="inline-block mt-4 all-btn text-gray-700 px-4 py-2 rounded-lg">Book Now</a>
        </div>
      </div>
    `
  )
  .join("");
