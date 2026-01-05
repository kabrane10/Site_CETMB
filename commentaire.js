
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


// ====================JS POUR A PARTIE STATISTIQUE=================

const sectionChiffres = document.querySelector('.chiffres');

if (sectionChiffres) {
  
    sectionChiffres.addEventListener('mouseenter', () => {
        
        const counters = document.querySelectorAll('.compteur');

        counters.forEach(compteur => {
            const updateCount = () => {
                const target = +compteur.getAttribute('data-target');
                
                // On récupère la valeur actuelle sans les symboles (+ ou %)
                const currentText = compteur.innerText.replace(/[+%]/g, '');
                const count = +currentText;

                // Réglage de la vitesse : plus le diviseur est grand, plus c'est lent
                const speed = 90; 
                const inc = Math.max(1, target / speed); // Assure un incrément minimum de 1

                if (count < target) {

                    // On arrondit pour éviter les chiffres à virgule

                    const nextValue = Math.ceil(count + inc);

                    // On affiche la valeur intermédiaire (limité à la cible)

                    compteur.innerText = nextValue > target ? target : nextValue;
                    
                    setTimeout(updateCount, 20);
                } else {

                    // Fin de l'animation : Ajout du symbole spécifique
                    if (target === 3000) {
                        compteur.innerText = target + "+";
                    } else if (target === 85) {
                        compteur.innerText = "+" + target + "%";
                    } else {
                        compteur.innerText = target;
                    }
                }
            };

            updateCount();
        });

    }, { once: true }); // L'animation ne se joue qu'une seule fois
}


