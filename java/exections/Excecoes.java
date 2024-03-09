package exections;

public class Excecoes {

  /*
   * checked exepctions :As exceções verificadas são aquelas que o compilador
   * exige que sejam tratadas.
   */
  /*
   * unchecked exepctions :As exceções não verificadas são aquelas que o
   * compilador não consegue prever no momento da compilação.
   */
  public static void main(String[] args) {
    try {
      validandoNumero();
    } catch (Exception e) {
      System.out.println("erro :" + e.getMessage());
    }
  }

  static void validandoNumero() throws Exception {
    int numero = 10;
    if (numero < 100) {
      throw new Exception("numero menor que 100");
    }
  }
}
