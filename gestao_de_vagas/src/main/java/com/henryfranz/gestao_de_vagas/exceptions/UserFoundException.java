package com.henryfranz.gestao_de_vagas.exceptions;

public class UserFoundException extends RuntimeException {
  public UserFoundException() {
    super("Usuário já cadastrado");
  }
}
