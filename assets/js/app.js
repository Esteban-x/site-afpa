// Récupérer toutes les div avec la classe "modal-link"
const modalLinks = document.querySelectorAll('.modal-line');

// Ajouter un gestionnaire d'événements de clic à chaque div
modalLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Récupérer le lien à partir de la div
    const href = this.querySelector('a').getAttribute('href');
    // Rediriger vers le lien spécifié
    window.location.href = href;
  });
});