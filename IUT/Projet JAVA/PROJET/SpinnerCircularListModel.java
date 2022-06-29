import java.util.List;
import javax.swing.JSpinner;
import javax.swing.SpinnerListModel;

/**
*<p>Classe qui va permettre a MenuGuitar d'avoir des JSpinner qui boucle</p>
*@see EcouterAccord
*@author FAMECHON Hugo
*/
public class SpinnerCircularListModel extends SpinnerListModel {
  public SpinnerCircularListModel(Object[] items) {
    super(items);
  }

  public Object getNextValue() {
    List list = getList();
    int index = list.indexOf(getValue());

    index = (index >= list.size() - 1) ? 0 : index + 1;
    return list.get(index);
  }

  public Object getPreviousValue() {
    List list = getList();
    int index = list.indexOf(getValue());

    index = (index <= 0) ? list.size() - 1 : index - 1;
    return list.get(index);
  }
}