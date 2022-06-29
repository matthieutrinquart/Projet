# NaimiTrehel
Projet de programation répartie M1 Génie logiciel

Ce dépot contient 3 projet: 

- NT_UDP : l'implementation de l'algorithme de Naimi-Trehel en UDP
- NT_UDP_STACK : l'implementation de l'algorithme de Naimi-Trehel en UDP avec une pile pour la variable "next"
- NT_TCP : l'implementation de l'algorithme de Naimi-Trehel en TCP, avec une pile pour le "next"


Pour executer un de ces 3 projets:
cd <projet>
./exemple/tester.sh

Script qui permet de lancer 4 terminaux et montre le déroulement de l'algorithme


A noter qu'il est possible de créer un profil de terminal : "test" et selectionner
"Hold the terminal open" à "When command exits" dans l'onglet "Command".


Cela permet de ne pas fermer la terminal quand le programe termine, on pourra donc
lire les print des différents noeuds.


Un makefile est fourni pour chaque projet

Par Matthieu Trinquart
et  Martin Sanchez
