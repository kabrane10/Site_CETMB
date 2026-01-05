document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("contact-form");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const objet = document.getElementById("objet");
    const message = document.getElementById("message");
    const counter = document.querySelector(".counter");
    const toast = document.getElementById("toast");
  
    // Compteur caractères
    message.addEventListener("input", () => {
      counter.textContent = `${message.value.length} / 100`;
    });
  
    // Validation temps réel
    nom.addEventListener("input", () => validateNom());
    email.addEventListener("input", () => validateEmail());
    objet.addEventListener("input", () => validateObjet());
    message.addEventListener("input", () => validateMessage());
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const validNom = validateNom();
      const validEmail = validateEmail();
      const validObjet = validateObjet();
      const validMessage = validateMessage();
  
      if (validNom && validEmail && validObjet && validMessage) {
        showToast();
        simulateNotifications();
  
        setTimeout(() => {
          window.location.href = "../pages/formulaire/merci2.html";
        }, 1500);
      } else {
        shakeForm();
      }
    });
  
    function validateNom() {
      return validateField(nom, nom.value.trim().length >= 5, "Nom trop court (min 5 caractères)");
    }

    
    function validateEmail() {
        return validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value), "Email invalide");
    }

    function validateObjet() {
        return validateField(objet, objet.value.trim().length >= 10, "Nom trop court (min 10 caractères)");
      }
  
    function validateMessage() {
      return validateField(message, message.value.trim().length >= 10, "Message trop court (min 10 caractères)");
    }
  
    function validateField(input, condition, message) {
      const error = input.parentElement.querySelector(".error");
      if (!condition) {
        error.textContent = message;
        input.classList.add("error-input");
        return false;
      }
      error.textContent = "";
      input.classList.remove("error-input");
      return true;
    }
  
    function shakeForm() {
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 300);
    }
  
    function showToast() {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    }
  
    function simulateNotifications() {
      console.log("Email envoyé (simulation)");
      console.log(" WhatsApp envoyé (simulation)");
    }
  
  });
  

  // JS pour le difilement des 6 images de contact

  document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.slide-input');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 secondes par image
    let autoSlider;

    function startSlider() {
        autoSlider = setInterval(() => {
            // On décoche l'actuel (optionnel car c'est un bouton radio)
            inputs[currentIndex].checked = false;
            
            // On passe au suivant
            currentIndex = (currentIndex + 1) % inputs.length;
            
            // On coche le nouveau
            inputs[currentIndex].checked = true;
        }, intervalTime);
    }

    // Si l'utilisateur clique manuellement sur un point
    inputs.forEach((input, index) => {
        input.addEventListener('click', () => {
            currentIndex = index; // On synchronise l'index du script avec le clic
            clearInterval(autoSlider); // On réinitialise le chrono
            startSlider();
        });
    });

    startSlider();
});


