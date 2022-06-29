import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;

/**
*<p>Affiche la zone ou l'on "dessine" les notes de guitare. A chaque fois que timer vas se déclencher, elle vas actualiser ce qui est affiche.
*Si on clique dans la zone de dessin la note correspondante vas etre changer grace au MouseListener.</p>
*@author FAMECHON Hugo
*/
public class ZoneDessin extends JPanel implements MouseListener, ActionListener
{
	Image bloc_marron, bloc_point , bloc_corde, bloc_cordeVide, bloc_croix;
	final int dimx = 10, dimy = 9;
	final int cordexinf = 2, cordexsup = 8, cordeyinf = 2, cordeysup = 8;
	final int taillex = 32, tailley = 32;
	int[][] tableau = new int[dimx][dimy];
	
	Timer timer=new Timer(100, this);
	
	/**
	*Le constructeur de ZoneDessin
	*	On charge les sprites et on initialise le tableau
	*/
	ZoneDessin()
	{
		timer.start();
		try 
		{
			bloc_marron = ImageIO.read(new File("Sprites/BG.png"));
			bloc_point = ImageIO.read(new File("Sprites/Point.png"));
			bloc_corde = ImageIO.read(new File("Sprites/Corde.png"));
			bloc_cordeVide = ImageIO.read(new File("Sprites/PointVide.png"));
			bloc_croix = ImageIO.read(new File("Sprites/croix.png"));
			
		} catch (IOException e) 
		{
			e.printStackTrace();
		}
		 setPreferredSize(new Dimension(dimx*taillex, dimy*tailley));
		 addMouseListener(this);
		 
		for(int i = 0;i<dimx;++i)
		{
			for(int j = 0;j<dimy;++j)
			{
				tableau[i][j] = 0 ;
			}
		}
		
		for(int i = cordexinf;i<cordexsup;++i)			//les cordes
		{
			for(int j = cordeyinf;j<cordeysup;++j)
			{
				tableau[i][j] = 2 ;
			}
		}
		
		for(int i = cordexinf;i<cordexsup;++i)			//les croix
		{
			tableau[i][cordeyinf-1] = 4 ;
		}
	}
	
