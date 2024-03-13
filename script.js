// Récupérer le bouton de soumission
const submitButton = document.getElementById('btn_submit');

// Ajouter un gestionnaire d'événements au clic sur le bouton de soumission
submitButton.addEventListener('click', function(event) {
    // Empêcher le comportement par défaut du formulaire qui serait de soumettre les données
    event.preventDefault();
    
    // Changer de page en redirigeant vers une nouvelle URL
    window.location.href = "scammed.html";
});
