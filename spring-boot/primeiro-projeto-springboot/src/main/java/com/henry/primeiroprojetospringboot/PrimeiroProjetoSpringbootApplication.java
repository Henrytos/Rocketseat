package com.henry.primeiroprojetospringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/*
 @SpringBootApplication anotation da classe principla
 */
@SpringBootApplication
@ComponentScan(basePackages = "com.henry")
public class PrimeiroProjetoSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(PrimeiroProjetoSpringbootApplication.class, args);
		System.out.println("Hello World!");
	}

}
