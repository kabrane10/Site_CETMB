CREATE DATABASE IF NOT EXISTS cetmb
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE cetmb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    objet VARCHAR(100),
    messages TEXT

);

CREATE TABLE inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telephone VARCHAR(30),
    sexe VARCHAR(100),
    date_naissance DATE,
    classe VARCHAR(100) NOT NULL,
    filieres VARCHAR(100),
    ecole_provenance VARCHAR(100) NOT NULL,
    messages TEXT

);