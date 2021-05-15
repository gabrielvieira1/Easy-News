package com.ads.easynews.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ads.easynews.model.entities.Login;
import com.ads.easynews.model.entities.User;
import com.ads.easynews.repository.IUserRepository;
import com.ads.easynews.service.ILoginUsuarioService;

@Service
public class LoginUsuarioService implements ILoginUsuarioService {
	
	@Autowired
	private IUserRepository _userRepository;
	
	public String logarNoSistema(Login login) {
		
		validarLoginVazio(login);
		User user = verificarUsuarioPeloLogin(login);
		
		return TokenAuthenticationService.gerarToken(user.getId());
	}
	
	private void validarLoginVazio(Login login) {
		
		if(StringUtils.isEmpty(login.getEmail())) {
			throw new RuntimeException();
		}
		
		if(StringUtils.isEmpty(login.getPassword())) {
			throw new RuntimeException();
		}
		
	}
	
	private User verificarUsuarioPeloLogin(Login login) {
		
		User user = _userRepository.buscarUsuarioPorLogin(login.getEmail(), login.getPassword());
		
		if(user != null) {
			return user;
		} else {
			throw new RuntimeException("Usuário não cadastrado");
		}
		
	}

}
