// Show popup on form submit
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('popupOverlay').style.display = 'flex';
});
// Close popup
document.getElementById('closePopup').onclick = function() {
  document.getElementById('popupOverlay').style.display = 'none';
};
// Optional: Close popup when clicking outside the popup box
document.getElementById('popupOverlay').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};