#ifndef DEF_SceneGlobal
#define DEF_SceneGlobal

 /**
 * \file SceneGlobal.hpp
 * \brief Attributs de la classe LsceneOpenGL.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les attributs de la classe SceneGlobal.
 *
 */
#include <SDL2/SDL.h>
#include <mpi.h>


//! \class SceneGlobal
//! \brief Classe gérant l'affichage de la fenêtre SDL.
/*!
Cette classe permet d'afficher une fenêtre SDL qui va contenir l'entièreté de l'objet 3D.*/
class SceneGlobal
{
    public:
         /**
       *\brief Constructeur de la classe LsceneOpenGL.
       * @param titreFenetre Une chaîne de caractère qui correspond au titre de la fenêtre.
        * @param largeurFenetre Un unsigned short int qui correspond à la largeur de la fenêtre.
        * @param hauteurFenetre Un unsigned short int qui correspond à la hauteur de la fenêtre.
       * @see ~SceneGlobal()
       */
        SceneGlobal(std::string titreFenetre, unsigned short int largeurFenetre, unsigned short int hauteurFenetre);
        /**
       * \brief Destructeur de la classe SceneGlobal.
       * @see SceneGlobal()
       */
        ~SceneGlobal();
        /**
       * \brief initialisation des paramètres de la fenêtre SDL.
       * @return Retourne true si l'initialisation de la fenêtre s'est bien déroulée, sinon false.
       */
        bool initialiserFenetre();
        /**
        * \brief Boucle principale de la fenêtre SDL.
        *
        *Boucle principal de la fenêtre SDL où l'on gère les évènements de la fenêtre,
        *l'affichage de l'objet avec la classe objet. Elle s'occupe aussi de récupérer
        *les bitmaps envoyés par les classes LsceneOpenGL et de l'afficher sur la fenêtre principale
        *et envoie au classe LsceneOpenGL les consignes de modifications à faire sur la rotation et de zoom de l'objet 3D.
        */
        void bouclePrincipale();


    private:
        /**
        * \brief Fonction qui reçoit les bitmaps de chaque classe LsceneOpenGL et les affiche.
        */
        void Draw();
        /**
        * \brief Fonction qui envoie les modifications de rotations et de zoom de l'objet à la classe LsceneOpenGL.
        */
        void Envoie();
        std::string m_titreFenetre;/*!<Une chaêne de caractère correspondant au titre de la fenêtre SDL.*/
        unsigned short int m_largeurFenetre;/*!<Un unsigned short int qui contiendra la largeur de la fenêtre SDL.*/
        unsigned short int m_hauteurFenetre;/*!<Un unsigned short int qui contiendra la hauteur de la fenêtre SDL.*/
        float angleX = 0;/*!<Valeur Flottante correspondant à la valeur en degrès de la position de l'objet autour de l'axe X.*/
        float angleY = 0;/*!<Valeur Flottante correspondant à la valeur en degrès de la position de l'objet autour de l'axe Y.*/
        float angleZ = 0;/*!<Valeur Flottante correspondant à la valeur en degrès de la position de l'objet autour de l'axe Z.*/
        float zoom = 0;/*!<Valeur Flottante correspondant au zoom sur l'objet 3D. */
        bool   etat = true;/*!<Un boolean qui est sur vrai pour que la fenêtre SDL reste à l'ecran et faux pour que la fenetre SDL disparaisse.*/
        SDL_Rect  * dest;/*!<Carré qui va contenir une partie de l'objet 3D et qui assemblé formera l'objet 3D dans son entièreté*/
        SDL_Surface * surf;/*!<Argument qui va mettre la bitmaps reçue dans un carré et l'afficher*/
        unsigned char * pixels;/*!<Pointeur sur un tableau de unsigned char qui va contenir la bitmaps à recevoir de LsceneOpenGL.*/
        SDL_Window* m_fenetre;/*!<Pointeur sur SDL_Window qui permet d'afficher une fenêtre avec SDL.*/
        SDL_Event evenements;/*!<Variable contenant les interactions faites avec la fenêtre SDL.*/
};

#endif