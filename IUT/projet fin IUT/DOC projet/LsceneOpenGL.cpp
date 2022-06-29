/**
 * \file LsceneOpenGL.cpp
 * \brief Fonctions de la classe LsceneOpenGL.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les fonctions de la classe LsceneOpenGL
 *
 */
#include "LsceneOpenGL.hpp"
LsceneOpenGL::LsceneOpenGL(std::string titreFenetre, unsigned short int largeurFenetre, unsigned short int hauteurFenetre, unsigned char _proc_id) : m_titreFenetre(titreFenetre), m_largeurFenetre(largeurFenetre), 
                                                                                             m_hauteurFenetre(hauteurFenetre), proc_id(_proc_id),m_fenetre(0),m_contexteOpenGL(0)
{

}

LsceneOpenGL::~LsceneOpenGL()
{   
    SDL_GL_DeleteContext(m_contexteOpenGL);
    SDL_DestroyWindow(m_fenetre);
}

bool LsceneOpenGL::initialiserFenetre()
{
    SDL_GL_MakeCurrent(m_fenetre, m_contexteOpenGL);

    if(SDL_Init(SDL_INIT_VIDEO) < 0)
    {
        std::cout << "Erreur lors de l'initialisation de la SDL : " << SDL_GetError() << std::endl;
        SDL_Quit();
		
        return false;
    }
	
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 3);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 1);
	
    SDL_GL_SetAttribute(SDL_GL_DOUBLEBUFFER, 1);
    SDL_GL_SetAttribute(SDL_GL_DEPTH_SIZE, 24);

    m_fenetre = SDL_CreateWindow(m_titreFenetre.c_str(), SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, m_largeurFenetre, m_hauteurFenetre, SDL_WINDOW_SHOWN | SDL_WINDOW_OPENGL);

    if(m_fenetre == 0)
    {
        std::cout << "Erreur lors de la creation de la fenetre : " << SDL_GetError() << std::endl;
        SDL_Quit();

        return false;
    }

    m_contexteOpenGL = SDL_GL_CreateContext(m_fenetre);

    if(m_contexteOpenGL == 0)
    {
        std::cout << SDL_GetError() << std::endl;
        SDL_DestroyWindow(m_fenetre);
        SDL_Quit();

        return false;
    }

    return true;
}

bool LsceneOpenGL::initGL()
{
    GLenum initialisationGLEW( glewInit() );
    if(initialisationGLEW != GLEW_OK)
    {

        std::cout << "Erreur d'initialisation de GLEW : " << glewGetErrorString(initialisationGLEW) << std::endl;



        SDL_GL_DeleteContext(m_contexteOpenGL);
        SDL_DestroyWindow(m_fenetre);
        SDL_Quit();

        return false;
    }
    myObect = new Objet(proc_id);
    myObect->init();
    pixels = new unsigned char[m_largeurFenetre*m_hauteurFenetre*4 ];
    SDL_GL_MakeCurrent(m_fenetre, m_contexteOpenGL);
    glReadPixels(0,0,m_largeurFenetre, m_hauteurFenetre, GL_RGBA, GL_UNSIGNED_BYTE, pixels);
    MPI_Send (pixels,m_largeurFenetre*m_hauteurFenetre*4 , MPI_CHAR, 0, 0, MPI_COMM_WORLD);
    return true;
}



void LsceneOpenGL::bouclePrincipale()
{   
    int flag  = 0;
    while(etat)
    { 
        SDL_PollEvent(&evenements);
        if(evenements.window.event == SDL_WINDOWEVENT_CLOSE)
          {
            SDL_DestroyWindow(m_fenetre);
            etat = false;

          }
        MPI_Iprobe(0, 0, MPI_COMM_WORLD,&flag, NULL);
        if(flag)
        {

            MPI_Recv(&myObect->angleX,1, MPI_FLOAT, 0, 0, MPI_COMM_WORLD, NULL);
            MPI_Recv(&myObect->angleY,1, MPI_FLOAT, 0, 0, MPI_COMM_WORLD, NULL);
            MPI_Recv(&myObect->angleZ,1, MPI_FLOAT, 0, 0, MPI_COMM_WORLD, NULL);
            MPI_Recv(&myObect->zoom,1, MPI_FLOAT, 0, 0, MPI_COMM_WORLD, NULL);
            myObect->display();
            glReadPixels(0,0,m_largeurFenetre, m_hauteurFenetre, GL_RGBA, GL_UNSIGNED_BYTE, pixels);
            MPI_Send (pixels,m_largeurFenetre*m_hauteurFenetre*4 , MPI_CHAR, 0, 0, MPI_COMM_WORLD);
            SDL_GL_SwapWindow(m_fenetre);
        }
    }
}