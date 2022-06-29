#ifndef DEF_LsceneOpenGL
#define DEF_LsceneOpenGL7


/**
 * \file LsceneOpenGL.hpp
 * \brief Attribut de la classe LsceneOpenGL.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les attributs de la classe LsceneOpenGL.
 *
 */


#include "Objet.hpp"
#include <SDL2/SDL.h>
#include <mpi.h>

//!  \class LsceneOpenGL
//!  \brief Classe gérant l'affichage de la fenêtre.
/*!
Cette classe permet d'afficher une fenêtre SDL qui va contenir une partie de l'objet 3D.*/
class LsceneOpenGL
{
    public:
        /**
       *\brief Constructeur de la classe LsceneOpenGL.
       * @param titreFenetre Une chaîne de caractère qui correspond au titre de la fenêtre.
        * @param largeurFenetre Un unsigned short int qui correspond à la largeur de la fenêtre.
        * @param hauteurFenetre Un unsigned short int qui correspond à la hauteur de la fenêtre.
        * @param _proc_id C'est un unsigned char qui correspond au processus d'OpenMPI ou appartient à la fenêtre.
       * @see ~LsceneOpenGL()
       */
        LsceneOpenGL(std::string titreFenetre, unsigned short int largeurFenetre, unsigned short int hauteurFenetre , unsigned char _proc_id);
        /**
       * \brief Destructeur de la classe LsceneOpenGL.
       * @see LsceneOpenGL()
       */
        ~LsceneOpenGL();
        /**
       * \brief Initialisation des paramètres de la fenetre SDL.
       * @see initGL()
       * @return Retourne true si l'initialisation de la fenêtre s'est bien déroulée, sinon false.
       */
        bool initialiserFenetre();
        /**
       * \brief Initialisation des paramètres d'openGL.
       * @see initialiserFenetre()
       * @return  Retourne true si l'initialisation de la fenêtre s'est bien déroulée, sinon false.
       */
        bool initGL();
        /**
       * \brief Boucle principale de la fenêtre SDL.
       *
       *Boucle principale de la fenêtre SDL où l'on gère les évènements de la fenêtre,
        * l'affichage de l'objet avec la classe objet. Elle s'occupe aussi de prendre une image de la bitmap de
        * la fenêtre SDL et de l'envoyer à la classe SceneGlobal. Réceptionne les modifications de la rotation de l'objet 3D envoyé par SceneGlobal.*/
        void bouclePrincipale();



    private:
        std::string m_titreFenetre;/*!<Une chaîne de caractère correspondant au titre de la fenêtre SDL.*/
        unsigned short int m_largeurFenetre;/*!<Un unsigned short int qui contiendra la largeur de la fenêtre SDL.*/
        unsigned short int m_hauteurFenetre;/*!<Un unsigned short int qui contiendra la hauteur de la fenêtre SDL.*/
        unsigned char proc_id;/*!<Un unsigned char qui correspond au processus d'OpenMPI auquel appartient la fenêtre.*/
        bool etat = true;/*!<Un boolean qui est sur vrai pour que la fenêtre SDL reste à l'écran et faux pour que la fenêtre SDL disparaisse.*/
        Objet  * myObect;/*!<Pointeur sur la classe objet qui correspond à l'objet que va afficher la fenêtre SDL.*/
        unsigned char  * pixels;/*!<Pointeur sur un tableau de unsigned char qui va contenir la bitmaps a envoyé à SceneGlobal.*/
        SDL_Window* m_fenetre;/*!<Pointeur sur SDL_Window qui permet d'afficher une fenêtre avec SDL.*/
        SDL_GLContext m_contexteOpenGL;/*!<Création d'un contexte OpenGl pour pouvoir afficher un objet 3D avec OpenGL dans la fenêtre SDL.*/
        SDL_Event evenements;/*!<Variable contenant les interactions faites avec la fenêtre SDL.*/
};

#endif