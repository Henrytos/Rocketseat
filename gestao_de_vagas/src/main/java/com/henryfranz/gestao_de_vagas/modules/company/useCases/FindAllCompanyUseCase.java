package com.henryfranz.gestao_de_vagas.modules.company.useCases;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.henryfranz.gestao_de_vagas.modules.company.entities.CompanyEntity;
import com.henryfranz.gestao_de_vagas.modules.company.repositories.CompanyRepository;

@Service
public class FindAllCompanyUseCase {

  @Autowired
  private CompanyRepository companyRepository;

  public List<CompanyEntity> execute() {
    List<CompanyEntity> companys = companyRepository.findAll();
    return companys;
  }
}
