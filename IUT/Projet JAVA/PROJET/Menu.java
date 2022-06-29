import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;
import java.awt.Color;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;

/**
* <p>La classe menue herite de Jpanel et implementer de ActionListener sert a avoir un menue pour selectionner un accord et pouvoir actualiser et ouvrir la fenetre pour enregistrer un nouvelle accord
* </p>
* @author Matthieu Trinquart
*/
class Menu extends JPanel implements ActionListener
{	
	Timer timer = new Timer(100, this);
	JLabel label ;
	lecturefichier test = new lecturefichier();
	static boolean B  = false;
	String items[] = new String[test.liste.size() + 1] ;
	JComboBox LeNomDeTaComboBox ;
	JButton bouton = new JButton("Nouvelle accord");
	JButton bouton2 = new JButton("actualiser");
	
	String P = "Initial" ;
	String chaineCle = "";
	
	String avant = "" ;
	/**
*Constructeur de Menu
*/
	Menu()
	{
		timer.start();
		for (int i = 0 ;i < test.liste.size() ; ++i)
		{
			items[i] = test.liste.elementAt(i).Nom ;

		}
		items[test.liste.size() ] = "N'existe pas";
		Color marron = new Color(185, 122, 87);
		setBackground(marron);
		LeNomDeTaComboBox = new JComboBox(items);
		ItemListener listener1 = new ItemListener()
		{
			public void itemStateChanged(ItemEvent e) 
			{
				String accord = (String) e.getItem();
	  			for(int i = 0 ; i< test.liste.size() ; ++i )
				{
					if( accord ==  test.liste.elementAt(i).Nom && e.getStateChange() == e.SELECTED )
					{
						Guitare.Corde1 = test.liste.elementAt(i).corde1 ;
						Guitare.Corde2 = test.liste.elementAt(i).corde2 ;
						Guitare.Corde3 = test.liste.elementAt(i).corde3 ;
						Guitare.Corde4 = test.liste.elementAt(i).corde4 ;
						Guitare.Corde5 = test.liste.elementAt(i).corde5 ;
						Guitare.Corde6 = test.liste.elementAt(i).corde6 ;
					}
				}
			}
		};
		
		LeNomDeTaComboBox.addItemListener(listener1);
		add(LeNomDeTaComboBox);
		add(bouton);
		add(bouton2);
		bouton.addActionListener(new ActionListener()
		{
			public void actionPerformed(ActionEvent e) 
			{
				FenetreAjouter test = new FenetreAjouter("fenetre");
			}
		});
		
		bouton2.addActionListener(new ActionListener()
		{
			public void actionPerformed(ActionEvent e)
			{
				recharger();
			}
		});
	}
             	/**
*s'apelle a chaque fois que le timer ce fini
*/
	public void actionPerformed(ActionEvent ev)
	{
		if(ev.getSource()==timer)
		{
			changeSelect();
		}
	}
             	/**
*sert a reactualisé la ComboBox avec les nouvelles info dans le fichier texte
*/
	public void recharger()
	{
		test.actualiser();
		items = new String[test.liste.size() + 1] ;
		for (int i = 0 ;i < test.liste.size() ; ++i)
		{
			items[i] = test.liste.elementAt(i).Nom ;
		}
		items[test.liste.size() ] = "N'existe pas";
		LeNomDeTaComboBox.setModel(new DefaultComboBoxModel(items));
	}
	             	/**
*sert detecter quand un accord sur le manche a etait dessiner et a l'afficher sur la ComboBox
*/
	public void changeSelect()
	{
		int i = 0;
		while( i< test.liste.size() )//&& avant != test.liste.elementAt(i).Nom)
		{
			if( Guitare.Corde1 == test.liste.elementAt(i).corde1 &&				//la il rentre que si ça correspond et que P est different de "avant etait le meme"
				Guitare.Corde2 == test.liste.elementAt(i).corde2 &&
				Guitare.Corde3 == test.liste.elementAt(i).corde3 &&
				Guitare.Corde4 == test.liste.elementAt(i).corde4 &&
				Guitare.Corde5 == test.liste.elementAt(i).corde5 &&
				Guitare.Corde6 == test.liste.elementAt(i).corde6 && 
				!P.equals("avant etait le meme"))
				{
					// System.out.println("Ceci correspond a un truc du JComboBox");
					P = "avant etait le meme";
					
					chaineCle = Integer.toString(test.liste.elementAt(i).corde1) + Integer.toString(test.liste.elementAt(i).corde2) + Integer.toString(test.liste.elementAt(i).corde3) + Integer.toString(test.liste.elementAt(i).corde4) + Integer.toString(test.liste.elementAt(i).corde5) + Integer.toString(test.liste.elementAt(i).corde6);
					
					LeNomDeTaComboBox.setSelectedItem(test.liste.elementAt(i).Nom);
				}
				++i;
		}
		if(P.equals("avant etait le meme"))//la il rentre que si "avant etait le meme"
		{
			String EtatActuel = Integer.toString(Guitare.Corde1) + Integer.toString(Guitare.Corde2) + Integer.toString(Guitare.Corde3) + Integer.toString(Guitare.Corde4) + Integer.toString(Guitare.Corde5) + Integer.toString(Guitare.Corde6);
			if(!chaineCle.equals(EtatActuel))
			{
				P = "Differents";
				LeNomDeTaComboBox.setSelectedItem("N'existe pas");
				// System.out.println("Il y a eu un changement comparer a la derniere selection");
			}
		}
	}
}
