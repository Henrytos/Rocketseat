package com.henryfranz.gestao_de_vagas.modules.company.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henryfranz.gestao_de_vagas.modules.company.dto.AuthCompanyDTO;
import com.henryfranz.gestao_de_vagas.modules.company.useCases.AuthCompanyUseCase;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/company")
public class AuthCompanyController {

  @Autowired
  private AuthCompanyUseCase authCompanyUseCase;

  @PostMapping("/auth")
  public ResponseEntity<Object> create(@RequestBody AuthCompanyDTO authCompanyDTO) throws Exception {
    try {
      var token = this.authCompanyUseCase.execute(authCompanyDTO);
      return ResponseEntity.ok().body(token);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }
  }

}
