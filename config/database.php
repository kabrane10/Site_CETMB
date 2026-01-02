<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'cetmb');

function connecterBD() {
    //Etape 1 : Créer lea connexion

    $connexion = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    // Etape 2 & 3: Vérifier si la connexion a échoué

    if (mysqli_connect_error()){
        die("Erreur de connexion à la base de donnée : " . mysqli_connect_error());

    }
    //Etape 4 : Définir l'encodage UTF8 pour les caractères spéciaux

    mysqli_set_charset($connexion, "utf8");
    
    // Retourner la connexion pour l'utiliser dans les requêtes

    return $connexion;


}