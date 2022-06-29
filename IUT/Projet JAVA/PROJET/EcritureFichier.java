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
* <p>Classe d'EcritureFichier elle sert a ecrire un accord dans le fichier data.txt
* </p>
* @author Matthieu Trinquart
*/
class EcritureFichier
{
	BufferedWriter fW = null;
	/**
* <p>Contructeur de EcritureFichier</p>
*/
	EcritureFichier()
	{
		
	}
	/**
* <p>La methode ecrire sert a écrire dans le fichier texte l'accord
* </p>
* @param saisi
* Le nom que a saisi l'utilisateur pour son accord
*/
	public void ecrire(String saisi)
	{
		try
		{
			fW = new BufferedWriter(new FileWriter("data.txt", true));
			fW.newLine();
			fW.write(saisi);
			fW.newLine();
			
			if(Guitare.Corde1 == 100)
				fW.write(Character.forDigit(7,10));
			else
				fW.write(Character.forDigit(Guitare.Corde1,10));
			
			if(Guitare.Corde2 == 100)
				fW.write(Character.forDigit(7,10));
			else
				fW.write(Character.forDigit(Guitare.Corde2,10));
			
			if(Guitare.Corde3 == 100)
				fW.write(Character.forDigit(7,10));
			else
				fW.write(Character.forDigit(Guitare.Corde3,10));
			
			if(Guitare.Corde4 == 100)
				fW.write(Character.forDigit(7,10));
			else
				fW.write(Character.forDigit(Guitare.Corde4,10));
			
			if(Guitare.Corde5 == 100)
				fW.write(Character.forDigit(7,10));
			else
				fW.write(Character.forDigit(Guitare.Corde5,10));
			
			if(Guitare.Corde6 == 100)
				fW.write(Character.forDigit(7,10));
			else
				fW.write(Character.forDigit(Guitare.Corde6,10));

			fW.close() ;

			fW.close();
		}
		catch (IOException e)
		{
			System.out.println("Erreur : " + e.getMessage() );
		}
	}
}
	
	