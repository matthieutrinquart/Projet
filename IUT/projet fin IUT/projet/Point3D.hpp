/**
 * \file Point3D.hpp
 * \brief Création d'une structure d'un point en 3D. point3D
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme de création d'une structure d'un point dans un espace de 3 dimensions avec les variables x,y et z.
 *
 */


//!\struct point3D
//!\brief Une structure pour créer un point en 3 dimensions.
/*!
Cette structure permet de créer un point en 3 dimensions avec les variables x,y et z.*/
struct point3D
{
	/*! \brief Un nombre flottant contenant la position du point 3D à la position x.*/
	float x;
	/*! \brief Un nombre flottant contenant la position du point 3D à la position y.*/
	float y;
	/*! \brief Un nombre flottant contenant la position du point 3D à la position z.*/
	float z;
};