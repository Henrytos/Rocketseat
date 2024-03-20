package com.henryfranz.gestao_de_vagas.modules.company.dto;

import lombok.Data;

@Data
public class CreateJobDTO {
  private String description;
  private String level;
  private String benifits;
}
