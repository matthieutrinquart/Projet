import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;
import java.awt.Color;
import java.io.*;
import java.util.*;
import java.io.*;
/**
* <p>Classe lecturefichier qui sert a lire un accord dans un fichier texte et le stocker dans un vecteur de accordstocker
* </p>
* @see accordstocker
* @author Matthieu Trinquart
*/
class lecturefichier
{	

    Vector<accordstocker> liste = new Vector<accordstocker>();
	BufferedReader lecteurAvecBuffer = null;
/**
*Constructeur de lecturefichier
* 
*/
	lecturefichier()
	{
		BufferedReader fR;
		try
		{
			File f = new File("data.txt");
			fR = new BufferedReader (new FileReader(f));
			String chaine;// = fR.readLine();
			
			while ((chaine = fR.readLine()) != null)
			{
				accordstocker test = new accordstocker();
				test.Nom = chaine ;
				chaine = fR.readLine();
				
				//CORDE 1
				int entier = Character.getNumericValue(chaine.charAt(0));
				if(entier == 7)
					test.corde1 = 100 ;
				else
					test.corde1 = entier;
				
				//CORDE 2
				entier = Character.getNumericValue(chaine.charAt(1)) ;
				if(entier == 7)
					test.corde2 = 100 ;
				else
					test.corde2 = entier;
				
				//CORDE 3
				entier = Character.getNumericValue(chaine.charAt(2)) ;
				if(entier == 7)
					test.corde3 = 100 ;
				else
					test.corde3 = entier;
				
				//CORDE 4
				entier = Character.getNumericValue(chaine.charAt(3)) ;
				if(entier == 7)
					test.corde4 = 100 ;
				else
					test.corde4 = entier;
				
				//CORDE 5
				entier = Character.getNumericValue(chaine.charAt(4)) ;
				if(entier == 7)
					test.corde5 = 100 ;
				else
					test.corde5 = entier;
				
				//CORDE 6
				entier = Character.getNumericValue(chaine.charAt(5)) ;
				if(entier == 7)
					test.corde6 = 100 ;
				else
					test.corde6 = entier;
				
				

				// test.corde2 = entier ;
				 // entier = Character.getNumericValue(chaine.charAt(2)) ;
				// test.corde3 = entier ;
				 // entier = Character.getNumericValue(chaine.charAt(3)) ;
				// test.corde4 = entier ;
					 // entier = Character.getNumericValue(chaine.charAt(4)) ;
				// test.corde5 = entier ;
				 // entier = Character.getNumericValue(chaine.charAt(5)) ;
				// test.corde6 = entier ;
				
				
				
				liste.addElement(test);
			}
			fR.close();
		}
		catch (IOException e)
		{
			System.out.println("Erreur : " + e.getMessage() );
		}
	}
	
	/**
* <p>la methode actualiser sert a relire le fichier texte et reinstensier la liste de accordstocker</p>
* 
*/
	public void actualiser()
	{
		BufferedReader fR;
		try
		{
			File f = new File("data.txt");
			fR = new BufferedReader (new FileReader(f));
			String chaine;// = fR.readLine();
			 
			while ((chaine = fR.readLine()) != null)
			{
			  //   System.out.println(chaine);
				accordstocker test = new accordstocker();
				test.Nom = chaine ;
				chaine = fR.readLine();

				
				//CORDE 1
				int entier = Character.getNumericValue(chaine.charAt(0));
				if(entier == 7)
					test.corde1 = 100 ;
				else
					test.corde1 = entier;
				
				//CORDE 2
				entier = Character.getNumericValue(chaine.charAt(1)) ;
				if(entier == 7)
					test.corde2 = 100 ;
				else
					test.corde2 = entier;
				
				//CORDE 3
				entier = Character.getNumericValue(chaine.charAt(2)) ;
				if(entier == 7)
					test.corde3 = 100 ;
				else
					test.corde3 = entier;
				
				//CORDE 4
				entier = Character.getNumericValue(chaine.charAt(3)) ;
				if(entier == 7)
					test.corde4 = 100 ;
				else
					test.corde4 = entier;
				
				//CORDE 5
				entier = Character.getNumericValue(chaine.charAt(4)) ;
				if(entier == 7)
					test.corde5 = 100 ;
				else
					test.corde5 = entier;
				
				//CORDE 6
				entier = Character.getNumericValue(chaine.charAt(5)) ;
				if(entier == 7)
					test.corde6 = 100 ;
				else
					test.corde6 = entier;
				
				
				
				
				liste.addElement(test);
			}
			fR.close();
		}
		catch (IOException e)
		{
			System.out.println("Erreur : " + e.getMessage() );
		}
	}
}





	
	