 /**
 * \file SceneGlobal.cpp
 * \brief Fonctions de la classe SceneGlobal.
 * \author Matthieu TRINQUART
 * \version 1.0
 * \date 14 juin 2020
 *
 * Programme contenant les fonctions de la classe SceneGlobal
 *
 */
#include "SceneGlobal.hpp"
SceneGlobal::SceneGlobal(std::string titreFenetre, unsigned short int largeurFenetre, unsigned short int hauteurFenetre) : m_titreFenetre(titreFenetre), m_largeurFenetre(largeurFenetre), 
                                                                                             m_hauteurFenetre(hauteurFenetre), m_fenetre(0)
{
}

SceneGlobal::~SceneGlobal()
{
     SDL_DestroyWindow(m_fenetre);
    SDL_Quit();
    
}

bool SceneGlobal::initialiserFenetre()
{
 
  if(SDL_Init(SDL_INIT_VIDEO) < 0)
  {
    std::cout << "Erreur lors de l'initialisation de la SDL : " << SDL_GetError() << std::endl;
    SDL_DestroyWindow(m_fenetre);
    SDL_Quit();	
    return false;
  }	
  m_fenetre = SDL_CreateWindow(m_titreFenetre.c_str(), 30, 30, m_largeurFenetre, m_hauteurFenetre, SDL_WINDOW_SHOWN);

  if(m_fenetre == 0)
  {
    std::cout << "Erreur lors de la creation de la fenetre : " << SDL_GetError() << std::endl;
    SDL_DestroyWindow(m_fenetre);
    SDL_Quit();
    return false;
  }
  pixels = new unsigned char[m_largeurFenetre*m_hauteurFenetre*4];
  Draw();
  return true;
}

void SceneGlobal::Draw()
{

  MPI_Recv(pixels,m_largeurFenetre*m_hauteurFenetre*4, MPI_CHAR, 1, 0, MPI_COMM_WORLD, NULL);
  surf = SDL_CreateRGBSurfaceFrom(pixels, m_largeurFenetre/2, m_hauteurFenetre/2, 8*4, m_largeurFenetre/2*4,0, 0, 0, 0);
  dest = new SDL_Rect{ 0,0, surf->w, surf->h};
  SDL_BlitSurface(surf,NULL,SDL_GetWindowSurface(m_fenetre),dest); 



  MPI_Recv(pixels,m_largeurFenetre*m_hauteurFenetre*4, MPI_CHAR, 2, 0, MPI_COMM_WORLD, NULL);
  surf = SDL_CreateRGBSurfaceFrom(pixels, m_largeurFenetre/2, m_hauteurFenetre/2, 8*4, m_largeurFenetre/2*4,0, 0, 0, 0);
  dest = new SDL_Rect{ surf->w,0, surf->w, surf->h};
  SDL_BlitSurface(surf,NULL,SDL_GetWindowSurface(m_fenetre),dest); 



  MPI_Recv(pixels,m_largeurFenetre*m_hauteurFenetre*4, MPI_CHAR, 3, 0, MPI_COMM_WORLD, NULL);
  surf = SDL_CreateRGBSurfaceFrom(pixels, m_largeurFenetre/2, m_hauteurFenetre/2, 8*4, m_largeurFenetre/2*4,0, 0, 0, 0);
  dest = new SDL_Rect{ 0,surf->h,surf->h, surf->h};
  SDL_BlitSurface(surf,NULL,SDL_GetWindowSurface(m_fenetre),dest);


  MPI_Recv(pixels,m_largeurFenetre*m_hauteurFenetre*4, MPI_CHAR, 4, 0, MPI_COMM_WORLD, NULL);
  surf = SDL_CreateRGBSurfaceFrom(pixels, m_largeurFenetre/2, m_hauteurFenetre/2,8*4, m_largeurFenetre/2*4,0, 0, 0, 0);
  dest = new SDL_Rect{ surf->w,surf->h, surf->w, surf->h};
  SDL_BlitSurface(surf,NULL,SDL_GetWindowSurface(m_fenetre),dest); 

  SDL_UpdateWindowSurface(m_fenetre);

}

