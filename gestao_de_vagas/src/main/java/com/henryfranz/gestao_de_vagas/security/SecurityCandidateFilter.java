package com.henryfranz.gestao_de_vagas.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.henryfranz.gestao_de_vagas.providers.JWTCandidateProvider;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityCandidateFilter extends OncePerRequestFilter {

  @Autowired
  private JWTCandidateProvider jWTCandidateProvider;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    SecurityContextHolder.getContext().setAuthentication(null);

    var header = request.getHeader("Authorization");
    if (request.getRequestURI().startsWith("/candidate")) {
      if (header != null) {
        var token = this.jWTCandidateProvider.validateToken(header);

        if (token == null) {

          response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
          return;
        }

        System.out.println("=============TOKEN===============");
        System.out.println(token.getSubject());
        request.setAttribute("candidateId", token.getSubject());
      }

    }
    filterChain.doFilter(request, response);
  }

}
