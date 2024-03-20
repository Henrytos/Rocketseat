package com.henryfranz.gestao_de_vagas.modules.company.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.henryfranz.gestao_de_vagas.modules.company.entities.JobEntity;

/**
 * JobRepository
 */

public interface JobRepository extends JpaRepository<JobEntity, UUID> {

}
