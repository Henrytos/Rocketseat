package com.henryfranz.gestao_de_vagas.modules.candidate.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProfileCandidateResponseDTO {
  private String description;
  private String username;
  private String email;
  private String name;
}
