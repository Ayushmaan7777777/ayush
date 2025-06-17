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
    card.addEventListener('click', function(e) {
      // Only open popup if not clicking a button
      if (
        e.target.classList.contains('consult-btn') ||
        e.target.classList.contains('book-btn')
      ) {
        return;
      }
      // Clone the card's HTML for the popup
      popup.querySelector('.popup-content').innerHTML = card.innerHTML;
      popup.style.display = 'block';
      overlay.style.display = 'block';
      document.querySelector('.container').classList.add('blurred');

      // Attach listeners to first two buttons in the popup
      const popupBtns = popup.querySelectorAll('.consult-btn, .book-btn');
      if (popupBtns[0]) {
        popupBtns[0].addEventListener('click', function(ev) {
          ev.stopPropagation();
          window.location.href = '../page2/index.html';
        });
      }
      if (popupBtns[1]) {
        popupBtns[1].addEventListener('click', function(ev) {
          ev.stopPropagation();
          window.location.href = '../page2/index.html';
        });
      }
    });

    // Prevent popup when clicking buttons inside the card
    card.querySelectorAll('.consult-btn, .book-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (btn.classList.contains('consult-btn')) {
          window.location.href = '../page2/index.html';
        } else if (btn.classList.contains('book-btn')) {
          window.location.href = '../page2/index.html';
        }
      });
    });
  });

  // Close popup
  document.getElementById('close-popup').onclick = function() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('.container').classList.remove('blurred');
  };
});