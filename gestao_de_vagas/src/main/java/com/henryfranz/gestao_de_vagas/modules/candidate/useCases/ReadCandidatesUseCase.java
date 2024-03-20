package com.henryfranz.gestao_de_vagas.modules.candidate.useCases;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateEntity;
import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateRepository;

@Service
public class ReadCandidatesUseCase {

  @Autowired
  CandidateRepository candidateRepository;

  public List<CandidateEntity> execute() {
    return candidateRepository.findAll();
  }
}
