#ifndef GKOBJECT_H_INCLUDED
#define GKOBJECT_H_INCLUDED
/**
 * \file Objet.hpp
 * \brief Attribut de la classe Objet.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les attributs de la classe Objet.
 *
 */
#include <GL/glew.h>
#include <OpenMesh/Core/IO/MeshIO.hh>
#include <OpenMesh/Core/Mesh/PolyMesh_ArrayKernelT.hh>
#include "Point3D.hpp"
typedef OpenMesh::PolyMesh_ArrayKernelT<>  MyMesh;
/*! \class Objet
   * \brief Classe gérant un objet 3D.
   *
   *  La classe permet de lire un objet 3D grâce à la librairy openMesh, d'y faire le rendu et de tourner autour de l'objet grâce à la librairy OpenGL.*/
class Objet
{

    public:
      /**
       * \brief Constructeur de la classe Objet.
       * @param _proc_id C'est un unsigned char qui correspond au processus d'OpenMPI où appartient l'objet.
       * @see ~Objet()
       */
        Objet(unsigned char _proc_id);
        /**
       * \brief Destructeur de la classe Objet.
       * @see Objet()
       */
        ~Objet();
        /**
       * \brief Initialisation de l'objet 3D(lecture du fichier 3D, initialisation VBO, calcul centroid, premier affichage).
       * @see initVBO()
       * @see display()
       * @see Read(std::string File)
       * @see Dessiner()
       * @see Centroid()
       */
        void init();
        /**
       * \brief Affichage de chaque partie de l'objet 3D grâce à OpenGL.
       * @see Dessiner()
       */
        bool display();

        float angleX = 0;/*!<Valeur Flottante correspondant à la valeur en degrès de la position de l'objet autour de l'axe X.*/
        float angleY = 0;/*!<Valeur Flottante correspondant à la valeur en degrès de la position de l'objet autour de l'axe Y.*/
        float angleZ = 0;/*!<Valeur Flottante correspondant à la valeur en degrès de la position de l'objet autour de l'axe Z. */
        float zoom = 0;/*!<Valeur Flottante correspondant au Zoom sur l'objet 3D.*/

    private:
        /**
       * \brief Fonction servant à lire un fichier 3D grâce à OpenMesh.
       * @see init()
       */
        void Read(std::string File);
        /**
       * \brief Fonction permettant d'afficher l'entièreté de l'Objet 3D.
       * @see init()
       * @see display()
       */
        void Dessiner();
        /**
       * \brief Permet de calculer le centre d'un objet 3D.
       * @see init()
       */
        void Centroid();
        /**
       * \brief Initialisation du VBO.
       * @see init()
       */
        void initVBO();

        unsigned char proc_id;/*!<Un unsigned char qui enregistre à quel processus appartient l'objet.*/
        GLuint VBOSommets;/*!<Un Gluint qui enregistre le VBO.*/
        MyMesh point;/*!<Une variable qui enregistre l'objet 3D.*/
        point3D  cen;/*!<Une variable qui enregistre le x,y,z du centroid de l'objet 3D.*/
        point3D  * lsommets;/*!<Une variable qui enregistre le x,y,z de tous les points de l'objet 3D.*/


};

#endif 
