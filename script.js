// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

// Email form placeholder (later connect to backend/Google Sheets)
const form = document.getElementById('email-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = "Thanks! You're on the list. ✨ (Demo - add real integration)";
  message.style.color = "#ff6b6b";
  form.reset();
});
