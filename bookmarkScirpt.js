// Funktion, um die aktuelle Position des Benutzers zu berechnen
function getCurrentPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  
  // Funktion, um die Position in localStorage zu speichern
  function savePosition(position) {
    localStorage.setItem('scrollPosition', position);
  }
  
  // Funktion, um die gespeicherte Position aus localStorage zu laden und zur Position zu scrollen
  function loadPosition() {
    const position = parseInt(localStorage.getItem('scrollPosition'), 10);
    if (position) {
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  }
  
  // Event-Listener, um die Position des Benutzers beim Scrollen zu speichern
  window.addEventListener('scroll', () => {
    const position = getCurrentPosition();
    savePosition(position);
  });
  
  // Beim Laden der Seite die gespeicherte Position laden und zu der Position scrollen
  loadPosition();
  