package pessoa;

public class Aluno extends Person {
  private int matricula;

  public Aluno(String name, int age, String cpf, int matricula) {
    super(name, age, cpf);
    this.matricula = matricula;
  }

  public int getMatricula() {
    return matricula;
  }

  public void setMatricula(int matricula) {
    this.matricula = matricula;
  }

  public void showPerson() {
    super.showPerson();
    System.out.println("a matricula de " + getName() + " é " + getMatricula());
  }
}
