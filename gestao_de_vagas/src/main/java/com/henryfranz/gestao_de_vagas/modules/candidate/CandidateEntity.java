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

  @Pattern(regexp = "^(?!\\s*$).+", message = "o campo [userName] não pode ser vazio")
  private String username;

  @Email(message = "o campo[email] deve conter um email vilido")
  @NotNull
  private String email;

  @Length(min = 10, max = 100)
  private String password;
  private String description;
  private String curriculum;

  @CreationTimestamp
  private LocalDateTime cratedAt;

}
