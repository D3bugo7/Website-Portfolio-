// Greet based on time of day
window.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    let greeting = 'Hello';
    if (hour < 12) {
      greeting = 'Good morning';
    } else if (hour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
  
    const greetingEl = document.getElementById('greeting-text');
    if (greetingEl) {
      greetingEl.innerText = `${greeting}, I'm Arnav Jain`;
    }
  });
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  

// Smooth scroll for internal nav (if you add links like #contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle project details if using expandable sections (optional)
document.querySelectorAll('.project-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    if (details) {
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
  });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
