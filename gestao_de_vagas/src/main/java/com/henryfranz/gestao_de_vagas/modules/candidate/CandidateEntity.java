package com.henryfranz.gestao_de_vagas.modules.candidate;

import java.util.UUID;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class CandidateEntity {

  private UUID id;

  @Pattern(regexp = "^(?!\\s*$).+", message = "o campo [userName] não pode ser vazio")
  private String userName;

  @Email(message = "o campo[email] deve conter um email vilido")
  @NotNull
  private String email;

  @Length(min = 10, max = 100)
  private String password;
  private String description;
  private String curriculum;

}
