
// Smooth scroll to featured doctors on button click
document.addEventListener('DOMContentLoaded', function() {
  const featuredSection = document.querySelector('.featured-section');
  const searchBtn = document.querySelector('.submit-btn');
  if (searchBtn && featuredSection) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Animate featured cards on scroll (fade-in)
  const featuredCards = document.querySelectorAll('.featured-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  featuredCards.forEach(card => {
    card.classList.add('fade-card');
    observer.observe(card);
  });
});
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'page1\index.html'; // Adjust the path if needed
});
