
/*========Pour statistique==========*/
const counters = document.querySelectorAll('.compteur');
/*==============================JS de la section testimonial=====================*/
let slideIndex = 0;
showSlides(slideIndex);

// Contrôles suivant/précédent
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Contrôle via les points
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("testimonial-card");
    let dots = document.getElementsByClassName("dot");
    
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

//  Défilement automatique
setInterval(() => {
    changeSlide(1);
}, 5000);



counters.forEach(compteur => {
  const updateCount = () => {
    const target = +compteur.getAttribute('data-target'); // Le chiffre final
    const count = +compteur.innerText; // Le chiffre actuel
    
    // On définit la vitesse (plus le diviseur est petit, plus c'est rapide)
    const speed = 100; 
    const inc = target / speed;

    if (count < target) {
      compteur.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10); // Répète l'opération toutes les 10ms
    } else {
      compteur.innerText = target + (target === 3000 ? "+" : "%"); 
    }
  };

  updateCount();
});

