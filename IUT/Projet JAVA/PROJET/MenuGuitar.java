import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;
import java.awt.Color;
import java.awt.Dimension;
import javax.swing.event.ChangeListener;
import javax.swing.event.ChangeEvent;

/**
* <p> La classe MenuGuitar sert a afficher les JSPinners de séléction des notes de guitare.
* Cette classe vas s'actualiser toute les secondes avec un timer pour actualiser les JSpiners a la bonne valeur.</p>
*
* Pour que les Spinners boucle on utilise la classe SpinnerCircularListModel
* @see SpinnerCircularListModel
* @author FAMECHON Hugo
*/
public class MenuGuitar extends JPanel implements ActionListener 
{	
	/**
	* Les JSPinners utilisé pour representer les cordes
	*
	*
	*/
	JSpinner noteCorde1,noteCorde2,noteCorde3,noteCorde4,noteCorde5,noteCorde6;
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	private String notes[] = { "X","A", "A#", "B", 
        "C", "C#", "D", "D#", "E",  
        "F", "F#", "G", "G#" };
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	String notesCorde1[] = { "E", "F", "F#", 
        "G", "G#", "A", "A#", "X"}; 
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	String notesCorde2[] = { "A", "A#", "B", 
        "C", "C#", "D", "D#", "X"}; 
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	String notesCorde3[] = { "D", "D#", "E",  
        "F", "F#", "G", "G#", "X" };
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	String notesCorde4[] = { "G", "G#", "A", "A#", "B", 
        "C", "C#", "X"}; 
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	String notesCorde5[] = { "B",
        "C", "C#", "D", "D#", "E",  
        "F", "X" }; 
	
	/**
	* Les notes de chaque corde stocké dans un tableau de String
	*/
	String notesCorde6[] = { "E",  
        "F", "F#", "G", "G#", "A", "A#", "X" }; 
	
	Timer timer=new Timer(1, this);
	
	
	
