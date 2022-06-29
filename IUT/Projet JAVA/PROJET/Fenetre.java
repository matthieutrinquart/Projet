import javax.swing.*;
import java.awt.BorderLayout;
import java.awt.*;
import java.beans.*;

/**
*<p>La classe Fenetre qui vas avoir le rôle de Disposer tout les JPanel des autres classes (Menu, MenuGuitar, ZoneDessin et EcouterAccord) dans un JBorderLayout </p>
*MenuGuitar = CENTER
*Menu = NORTH
*EcouterAccord = EAST
*ZoneDessin = SOUTH
*@see MenuGuitar
*@see ZoneDessin
*@see Menu
*@see EcouterAccord
*
*
*
@author FAMECHON Hugo
*/
public class Fenetre extends JFrame //implements PropertyChangeListener
{
	public ZoneDessin zoneDessin;
	public MenuGuitar menuGuitar;
	private Panel p;
	public Menu menue;
	
	public EcouterAccord ecouterAccord;
	
	/**
	*Construit la fenetre et arrange les JPanel dans le BorderLayout
	*@param s le nom de la fenetre
	*/
	Fenetre(String s)
	{
		super(s);
		
		Color marron = new Color(185, 122, 87);
		setBackground(marron);
		
		//setSize(640,320);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		zoneDessin = new ZoneDessin();
		menuGuitar = new MenuGuitar();
		menue = new Menu();
		
		ecouterAccord = new EcouterAccord();
		
		p = new Panel();

		PropertyChangeListener propChangeListn = new PropertyChangeListener()
		{
			@Override
			public void propertyChange(PropertyChangeEvent event)
			{
				zoneDessin.repaint();
				menuGuitar.repaint();
			}
		};
		p.addPropertyChangeListener(propChangeListn);

		p.setLayout(new BorderLayout());
		p.add(menue, BorderLayout.NORTH);
		p.add(ecouterAccord, BorderLayout.EAST);
		p.add(zoneDessin, BorderLayout.SOUTH);
		p.add(menuGuitar, BorderLayout.CENTER);

		BorderLayout layout;
		setContentPane(p);
		pack();
		setVisible(true);
	}
}