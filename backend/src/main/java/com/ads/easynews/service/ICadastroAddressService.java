package com.ads.easynews.service;

import com.ads.easynews.model.entities.Address;

public interface ICadastroAddressService {
	
	void cadastrarEnderecoUsuario(Address address);
	
	void cadastrarEnderecoPosts(Address address);

}
