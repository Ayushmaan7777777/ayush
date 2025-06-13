
document.addEventListener('DOMContentLoaded', function() {
  // Create popup and overlay elements
  const popup = document.createElement('div');
  popup.id = 'popup-card';
  popup.style.display = 'none';
  popup.innerHTML = `
    <div class="popup-content"></div>
    <button id="close-popup">Close</button>
  `;
  document.body.appendChild(popup);

  const overlay = document.createElement('div');
  overlay.id = 'popup-overlay';
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  // Add click event to each doctor card
  document.querySelectorAll('.doc-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      // Clone the card's HTML for the popup
      popup.querySelector('.popup-content').innerHTML = card.innerHTML;
      popup.style.display = 'block';
      overlay.style.display = 'block';
      document.querySelector('.container').classList.add('blurred');
    });
  });

  // Close popup
  document.getElementById('close-popup').onclick = function() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('.container').classList.remove('blurred');
  };
});
document.querySelectorAll('.consult-btn').forEach(btn => {
  btn.onclick = function(e) {
    e.stopPropagation();
    alert('Online Consultancy clicked!');
  };
});
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.onclick = function(e) {
    e.stopPropagation();
    alert('Book Appointment clicked!');
  };
});
