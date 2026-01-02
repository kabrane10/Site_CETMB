
<?php
//============================================Connexion à la base de données=========
require '../config/database.php';


//========Appelle de la fonction 'connecterBD() pouyr établir une connexion à la base de donnnées'
$connexion = connecterBD();


//===== Récupération des données  du formulaires

$nom = $_POST['nom_prenom'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$sexe = $_POST['sexe'];
$date = $_POST['date_naissance'];
$classe = $_POST['classe'];
$filieres = $_POST['filiere'];
$ecole = $_POST['provenance'];
$messages = $_POST['message'];

//=========Création de la requête SQL

$inscription = "INSERT INTO inscriptions (nom_prenom, email, telephone, sexe, date_naissance, classe, filieres,
ecole_provenance, messages) VALUE ('$nom', '$email', '$telephone', '$sexe', '$date', '$classe', '$filieres', 
'$ecole', '$messages')";


//====Exécution de la requête SQL

$resultat = $connexion->query($inscription);

//Affichage des données POST reçues
echo "<pre>";
print_r($_POST);
echo "</pre>";