	/**
	 * Constructor.
	 * La construction de MenuGuitar 
	 * <p>La construction de MenuGuitar avec l'instanciation des JSpinners et le lancement du Timer</p>
	 */
	MenuGuitar()
	{	
		//185 122 87
		Color marron = new Color(185, 122, 87);
		setBackground(marron);
		Dimension dimSpinners = new Dimension(40,32);
		
		noteCorde1 = new JSpinner(new SpinnerCircularListModel(notesCorde1));
			noteCorde1.setPreferredSize(dimSpinners);
		noteCorde2 = new JSpinner(new SpinnerCircularListModel(notesCorde2));
			noteCorde2.setPreferredSize(dimSpinners);
		noteCorde3 = new JSpinner(new SpinnerCircularListModel(notesCorde3));
			noteCorde3.setPreferredSize(dimSpinners);
		noteCorde4 = new JSpinner(new SpinnerCircularListModel(notesCorde4));
			noteCorde4.setPreferredSize(dimSpinners);
		noteCorde5 = new JSpinner(new SpinnerCircularListModel(notesCorde5));
			noteCorde5.setPreferredSize(dimSpinners);
		noteCorde6 = new JSpinner(new SpinnerCircularListModel(notesCorde6));
			noteCorde6.setPreferredSize(dimSpinners);
		
		ChangeListener listener1 = new ChangeListener() 
		{
			public void stateChanged(ChangeEvent e) 
			{
				switch((String)noteCorde1.getValue())
				{
					// String Corde1[] = { "A", "A#", "B", 
        // "C", "C#", "D", "D#", "E",  
        // "F", "F#", "G", "G#" };
					case "X":
						Guitare.Corde1 = 100;
						break;
					case "A":
						Guitare.Corde1 = 5;
						break;
					case "A#":
						Guitare.Corde1 = 6;
						break;
					case "E":
						Guitare.Corde1 = 0;
						break;
					case "F":
						Guitare.Corde1 = 1;
						break;
					case "F#":
						Guitare.Corde1 = 2;
						break;
					case "G":
						Guitare.Corde1 = 3;
						break;
					case "G#":
						Guitare.Corde1 = 4;
						break;
				}
			}
		};
		
		
		ChangeListener listener2 = new ChangeListener() 
		{
			public void stateChanged(ChangeEvent e) 
			{
					// String notesCorde2[] = { "X", "A", "A#", "B", 
        // "C", "C#", "D", "D#"}; 
				switch((String)noteCorde2.getValue())
				{
					case "X":
						Guitare.Corde2 = 100;
						break;
					case "A":
						Guitare.Corde2 = 0;
						break;
					case "A#":
						Guitare.Corde2 = 1;
						break;
					case "B":
						Guitare.Corde2 = 2;
						break;
					case "C":
						Guitare.Corde2 = 3;
						break;
					case "C#":
						Guitare.Corde2 = 4;
						break;
					case "D":
						Guitare.Corde2 = 5;
						break;
					case "D#":
						Guitare.Corde2 = 6;
						break;
				}
			}
		};
		
		
		ChangeListener listener3 = new ChangeListener() 
		{
			public void stateChanged(ChangeEvent e) 
			{
				// String notesCorde3[] = { "X", "D", "D#", "E",  
        // "F", "F#", "G", "G#" };
				switch((String)noteCorde3.getValue())
				{
					case "X":
						Guitare.Corde3 = 100;
						break;
					case "D":
						Guitare.Corde3 = 0;
						break;
					case "D#":
						Guitare.Corde3 = 1;
						break;
					case "E":
						Guitare.Corde3 = 2;
						break;
					case "F":
						Guitare.Corde3= 3;
						break;
					case "F#":
						Guitare.Corde3 = 4;
						break;
					case "G":
						Guitare.Corde3 = 5;
						break;
					case "G#":
						Guitare.Corde3 = 6;
						break;
				}
			}
		};
		
		
		ChangeListener listener4 = new ChangeListener() 
		{
			public void stateChanged(ChangeEvent e) 
			{
				// String notesCorde4[] = { "X", "G", "G#", "A", "A#", "B", 
        // "C", "C#"}; 
				switch((String)noteCorde4.getValue())
				{
					case "X":
						Guitare.Corde4 = 100;
						break;
					case "G":
						Guitare.Corde4 = 0;
						break;
					case "G#":
						Guitare.Corde4 = 1;
						break;
					case "A":
						Guitare.Corde4 = 2;
						break;
					case "A#":
						Guitare.Corde4 = 3;
						break;
					case "B":
						Guitare.Corde4 = 4;
						break;
					case "C":
						Guitare.Corde4 = 5;
						break;
					case "C#":
						Guitare.Corde4 = 6;
						break;
				}
			}
		};
		
		
		ChangeListener listener5 = new ChangeListener() 
		{
			public void stateChanged(ChangeEvent e) 
			{
				// String notesCorde5[] = { "X", "B",
        // "C", "C#", "D", "D#", "E",  
        // "F" }; 
				switch((String)noteCorde5.getValue())
				{
					case "X":
						Guitare.Corde5 = 100;
						break;
					case "B":
						Guitare.Corde5 = 0;
						break;
					case "C":
						Guitare.Corde5 = 1;
						break;
					case "C#":
						Guitare.Corde5 = 2;
						break;
					case "D":
						Guitare.Corde5 = 3;
						break;
					case "D#":
						Guitare.Corde5 = 4;
						break;
					case "E":
						Guitare.Corde5 = 5;
						break;
					case "F":
						Guitare.Corde5 = 6;
						break;
				}
			}
		};
		
		
		ChangeListener listener6 = new ChangeListener() 
		{
			public void stateChanged(ChangeEvent e) 
			{
				// String notesCorde6[] = { "X", "E",  
        // "F", "F#", "G", "G#", "A", "A#" };
				switch((String)noteCorde6.getValue())
				{
					case "X":
						Guitare.Corde6 = 100;
						break;
					case "E":
						Guitare.Corde6 = 0;
						break;
					case "F":
						Guitare.Corde6 = 1;
						break;
					case "F#":
						Guitare.Corde6 = 2;
						break;
					case "G":
						Guitare.Corde6 = 3;
						break;
					case "G#":
						Guitare.Corde6 = 4;
						break;
					case "A":
						Guitare.Corde6 = 5;
						break;
					case "A#":
						Guitare.Corde6 = 6;
						break;
				}
			}
		};

		
		noteCorde1.addChangeListener(listener1);
		noteCorde2.addChangeListener(listener2);
		noteCorde3.addChangeListener(listener3);
		noteCorde4.addChangeListener(listener4);
		noteCorde5.addChangeListener(listener5);
		noteCorde6.addChangeListener(listener6);
		
		
		
		
		add(noteCorde1);
		add(noteCorde2);
		add(noteCorde3);
		add(noteCorde4);
		add(noteCorde5);
		add(noteCorde6);
		
		timer.start();
	}
	/**
	* Fonction qui vas changer les JSpinerrs par ce qu'il y a dans Guitare.Corde1,Guitare.Corde2.....
	*/
	public void lookForChanges()
	{
		//System.out.println("lookforchanges");
		switch(Guitare.Corde1)
		{
			case 100:
				noteCorde1.setValue("X");
				break;
			default:
				noteCorde1.setValue(notesCorde1[Guitare.Corde1]);
		}
		
		switch(Guitare.Corde2)
		{
			case 100:
				noteCorde2.setValue("X");
				break;
			default:
				noteCorde2.setValue(notesCorde2[Guitare.Corde2]);
		}
		
		switch(Guitare.Corde3)
		{
			case 100:
				noteCorde3.setValue("X");
				break;
			default:
				noteCorde3.setValue(notesCorde3[Guitare.Corde3]);
		}
		
		switch(Guitare.Corde4)
		{
			case 100:
				noteCorde4.setValue("X");
				break;
			default:
				noteCorde4.setValue(notesCorde4[Guitare.Corde4]);
		}
		
		switch(Guitare.Corde5)
		{
			case 100:
				noteCorde5.setValue("X");
				break;
			default:
				noteCorde5.setValue(notesCorde5[Guitare.Corde5]);
		}
		
		switch(Guitare.Corde6)
		{
			case 100:
				noteCorde6.setValue("X");
				break;
			default:
				noteCorde6.setValue(notesCorde6[Guitare.Corde6]);
		}
	}
	
	public void actionPerformed(ActionEvent ev)
	{
		 if(ev.getSource()==timer)
		   lookForChanges();
    }

	
	
}