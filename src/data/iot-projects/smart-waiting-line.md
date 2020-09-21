# smart-waiting-line
# Projet IoT

## Nom du groupe : ACAF
 Membres du groupe:
* BEN YOUSSEF Achraf -- achrafbya.by@gmail.com -- [GitHub BEN YOUSSEF Achraf](https://github.com/BYAchraf)
* FREDJ Mohamed Chahine -- m.fredj23@gmail.com -- [GitHub FREDJ Mohamed Chaine](https://github.com/chahine202)
* LEBSIR Ahlam -- lebsir.ahlam@yahoo.com -- [GitHub LEBSIR Ahlam](https://github.com/LEBSIRAHLAM)
* LARFI Fatah -- fatahlarfi1991@gmail.com -- [GitHub LARFI Fatah](https://github.com/larfifatah)

## Projet : file d'attente intelligente

### Description

Vous en avez marre des disputes qui ont lieu chaque fois entre vos clients, a propos du prochains qui sera coiffé; la file d’attente intelligente est votre solution, qui va vous permettre de:
* Gagner du temps en oragnisant le passage des clients.
* Collecter les données de vos clients, ainsi qu’un aperçus sur leurs
  exigences qui engendra une très bonne relations entre vous.


### Fonctionnement
#### Coté client:

 A l’arriver d’un client il se met en face de la camera à fin de le mettre dans la file d’attente et de s’identifier, pour cela on distingue 2 cas:
  * si le client est un habitué du salon, il pourra changer ses besoins via un code QR a scanner, qu’il le dirigera vers un formulaire des besoins.

  * si non, il scannera un code QR qui le dirigera vers un formulaire d’inscription là ou il exprimera ses exigences et les stocker dans la base de données du salon.

#### Coté coiffeur:

Pour faire passer la file d’attente le coiffeur, aura à sa disposition une plaquette de N boutons, et il dois appuie sur celui qui lui sera attribuer au début de la configuration.

Aprés ça, la photo du client s’affichera sur l’écran d’accueil du salon, avec un son d’avertissement, ainsi que la photo de son coiffeur choisi.

#### Liste des composants

* Camera
* Raspberry pi 3 (pour la reconnaissance faciale)
* Application Android
* plaquette de N boutons (pour permettre au coiffeur de faire passer son    prochain client)
* 2 x esp-32
* ecran de 7"
