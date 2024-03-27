package com.franz.henry.api_cursos.modules.curso.useCases;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.franz.henry.api_cursos.modules.curso.CourseEntity;
import com.franz.henry.api_cursos.modules.curso.CourseRepository;

@Service
public class GetOneCourseUseCase {
  @Autowired
  private CourseRepository courseRepository;

  public Optional<CourseEntity> execute(String courseId) {
    UUID uuid = UUID.fromString(courseId);
    @SuppressWarnings("null")
    Optional<CourseEntity> course = courseRepository.findById(uuid);
    if (course.isEmpty()) {
      throw new RuntimeException("Curso não encontrado");
    }
    return course;
  }
}
