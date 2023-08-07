const cards = document.querySelectorAll('.card');

// Ajouter un gestionnaire d'événement click à chaque carte
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Ajouter ou supprimer la classe 'active' pour afficher ou masquer le contenu
    card.classList.toggle('active');
  });
});
