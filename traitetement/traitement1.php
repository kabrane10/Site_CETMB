
<?php
// ===========code pour le PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once "../vendor/PHPMailer/src/Exception.php";
require_once "../vendor/PHPMailer/src/PHPMailer.php";
require_once "../vendor/PHPMailer/src/SMTP.php";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'kabranehenry@gmail.com';
    $mail->Password = 'taqjkbggdofznhpm';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('kabranehenry@gmail.com', 'CETMB');
    $mail->addAddress($email, $nom);

    $mail->Subject = 'Confirmation de pré-inscription - CETMB';
    $mail->Body = "Bonjour $nom,\n\nVotre pré-inscription a bien été enregistrée.";

    $mail->send();
} catch (Exception $e) {
    // erreur silencieuse ou log
}
//=========Fin pour PHPMailer


//============================================Connexion à la base de données=========
require '../config/database.php';

// 1️ Vérifier si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../pages/formulaire/merci.html");
    exit;
}

//========Appelle de la fonction 'connecterBD() pouyr établir une connexion à la base de donnnées'
$connexion = connecterBD();

//===== Récupération des données  du formulaires

$nom = trim($_POST['nom'] ?? '');
$email = trim($_POST['email'] ?? '');
$telephone = trim($_POST['tel_eleve'] ?? '');
$sexe = $_POST['sexe'] ?? '';
$date = $_POST['date_naissance'] ?? '';
$classe = $_POST['classe'] ?? '';
$filieres = $_POST['filiere'] ?? '';
$ecole = trim($_POST['provenance'] ?? '');
$messages = $_POST['message'] ?? '';


//=========Création de la requête SQL

$inscription = "INSERT INTO inscriptions (nom_prenom, email, telephone, sexe, date_naissance, classe,
 filieres, ecole_provenance, messages) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";


//====Exécution de la requête SQL

$resultat = $connexion->prepare($inscription);

if (!$resultat) {
    die("Erreur SQL : " . $connexion->error);
}

// 5️ Liaison des paramètres
$resultat->bind_param(
    "sssssssss",
    $nom,
    $email,
    $telephone,
    $sexe,
    $date,
    $classe,
    $filieres,
    $ecole,
    $messages
);
$resultat->execute();

// 6️ Exécution + redirection
if ($resultat->execute()) {
    header("Location:  ../pages/formulaire/merci.html");
    exit;
}


//Affichage des données POST reçues
echo "<pre>";
print_r($_POST);
echo "</pre>";

    