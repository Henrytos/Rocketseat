
public class HashSet {
  public static void main(String[] args) {
    java.util.HashSet<String> names = new java.util.HashSet<>();

    names.add("henry");
    names.add("livian");

    java.util.HashSet<String> names2 = new java.util.HashSet<>();
    names2.add("henry");

    names.removeAll(names2);

    for (String name : names) {
      System.out.println(name);
    }

    System.out.println(names);

  }
}