	/**
	*Fonction qui va modifier le tableau et Guitare lorsqu'on clic, puis qui vas repaindre.
	*@param x La valeure x
	*@param y La valeure y
	*@param val Si on a clique gauche ou clique droit
	*/
	public void modifieTableau(int x, int y, int val)
	{
		int xt = x/taillex;
		int yt = y/tailley;
		
		int xModif = xt;	//Par défaut la ou on clique
		int yModif = yt;	//Par défaut la ou on clique
		
		if((xt >= cordexinf && xt < cordexsup ) && (yt >= cordeyinf - 1 && yt < cordeysup))
		{
			int blocPrecedent = tableau[xt][yt];
			if( xt>=0 && xt<dimx && yt>=0 && yt<dimy )
			{
				for(int i = cordeyinf - 1; i < cordeysup ; ++i)		//Pour nettoyer avec d'ecrire
				{
					if(i == cordeyinf - 1 )
						tableau[xt][i] = 0;
					else
						tableau[xt][i] = 2;
				}
				//REMINDER
				//0 = Background
				//1 = POINT avec corde
				//2 = CORDE sans point
				//3 = Point sans corde
				//4 = Croix 
				
				
				
				
				if(yt == cordeyinf - 1 && val == 1 && blocPrecedent == 0 )		//Si avant yavais un 0 c'est a dire un bloc_marron ET qu'on se trouve en haut de la guitare
				{
					tableau[xt][yt] = 3;		//on met un bloc_cordeVide 
				}
				else if(yt == cordeyinf - 1 && val == 1 && blocPrecedent == 3 ) //Si avant yavais un 3 c'est a dire un bloc_cordeVide ET qu'on se trouve en haut de la guitare
				{
					tableau[xt][yt] = 4;												//on met un bloc_croix
				}
				else if(yt == cordeyinf - 1 && val == 1 && blocPrecedent == 4 ) //Si avant yavais un 3 c'est a dire un bloc_croix ET qu'on se trouve en haut de la guitare
				{
					tableau[xt][yt] = 3;												//on met un bloc_croix
				}
				else if(yt != cordeyinf - 1 && val == 1 && blocPrecedent == 1 ) //Si avant yavais un 2 c'est a dire un bloc_point ET qu'on ne se trouve pas en haut de la guitare
				{
					tableau[xt][yt] = 2;												//on met un bloc_corde
					tableau[xt][cordeyinf - 1] = 4;
					yModif = cordeyinf - 1;
				}
				else if(yt == cordeyinf - 1 && val == 2)						//Si on fait un clic droit on remplace par bloc_croix(4)
				{
					tableau[xt][yt] = 4;												//on met un bloc_croix
				}
				else if(yt != cordeyinf - 1 && val == 2)
				{
					tableau[xt][yt] = 2;
					tableau[xt][cordeyinf - 1] = 4;
					yModif = cordeyinf - 1;
				}
				else
				{
					tableau[xt][yt] = val;
				}
				
				
				switch(xt)
				{
					case 2:
						switch(tableau[xt][yModif])
						{
							case 1:
								Guitare.Corde1 = yt - 1;
								break;
							case 3:
								Guitare.Corde1 = 0;
								break;
							case 4:
								Guitare.Corde1 = 100;
								break;
						}
						break;
					case 3:
						switch(tableau[xt][yModif])
						{
							case 1:
								Guitare.Corde2 = yt - 1;
								break;
							case 3:
								Guitare.Corde2 = 0;
								break;
							case 4:
								Guitare.Corde2 = 100;
								break;
						}
						break;
					case 4:
						switch(tableau[xt][yModif])
						{
							case 1:
								Guitare.Corde3 = yt - 1;
								break;
							case 3:
								Guitare.Corde3 = 0;
								break;
							case 4:
								Guitare.Corde3 = 100;
								break;
						}
						break;
					case 5:
						switch(tableau[xt][yModif])
						{
							case 1:
								Guitare.Corde4 = yt - 1;
								break;
							case 3:
								Guitare.Corde4 = 0;
								break;
							case 4:
								Guitare.Corde4 = 100;
								break;
						}
						break;
					case 6:
						switch(tableau[xt][yModif])
						{
							case 1:
								Guitare.Corde5 = yt - 1;
								break;
							case 3:
								Guitare.Corde5 = 0;
								break;
							case 4:
								Guitare.Corde5 = 100;
								break;
						}
						break;
					case 7:
						switch(tableau[xt][yModif])
						{
							case 1:
								Guitare.Corde6 = yt - 1;
								break;
							case 3:
								Guitare.Corde6 = 0;
								break;
							case 4:
								Guitare.Corde6 = 100;
								break;
						}
						break;
						
				}
				
				//TESTS
					
					// try
					// { 
						// SimpleAudioPlayer.filePath = "C:/Users/cotto/Desktop/PROJET JAVA/Sons/truc.wav"; 
						// SimpleAudioPlayer audioPlayer =  
										// new SimpleAudioPlayer(); 
						  
						// audioPlayer.play(); 
					// }  
			  
					// catch (Exception ex)  
					// { 
						// System.out.println("Error with playing sound."); 
						// ex.printStackTrace();
					// } 
				//FIN TESTS
				repaint();
			}
		}
	}
	
	/**
	*Retourne la dimension y
	*@return dimx
	*/
	public int getdimx()
	{
		return dimx ;
	}
	
	/**
	*Retourne la dimension en y
	*@return dimy
	*/
	public int getdimy()
	{
		return dimy ;
	}
	
