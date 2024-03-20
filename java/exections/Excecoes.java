package exections;

public class Excecoes {

  /*
   * checked exepctions :As exceções verificadas são aquelas que o compilador
   * exige que sejam tratadas.
   */

  /*
   * Checked Exceptions são verificadas em tempo de compilação, enquanto Unchecked
   * Exceptions são verificadas em tempo de execução.
   * 
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
