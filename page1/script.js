document.addEventListener('DOMContentLoaded', () => {
  const clickableDiv = document.getElementById('clickableDiv');
  const hiddenDiv = document.getElementById('hiddenDiv');

  clickableDiv.addEventListener('click', () => {
    if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
      hiddenDiv.style.display = 'block';
    } else {
      hiddenDiv.style.display = 'none';
    }
  });
});