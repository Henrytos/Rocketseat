package com.franz.henry.api_cursos.modules.curso;

import java.sql.Date;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "Cursos")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @NotNull
  private String name;

  @NotNull
  private String category;

  @NotNull
  private Boolean active;

  @CreationTimestamp
  private Date created_at;

  @UpdateTimestamp
  private Date updated_at;
}
