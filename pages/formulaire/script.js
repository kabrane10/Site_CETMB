

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  // Menu hamburger
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Sous-menu mobile
  dropdownToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });

  // Fermer menu au clic extérieur
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      dropdown.classList.remove("active");
    }
  });
});




const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const dropdowns = document.querySelectorAll(".dropdown-btn");

// OUVERTURE MENU
hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("active");
});

// SOUS-MENUS
dropdowns.forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;

    // fermer les autres
    document.querySelectorAll(".dropdown").forEach(drop => {
      if (drop !== parent) drop.classList.remove("open");
    });

    parent.classList.toggle("open");
  });
});

// FERMETURE AUTO AU CLIC LIEN
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Lancer le slider
setInterval(nextSlide, 5000); // 5 secondes

const cards = document.querySelectorAll(".filiere-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });


//==========================Partie formulaire
cards.forEach(card => observer.observe(card));
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("preinscription-form");

  form.addEventListener("submit", function (event) {

    // Empêche le rechargement
    event.preventDefault();

    // Simulation d'envoi (sans base de données)
    setTimeout(function () {
      window.location.href = "merci.html";
    }, 700);

  });

});
