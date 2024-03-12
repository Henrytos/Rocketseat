package com.henry.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henry.ioc_di.MeuComponent;

@RestController
@RequestMapping("/component")
public class MeuControllerComponent {

  // @GetMapping("/")
  // public String chamarMeuComponent() {
  // var meuComponent = new MeuComponent();
  // var resultado = meuComponent.chamarMeuComponent();
  // return resultado;
  // }

  @Autowired
  MeuComponent meuComponent;

  @GetMapping("/")
  public String chamarMeuComponent() {

    var resultado = meuComponent.chamarMeuComponent();
    return resultado;
  }
}
