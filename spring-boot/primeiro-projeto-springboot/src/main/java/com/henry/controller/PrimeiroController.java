package com.henry.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.henry.entities.User;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiroController {

  @GetMapping("/primeiroMetodo/{id}")
  public String primeiroMetodo(@PathVariable String id) {
    return "Primeiro método do controller id=" + id;
  }

  // path params request
  @GetMapping("/metodoPathParams/{id}")
  public String metodoPathParams(@PathVariable String id) {
    return "pathParams id=" + id;
  }

  // query params request
  @GetMapping("/metodoQueryParams")
  public String metodoQueryParams(@RequestParam String id) {
    return "pathParams id=" + id;
  }

  // query params request
  @GetMapping("/metodoQueryParams2")
  public String metodoQueryParams2(@RequestParam Map<String, String> allParams) {
    return "todos os parametros são" + allParams.entrySet();
  }

  // body request
  @PostMapping("/metodoRequestBody")
  public String metodoRequestBody(@RequestBody Usuario user) {
    return "crated user " + user.name();
  }

  // Header request

  @GetMapping("/metodoHeader")
  public String metodoHeader(@RequestHeader("name") String name) {
    return "header name=" + name;
  }

  @GetMapping("/metodoHeaderList")
  public String metodoHeaderList(@RequestHeader Map<String, String> allHeader) {
    return "header name=" + allHeader.get("authorization");
  }

  @GetMapping("/metodoResponseEntity/{id}")
  public ResponseEntity<Object> metodoResponseEntity(@PathVariable Long id, @RequestBody User body) {

    User user = new User(body.name, body.email, body.password, body.age);

    if (user.getClass() == User.class) {
      return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
    }

    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("não foi");
  }

  record Usuario(String name, int age, String email, String password) {
  }
}
