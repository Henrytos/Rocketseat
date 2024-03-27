package com.franz.henry.api_cursos.modules.curso.useCases;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.franz.henry.api_cursos.modules.curso.CourseRepository;

@Service
public class DeleteOneCourseUseCase {

  @Autowired
  private CourseRepository courseRepository;

  @SuppressWarnings("null")
  public String execute(String courseId) {
    UUID uuid = UUID.fromString(courseId);
    var course = this.courseRepository.findById(uuid);
    if (course.isEmpty()) {
      return "Curso não existe";
    }
    this.courseRepository.deleteById(uuid);
    return "Curso deletado";

  }
}
