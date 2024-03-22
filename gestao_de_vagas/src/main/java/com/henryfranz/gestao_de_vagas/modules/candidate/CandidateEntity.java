package com.henryfranz.gestao_de_vagas.modules.candidate;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity(name = "candidate")
public class CandidateEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @NotNull
  @Pattern(regexp = "^(?!\\s*$).+", message = "o campo [userName] não pode ser vazio")
  private String username;

  @NotNull
  private String name;

  @NotNull
  @Email(message = "o campo[email] deve conter um email vilido")
  private String email;

  @NotNull()
  @Length(min = 10, max = 100, message = "o campo [password] não pode ser vazio")
  private String password;

  private String description;
  private String curriculum;

  @CreationTimestamp
  private LocalDateTime cratedAt;

}
