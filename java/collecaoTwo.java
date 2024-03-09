import java.util.HashSet;

public class collecaoTwo {
  public static void main(String[] args) {
    HashSet<String> names = new HashSet<>();

    names.add("henry");
    names.add("livian");

    HashSet<String> names2 = new HashSet<>();
    names2.add("henry");

    names.removeAll(names2);

    for (String name : names) {
      System.out.println(name);
    }

    System.out.println(names);

  }
}
