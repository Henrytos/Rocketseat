package wrapper;

/*
 * Wrapper Classes, que são objetos criados para encapsular os dados dos tipos primitivos.
 * metodos novos
*/
public class WrapperClass {
  public static void main(String[] args) {
    Integer myNumber = 10;
    System.out.println(myNumber.byteValue());
    System.out.println(myNumber.equals(2));
    System.out.println(myNumber.intValue());
    System.out.println(myNumber.getClass());

    int number = Integer.parseInt("2");
    System.out.println(number);

    Boolean myboolean = false;
    System.out.println(myboolean.booleanValue());
    System.out.println(myboolean.equals(false));
    System.out.println(myboolean.getClass());

    String mystring = Boolean.toString(true).toString();
    System.out.println(mystring.getClass());
    System.out.println(mystring);

  }
}
