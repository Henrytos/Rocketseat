package com.franz.henry.api_cursos.modules.curso.useCases;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.franz.henry.api_cursos.modules.curso.CourseEntity;
import com.franz.henry.api_cursos.modules.curso.CourseRepository;

@Service
public class AllCoursesUseCase {

  @Autowired
  private CourseRepository cursoRepository;

  public List<CourseEntity> execute() {
    List<CourseEntity> cursos = this.cursoRepository.findAll();
    return cursos;
  }
}
