package conta;

public class BankAccount {
  private String numero;
  private String titular;
  private int saldo;

  public BankAccount(String numero, String titular, int saldo) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  public void depositar(float valor) {
    if (valor > 0) {
      this.saldo += valor;
      System.out.println("Depósito realizado " + this.titular + " com sucesso valor do saldo:" + this.saldo);
    } else {
      System.out.println("Valor inválido");
    }
  }

  public void sacar(float valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      System.out.println("Saque realizado " + this.titular + " com sucesso valor do saldo:" + this.saldo);
    } else {
      System.out.println("Valor inválido");
    }
  }

  public String getTitular() {
    return titular;
  }

  public void transferir(float Valor, BankAccount contaDestino) {
    if (this.saldo > 0 && Valor <= this.saldo) {
      this.saldo -= Valor;
      contaDestino.depositar(Valor);
      System.out.println(
          "Transferência realizada para" + contaDestino.getTitular() + " com sucesso valor do saldo:" + this.saldo);
    } else {
      System.out.println("Valor inválido");
    }
  }
}
