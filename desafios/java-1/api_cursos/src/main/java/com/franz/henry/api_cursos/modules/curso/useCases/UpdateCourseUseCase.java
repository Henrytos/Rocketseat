package com.franz.henry.api_cursos.modules.curso.useCases;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.franz.henry.api_cursos.modules.curso.CourseEntity;
import com.franz.henry.api_cursos.modules.curso.CourseRepository;
import com.franz.henry.api_cursos.modules.curso.dto.CourseRequestDTO;

@Service
public class UpdateCourseUseCase {

  @Autowired
  private CourseRepository courseRepository;

  public Optional<CourseEntity> execute(String courseId, CourseRequestDTO courseRequestDTO) throws Exception {

    UUID uuid = UUID.fromString(courseId);

    @SuppressWarnings("null")
    var coursetarget = this.courseRepository.findById(uuid);

    coursetarget.ifPresent(course -> {
      course.setName(courseRequestDTO.getName());
      course.setCategory(courseRequestDTO.getCategory());
      course.setActive(courseRequestDTO.getActive());

      this.courseRepository.save(course);
    });

    return coursetarget;

  }
}
