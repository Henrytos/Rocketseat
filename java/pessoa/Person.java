package pessoa;

public class Person {
  String name;
  int age;
  String cpf;

  public Person(String name, int age, String cpf) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  public String getName() {
    return name;
  }

  public String getCpf() {
    return cpf;
  }

  public int getAge() {
    return age;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void showPerson() {
    System.out.println("-------------------------");
    System.out.println("Name: " + this.name);
    System.out.println("Age: " + this.age);
    System.out.println("CPF: " + this.cpf);
  }
}