	/**
	*Parcours le tableau et dessine le sprite correspondant.
	*/
	public void paintComponent(Graphics g)
	{
		for( int y=0; y<dimy; y++ )
		{
			for( int x=0; x<dimx; x++ )
			{
				if( tableau[x][y] == 0 )
					g.drawImage(bloc_marron, x*taillex, y*tailley, this);
				else if( tableau[x][y] == 1 )
					g.drawImage(bloc_point, x*taillex, y*tailley, this);
				else if( tableau[x][y] == 2)
					g.drawImage(bloc_corde, x*taillex, y*tailley, this);
				else if( tableau[x][y] == 3)
					g.drawImage(bloc_cordeVide, x*taillex, y*tailley, this);
				else if( tableau[x][y] == 4)
					g.drawImage(bloc_croix, x*taillex, y*tailley, this);
			}
		}
	}
	/**
	*Lorsqu'il y a un clic souris on appelle la fonction pour modifier le tableau et ainsi la zoneDessin
	*/
	public void mousePressed(MouseEvent e)
	{
		int bouton = e.getButton();
		
		if (bouton == MouseEvent.BUTTON1)
			modifieTableau(e.getX(), e.getY(), 1);
		else if (bouton == MouseEvent.BUTTON3)
			modifieTableau(e.getX(), e.getY(), 2);
	}
	
	public void mouseReleased(MouseEvent e) {}
	public void mouseClicked(MouseEvent e) {}
	public void mouseEntered(MouseEvent e) {}
	public void mouseExited(MouseEvent e) {}
	
	/**
	*L'evenement du Timer qui vas s'appeller tout les 100ms pour actualiser la zoneDessin()
	*/
	public void actionPerformed(ActionEvent ev)
	{
		 if(ev.getSource()==timer)
		   lookForChanges();
    }
	
	/**
	*Une fonction qui nettoie les Cordes c'est à dire qu'elle enleve tout les points de la guitare.
	*/
	public void NettoyerLesCordes()
	{
		for(int i = cordexinf;i<cordexsup;++i)			//les cordes
		{
			for(int j = cordeyinf;j<cordeysup;++j)
			{
				tableau[i][j] = 2 ;
			}
		}
		
		for(int i = cordexinf;i<cordexsup;++i)
		{
			tableau[i][cordeyinf-1] = 0 ;
		}
	}
	
	/**
	*La fonction qui actualise la ZoneDessin puis la repeint.
	*/
	public void lookForChanges()
	{
		//2 c'est la corde 1 jusqu'a 8 c'est la corde 6
		NettoyerLesCordes();
		
		switch(Guitare.Corde1)
		{
			case 100:
				tableau[2][cordeyinf - 1] = 4;	//On met une croix
				break;
			case 0:
				tableau[2][cordeyinf - 1] = 3;	//On met un POINT
				break;
			default:
				tableau[2][Guitare.Corde1 + 1] = 1;	//On met un POINT
		}
		
		switch(Guitare.Corde2)
		{
			case 100:
				tableau[3][cordeyinf - 1] = 4;	//On met une croix
				break;
			case 0:
				tableau[3][cordeyinf - 1] = 3;	//On met un POINT
				break;
			default:
				tableau[3][Guitare.Corde2 + 1] = 1;	//On met un POINT
		}
		
		switch(Guitare.Corde3)
		{
			case 100:
				tableau[4][cordeyinf - 1] = 4;	//On met une croix
				break;
			case 0:
				tableau[4][cordeyinf - 1] = 3;	//On met un POINT
				break;
			default:
				tableau[4][Guitare.Corde3 + 1] = 1;	//On met un POINT
		}
		
		switch(Guitare.Corde4)
		{
			case 100:
				tableau[5][cordeyinf - 1] = 4;	//On met une croix
				break;
			case 0:
				tableau[5][cordeyinf - 1] = 3;	//On met un POINT
				break;
			default:
				tableau[5][Guitare.Corde4 + 1] = 1;	//On met un POINT
		}
		
		switch(Guitare.Corde5)
		{
			case 100:
				tableau[6][cordeyinf - 1] = 4;	//On met une croix
				break;
			case 0:
				tableau[6][cordeyinf - 1] = 3;	//On met un POINT
				break;
			default:
				tableau[6][Guitare.Corde5 + 1] = 1;	//On met un POINT
		}
		
		switch(Guitare.Corde6)
		{
			case 100:
				tableau[7][cordeyinf - 1] = 4;	//On met une croix
				break;
			case 0:
				tableau[7][cordeyinf - 1] = 3;	//On met un POINT
				break;
			default:
				tableau[7][Guitare.Corde6 + 1] = 1;	//On met un POINT
		}
		repaint();
	}
}