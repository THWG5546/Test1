// Récupérer le formulaire
const loginForm = document.getElementById('login-form');

// Ajouter un gestionnaire d'événements à la soumission du formulaire
loginForm.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire qui serait de soumettre les données
    event.preventDefault();
    
    // Récupérer les valeurs des champs d'identifiant et de mot de passe
    const usernameValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;
    
    // Vérifier si les champs ne sont pas vides avant de rediriger
    if(usernameValue.trim() !== '' && passwordValue.trim() !== '') {
        // Rediriger vers la nouvelle URL si les champs ne sont pas vides
        window.location.href = "scammed.html";
    } else {
        // Afficher un message d'erreur ou une notification à l'utilisateur
        alert("Veuillez saisir votre identifiant et votre mot de passe.");
    }
});