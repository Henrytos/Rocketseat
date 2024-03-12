package com.henryfranz.gestao_de_vagas.exceptions;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

//exeção global
@ControllerAdvice
public class ExceptionHandlerController {

  private MessageSource messageSource;

  // não pode ser null pointer
  public ExceptionHandlerController(MessageSource message) {
    this.messageSource = message;
  }

  // indentificador da exepection
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<List<ErrorMenssgeDTO>> handlerMethodArgumentNotValidException(
      MethodArgumentNotValidException e) {

    List<ErrorMenssgeDTO> dto = new ArrayList<>();

    e.getBindingResult().getFieldErrors().forEach(err -> {
      String message = messageSource.getMessage(err, LocaleContextHolder.getLocale());

      ErrorMenssgeDTO error = new ErrorMenssgeDTO(message, err.getField());
      dto.add(error);
    });

    return new ResponseEntity<>(dto, HttpStatus.BAD_REQUEST);
  }
}
