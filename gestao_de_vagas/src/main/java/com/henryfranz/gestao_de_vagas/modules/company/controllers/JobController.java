package com.henryfranz.gestao_de_vagas.modules.company.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henryfranz.gestao_de_vagas.modules.company.dto.CreateJobDTO;
import com.henryfranz.gestao_de_vagas.modules.company.entities.JobEntity;
import com.henryfranz.gestao_de_vagas.modules.company.useCases.CreateJobUseCase;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/job")
public class JobController {

  @Autowired
  private CreateJobUseCase createJobUseCase;

  @PostMapping("/")
  public JobEntity create(@Valid @RequestBody CreateJobDTO createJobDTO, HttpServletRequest request) {

    var companyId = request.getAttribute("company_id");
    // jobEntity.setCompanyId(UUID.fromString(companyId.toString()));

    var jobEntity = JobEntity.builder()
        .benifits(createJobDTO.getBenifits())
        .description(createJobDTO.getDescription())
        .level(createJobDTO.getLevel())
        .companyId(UUID.fromString(companyId.toString()))
        .build();

    return createJobUseCase.execute(jobEntity);
  }

}
