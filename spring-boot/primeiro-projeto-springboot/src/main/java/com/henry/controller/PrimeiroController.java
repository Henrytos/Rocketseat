package com.henry.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiroController {

  @GetMapping("/primeiroMetodo")
  public String primeiroMetodo() {
    return "Primeiro método do controller";
  }
}
