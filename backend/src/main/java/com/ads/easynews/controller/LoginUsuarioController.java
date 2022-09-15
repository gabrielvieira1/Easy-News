package com.ads.easynews.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ads.easynews.model.entities.Login;
import com.ads.easynews.service.ILoginUsuarioService;

@RestController
@RequestMapping("login")
public class LoginUsuarioController {
	
	private ILoginUsuarioService _loginUsuarioService;
	
	public LoginUsuarioController(ILoginUsuarioService loginUsuarioService) {
		_loginUsuarioService = loginUsuarioService;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> signUpUser(@RequestBody Login login){
		
		if(login == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		String token = _loginUsuarioService.logarNoSistema(login);
		
		return new ResponseEntity<>(token, HttpStatus.ACCEPTED);
		
	}

}
