package com.ads.easynews.service;

import com.ads.easynews.model.dto.UserDto;
import com.ads.easynews.model.entities.User;

public interface ICadastroUsuarioService {

	UserDto cadastrarUsuario(User user);
	
}
