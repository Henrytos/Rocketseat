public class HelloWorld{
  public static void main(String[] args) {
    
    PersonController myPerson = new PersonController("henry", 17);
    myPerson.setAge(20);
    myPerson.showPerson();

    PersonController myPerson2 = new PersonController("nathalia", 18);
    myPerson2.showPerson();
   
   
  }

}