package com.ads.easynews.service.impl;

import java.util.Collections;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


public class TokenAuthenticationService {

	//Tempo de expiração de 5 dias
	static final long EXPIRATION_TIME = 430_000_000;
	static final String SECRET = "MySecret";
	static final String TOKEN_PREFIX = "Bearer";
	static final String HEADER_STRING = "Authorization";
	
	public static String gerarToken(Long idUsuario) {
		
		String idString = Long.toString(idUsuario);
		
		String JWT = Jwts.builder()
				.setSubject(idString)
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, SECRET)
				.compact();
		
		String token = String.format("%s %s", TOKEN_PREFIX, JWT);
				
		return token;
	}
	
	public static Authentication getAuthentication(HttpServletRequest request) {
		
		String token = request.getHeader(HEADER_STRING);
		
		if(token != null) {
			
			String idUsuario = Jwts.parser()
					.setSigningKey(SECRET)
					.parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
					.getBody()
					.getSubject();
			
			if(idUsuario != null) {
				return new UsernamePasswordAuthenticationToken(idUsuario, null, Collections.emptyList());
			}
			
		}
		
		return null;
		
	}
	
}
