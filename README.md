# opower

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


##Compte rendu

Ce projet correspond au TP 6 de SIR "Angular JS sur votre projet et intégration avec JPA". 
Nous avons mis en place le proxy dans le fichier grunt pour contourner les restrictions de sécurité sur les ports. 

La partie présentation oPower a été généré avec yeoman avec le generator Angular. 

Nous avons réalisé une vue pour chaque entité (Homes, People, Heaters, Electronic devices). 
Nous avons créé avec la commande yo angular:route "nomEntite" les vues et les controleurs. 

Nous avons mis en place les fonctions de gestion de base : 
- Lister les éléments avec une requête de type GET
- Ajouter un élément avec une requête de type POST
- Supprimer un élément avec une requête de type DELETE

Le traitement est effectué avec les controleurs Angular JS sous app/scripts. 
Chaque opération est réalisée avec une fonction qui effectue une requête HTTP avec le type adéquat (GET, POST ou DELETE). 
Les requêtes sont envoyées à la couche de service de l'application que nous avons créé aux TP2 et TP3. 
Nous avons définit la racine pour les URI dans le fichier web.xml et définit le chemin vers les ressources avec des annotations JPA dans classes de service. 

Les opérations fonctionnent mais il y a un dysfonctionnement que nous n'avons pas pu corriger : 
- Lorsque'il y a un enregistrement dans une table, l'affichage renvoie une table avec 4 lignes vides (!). 
Ce dysfonctionnement disparaît dès lors qu'on effectue plus d'un enregistrement dans la table. 




