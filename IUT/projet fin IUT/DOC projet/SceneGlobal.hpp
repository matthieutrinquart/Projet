#ifndef DEF_SceneGlobal
#define DEF_SceneGlobal

#include <SDL2/SDL.h>
#include <mpi.h>
#include <time.h>



class SceneGlobal
{
    public:

        SceneGlobal(std::string titreFenetre, unsigned short int largeurFenetre, unsigned short int hauteurFenetre);

        ~SceneGlobal();

        bool initialiserFenetre();

        void bouclePrincipale();


    private:
 
        void Draw();

        void Envoie();
        std::string m_titreFenetre;/*!< une chaine de caractère correspondant au titre de la fenetre SDL*/
        unsigned short int m_largeurFenetre;/*!< un unsigned short int qui contiendra la largeur de la fenetre SDL*/
        unsigned short int m_hauteurFenetre;/*!< un unsigned short int qui contiendra la hauteur de la fenetre SDL*/
        float angleX = 0;/*!< Valeur Flotante corespondant à la valeur en degrès de la position de l'objet autour de l'axe X */
        float angleY = 0;/*!< Valeur Flotante corespondant à la valeur en degrès de la position de l'objet autour de l'axe Y */
        float angleZ = 0;/*!< Valeur Flotante corespondant à la valeur en degrès de la position de l'objet autour de l'axe Z */
        float zoom = 0;/*!< Valeur Flotante corespondant au Zoom sur l'objet 3D */
        bool   etat = true;/*!<un boolean qui est sur vrai pour que la fenetre SDL reste a l'ecran et faux pour que la fenetre SDL disparaissent*/
        SDL_Rect  * dest;/*!<Carré qui va contenir une partie de l'objet 3D et qui assembler formera l'objet 3D dans son entièreté*/
        SDL_Surface * surf;/*!<Argument qui va mettre la bitmaps reçu dans un carré et l'afficher*/
        unsigned char * pixels;/*!<Pointeur sur un tableau de unsigned char qui va contenir la bitmaps a recevoir de LsceneOpenGL */
        SDL_Window* m_fenetre;	/*!< pointeur sur SDL_Window qui permet d'afficher une fenetre avec SDL*/
        SDL_Event evenements;/*!<Variable contenant les interaction faite avec la fenetre SDL*/
};

#endif