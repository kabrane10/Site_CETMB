
    
    
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



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".element-carrousel");
    let indexActuel = 0;
    const delai = 5000; // temps entre les slides (en ms)

    function afficherSlide(index) {
      // Retirer la classe "actif" de tous les slides
      slides.forEach(slide => slide.classList.remove("actif"));

      // Ajouter la classe "actif" au slide courant
      slides[index].classList.add("actif");
    }

    function afficherSuivant() {
      indexActuel = (indexActuel + 1) % slides.length;
      afficherSlide(indexActuel);
    }

    // Lancer le carrousel automatiquement
    setInterval(afficherSuivant, delai);
});

//====== Défilement des images============
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const images = carousel.querySelector('.image-carousel');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    const totalImages = carousel.querySelectorAll('img').length;
    let index = 0;

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % totalImages;
      images.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + totalImages) % totalImages;
      images.style.transform = `translateX(-${index * 100}%)`;
    });
  });

  



