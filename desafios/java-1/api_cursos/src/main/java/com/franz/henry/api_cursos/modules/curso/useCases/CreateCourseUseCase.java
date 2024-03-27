package com.franz.henry.api_cursos.modules.curso.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.franz.henry.api_cursos.modules.curso.CourseEntity;
import com.franz.henry.api_cursos.modules.curso.CourseRepository;
import com.franz.henry.api_cursos.modules.curso.dto.CourseRequestDTO;

@Service
public class CreateCourseUseCase {

  @Autowired
  private CourseRepository courseRepository;

  @SuppressWarnings("null")
  public CourseEntity execute(CourseRequestDTO courseRequestDTO) {

    var courseEntity = CourseEntity.builder()
        .name(courseRequestDTO.getName())
        .category(courseRequestDTO.getCategory())
        .active(courseRequestDTO.getActive())
        .build();

    return this.courseRepository.save(courseEntity);
  }
}
