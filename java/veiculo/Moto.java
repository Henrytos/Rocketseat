package veiculo;

public class Moto implements Veiculo {
  private int velocidade;

  public int getVelocidade() {
    return velocidade;
  }

  public void acelerar() {
    this.velocidade += 10;
    System.out.println("Acelerando o moto para " + getVelocidade() + " km/h");
  }

  public void frear() {
    this.velocidade -= 10;
    System.out.println("Freando o moto para " + getVelocidade() + " km/h");
  }
}
