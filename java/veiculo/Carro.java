package veiculo;

/*
  modelo de uma classe que implementa 
  a interface Veiculo não extende só segue o modelo
 */
public class Carro implements Veiculo {

  private int velocidade;

  public int getVelocidade() {
    return velocidade;
  }

  public void acelerar() {
    this.velocidade += 10;
    System.out.println("Acelerando o carro para " + getVelocidade() + " km/h");
  }

  public void frear() {
    this.velocidade -= 10;
    System.out.println("Freando o carro para " + getVelocidade() + " km/h");
  }
}
