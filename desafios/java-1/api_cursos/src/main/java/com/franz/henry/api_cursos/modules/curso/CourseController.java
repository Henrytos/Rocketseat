package com.franz.henry.api_cursos.modules.curso;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.franz.henry.api_cursos.modules.curso.dto.CourseRequestDTO;
import com.franz.henry.api_cursos.modules.curso.useCases.AllCoursesUseCase;
import com.franz.henry.api_cursos.modules.curso.useCases.CreateCourseUseCase;
import com.franz.henry.api_cursos.modules.curso.useCases.DeleteOneCourseUseCase;
import com.franz.henry.api_cursos.modules.curso.useCases.GetOneCourseUseCase;
import com.franz.henry.api_cursos.modules.curso.useCases.UpdateCourseUseCase;

import jakarta.websocket.server.PathParam;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/cursos")
public class CourseController {

  @Autowired
  private AllCoursesUseCase allCoursesUseCase;

  @Autowired
  private CreateCourseUseCase createCourseUseCase;

  @Autowired
  private UpdateCourseUseCase updateCourseUseCase;

  @Autowired
  private DeleteOneCourseUseCase deleteOneCourseUseCase;

  @Autowired
  private GetOneCourseUseCase getOneCourseUseCase;

  @GetMapping("/")
  public ResponseEntity<Object> get() {
    try {
      var courses = this.allCoursesUseCase.execute();
      return ResponseEntity.ok().body(courses);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body("Error: " + e.getMessage());
    }
  }

  @GetMapping("/{courseId}")
  public ResponseEntity<Object> update(@PathVariable String courseId) {
    try {
      var course = this.getOneCourseUseCase.execute(courseId);
      return ResponseEntity.ok().body(course);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body("Error: " + e.getMessage());
    }
  }

  @PostMapping("/")
  public ResponseEntity<Object> crate(@RequestBody CourseRequestDTO couseRequestDTO) {
    try {
      var newCourse = createCourseUseCase.execute(couseRequestDTO);
      return ResponseEntity.ok().body(newCourse);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body("Error: " + e.getMessage());
    }
  }

  @PutMapping("/{courseId}")
  public ResponseEntity<Object> update(@PathVariable String courseId, @RequestBody CourseRequestDTO courseRequestDTO) {
    try {
      var course = this.updateCourseUseCase.execute(courseId, courseRequestDTO);
      return ResponseEntity.ok().body(course);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body("Error: " + e.getMessage());
    }
  }

  @DeleteMapping("/{courseId}")
  public String delete(@PathVariable String courseId) {
    return this.deleteOneCourseUseCase.execute(courseId);
  }

  @PatchMapping("/{courseId}/active")
  public void updateActive(@PathVariable String courseId, @RequestBody CourseRequestDTO courseRequestDTO) {

  }

}
