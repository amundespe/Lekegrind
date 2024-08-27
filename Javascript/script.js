var box = document.getElementById('animate-box');
var position = 0;
var direction = 1;

function animate() {
  // Beveg boksen
  if (position >= window.innerWidth - 100) {
    direction = -1; // Endre retning til venstre hvis høyre kant er nådd
  } else if (position <= 0) {
    direction = 1; // Endre retning til høyre hvis venstre kant er nådd
  }
  position += direction * 5;
  box.style.left = position + 'px';

  requestAnimationFrame(animate); // Be om neste animasjonsramme
}

animate(); // Start animasjonen