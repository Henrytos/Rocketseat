package com.henryfranz.gestao_de_vagas.modules.candidate.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.henryfranz.gestao_de_vagas.exceptions.UserFoundException;
import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateEntity;
import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateRepository;

@Service
public class CreationCandidateUseCase {

  @Autowired
  private CandidateRepository candidateRepository;

  public CandidateEntity execute(CandidateEntity candidateEntity) {

    this.candidateRepository.findByUsernameOrEmail(candidateEntity.getUsername(), candidateEntity.getEmail())
        .ifPresent(user -> {
          throw new UserFoundException();
        });

    return this.candidateRepository.save(candidateEntity);
  }
}
