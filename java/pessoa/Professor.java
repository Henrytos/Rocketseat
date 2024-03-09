package pessoa;

public class Professor extends Person {

  private float salario;

  public Professor(String name, int age, String cpf, float salario) {
    super(name, age, cpf);
    this.salario = salario;
  }

  public float getSalario() {
    return salario;
  }

  public void setSalario(float salario) {
    this.salario = salario;
  }

  public void showPerson() {
    super.showPerson();
    System.out.println("o salario de " + getName() + " é " + getSalario());
  }
}