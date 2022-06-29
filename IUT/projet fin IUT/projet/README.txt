Doit être fait sous linux:
pour créer la doc doxygen
exécuter la commande : 
doxygen -g
puis : 
doxygen Doxyfile
Aller sur le dossier html
ouvrir le fichier :
index.html
Pour compiler:
mpiCC *.cpp -o main -lGLEW -lGL -lGLU -lSDL2 -lOpenMeshCore
éxecuter sur ça machine :
mpirun -oversubscribe -np 5 ./main
compiler sur un cluster : 
mpirun -x DISPLAY=:0 -np 5 -hostfile my_hostfile ./main

