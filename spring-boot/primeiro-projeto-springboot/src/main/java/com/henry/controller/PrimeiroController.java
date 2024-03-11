package com.henry.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiroController {

  @GetMapping("/primeiroMetodo/{id}")
  public String primeiroMetodo(@PathVariable String id) {
    return "Primeiro método do controller id=" + id;
  }

  // path params request
  @GetMapping("/pathParams/{id}")
  public String pathParams(@PathVariable String id) {
    return "pathParams id=" + id;
  }

  // query params request
  @GetMapping("/queryParams")
  public String queryParams(@RequestParam String id) {
    return "pathParams id=" + id;
  }

  // query params request
  @GetMapping("/queryParams2")
  public String queryParams2(@RequestParam Map<String, String> allParams) {
    return "todos os parametros são" + allParams.entrySet();
  }

  // body request
  @PostMapping("/user")
  public String createUser(@RequestBody Usuario user) {
    return "crated user " + user.name();
  }

  // Header request

  @GetMapping("/header")
  public String metodoHeader(@RequestHeader("name") String name) {
    return "header name=" + name;
  }

  @GetMapping("/headerlist")
  public String metodoHeaderList(@RequestHeader Map<String, String> allHeader) {
    System.out.println(allHeader);
    return "header name=" + allHeader.get("authorization");
  }

  record Usuario(String name, int age, String email, String password) {
  }
}
