/* Documentation du projet de fin d'année d'IUT
 */


/*! \mainpage Documentation du projet "rendu openGL distribué"
 * \section Introduction
 * \subsection Sujet
 *OpenGL permet le rendu de scène 3D dans un bitmap. Si l’environnement 3D contient des données \n
 *de grande taille, il est difficile voir impossible d’en effectuer le rendu (transmission sur la carte \n
 *graphique, mémoire insuffisante sur celle-ci). La proposition de ce projet est donc de diviser la \n
 *scène en complexité, en répartissant les données 3D sur plusieurs fenêtres, de manière synchrone. \n
 *Tous les rendus doivent donc être synchronisés sur les interactions (clavier ou souris pour faire \n
 *tourner l’objet, ou zoomer). La 2e étape de ce projet sera d’effectuer une distribution de données 3D \n
 *sur des machines reliées en réseau, via OpenMPI et d’en faire le rendu sur chaque machine. \n
 *L’application devra être développée en C++, avec OpenMesh pour la lecture de fichier 3D, OpenGL \n
 *pour le rendu, SDL pour le (multi-) fenêtrage et les interactions, OpenMPI pour la distribution sur \n
 *plusieurs machines d’un réseau local et Doxygen pour la documentation des fonctions et classes. \n
 *Les temps de lecture de fichier, division des données, échange réeau et rendu devront être mesurés \n
 *et comparés sur plusieurs objets ou sur plusieurs définitions de surface. \n

 * \subsection Installation
 * L'installation doit être faite sur linux. \n
 * Les machines doivent avoir d'installer openMPI version 4.0.3, openMesh version 8.1,  openGL et SDL2 pour fonctionner. \n
 * Pour compiler le programme exécuté la ligne de compilation suivant dans un terminal ouvert dans le dossier où sont situé les programmes. \n
 * mpiCC *.cpp -o main -lGLEW -lGL -lGLU -lSDL2 -lOpenMeshCore \n
  * Puis ensuite mettre le programme dans un cluster avec l'objet 3D et exécuter la commande : \n
    * Puis ensuite mettre le programme dans un cluster avec l'objet 3D et exécuter la commande : \n
    *mpirun -x DISPLAY=:0.0 -np 5 -hostfile my_hostfile ./main
 */


  /**
 * \file main.cpp
 * \brief programme principal.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 */

#include "OpenMPI.hpp"
#include"Objet.hpp"
#include "SceneGlobal.hpp"
#include "LsceneOpenGL.hpp"
int main(int argc, char **argv)
{
	OpenMPI thread(argc,argv);
	


    if(thread.initMPI() == false)
	    return -1;
	
	
	if (thread.proc_id == 0)
    {
        
        SceneGlobal scene("Fenetre2", 800 , 600 );
                
        if(scene.initialiserFenetre() == false)
            return -1;

        scene.bouclePrincipale();
        scene.~SceneGlobal();
        
        
	}
    else if(thread.proc_id != 0)
    {
        LsceneOpenGL scene("Fenetre1", 400, 300 ,thread.proc_id );
                
        if(scene.initialiserFenetre() == false)
            return -1;

        if(scene.initGL() == false)
            return -1;
            
            
        scene.bouclePrincipale();
        scene.~LsceneOpenGL();



    }
thread.FinMPI();
thread.~OpenMPI();

return 0 ;
}