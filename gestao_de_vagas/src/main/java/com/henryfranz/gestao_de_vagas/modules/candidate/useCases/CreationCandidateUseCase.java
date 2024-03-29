package com.henryfranz.gestao_de_vagas.modules.candidate.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.henryfranz.gestao_de_vagas.exceptions.UserFoundException;
import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateEntity;
import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateRepository;

@Service
public class CreationCandidateUseCase {

  @Autowired
  private CandidateRepository candidateRepository;

  @Autowired
  PasswordEncoder passwordEncoder;

  public CandidateEntity execute(CandidateEntity candidateEntity) {

    this.candidateRepository.findByUsernameOrEmail(candidateEntity.getUsername(), candidateEntity.getEmail())
        .ifPresent(user -> {
          throw new UserFoundException();
        });

    var password = passwordEncoder.encode(candidateEntity.getPassword());
    candidateEntity.setPassword(password);

    return this.candidateRepository.save(candidateEntity);
  }
}
