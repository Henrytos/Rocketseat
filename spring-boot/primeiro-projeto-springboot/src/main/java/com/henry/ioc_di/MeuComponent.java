package com.henry.ioc_di;

import org.springframework.stereotype.Service;

//@Component
@Service
public class MeuComponent {

  public String chamarMeuComponent() {
    return "Chamando meu component";
  }
}
