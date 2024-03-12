package com.henryfranz.gestao_de_vagas.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorMenssgeDTO {
  private String message;
  private String field;
}
