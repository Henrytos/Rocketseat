package primeirarAulas;

import java.util.ArrayList;
import java.util.List;

public class EstruturasDeDados {
  public static void main(String[] args) {
    // lista
    List<String> names = new ArrayList<>();
    names.add("henry");
    names.add("franz");
    names.add("ramos");
    names.add("arcaya");

    // for (int i = 0; i < names.size(); i++) {
    // System.out.println(names.get(i));
    // }

    // for (String name : names) {
    // System.out.println(name);
    // }

    names.forEach(name -> {
      System.out.println(name);
    });
  }

}