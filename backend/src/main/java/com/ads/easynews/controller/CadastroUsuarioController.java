package com.ads.easynews.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ads.easynews.model.dto.UserDto;
import com.ads.easynews.model.entities.User;
import com.ads.easynews.service.ICadastroUsuarioService;

@RestController
@RequestMapping("signup")
public class CadastroUsuarioController {
	
	private ICadastroUsuarioService _cadastroUsuarioService;
	
	public CadastroUsuarioController(ICadastroUsuarioService cadastroUsuarioService) {
		this._cadastroUsuarioService = cadastroUsuarioService;
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> signUpUser(@RequestBody User user){
		
		if(user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		UserDto userDto = _cadastroUsuarioService.cadastrarUsuario(user);
				
		return new ResponseEntity<>(userDto, HttpStatus.CREATED);
	}
	
	
	
}
