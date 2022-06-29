import javax.swing.*;
import java.awt.BorderLayout;
import java.awt.*;
import java.beans.*;

/**
* <p>Classe FenetreAjouter est heriter de JFrame est sert a afficher le menueAjouter
* </p>
* @see MenueAjouter
* @author Matthieu Trinquart
*/
public class FenetreAjouter extends JFrame
{
	private Panel p;
	public MenueAjouter menue;
	/**
*Constructeur de FenetreAjouter
*/
	FenetreAjouter(String s)
	{
		super(s);
		
		Color marron = new Color(185, 122, 87);
		setBackground(marron);
		menue = new MenueAjouter();
		p = new Panel();
		p.setLayout(new BorderLayout());
		p.add(menue, BorderLayout.NORTH);
		BorderLayout layout;
		setContentPane(p);
		pack();
		setVisible(true);
	}
}