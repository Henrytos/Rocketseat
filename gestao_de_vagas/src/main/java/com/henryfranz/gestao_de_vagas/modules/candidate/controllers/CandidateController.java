package com.henryfranz.gestao_de_vagas.modules.candidate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateEntity;
import com.henryfranz.gestao_de_vagas.modules.candidate.useCases.CreationCandidateUseCase;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/candidate")
public class CandidateController {

  @Autowired
  CreationCandidateUseCase creationCandidateUseCase;

  @PostMapping("")
  public ResponseEntity<Object> create(@Valid @RequestBody CandidateEntity candidateEntity) {
    try {
      CandidateEntity newCandidate = this.creationCandidateUseCase.execute(candidateEntity);
      return ResponseEntity.ok().body(newCandidate);

    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
}
