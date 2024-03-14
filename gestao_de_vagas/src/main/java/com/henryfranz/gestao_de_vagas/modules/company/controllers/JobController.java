package com.henryfranz.gestao_de_vagas.modules.company.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henryfranz.gestao_de_vagas.modules.company.entities.JobEntity;
import com.henryfranz.gestao_de_vagas.modules.company.useCases.CreateJobUseCase;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/job")
public class JobController {

  @Autowired
  private CreateJobUseCase createJobUseCase;

  @PostMapping("/")
  public JobEntity create(@Valid @RequestBody JobEntity jobEntity) {
    return createJobUseCase.execute(jobEntity);
  }

}
