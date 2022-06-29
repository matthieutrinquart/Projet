

/**
 * \file OpenMPI.hpp
 * \brief Fonction de la classe OpenMPI.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les fonction de la classe LsceneOpenGL
 *
 */
 
#include "OpenMPI.hpp"


OpenMPI::OpenMPI(int _argc , char **_argv) : argc(_argc), argv(_argv)
{

}
OpenMPI::~OpenMPI()
{
}

bool OpenMPI::initMPI()
{
    
	MPI_Init(&argc, &argv); 


	MPI_Comm_rank(MPI_COMM_WORLD,&proc_id);

	MPI_Comm_size(MPI_COMM_WORLD,&n_procs);
     
    return true;
}

bool OpenMPI::FinMPI()
{
    
    MPI_Finalize();
	exit(EXIT_SUCCESS);
     
    return true;
}



