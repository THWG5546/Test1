// Attend que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne le bouton "Se connecter"
    const loginButton = document.querySelector('.submit-button-container button');

    // Sélectionne la section "Le rouge à lèvres"
    const rougeALevresSection = document.querySelector('#rougealevres');

    // Désactive le défilement de la page
    document.body.style.overflow = 'hidden';

    // Ajoute un gestionnaire d'événements au clic sur le bouton "Se connecter"
    loginButton.addEventListener('click', function(event) {
        // Permet le défilement de la page
        document.body.style.overflow = 'visible';

        // Fait défiler la page jusqu'à la section "Le rouge à lèvres"
        rougeALevresSection.scrollIntoView({ behavior: 'smooth' });

        // Empêche le comportement par défaut du bouton
        event.preventDefault();
    });
});
