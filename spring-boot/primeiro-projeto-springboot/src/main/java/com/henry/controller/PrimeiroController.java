package com.henry.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

  @GetMapping("/pathParams/{id}")
  public String pathParams(@PathVariable String id) {
    return "pathParams id=" + id;
  }

  @GetMapping("/queryParams")
  public String queryParams(@RequestParam String id) {
    return "pathParams id=" + id;
  }

  @GetMapping("/queryParams2")
  public String queryParams2(@RequestParam Map<String, String> allParams) {
    return "todos os parametros são" + allParams.entrySet();
  }
}
