import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;
import javax.swing.JButton;

/**
*<p>Classe qui vas instancier le boutton "jouer l'accord" et qui vas le jouer en lisant les fichiers .WAV grace a la classe SimpleAudioPlayer</p>
*@see SimpleAudioPlayer
*@author FAMECHON Hugo
*/
public class EcouterAccord extends JPanel
{
	JButton buttonPlay;
	
	/**
	*Le constructeur, il vas ajouter un JButton et un Listener Dessus.
	*Le listener vas servir a savoir quel fichiers faut-il lire.
	*/
	EcouterAccord()
	{
		Color marron = new Color(185, 122, 87);
		setBackground(marron);
		
		buttonPlay = new JButton("Jouer l'accord");
		add(buttonPlay);
		buttonPlay.addActionListener(new ActionListener()
		{
			public void actionPerformed(ActionEvent e)
			{  
				String Corde1 = "", Corde2= "", Corde3= "", Corde4= "", Corde5= "", Corde6= "";
				
				switch(Guitare.Corde1)
				{
					case 100:
						Corde1 = "vide.wav";
						break;
					case 0:
						Corde1 = "Corde1E.wav";
						break;
					case 1:
						Corde1 = "Corde1F.wav";
						break;
					case 2:
						Corde1 = "Corde1F#.wav";
						break;
					case 3:
						Corde1 = "Corde1G.wav";
						break;
					case 4:
						Corde1 = "Corde1G#.wav";
						break;
					case 5:
						Corde1 = "Corde1A.wav";
						break;
					case 6:
						Corde1 = "Corde1A#.wav";
						break;
				}
				
				switch(Guitare.Corde2)
				{
					case 100:
						Corde2 = "vide.wav";
						break;
					case 0:
						Corde2 = "Corde2B.wav";
						break;
					case 1:
						Corde2 = "Corde2C.wav";
						break;
					case 2:
						Corde2 = "Corde2C#.wav";
						break;
					case 3:
						Corde2 = "Corde2D.wav";
						break;
					case 4:
						Corde2 = "Corde2D#.wav";
						break;
					case 5:
						Corde2 = "Corde2E.wav";
						break;
					case 6:
						Corde2 = "Corde2F.wav";
						break;
				}
				
				switch(Guitare.Corde3)
				{
					case 100:
						Corde3 = "vide.wav";
						break;
					case 0:
						Corde3 = "Corde3G.wav";
						break;
					case 1:
						Corde3 = "Corde3G#.wav";
						break;
					case 2:
						Corde3 = "Corde3A.wav";
						break;
					case 3:
						Corde3 = "Corde3A#.wav";
						break;
					case 4:
						Corde3 = "Corde3B.wav";
						break;
					case 5:
						Corde3 = "Corde3C.wav";
						break;
					case 6:
						Corde3 = "Corde3C#.wav";
						break;
				}
				
				switch(Guitare.Corde4)
				{
					case 100:
						Corde4 = "vide.wav";
						break;
					case 0:
						Corde4 = "Corde4D.wav";
						break;
					case 1:
						Corde4 = "Corde4D#.wav";
						break;
					case 2:
						Corde4 = "Corde4E.wav";
						break;
					case 3:
						Corde4 = "Corde4F.wav";
						break;
					case 4:
						Corde4 = "Corde4F#.wav";
						break;
					case 5:
						Corde4 = "Corde4G.wav";
						break;
					case 6:
						Corde4 = "Corde4G#.wav";
						break;
				}
				
				switch(Guitare.Corde5)
				{
					case 100:
						Corde5 = "vide.wav";
						break;
					case 0:
						Corde5 = "Corde5A.wav";
						break;
					case 1:
						Corde5= "Corde5A#.wav";
						break;
					case 2:
						Corde5 = "Corde5B.wav";
						break;
					case 3:
						Corde5 = "Corde5C.wav";
						break;
					case 4:
						Corde5 = "Corde5C#.wav";
						break;
					case 5:
						Corde5 = "Corde5D.wav";
						break;
					case 6:
						Corde5= "Corde5D#.wav";
						break;
				}
				
				switch(Guitare.Corde6)
				{
					case 100:
						Corde6 = "vide.wav";
						break;
					case 0:
						Corde6 = "Corde6E.wav";
						break;
					case 1:
						Corde6 = "Corde6F.wav";
						break;
					case 2:
						Corde6 = "Corde6F#.wav";
						break;
					case 3:
						Corde6 = "Corde6G.wav";
						break;
					case 4:
						Corde6 = "Corde6G#.wav";
						break;
					case 5:
						Corde6 = "Corde6A.wav";
						break;
					case 6:
						Corde6 = "Corde6A#.wav";
						break;
				}
				
				//CORDE 1
				try
				{
					// System.out.println("/Sons/" + Corde1);
					Corde1 = "./Sons/" + Corde1;
					SimpleAudioPlayer.filePath = Corde1; 
					SimpleAudioPlayer audioPlayer =  
									new SimpleAudioPlayer(); 
					  
					audioPlayer.play(); 
				}  
			  	catch (Exception ex)  
				{ 
					System.out.println("Error with playing sound."); 
					ex.printStackTrace();
				} 
				
				
				//CORDE 2
				try
				{
					// System.out.println("/Sons/" + Corde1);
					Corde2 = "./Sons/" + Corde2;
					SimpleAudioPlayer.filePath = Corde2; 
					SimpleAudioPlayer audioPlayer =  
									new SimpleAudioPlayer(); 
					  
					audioPlayer.play();  
				}  
			  	catch (Exception ex)  
				{ 
					System.out.println("Error with playing sound."); 
					ex.printStackTrace();
				} 
				
				//CORDE 3
				try
				{
					// System.out.println("/Sons/" + Corde1);
					Corde3 = "./Sons/" + Corde3;
					SimpleAudioPlayer.filePath = Corde3; 
					SimpleAudioPlayer audioPlayer =  
									new SimpleAudioPlayer(); 
					  
					audioPlayer.play(); 
				}  
			  	catch (Exception ex)  
				{ 
					System.out.println("Error with playing sound."); 
					ex.printStackTrace();
				} 
				
				//CORDE 4
				try
				{
					// System.out.println("/Sons/" + Corde1);
					Corde4 = "./Sons/" + Corde4;
					SimpleAudioPlayer.filePath = Corde4; 
					SimpleAudioPlayer audioPlayer =  
									new SimpleAudioPlayer(); 
					  
					audioPlayer.play(); 
				}  
			  	catch (Exception ex)  
				{ 
					System.out.println("Error with playing sound."); 
					ex.printStackTrace();
				} 
				
				//CORDE 5
				try
				{
					// System.out.println("/Sons/" + Corde5);
					Corde5 = "./Sons/" + Corde5;
					SimpleAudioPlayer.filePath = Corde5; 
					SimpleAudioPlayer audioPlayer =  
									new SimpleAudioPlayer(); 
					  
					audioPlayer.play(); 
				}  
			  	catch (Exception ex)  
				{ 
					System.out.println("Error with playing sound."); 
					ex.printStackTrace();
				} 
				
				//CORDE 5
				try
				{
					// System.out.println("/Sons/" + Corde5);
					Corde6 = "./Sons/" + Corde6;
					SimpleAudioPlayer.filePath = Corde6; 
					SimpleAudioPlayer audioPlayer =  
									new SimpleAudioPlayer(); 
					  
					audioPlayer.play(); 
				}  
			  	catch (Exception ex)  
				{ 
					System.out.println("Error with playing sound."); 
					ex.printStackTrace();
				} 
			}
		});
	}
}