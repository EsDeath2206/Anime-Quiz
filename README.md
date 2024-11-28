# Anime Quiz App

## Description

L'**Anime Quiz App** est une application interactive de quiz en React permettant aux utilisateurs de tester leurs connaissances sur différents animés. Elle propose une série de questions sur des animés populaires avec un système de points et des badges de performance. Le quiz offre deux modes : "Chrono" et "Survie", et conserve les scores des joueurs à travers le local storage.

## Fonctionnalités

- **Modes de jeu** : Choisissez entre le mode "Chrono" (temps limité) et "Survie" (répondez sans erreur pour survivre).
- **Système de scoring** : Les scores sont enregistrés dans le local storage pour suivre la progression du joueur.
- **Badges de performance** : Des badges sont attribués en fonction des performances du joueur (nombre de bonnes réponses, rapidité, etc.).
- **Tableau des scores** : Un tableau permet de comparer les scores des joueurs.
- **Questions variées** : Plus de 40 questions couvrant divers animés populaires avec des niveaux de difficulté croissants.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé sur votre machine les éléments suivants :

- **Node.js** (version 14 ou supérieure) - [Télécharger Node.js](https://nodejs.org)
- **npm** (inclus avec Node.js)

## Installation

1. Clonez ce repository sur votre machine locale :

   ```bash
   git clone https://github.com/username/anime-quiz-app.git
   ```
```
anime-quiz-app/
│
├── public/
│   ├── index.html         # Fichier HTML principal
│   └── favicon.ico        # Icône de l'application
│
├── src/
│   ├── components/       
│   │   ├── App.js         
│   │   ├── Quiz.js       
│   │   ├── Score.js      
│   │   └── Table.js      
│   │
│   ├── assets/            
│   │   └── logo.png
│   │
│   ├── App.css            
│   └── index.js           
│
└── package.json           
```