void SceneGlobal::Envoie()
{
  MPI_Send (&angleX,1, MPI_FLOAT, 1, 0, MPI_COMM_WORLD);
  MPI_Send (&angleX,1, MPI_FLOAT, 2, 0, MPI_COMM_WORLD);
  MPI_Send (&angleX,1, MPI_FLOAT, 3, 0, MPI_COMM_WORLD);
  MPI_Send (&angleX,1, MPI_FLOAT, 4, 0, MPI_COMM_WORLD);

  MPI_Send (&angleY,1, MPI_FLOAT, 1, 0, MPI_COMM_WORLD);
  MPI_Send (&angleY,1, MPI_FLOAT, 2, 0, MPI_COMM_WORLD);
  MPI_Send (&angleY,1, MPI_FLOAT, 3, 0, MPI_COMM_WORLD);
  MPI_Send (&angleY,1, MPI_FLOAT, 4, 0, MPI_COMM_WORLD);

  MPI_Send (&angleZ,1, MPI_FLOAT, 1, 0, MPI_COMM_WORLD);
  MPI_Send (&angleZ,1, MPI_FLOAT, 2, 0, MPI_COMM_WORLD);
  MPI_Send (&angleZ,1, MPI_FLOAT, 3, 0, MPI_COMM_WORLD);
  MPI_Send (&angleZ,1, MPI_FLOAT, 4, 0, MPI_COMM_WORLD);

  MPI_Send (&zoom,1, MPI_FLOAT, 1, 0, MPI_COMM_WORLD);
  MPI_Send (&zoom,1, MPI_FLOAT, 2, 0, MPI_COMM_WORLD);
  MPI_Send (&zoom,1, MPI_FLOAT, 3, 0, MPI_COMM_WORLD);
  MPI_Send (&zoom,1, MPI_FLOAT, 4, 0, MPI_COMM_WORLD);
}


void SceneGlobal::bouclePrincipale()
{


  int flag1 = 0 ;
  int flag2 = 0 ;
  int flag3 = 0 ;
  int flag4 = 0 ;
  while(etat)
  {
    SDL_PollEvent(&evenements); 
    switch(evenements.window.event)
    {
      case SDL_WINDOWEVENT_CLOSE:

        SDL_DestroyWindow(m_fenetre);
        etat = false ;
      break;
      case SDLK_z:

        if(angleX >= 360 || angleX <= -360)
          angleX = 0;
        angleX = angleX - 0.5;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
      case SDLK_s:

        if(angleX >= 360 || angleX <= -360)
          angleX = 0;
        angleX = angleX + 0.5;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;

      case SDLK_q:

        if(angleY >= 360 || angleY <= -360)
          angleY = 0;
        angleY = angleY + 0.5;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
      case SDLK_d:

        if(angleY >= 360 || angleY <= -360)
          angleY = 0;
        angleY = angleY - 0.5;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
      case SDLK_m:

        if(angleZ >= 360 || angleZ <= -360)
          angleZ = 0;
        angleZ = angleZ + 0.5;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
      case SDLK_l:

        if(angleZ >= 360 || angleZ <= -360)
          angleZ = 0;
        angleZ = angleZ - 0.5;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
      case SDLK_p:

        if( zoom <= -3.975)
          zoom = -4;
        zoom = zoom + 0.025;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
      case SDLK_o:

        if(zoom <= -3.975)
          zoom = -4;
        zoom = zoom - 0.025;
        Envoie();
        evenements.window.event = (Uint8)NULL;
      break;
    }

    MPI_Iprobe(1, 0, MPI_COMM_WORLD,&flag1, NULL);
    MPI_Iprobe(2, 0, MPI_COMM_WORLD,&flag2, NULL);
    MPI_Iprobe(3, 0, MPI_COMM_WORLD,&flag3, NULL);
    MPI_Iprobe(4, 0, MPI_COMM_WORLD,&flag4, NULL);

    if(flag1 || flag2 || flag3 || flag4)
    {
      Draw();
    }
  }
}