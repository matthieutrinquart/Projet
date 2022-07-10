
import javax.swing.*;
import javax.swing.text.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.io.*;
import java.util.ArrayList;

public class projetalgo implements ActionListener {

    /*Instantitation des variable (boutons , zone de text , ou la chaine de caractères global)*/
    private String dest;
    private JTextArea passwordField1 = null;
    private JTextArea passwordField2 = null;
    private JTextPane grandeZone1 = new JTextPane();
    private JTextPane grandeZone2 = new JTextPane();
    private ArrayList<int[]> liste1 = new ArrayList<>();
    private ArrayList<int[]> liste2 = new ArrayList<>();
    private Highlighter.HighlightPainter redPainter;
    private JButton pickFile = new JButton("choisir fichier");
    private JButton transformButton = new JButton("remplacer");
    private JButton saveButton = new JButton("Enregistrer");

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Main du projet*/
    public static void main(String[] argv) {
        projetalgo paf = new projetalgo();
        paf.init();
    }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*Fonction KMP qui cherche une occurence pour la remplacer par un autre motif(c'est ici aussi qu'on déifini qu'elle caractère surligner en rouge*/
        public String KMP(String chaine , String occurence , String remplace){
            dest = chaine;
            int j = 0;
            int nbOccurences = 0;
            int differenceTaille = remplace.length() - occurence.length();
            boolean fini ;
            for(int i =0 ;(i+occurence.length()) <= dest.length(); ++i) {
                fini = true;
                while(fini){
                    if(dest.charAt(i+j) == occurence.charAt(j)) {
                        if(j == occurence.length()-1) {
                            String cible = dest.substring(i, i+(occurence.length()));
                            if ( differenceTaille > 0 ) {
                                int[] tab1 = {i-(differenceTaille*nbOccurences),i-(differenceTaille*nbOccurences) + cible.length()};
                                liste1.add(tab1);
                            } else if ( differenceTaille < 0 ) {
                                int[] tab1 = {i+Math.abs(differenceTaille*nbOccurences),i+Math.abs(differenceTaille*nbOccurences) + cible.length()};
                                liste1.add(tab1);
                            } else {
                                int[] tab1 = {i,i + cible.length()};
                                liste1.add(tab1);
                            }
                            replaceAndHighlight(cible,i,remplace);
                            nbOccurences++;
                            i = i + remplace.length()-1;
                            j=0;
                            fini = false;
    
                        }
                        else {
                            ++j;
                        }
                    }
                    else{
                        j = 0;
                        fini = false;
                    }
                }
            }
            return dest;
        }
    
    


 /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

 
        /* permet de remplacer l'occurence par un nouveau motif dans une chaine de caractère*/
        public void replaceAndHighlight(String cible, int index, String motif) {
    
            String partA = dest.substring(0, index) ;
    
            String partB = motif;
    
    
            int borne = index + cible.length() ;
    
    
            if (borne > dest.length()) {
                borne = dest.length();
            }
    
            String partC = dest.substring(borne, dest.length()) ;
    
            int[] tab2 = {index,index +motif.length()};
            liste2.add(tab2);
            dest =  partA + partB + partC;
        }





/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/






/* fonction d'initialisation de l'interface graphique*/
    public void init() {
        JFrame f = new JFrame("KMP algo");
        f.setSize(800, 1600);
        JLabel l1,l2;
        JScrollPane texteAsc1;
        JScrollPane texteAsc2;

        GridBagLayout layout = new GridBagLayout();
        f.setLayout(layout);
        GridBagConstraints gbc = new GridBagConstraints();

        gbc.fill = GridBagConstraints.HORIZONTAL;

        passwordField1 = new JTextArea("");
        passwordField1.setPreferredSize(new Dimension(100, 25));
        passwordField2 = new JTextArea("");
        passwordField2.setPreferredSize(new Dimension(100, 25));

        grandeZone1.setPreferredSize(new Dimension(100, 700));
        grandeZone1.setMaximumSize(new Dimension(100, 700));
        redPainter = new DefaultHighlighter.DefaultHighlightPainter(Color.red);
        grandeZone2.setPreferredSize(new Dimension(100, 700));
        grandeZone2.setMaximumSize(new Dimension(100, 700));
        l1=new JLabel("Occurence");
        l2=new JLabel("remplacer");
        gbc.gridx=0;
        gbc.gridy=0;
        f.add(l1,gbc);
        gbc.gridx=2;
        gbc.gridy=0;
        f.add(l2,gbc);
        gbc.gridx=0;
        gbc.gridy=1;
        f.add(passwordField1,gbc);
        gbc.gridx=2;
        f.add(passwordField2,gbc);
        pickFile.addActionListener(this);
        gbc.gridx=4;
        gbc.gridy=0;
        f.add(pickFile,gbc);
        transformButton.addActionListener(this);
        gbc.gridy=1;
        f.add(transformButton,gbc);


        texteAsc1 = new JScrollPane(grandeZone1);
        texteAsc2 = new JScrollPane(grandeZone2);
        texteAsc1.setMinimumSize(new Dimension(100, 700));
        texteAsc2.setMinimumSize(new Dimension(100, 700));
        gbc.gridwidth = 2;
        gbc.gridheight = 2;
        gbc.gridx=0;
        gbc.gridy=2;
        gbc.weightx = 1;
        gbc.weighty = 1;

        f.add(texteAsc1,gbc);
        gbc.gridx=2;
        f.add(texteAsc2,gbc);
        gbc.gridwidth = 1;
        gbc.gridheight = 1;
        gbc.weightx = 0;
        gbc.weighty = 0;
        saveButton.addActionListener(this);
        gbc.gridx=4;
        f.add(saveButton,gbc);
        f.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        f.setVisible(true);
    }



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



    /* gestion des boutons de l'interface graphique*/
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        if (source.equals(pickFile)) {
            File repertoireCourant = null;
            try {
                repertoireCourant = new File(".").getCanonicalFile();
            } catch (IOException e1) {
            	e1.printStackTrace();
            }


            JFileChooser dialogue = new JFileChooser(repertoireCourant);


            dialogue.showOpenDialog(null);


            String emplacement = dialogue.getSelectedFile().getPath() ;
            String text = lecture(emplacement);

            grandeZone1.setText("");
            grandeZone1.setText(text);

        }


        if (source.equals(transformButton)) {
            grandeZone2.getHighlighter().removeAllHighlights();
            grandeZone1.getHighlighter().removeAllHighlights();

            grandeZone2.setText(KMP(grandeZone1.getText(), passwordField1.getText(), passwordField2.getText()));

            for (int i = 0; i < liste1.size(); ++i) {
                try {
                    grandeZone1.getHighlighter().addHighlight(liste1.get(i)[0], liste1.get(i)[1], redPainter);
                    grandeZone2.getHighlighter().addHighlight(liste2.get(i)[0], liste2.get(i)[1], redPainter);
                } catch (BadLocationException ble) {
                	ble.printStackTrace();
                }
            }
            liste1.clear();
            liste2.clear();

        }

        if (source.equals(saveButton)) {
            String enregistrer = "";

            JFileChooser jfc = new JFileChooser();
            jfc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
            int ret = jfc.showOpenDialog(null); // ne te rend la main que si tu ferme
            if (ret == JFileChooser.APPROVE_OPTION) { // validation
                enregistrer = jfc.getSelectedFile() + "/";
            }
            
            if (!enregistrer.equals("")){
                String nom = JOptionPane.showInputDialog(null, "nom du fichier :");
                if (nom != null) {
                    enregistrer = enregistrer + nom;

                    try {
                        enregistrer(enregistrer);
                    } catch (IOException ioException) {
                        ioException.printStackTrace();
                    }

                }


            }
        }
    }
    
    
    

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


    /*pour arreter le programme quand on appuis sur la croix de l'interface graphique*/
    public void windowClosed(WindowEvent e) {
        //This will only be seen on standard output.
       System.exit(0);
    }




/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




    /*lecture d'un fichier text*/
    public String lecture(String emplacement) {
    	try (BufferedReader in = new BufferedReader(new FileReader(emplacement))) {
            
    		StringBuilder builder = new StringBuilder();
    		String line;
            while ((line = in.readLine()) != null) {
                // Afficher le contenu du fichier
                builder.append('\n' + line);
            }
            
            return builder.toString();
    	} catch (IOException e) {
    		e.printStackTrace();
    		return null;
    	}
    }
    


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/





/*permet d'enregistrer le nouveau texte généré*/
    public  void enregistrer(String emplacement) throws IOException {
        try {


            File f = new File(emplacement+".txt");


            if (f.createNewFile())
                System.out.println("File created");
            else
                System.out.println("File already exists");

            FileWriter fw = new FileWriter(f,true);
            fw.write(grandeZone2.getText());
            fw.close();
        }
        catch (Exception e) {
            System.err.println(e);
        }
    }




}