package com.henry.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/products")
public class ProductController {

  @GetMapping("")
  public String findByAllProducts() {
    return "todos produtos";
  }

  @PostMapping("")
  public String createNewPeoduct() {
    return "novo produto";
  }

  @PutMapping("")
  public String updateProduct() {
    return "atualizar produto";
  }

  @DeleteMapping("")
  public String deleteOneProduct() {
    return "deletar produto";
  }

}
