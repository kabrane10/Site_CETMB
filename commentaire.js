

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

