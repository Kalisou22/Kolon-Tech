// Gestion du lien actif lors du scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";
  const scrollY = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
// Fonction pour envoi WhatsApp
function envoyerWhatsApp() {
    const nom = document.getElementById("nomClient").value;
    const tel = document.getElementById("telephone").value;
    const service = document.getElementById("serviceChoisi").value;
    const details = document.getElementById("details").value;
  
    const message = `Bonjour, je suis ${nom},\nJe souhaite : ${service}\nDétails : ${details}\nContact : ${tel}`;
    const encodedMsg = encodeURIComponent(message);
    const numero = "224622328457"; // <-- Ton numéro WhatsApp sans le "+"
  
    const lien = `https://wa.me/${numero}?text=${encodedMsg}`;
    window.open(lien, "_blank");
  }
// Animation des compteurs
const counters = document.querySelectorAll('.counter');
let compteurLancé = false;

function animerCompteurs() {
  const statsSection = document.getElementById('stats');
  const offsetTop = statsSection.offsetTop;

  if (!compteurLancé && window.scrollY + window.innerHeight > offsetTop) {
    compteurLancé = true;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = Math.ceil(target / 100);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count;
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
}

window.addEventListener('scroll', animerCompteurs);
// Afficher/Masquer bouton scroll-to-top
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Remonter en haut avec animation fluide
scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Changement de la navbar
    const navbar = document.querySelector(".navbar");
    if (document.body.classList.contains("dark-mode")) {
      navbar.classList.remove("navbar-light", "bg-light");
      navbar.classList.add("navbar-dark", "bg-dark");
    } else {
      navbar.classList.remove("navbar-dark", "bg-dark");
      navbar.classList.add("navbar-light", "bg-light");
    }
  }
    