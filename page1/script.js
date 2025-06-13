
document.querySelectorAll('.consult-btn').forEach(btn => {
  btn.onclick = function(e) {
    e.stopPropagation();
    alert('Online Consultancy clicked!');
    // Add your logic here
  };
});
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.onclick = function(e) {
    e.stopPropagation();
    alert('Book Appointment clicked!');
    // Add your logic here
  };
});
