package com.henryfranz.gestao_de_vagas.modules.company.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.henryfranz.gestao_de_vagas.modules.company.entities.CompanyEntity;

public interface CompanyRepository extends JpaRepository<CompanyEntity, UUID> {
  Optional<CompanyRepository> findByUsernameOrEmail(String userName, String email);

}
