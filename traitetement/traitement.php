

<?php
// 1. Connexion à la base de données
require '../config/database.php';

$connexion = connecterBD();

// 2. Récupération sécurisée des données (évite les erreurs si un champ est vide)
$nom_prenom = $_POST['nom_prenom'] ?? '';
$email      = $_POST['email'] ?? '';
$objet      = $_POST['objet'] ?? '';
$message    = $_POST['message'] ?? '';

// 3. Préparation de la requête SQL avec des marqueurs (?)
// Note : "VALUES" prend un S, et on place des ? pour chaque donnée

$sql_users = "INSERT INTO users (nom_prenom, email, objet, messages) VALUES (?, ?, ?, ?)";

$resultat = $connexion->prepare($sql_users);

if ($resultat) {

    // 4. Liaison des paramètres (ssss signifie que les 4 variables sont des chaines/strings)

    $resultat->bind_param("ssss", $nom_prenom, $email, $objet, $message);
    
    // 5. Exécution de la requête
    if ($resultat->execute()) {
        // Succès : Redirection
        header("Location: ../pages/formulaire/merci.html");
        exit;
    } else {
        echo "Erreur lors de l'enregistrement : " . $resultat->error;
    }
    
    $resultat->close();
} else {
    echo "Erreur de préparation SQL : " . $connexion->error;
}

$connexion->close();
?>






