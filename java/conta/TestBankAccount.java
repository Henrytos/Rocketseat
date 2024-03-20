package conta;

public class TestBankAccount {
  public static void main(String[] args) {
    BankAccount conta1 = new BankAccount("23", "henry", 1000);
    BankAccount conta2 = new BankAccount("456", "franz", 2000);
    conta1.depositar(100);
    conta1.sacar(200);
    conta1.transferir(300, conta2);
  }
}
