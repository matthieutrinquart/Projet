/**
 * \file Objet.cpp
 * \brief Fonction de la classe Objet.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les fonctions de la classe Objet.
 *
 */

#include"Objet.hpp"

Objet::Objet(unsigned char _proc_id):proc_id(_proc_id)
{

}
Objet::~Objet()
{
}

void Objet::Read(std::string File)
{
  if (!OpenMesh::IO::read_mesh(point,File)) 
  {
    std::cerr << "read error\n";
    exit(1);
  }

}


void Objet::initVBO()
{
    glEnable(GL_CULL_FACE);
  if (glewIsSupported("GL_ARB_vertex_buffer_object") == GL_FALSE)
   {
		std::cerr << "VBO impossibles, non supportés\n";
		exit (1);
  }
  lsommets = new struct point3D[point.n_faces() * 3] ;
  unsigned int i  = 0 ;
	for (MyMesh::FaceIter f_it = point.faces_begin(); f_it != point.faces_end(); ++f_it) 
	{
		for (MyMesh::FVIter fv_it = point.fv_begin(*f_it); fv_it != point.fv_end(*f_it); ++fv_it)
		{
			lsommets[i].x  = point.point(*fv_it)[0];
      lsommets[i].y  = point.point(*fv_it)[1];
      lsommets[i].z  = point.point(*fv_it)[2];
      ++i;
		
		}
	}
  glGenBuffers((GLsizei) 1, &VBOSommets);
	glBindBuffer(GL_ARRAY_BUFFER, VBOSommets);
	glBufferData(GL_ARRAY_BUFFER, point.n_faces() * 9 * sizeof(float), lsommets, GL_STATIC_DRAW);
}
void Objet::init()
{
  Read("suzanne.obj");
  initVBO();
  Centroid();
  display();
}

void Objet::Centroid()
{
  float tamponx = 0;
  float tampony = 0;
  float tamponz = 0;
  for ( size_t i=0; i<point.n_vertices(); i++ )
  {

        tamponx = lsommets[i].x + tamponx ;
        tampony = lsommets[i].y + tampony ;
        tamponz = lsommets[i].z + tamponz ;
  }
  cen.x = (tamponx)/point.n_vertices();
  cen.y = (tampony)/point.n_vertices() - 0.05;
  cen.z = (tamponz)/point.n_vertices();

}
void Objet::Dessiner()
{
  glPushMatrix();
  glEnableClientState(GL_VERTEX_ARRAY);
  glBindBuffer( GL_ARRAY_BUFFER, VBOSommets);
  glVertexPointer( 3, GL_FLOAT, 0, (char *) NULL );
  glDrawArrays(GL_TRIANGLES, 0, point.n_faces()  * 3);
  glDisableClientState(GL_VERTEX_ARRAY);
  glPopMatrix();
}


bool Objet::display()
{
  glMatrixMode( GL_PROJECTION );
  glLoadIdentity();

  glOrtho(-zoom - 4 + cen.x ,zoom +4+ cen.x ,-zoom- 4 -cen.y,zoom +4-cen.y ,-10,10);

  switch(proc_id)
  {
    case 1:
      gluLookAt(-zoom- 4- cen.x, -zoom- 4- cen.y, zoom +4 + cen.z,-zoom- 4- cen.x, -zoom- 4- cen.y ,  cen.z, 0.0, 2.0, 0.0);
    break;
    case 2:
      gluLookAt(zoom +4- cen.x, -zoom- 4- cen.y, zoom +4+ cen.z,zoom +4 -cen.x, -zoom- 4- cen.y, cen.z, 0.0, 2.0, 0.0);
    break;
    case 3:
      gluLookAt(-zoom- 4- cen.x, zoom +4- cen.y, zoom +4+ cen.z,-zoom- 4- cen.x, zoom +4-  cen.y, cen.z, 0.0, 2.0, 0.0);
    break;
    case 4:
      gluLookAt(zoom +4- cen.x, zoom +4- cen.y, zoom +4+ cen.z,zoom +4- cen.x, zoom +4-  cen.y, cen.z, 0.0, 2.0, 0.0);
    break;
  }

  glClear( GL_COLOR_BUFFER_BIT );
  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();
  glTranslated(0,0,zoom);
  glCullFace(GL_BACK);
  glRotated(angleX, 1.d, 0.d, 0.d);
  glRotated(angleY, 0.d, 1.d, 0.d);
  glRotated(angleZ + 180, 0.d, 0.d, 1.d);
  Dessiner();
  glFlush();
  return true;
}
