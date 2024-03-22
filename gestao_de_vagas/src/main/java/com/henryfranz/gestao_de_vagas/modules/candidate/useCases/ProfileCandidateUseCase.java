package com.henryfranz.gestao_de_vagas.modules.candidate.useCases;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateRepository;
import com.henryfranz.gestao_de_vagas.modules.candidate.dto.ProfileCandidateResponseDTO;

@Service
public class ProfileCandidateUseCase {
  @Autowired
  CandidateRepository candidateRepository;

  public ProfileCandidateResponseDTO execute(UUID companyId) throws Exception {
    var candidate = this.candidateRepository.findById(companyId).orElseThrow(() -> {
      throw new UsernameNotFoundException("candidate not found");
    });
    var candidateDTO = ProfileCandidateResponseDTO.builder()
        .id(candidate.getId())
        .name(candidate.getName())
        .email(candidate.getEmail())
        .username(candidate.getUsername())
        .build();
    return candidateDTO;
  }
}
