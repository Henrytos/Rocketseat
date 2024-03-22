package com.henryfranz.gestao_de_vagas.modules.candidate.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateEntity;
import com.henryfranz.gestao_de_vagas.modules.candidate.useCases.CreationCandidateUseCase;
import com.henryfranz.gestao_de_vagas.modules.candidate.useCases.ProfileCandidateUseCase;
import com.henryfranz.gestao_de_vagas.modules.candidate.useCases.ReadCandidatesUseCase;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/candidate")
public class CandidateController {

  @Autowired
  CreationCandidateUseCase creationCandidateUseCase;

  @Autowired
  ReadCandidatesUseCase readCandidatesUseCase;

  @Autowired
  ProfileCandidateUseCase profileCandidateUseCase;

  @PostMapping("/")
  public ResponseEntity<Object> create(@Valid @RequestBody CandidateEntity candidateEntity) {
    try {
      CandidateEntity newCandidate = this.creationCandidateUseCase.execute(candidateEntity);
      return ResponseEntity.ok().body(newCandidate);

    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

  @GetMapping("/")
  public ResponseEntity<Object> get(HttpServletRequest request) {
    var candidateId = request.getAttribute("candidateId");

    try {
      var result = this.profileCandidateUseCase.execute(UUID.fromString(candidateId.toString()));
      return ResponseEntity.ok().body(result);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

}
