package com.henry.entities;

public class User {
  public String id;
  public String name;
  public String email;
  public String age;
  public String password;

  public User(String name, String email, String password, String age) {
    this.id = String.valueOf(Math.ceil(Math.random() * 1000));
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
  }

  public String getName() {
    return name;
  }

}