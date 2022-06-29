#ifndef DEF_LsceneOpenGL
#define DEF_LsceneOpenGL7




#include "Objet.hpp"
#include <SDL2/SDL.h>
#include <mpi.h>

class LsceneOpenGL
{
    public:

        LsceneOpenGL(std::string titreFenetre, unsigned short int largeurFenetre, unsigned short int hauteurFenetre , unsigned char _proc_id);

        ~LsceneOpenGL();
 
        bool initialiserFenetre();
  
        bool initGL();
  
        void bouclePrincipale();



    private:
        std::string m_titreFenetre;/*!< une chaine de caractère correspondant au titre de la fenetre SDL*/
        unsigned short int m_largeurFenetre;/*!< un unsigned short int qui contiendra la largeur de la fenetre SDL*/
        unsigned short int m_hauteurFenetre;/*!< un unsigned short int qui contiendra la hauteur de la fenetre SDL*/
        unsigned char proc_id;/*!< un unsigned char qui correspond au processus d'OpenMPI au-quelle appartient la fenetre*/
        bool etat = true;/*!<un boolean qui est sur vrai pour que la fenetre SDL reste a l'ecran et faux pour que la fenetre SDL disparaissent*/
        Objet  * myObect;/*!< pointeur sur la classe objet qui correspond à l'objet que va afficher la fenetre SDL*/
        unsigned char  * pixels;/*!<Pointeur sur un tableau de unsigned char qui va contenir la bitmaps a envoyé à SceneGlobal */
        SDL_Window* m_fenetre;/*!< pointeur sur SDL_Window qui permet d'afficher une fenetre avec SDL*/
        SDL_GLContext m_contexteOpenGL;/*!< création d'un contexte OpenGl pour pouvoir afficher un objet 3D avec OpenGL dans la fenetre SDL*/
        SDL_Event evenements;/*!<Variable contenant les interaction faite avec la fenetre SDL*/
};

#endif