package com.henryfranz.gestao_de_vagas.modules.candidate.useCases;

import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.henryfranz.gestao_de_vagas.modules.candidate.CandidateRepository;
import com.henryfranz.gestao_de_vagas.modules.candidate.dto.AuthCandidateRequestDTO;
import com.henryfranz.gestao_de_vagas.modules.candidate.dto.AuthCandidateResponseDTO;

@Service
public class AuthCandidateUseCase {

  @Value("${security.token.secret.candidate}")
  private String secretKey;

  @Autowired
  private CandidateRepository candidateRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  public AuthCandidateResponseDTO execute(AuthCandidateRequestDTO authCandidateRequestDTO) {
    var candidate = this.candidateRepository.findByUsername(authCandidateRequestDTO.username()).orElseThrow(() -> {
      throw new UsernameNotFoundException("username candidate not found");
    });

    var passwordMatches = passwordEncoder.matches(authCandidateRequestDTO.password(), candidate.getPassword());

    if (!passwordMatches) {
      throw new UsernameNotFoundException("password candidate not found");
    }

    Algorithm algorithm = Algorithm.HMAC256(secretKey);
    var expiresIn = Instant.now().plus(Duration.ofMinutes(10));

    var token = JWT.create()
        .withIssuer("javagas")
        .withSubject(candidate.getId().toString())
        .withClaim("roles", Arrays.asList("candidate"))
        .withExpiresAt(expiresIn)
        .sign(algorithm);

    var AuthCandidateResponse = AuthCandidateResponseDTO
        .builder()
        .expires_in(expiresIn.toEpochMilli())
        .access_token(token)
        .build();

    return AuthCandidateResponse;
  }

}
