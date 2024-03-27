package com.franz.henry.api_cursos.modules.curso.useCases;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.franz.henry.api_cursos.modules.curso.CourseRepository;
import com.franz.henry.api_cursos.modules.curso.dto.CourseRequestDTO;

@Service
public class UpdateActiveCourseUseCase {

  @Autowired
  private CourseRepository courseRepository;

  public void execute(String courseId, CourseRequestDTO courseRequestDTO) {
    UUID uuid = UUID.fromString(courseId);

    @SuppressWarnings("null")
    var course = this.courseRepository.findById(uuid);

    course.ifPresent(c -> {
      c.setActive(courseRequestDTO.getActive());
      this.courseRepository.save(c);
    });

  }

}