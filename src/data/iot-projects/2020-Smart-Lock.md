# PROJET SMART-LOCK

## Membres du Groupe
- Michel YABA (davhel.michael@yahoo.fr)
- Aissata KEITA (aissatakeita103@gmail.com)
- AbdelJalil KOUACHI

## Lien vers la video de Présentation
[![Video de presentation de l'application](/images/content/4279611/690cc1ce1c97ed83c883846f84451ad3.png)](https://www.youtube.com/watch?v=krarxLyfjm4)

## Description succinte du projet

L’objectif de notre projet est de construire un système, facile d’utilisation, permettant de verrouiller/déverrouiller une serrure de porte
Le projet se fera en 2 phases :
- Une première phase consiste à donner la possibilité à un utilisateur se trouvant à une certaine distance de la porte de pouvoir verrouiller ou déverrouiller sa serrure. Ce, à partir d’une connexion bluetooth entre une application mobile Android, à développer, et la serrure à laquelle sera lié soit un Uno Arduino ou  Raspberry Pi.
- La deuxième phase consistera à donner à l’utilisateur la possibilité de pouvoir verrouiller ou déverrouiller la serrure ce, même quand il ne se trouve pas dans ledit périmètre. Il s’agit des cas où l’utilisateur peut par exemple être à son lieu de travail mais qu’il doit donner les droits d’accès à une personne lambda (amis, famille, employé, etc). Pour y parvenir, nous ferons recours à une transmission par internet. Il suffira pour lui d’appuyer simplement sur un bouton depuis l’application mobile et la porte s’ouvre. Ce extension du projet devra alors permettre à l’utilisateur, à partir de son compte, de recevoir des notifications de tous les mouvements effectués sur la serrure.

Pour l'instant, seule la première phase du projet a été développée.

### Liste des composants essentiels du projet
- Carte electronique Arduino UNO
- Module Bluetooth HC-05
- Servomoteur SG90

### Comment faire pour utiliser notre système ?
- Pour l'application mobile
  - télécharger Android Studio
  - récupérer le code puis l'importer dans Android Studio ou encore installer l'apk
  - Installer un serveur local xampp sur Linux
  - Récupérer le code PHP correspondant au backend de l'application mobile
  - Ajouter le code récupéré dans le repertoire htdocs dans xampp
  - lancer le serveur xampp ( sur Linux, faire : sudo /opt/lampp/lampp start)
  - Recupérer le fichier Sql de la base de donnée
  - Importer le fichier dans PhpMyAdmin
- Pour le système de verrouillage / deverrouillage
  - Récupérer le schéma du branchement général
  - Faire le montage de la solution conformément au schéma
  - Brancher le système à un port de son ordinateur
  - Installer l'IDE Arduino
  - récupérer le code puis l'importer dans l'IDE
  - Compiler puis téléverser le code
  -
- Pour le serveur
  - installer Python sur sa machine
  - récupérer le code puis l'importer dans un environnement (SublimeText, VSCOde, etc)
  - Lancer le serveur python serveur.py 
  
  

 
