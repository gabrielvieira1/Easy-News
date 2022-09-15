package com.ads.easynews.service.impl;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ads.easynews.exception.CamposCadastroVaziosException;
import com.ads.easynews.exception.EasyNewsMessages;
import com.ads.easynews.exception.EmailInvalidoException;
import com.ads.easynews.model.dto.UserDto;
import com.ads.easynews.model.entities.User;
import com.ads.easynews.repository.IUserRepository;
import com.ads.easynews.service.ICadastroUsuarioService;

@Service
public class CadastroUsuarioService implements ICadastroUsuarioService{
	
	private final String EMAIL_VALIDATION_REGEX = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
	
	@Autowired
	private IUserRepository _userRepository;
	
	public UserDto cadastrarUsuario(User user) {
		
		validarCamposVazios(user);
		validarEmail(user.getEmail());
		
		User responseUser = _userRepository.save(user);
		
		ModelMapper modelMapper = new ModelMapper();
		UserDto userDto = modelMapper.map(responseUser, UserDto.class);
		modelMapper.validate();
		
		return userDto;
	}
	
	private void validarCamposVazios(User user) {
		
		if(StringUtils.isEmpty(user.getName())) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS000, "nome"));
		}
		
		if(StringUtils.isEmpty(user.getUserName())) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS000, "nome de usuário"));
		}
		
		if(StringUtils.isEmpty(user.getEmail())) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS000, "email"));
		}
		
		if(StringUtils.isEmpty(user.getPassword())) {
			throw new CamposCadastroVaziosException(String.format(EasyNewsMessages.MS000, "senha"));
		}
		
	}
	
	private void validarEmail(String email) {
		
		Pattern pattern = Pattern.compile(EMAIL_VALIDATION_REGEX);
		Matcher matcher = pattern.matcher(email);
		
		if(matcher.matches() == false) {
			throw new EmailInvalidoException(String.format(EasyNewsMessages.MS001, "email"));
		}
		
	}
	
}