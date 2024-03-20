package primeirarAulas;

import java.util.HashMap;
import java.util.Map;

public class Colecoes {
  public static void main(String[] args) {
    HashMap<String, Integer> notes = new HashMap<>();

    notes.put("henry", 5);
    notes.put("luvi", 6);
    notes.put("livian", 7);
    notes.put("mari", 8);
    notes.put("ana", 9);

    for (Map.Entry<String, Integer> entry : notes.entrySet()) {
      String key = entry.getKey();
      Integer value = entry.getValue();
      System.out.println(key + " : " + value);
    }
    System.out.println(notes);

  }

}
