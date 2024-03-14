package com.henryfranz.gestao_de_vagas.modules.company.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.henryfranz.gestao_de_vagas.exceptions.UserFoundException;
import com.henryfranz.gestao_de_vagas.modules.company.entities.CompanyEntity;
import com.henryfranz.gestao_de_vagas.modules.company.repositories.CompanyRepository;

@Service
public class CreationCompanyUseCase {

  @Autowired
  private CompanyRepository companyRepository;

  public CompanyEntity execute(CompanyEntity companyEntity) {
    this.companyRepository.findByUsernameOrEmail(companyEntity.getName(), companyEntity.getEmail())
        .ifPresent(company -> {
          throw new UserFoundException();
        });

    return this.companyRepository.save(companyEntity);
  }
}
