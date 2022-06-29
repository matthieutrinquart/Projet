#ifndef DEF_OPENMPI
#define DEF_OPENMPI


#include <mpi.h>



class OpenMPI
{
    public:

        OpenMPI(int _argc , char **_argv);

        ~OpenMPI();

        bool initMPI();

        bool FinMPI();

        int proc_id;/*!<va contenir le numéro du proccessus d'OpenMPI */
    private:
        int n_procs;/*!< un entier qui va contenir le nombre de processus d'OpenMPI */
        int argc;/*!<un entier qui permet d'initialisé OpenMPI.*/
        char **argv;/*!<un entier qui permet d'initialisé OpenMPI.*/
};

#endif