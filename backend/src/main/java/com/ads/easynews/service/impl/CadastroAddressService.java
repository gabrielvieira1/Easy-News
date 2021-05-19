package com.ads.easynews.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.easynews.model.entities.Address;
import com.ads.easynews.repository.ICadastroAddressRepository;
import com.ads.easynews.service.ICadastroAddressService;

@Service
public class CadastroAddressService implements ICadastroAddressService{
	
	@Autowired
	private ICadastroAddressRepository _cadastroAddressRepository;

	public void cadastrarEnderecoUsuario(Address address) {
		_cadastroAddressRepository.save(address);
	}
	
	public void cadastrarEnderecoPosts(Address address) {
		_cadastroAddressRepository.save(address);
	}
	
}
