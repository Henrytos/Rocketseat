package pessoa;

public class TestPerson {
  public static void main(String[] args) {
    Person p1 = new Person("henry", 10, "3123144324342");
    p1.showPerson();

    Person p2 = new Person("luvi", 20, "8714324234909");
    p2.showPerson();

    Professor prof = new Professor("rodrigo", 40, "487239298743", 2131.5f);
    prof.showPerson();

    Aluno aluno = new Aluno("mari", 17, "37102372180", 312312);
    aluno.showPerson();

  }
}
