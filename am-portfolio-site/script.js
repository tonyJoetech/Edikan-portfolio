
// simple reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.project,.stack-grid,.about-grid').forEach(el => {
  el.style.opacity = 0; el.style.transform = 'translateY(20px)'; el.style.transition = 'all .6s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });
});