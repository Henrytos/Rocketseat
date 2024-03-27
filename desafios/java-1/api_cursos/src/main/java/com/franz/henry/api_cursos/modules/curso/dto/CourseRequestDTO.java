package com.franz.henry.api_cursos.modules.curso.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CourseRequestDTO {
  private String name;
  private String category;
  private Boolean active;
}
