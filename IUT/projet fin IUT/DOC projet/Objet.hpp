#ifndef GKOBJECT_H_INCLUDED
#define GKOBJECT_H_INCLUDED

#include <GL/glew.h>
#include <OpenMesh/Core/IO/MeshIO.hh>
#include <OpenMesh/Core/Mesh/PolyMesh_ArrayKernelT.hh>
#include "Point3D.hpp"
typedef OpenMesh::PolyMesh_ArrayKernelT<>  MyMesh;

class Objet
{

    public:

        Objet(unsigned char _proc_id);

        ~Objet();

        void init();

        bool display();

        float angleX = 0;/*!< Valeur Flotante corespondant à la valeur en degrès de la position de l'objet autour de l'axe X */
        float angleY = 0;/*!< Valeur Flotante corespondant à la valeur en degrès de la position de l'objet autour de l'axe Y */
        float angleZ = 0;/*!< Valeur Flotante corespondant à la valeur en degrès de la position de l'objet autour de l'axe Z */
        float zoom = 0;/*!< Valeur Flotante corespondant au Zoom sur l'objet 3D */

    private:
  
        void Read(std::string File);

        void Dessiner();

        void Centroid();

        void initVBO();

        unsigned char proc_id;/*!< un unsigned char qui enregistre qu'elle processus appartient l'objet*/
        GLuint VBOSommets;/*!< un Gluint qui enregistre le VBO*/
        MyMesh point;/*!< une variable qui enregistre l'objet 3D*/
        point3D  cen;/*!< une variable qui enregistre le x,y,z du centroid de l'objet 3D*/
        point3D  * lsommets;/*!< une variable qui enregistre le x,y,z de tout les points de l'objet 3D*/


};

#endif 
