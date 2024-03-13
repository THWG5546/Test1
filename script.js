/*document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne le bouton "Se connecter"
    const loginButton = document.querySelector('.submit-button-container button');

    // Sélectionne les champs d'identifiant et de mot de passe
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const errorMessageContainer = document.querySelector('.validation-error');
    // Sélectionne la section "Le rouge à lèvres"
    const rougeALevresSection = document.querySelector('#rougealevres');

    // Désactive le défilement de la page
    document.body.style.overflow = 'hidden';


    loginButton.addEventListener('click', function (event) {
        // Vérifie si l'un des champs est vide
        if (usernameInput.value === '' || passwordInput.value === '') {
            // Affiche le message d'erreur
            errorMessageContainer.textContent = "Mot de passe ou identifiant incorrect.";
            // Empêche le comportement par défaut du bouton
            event.preventDefault();
        } else {
            // Permet le défilement de la page
            document.body.style.overflow = 'visible';
            // Fait défiler la page jusqu'à la section "Le rouge à lèvres"
            rougeALevresSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});*/
$(document).ready(function () {
    function stopScroll() {
        document.body.style.overflow = 'hidden';
    }

    function allowScroll() {
        document.body.style.overflow = '';
    }
    stopScroll();
    document.getElementById('btn_submit').addEventListener('click', function (event) {
        allowScroll();
        rougeALevresSection.scrollIntoView({ behavior: 'smooth' });
        event.preventDefault();
    });
});
