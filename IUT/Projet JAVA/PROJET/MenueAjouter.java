import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;
import java.awt.Color;
/**
* <p>La classe MenueAjouter sert a faire le menue pour ajouter un nouvelles accord
* </p>
* @author Matthieu Trinquart 
* @see lecturefichier
*/
class MenueAjouter extends JPanel  //implements ItemListener
{	
	String saisi ;
	JTextField textField = new JTextField();
	JButton bouton = new JButton("Enregistrer");
	lecturefichier test2 = new lecturefichier();
/**
* Contructeur de MenueAjouter
*/
	MenueAjouter()
	{
		EcritureFichier test = new EcritureFichier();
		Color marron = new Color(185, 122, 87);
		setBackground(marron);
		textField.setPreferredSize( new Dimension( 200, 24 ) );
		bouton.addActionListener(new ActionListener()
		{  
			public void actionPerformed(ActionEvent e)
			{
				saisi = textField.getText();
				test.ecrire(saisi);
			}  
		});   
			




		add(textField);
		add(bouton);
	 
	}

}
	
	