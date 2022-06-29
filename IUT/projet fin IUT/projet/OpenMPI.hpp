#ifndef DEF_OPENMPI
#define DEF_OPENMPI

/**
 * \file OpenMPI.hpp
 * \brief Attribut de la classe OpenMPI.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les Attributs de la classe LsceneOpenGL.
 *
 */
 
#include <mpi.h>

//!\class OpenMPI
//! \brief Classe gérant la gestion du multi processus avec Openmpi.
/*!
Cette classe permet d'initialiser openMPI et de le faire fonctionner.*/

class OpenMPI
{
    public:
        /**
       *\brief Constructeur de la classe OpenMPI.
       * @param _argc un entier qui permet d'initialiser OpenMPI.
        * @param _argv un char** qui permet d'initialiser OpenMPI.
       * @see ~OpenMPI()
       */
        OpenMPI(int _argc , char **_argv);
        /**
       *\brief Destructeur de la classe OpenMPI.
       * @see OpenMPI(int _argc , char **_argv)
       */
        ~OpenMPI();
        /**
       *\brief Initialisation d'OpenMPI.
       * @see FinMPI()
       * @return Retourne true si l'initialisation s'est bien déroulée, sinon false.
       */
        bool initMPI();
        /**
       *\brief Initialisation d'OpenMPI.
       * @see FinMPI()
       * @return Retourne true si l'initialisation s'est bien déroulée, sinon false.
       */
        bool FinMPI();
        /**
       *\brief Fermeture d'OpenMPI.
       * @see initMPI()
       * @return Retourne true si la fermeture s'est bien déroulée, sinon false.
       */
        int proc_id;/*!<Va contenir le numéro du proccessus d'OpenMPI.*/
    private:
        int n_procs;/*!<Un entier qui va contenir le nombre de processus d'OpenMPI.*/
        int argc;/*!<Un entier qui permet d'initialiser OpenMPI.*/
        char **argv;/*!<Un entier qui permet d'initialiser OpenMPI.*/
};

#endif